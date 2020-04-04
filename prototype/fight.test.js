const calculateAttack = require('./fight');

test("One effect standouts", () => {
  expect(calculateAttack(10, 10, ["Frightened"], ["Defended"])).toEqual([8, 8, 16]);
  expect(calculateAttack(8, 5, ["Frightened"], ["Defended"])).toEqual([6.4, 4, 10.4]);
  expect(calculateAttack(4, 3, ["Frightened"], ["Defended"])).toEqual([3.2, 2.4, 5.6]);
  expect(calculateAttack(10, 10, ["Reinforced"], ["Panicing"])).toEqual([12, 12, 24]);
  expect(calculateAttack(8, 5, ["Reinforced"], ["Panicing"])).toEqual([9.6, 6, 15.6]);
  expect(calculateAttack(4, 3, ["Reinforced"], ["Panicing"])).toEqual([4.8, 3.6, 8.4]);
  expect(calculateAttack(10, 10, ["Panicing"], ["NoMagic"])).toEqual([9, 0, 9]);
  expect(calculateAttack(8, 5, ["Panicing"], ["NoMagic"])).toEqual([7.2, 0, 7.2]);
  expect(calculateAttack(4, 3, ["Panicing"], ["NoMagic"])).toEqual([3.6, 0, 3.6]);
});


test('Two effects standouts', () => {
    expect(calculateAttack(10, 10, ["Panicing", "Blessed"], ["Panicing", "Blessed"])).toEqual([10, 10, 20]);
    expect(calculateAttack(10, 10, ["Blessed"], ["Panicing", "Blessed"])).toEqual([11, 11, 22]);
    expect(calculateAttack(10, 10, ['Frightened', "Panicing"], ["Defended", "Blessed"])).toEqual([6, 6, 12]);
    expect(calculateAttack(10, 10, ['Frightened', "Panicing"], ["Panicing"])).toEqual([9, 9, 18]);
    expect(calculateAttack(8, 5, ["Blessed"], ["Panicing", "Blessed"])).toEqual([8.8, 5.5, 14.3]);
    expect(calculateAttack(8, 5, ['Frightened', "Panicing"], ["Panicing"])).toEqual([7.2, 4.5, 11.7]);
});

test('Environment and effects', () => {
    expect(calculateAttack(10, 10, ["Frightened"], ["Defended"], 'fog')).toEqual([7, 7, 14]);
    expect(calculateAttack(10, 10, ["Reinforced"], ["Panicing"], 'fog')).toEqual([11, 11, 22]);
    expect(calculateAttack(4, 3, ["Frightened"], ["Defended"], 'fog')).toEqual([2.8, 2.1, 4.9]);
    expect(calculateAttack(10, 10, ["Panicing", "Blessed"], ["Panicing", "Blessed"], 'storm')).toEqual([8, 8, 16]);
    expect(calculateAttack(8, 5, ["Blessed"], ["Panicing", "Blessed"], 'storm')).toEqual([7.2, 4.5, 11.7]);
    expect(calculateAttack(8, 5, ['Frightened', "Panicing"], ["Panicing"], 'air')).toEqual([8, 5, 13]);
});

test('Elements and effects', () => {
    expect(calculateAttack(10, 10, ["Frightened"], ["Defended"], null, 'fire', 'metal')).toEqual([9, 9, 18]);
    expect(calculateAttack(10, 10, ["Reinforced"], ["Panicing"], null, 'metal', 'fire')).toEqual([11, 11, 22]);
    expect(calculateAttack(10, 10, ["Reinforced"], ["Panicing"], null, 'fire', 'water')).toEqual([12, 12, 24]);
    expect(calculateAttack(10, 10, ["Reinforced"], ["Panicing"], 'fog', 'metal', 'fire')).toEqual([10, 10, 20]);
    expect(calculateAttack(10, 10, ["Panicing", "Blessed"], ["Panicing", "Blessed"], null, 'metal', 'earth')).toEqual([11, 11, 22]);
    expect(calculateAttack(10, 10, ["Panicing", "Blessed"], ["Panicing", "Blessed"], 'air', 'metal', 'earth')).toEqual([12, 12, 24]);
    expect(calculateAttack(8, 5, ["Reinforced"], ["Panicing"], null, 'fire', 'water')).toEqual([9.6, 6, 15.6]);
    expect(calculateAttack(8, 5, ["Reinforced"], ["Panicing"], 'fog', 'metal', 'fire')).toEqual([8, 5, 13]);
    expect(calculateAttack(8, 5, ["Panicing", "Blessed"], ["Panicing", "Blessed"], null, 'metal', 'earth')).toEqual([8.8, 5.5, 14.3]);
    expect(calculateAttack(8, 5, ["Panicing", "Blessed"], ["Panicing", "Blessed"], 'air', 'metal', 'earth')).toEqual([9.6, 6, 15.6]);
});
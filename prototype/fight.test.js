const calculateAttack = require('./fight');

test('Attacker Frightened, defender Defended', () => {
  expect(calculateAttack(10, 10, ["Frightened"], ["Defended"])).toEqual([7.5, 7.5, 15]);
  expect(calculateAttack(8, 5, ["Frightened"], ["Defended"])).toEqual([6, 3.75, 9.75]);
  expect(calculateAttack(4, 3, ["Frightened"], ["Defended"])).toEqual([3, 2.25, 5.25]);
});

test('Attacker Reinforced, defender Panicing', () => {
    expect(calculateAttack(10, 10, ["Reinforced"], ["Panicing"])).toEqual([12, 12, 24]);
    expect(calculateAttack(8, 5, ["Reinforced"], ["Panicing"])).toEqual([9.6, 6, 15.6]);
    expect(calculateAttack(4, 3, ["Reinforced"], ["Panicing"])).toEqual([4.8, 3.6, 8.4]);
  });

test('Attacker Panicing, defender NoMagic', () => {
    expect(calculateAttack(10, 10, ["Panicing"], ["NoMagic"])).toEqual([9, 0, 9]);
    expect(calculateAttack(8, 5, ["Panicing"], ["NoMagic"])).toEqual([7.2, 0, 7.2]);
    expect(calculateAttack(4, 3, ["Panicing"], ["NoMagic"])).toEqual([3.6, 0, 3.6]);
});
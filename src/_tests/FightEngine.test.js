const {calculateAttack, checkMove} = require('../fightengine');

test("Attack with one alteration", () => {
  expect(calculateAttack(10, 10, ["Frightened"], ["Defended"])).toEqual([4, 4, 8]);
  expect(calculateAttack(4, 3, ["Frightened"], ["Defended"])).toEqual([1.6, 1.2, 2.8]);
  expect(calculateAttack(10, 10, ["Reinforced"], ["Panicing"])).toEqual([12, 12, 24]);
  expect(calculateAttack(8, 5, ["Reinforced"], ["Panicing"])).toEqual([9.6, 6, 15.6]);
  expect(calculateAttack(4, 3, ["Reinforced"], ["Panicing"])).toEqual([4.8, 3.6, 8.4]);
  expect(calculateAttack(10, 10, ["Panicing"], ["NoMagic"])).toEqual([9, 0, 9]);
  expect(calculateAttack(8, 5, ["Panicing"], ["NoMagic"])).toEqual([7.2, 0, 7.2]);
  expect(calculateAttack(4, 3, ["Panicing"], ["NoMagic"])).toEqual([3.6, 0, 3.6]);
});


test('Attack with two alterations', () => {
    expect(calculateAttack(10, 10, ["Panicing", "Blessed"], ["Panicing", "Blessed"])).toEqual([10, 10, 20]);
    expect(calculateAttack(10, 10, ["Blessed"], ["Panicing", "Blessed"])).toEqual([11, 11, 22]);
    expect(calculateAttack(10, 10, ['Frightened', "Panicing"], ["Defended", "Blessed"])).toEqual([3, 3, 6]);
    expect(calculateAttack(10, 10, ['Frightened', "Panicing"], ["Panicing"])).toEqual([9, 9, 18]);
    expect(calculateAttack(8, 5, ["Blessed"], ["Panicing", "Blessed"])).toEqual([8.8, 5.5, 14.3]);
    expect(calculateAttack(8, 5, ['Frightened', "Panicing"], ["Panicing"])).toEqual([7.2, 4.5, 11.7]);
});

test('Attack with environment and alterations', () => {
    expect(calculateAttack(10, 10, ["Frightened"], ["Defended"], 'fog')).toEqual([3.5, 3.5, 7]);
    expect(calculateAttack(10, 10, ["Reinforced"], ["Panicing"], 'fog')).toEqual([11, 11, 22]);
    expect(calculateAttack(4, 3, ["Frightened"], ["Defended"], 'fog')).toEqual([1.4, 1.05, 2.45]);
    expect(calculateAttack(10, 10, ["Panicing", "Blessed"], ["Panicing", "Blessed"], 'storm')).toEqual([8, 8, 16]);
    expect(calculateAttack(8, 5, ["Blessed"], ["Panicing", "Blessed"], 'storm')).toEqual([7.2, 4.5, 11.7]);
    expect(calculateAttack(8, 5, ['Frightened', "Panicing"], ["Panicing"], 'air')).toEqual([8, 5, 13]);
});

test('Attack with elements, environment and alterations', () => {
    expect(calculateAttack(10, 10, ["Frightened"], ["Defended"], null, 'fire', 'metal')).toEqual([4, 4.5, 8.5]);
    expect(calculateAttack(10, 10, ["Reinforced"], ["Panicing"], null, 'metal', 'fire')).toEqual([12, 11, 23]);
    expect(calculateAttack(10, 10, ["Reinforced"], ["Panicing"], null, 'fire', 'water')).toEqual([12, 12, 24]);
    expect(calculateAttack(10, 10, ["Reinforced"], ["Panicing"], 'fog', 'metal', 'fire')).toEqual([11, 10, 21]);
    expect(calculateAttack(10, 10, ["Panicing", "Blessed"], ["Panicing", "Blessed"], null, 'metal', 'earth')).toEqual([10, 11, 21]);
    expect(calculateAttack(10, 10, ["Panicing", "Blessed"], ["Panicing", "Blessed"], null, 'warer', 'air')).toEqual([10, 11, 21]);
    expect(calculateAttack(10, 10, ["Panicing", "Blessed"], ["Panicing", "Blessed"], 'air', 'metal', 'earth')).toEqual([11, 12, 23]);
    expect(calculateAttack(8, 5, ["Reinforced"], ["Panicing"], null, 'fire', 'water')).toEqual([9.6, 6, 15.6]);
    expect(calculateAttack(8, 5, ["Reinforced"], ["Panicing"], 'fog', 'metal', 'fire')).toEqual([8.8, 5, 13.8]);
    expect(calculateAttack(8, 5, ["Panicing", "Blessed"], ["Panicing", "Blessed"], null, 'metal', 'earth')).toEqual([8, 5.5, 13.5]);
    expect(calculateAttack(8, 5, ["Panicing", "Blessed"], ["Panicing", "Blessed"], 'air', 'metal', 'earth')).toEqual([8.8, 6, 14.8]);
});

test("Attack with elements, environment, alterations and effects", () => {
    expect(calculateAttack(10, 10, ["Frightened", 'Numb'], ["Defended"], null, 'fire', 'metal')).toEqual([4, 0, 4]);
    expect(calculateAttack(10, 10, ["Reinforced", 'Blinded'], ["Panicing"], null, 'metal', 'fire')).toEqual([0, 11, 11]);

})

test("Test one cell move", () => {
    const field = {
        positions: [
            {coordinates:{x:1, y:2}, subject: {type:"character", id:"maya"}},
            {coordinates:{x:2, y:2}, subject: {type:"character", id:"dart"}},
            {coordinates:{x:5, y:3}, subject: {type:"enemy", id:"sandnake1"}},
            {coordinates:{x:5, y:2}, subject: {type:"enemy", id:"sandnake1"}},
            {coordinates:{x:7, y:2}, subject: {type:"enemy", id:"sandnake1"}}
        ]
    };
    expect(checkMove(field, {x:1, y:2}, {x:1, y:3})).toEqual(true);
    expect(checkMove(field, {x:1, y:2}, {x:1, y:1})).toEqual(true);
    expect(checkMove(field, {x:1, y:2}, {x:1, y:3})).toEqual(true);
    expect(checkMove(field, {x:1, y:2}, {x:1, y:1})).toEqual(true);
    expect(checkMove(field, {x:2, y:2}, {x:3, y:1})).toEqual("You can't jump over a cell");
    expect(checkMove(field, {x:3, y:3}, {x:5, y:3})).toEqual("You can't make this move, it's on opposite territory");
    expect(checkMove(field, {x:1, y:2}, {x:2, y:2})).toEqual("You can't make this move, the cell you trying to move to is taken");
})
const {calculateAttack, calculateMove} = require('../fightengine');

test("Attack with one alteration", () => {
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


test('Attack with two alterations', () => {
    expect(calculateAttack(10, 10, ["Panicing", "Blessed"], ["Panicing", "Blessed"])).toEqual([10, 10, 20]);
    expect(calculateAttack(10, 10, ["Blessed"], ["Panicing", "Blessed"])).toEqual([11, 11, 22]);
    expect(calculateAttack(10, 10, ['Frightened', "Panicing"], ["Defended", "Blessed"])).toEqual([6, 6, 12]);
    expect(calculateAttack(10, 10, ['Frightened', "Panicing"], ["Panicing"])).toEqual([9, 9, 18]);
    expect(calculateAttack(8, 5, ["Blessed"], ["Panicing", "Blessed"])).toEqual([8.8, 5.5, 14.3]);
    expect(calculateAttack(8, 5, ['Frightened', "Panicing"], ["Panicing"])).toEqual([7.2, 4.5, 11.7]);
});

test('Attack with environment and alterations', () => {
    expect(calculateAttack(10, 10, ["Frightened"], ["Defended"], 'fog')).toEqual([7, 7, 14]);
    expect(calculateAttack(10, 10, ["Reinforced"], ["Panicing"], 'fog')).toEqual([11, 11, 22]);
    expect(calculateAttack(4, 3, ["Frightened"], ["Defended"], 'fog')).toEqual([2.8, 2.1, 4.9]);
    expect(calculateAttack(10, 10, ["Panicing", "Blessed"], ["Panicing", "Blessed"], 'storm')).toEqual([8, 8, 16]);
    expect(calculateAttack(8, 5, ["Blessed"], ["Panicing", "Blessed"], 'storm')).toEqual([7.2, 4.5, 11.7]);
    expect(calculateAttack(8, 5, ['Frightened', "Panicing"], ["Panicing"], 'air')).toEqual([8, 5, 13]);
});

test('Attack with elements, environment and alterations', () => {
    expect(calculateAttack(10, 10, ["Frightened"], ["Defended"], null, 'fire', 'metal')).toEqual([8, 9, 17]);
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
    expect(calculateAttack(10, 10, ["Frightened"], ["Defended"], null, 'fire', 'metal', 'Numb')).toEqual([8, 0, 8]);
    expect(calculateAttack(10, 10, ["Reinforced"], ["Panicing"], null, 'metal', 'fire', 'Blinded')).toEqual([0, 11, 11]);

})

test("Test one cell move", () => {
    expect(calculateMove({x:3, y:3, taken: true}, {x:2, y:3, taken: false}, "MOVE")).toEqual("Move is possible");
    expect(calculateMove({x:3, y:3, taken: true}, {x:4, y:3, taken: false}, "MOVE")).toEqual("Move is possible");
    expect(calculateMove({x:3, y:3, taken: true}, {x:3, y:2, taken: false}, "MOVE")).toEqual("Move is possible");
    expect(calculateMove({x:3, y:3, taken: true}, {x:3, y:4, taken: false}, "MOVE")).toEqual("Move is possible");
    expect(calculateMove({x:3, y:3, taken: true}, {x:1, y:2, taken: false}, "MOVE")).toEqual("You can't jump over a cell");
    expect(calculateMove({x:3, y:3, taken: true}, {x:2, y:2, taken: false}, "MOVE")).toEqual("You can't jump over a cell");
    expect(calculateMove({x:1, y:4, taken: true}, {x:1, y:5, taken: false}, "MOVE")).toEqual("You can't jump over a field");
    expect(calculateMove({x:1, y:2, taken: true}, {x:1, y:2, taken: false}, "MOVE")).toEqual("You can't move to the same cell");
    expect(calculateMove({x:-1, y:2, taken: true}, {x:1, y:2, taken: false}, "MOVE")).toEqual("You can't make this move, it's on opposite territory");
    expect(calculateMove({x:1, y:2, taken: false}, {x:1, y:2, taken: false}, "MOVE")).toEqual("You can't make this move, the cell is not taken");
    expect(calculateMove({x:1, y:2, taken: true}, {x:1, y:2, taken: true}, "MOVE")).toEqual("You can't make this move, the cell you trying to move to is taken");
    expect(calculateMove({x:1, y:2, taken: true}, {x:2, y:2, taken: false}, "MOVE")).toEqual("Move is possible");
})
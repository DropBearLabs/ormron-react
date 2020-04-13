import { IFightOpponent } from "../types/TypesFights";
import { Enemies, Elements } from "../types/TypeCharacters";

export const enemies: IFightOpponent[] = [
  {
    id: Enemies.sandnake1,
    name: "Sand Snake",
    image: "enemy_snake1.png",
    life: 10,
    mana: 3,
    attack_physical: 4,
    attack_magic: 2,
    element: Elements.earth,
    spells: []
  },
  {
    id: Enemies.bigsandnake1,
    name: "Big Sand Snake",
    image: "enemy_bigsnake1.png",
    life: 12,
    mana: 5,
    attack_physical: 5,
    attack_magic: 4,
    element: Elements.earth,
    spells: []
  },
  {
    id: Enemies.sandghost1,
    name: "Sand Ghost",
    image: "enemy_ghost1.png",
    life: 11,
    mana: 5,
    attack_physical: 3,
    element: Elements.air,
    attack_magic: 5,
    spells: []
  },
  {
    id: Enemies.sandmummy1,
    name: "Mummy",
    image: "enemy_ghost1.png",
    life: 11,
    mana: 3,
    attack_physical: 5,
    attack_magic: 3,
    element: Elements.earth,
    spells: []
  },
  {
    id: Enemies.sandwrath1,
    name: "Sand Wraith",
    image: "enemy_wraith1.png",
    life: 15,
    mana: 8,
    attack_physical: 5,
    attack_magic: 5,
    element: Elements.earth,
    spells: []
  }
];

export type IFightOpponentWithKey = IFightOpponent & { key: number };

export const enemySets = (id: string): IFightOpponentWithKey[] => {
  const set = [
    {
      id: "sandEasy1",
      value: [
        Object.assign({}, enemies[0], { key: 0 }),
        Object.assign({}, enemies[0], { key: 1 }),
        Object.assign({}, enemies[0], { key: 2 })
      ]
    },
    {
      id: "sandEasy2",
      value: [
        Object.assign({}, enemies[0], { key: 0 }),
        Object.assign({}, enemies[1], { key: 0 })
      ]
    },
    {
      id: "sandEasy3",
      value: [
        Object.assign({}, enemies[0], { key: 0 }),
        Object.assign({}, enemies[0], { key: 1 }),
        Object.assign({}, enemies[1], { key: 0 })
      ]
    }
  ];
  const selectedSet = set.find(s => s.id === id);
  if (!selectedSet) {
    throw new Error("You are requesting opponent set that doesn't exist");
  }
  return selectedSet.value;
};

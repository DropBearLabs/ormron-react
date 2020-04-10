import { IFightOpponent } from "../types/TypesFights";

export const enemies: IFightOpponent[] = [
  {
    id: "sandnake1",
    name: "Sand Snake",
    image: "enemy_snake1.png",
    life: 10,
    mana: 3,
    attack_physical: 4,
    attack_magic: 2
  },
  {
    id: "bigsandnake1",
    name: "Big Sand Snake",
    image: "enemy_bigsnake1.png",
    life: 12,
    mana: 5,
    attack_physical: 5,
    attack_magic: 4
  },
  {
    id: "sandghost1",
    name: "Sand Ghost",
    image: "enemy_ghost1.png",
    life: 11,
    mana: 5,
    attack_physical: 3,
    attack_magic: 5
  },
  {
    id: "sandmummy1",
    name: "Mummy",
    image: "enemy_ghost1.png",
    life: 11,
    mana: 3,
    attack_physical: 5,
    attack_magic: 3
  },
  {
    id: "sandwrath1",
    name: "Sand Wraith",
    image: "enemy_wraith1.png",
    life: 15,
    mana: 8,
    attack_physical: 5,
    attack_magic: 5
  }
];

export const enemySets: Array<{ id: string; opponents: IFightOpponent[] }> = [
  {
    id: "sandEasy1",
    opponents: [enemies[0], enemies[0], enemies[0]]
  },
  {
    id: "sandEasy2",
    opponents: [enemies[0], enemies[1]]
  },
  {
    id: "sandEasy3",
    opponents: [enemies[0], enemies[0], enemies[1]]
  }
];

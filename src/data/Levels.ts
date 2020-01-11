import { ILevel } from "./Types";
const GROUNDLEVEL = 200;

export const levels: ILevel[] = [
  {
    id: 0,
    name: "ormron_street",
    backgrounds: [{ image: "temp1.jpg" }],
    connections: [0, 1, 2],
    npcs: [
      {
        id: "npc_Olija",
        image: "temp-npc1.png",
        name: "Olija",
        position: { x: 30, y: GROUNDLEVEL - 50 }
      },
      {
        id: "npc_Dario",
        image: "temp-npc2.png",
        name: "Dario",
        position: { x: 700, y: GROUNDLEVEL - 50 }
      }
    ]
  },
  {
    id: 1,
    name: "ormron_arena",
    backgrounds: [{ image: "temp2.jpg" }],
    connections: [3],
    npcs: [
      {
        id: "npc_Dario1",
        image: "temp-npc2.png",
        name: "Dario",
        position: { x: 700, y: GROUNDLEVEL - 50 }
      }
    ]
  },
  {
    id: 2,
    name: "ormron_garden",
    backgrounds: [{ image: "temp3.jpg" }],
    connections: [4, 5, 6],
    npcs: [
      {
        id: "npc_Nell",
        image: "temp-main2.png",
        name: "Nell",
        position: { x: 120, y: GROUNDLEVEL - 50 }
      },
      {
        id: "npc_Tara",
        image: "temp-main3.png",
        name: "Tara",
        position: { x: 370, y: GROUNDLEVEL - 50 }
      }
    ]
  },
  {
    id: 3,
    name: "ormron_gazebo",
    // 3
    backgrounds: [{ image: "temp4.jpg" }],
    connections: [7],
    npcs: []
  },
  {
    id: 4,
    name: "ormron_school",
    backgrounds: [{ image: "temp5.jpg" }],
    connections: [8],
    npcs: []
  },
  {
    id: 5,
    name: "ormron_study",
    backgrounds: [{ image: "temp6.jpg" }],
    connections: [4],
    npcs: []
  },
  {
    id: 6,
    name: "desert_1",
    backgrounds: [{ image: "temp7.jpg" }],
    connections: [0],
    npcs: []
  }
];

import { ILevel } from "./Types";
const GROUNDLEVEL = 200;

export const levels: ILevel[] = [
  {
    // 0
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
    // 1
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
    // 2
    id: 2,
    name: "ormron_garden",
    backgrounds: [{ image: "temp3.jpg" }],
    connections: [4, 5, 6],
    npcs: []
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
    // 4
    id: 4,
    name: "ormron_school",
    backgrounds: [{ image: "temp5.jpg" }],
    connections: [8],
    npcs: []
  }
];

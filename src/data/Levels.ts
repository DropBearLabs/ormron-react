import { ILevel } from "./Types";
const SCREENWIDTH = 1024;
const GROUNDLEVEL = 200;

export const levels: ILevel[] = [
  {
    // 0
    backgrounds: [{ image: "temp1.jpg" }],
    connections: [
      {
        id: "to_ormron_arena",
        image: "temp-obj1.png",
        position: { x: SCREENWIDTH - 200, y: GROUNDLEVEL },
        to: 1
      },
      {
        id: "to_ormron_garden",
        image: "temp-obj2.png",
        position: { x: 400, y: GROUNDLEVEL },
        to: 2
      }
    ],
    id: 0,
    name: "ormron_street",
    npcs: [
      {
        id: "npc_Olija",
        image: "temp-npc1.png",
        name: "Olija",
        position: { x: 30, y: GROUNDLEVEL - 50 },
        trigger: { dialogueId: 0, triggerType: "DIALOGUE" }
      },
      {
        id: "npc_Dario",
        image: "temp-npc2.png",
        name: "Dario",
        position: { x: 700, y: GROUNDLEVEL - 50 },
        trigger: { dialogueId: 3, triggerType: "DIALOGUE" }
      }
    ]
  },
  {
    // 1
    backgrounds: [{ image: "temp2.jpg" }],
    connections: [
      {
        id: "to_ormron_street",
        image: "temp-obj3.png",
        position: { x: 10, y: GROUNDLEVEL },
        to: 0
      }
    ],
    id: 1,
    name: "ormron_arena",
    npcs: []
  },
  {
    // 2
    backgrounds: [{ image: "temp3.jpg" }],
    connections: [
      {
        id: "to_ormron_street",
        image: "temp-obj3.png",
        position: { x: 10, y: GROUNDLEVEL },
        to: 0
      },
      {
        id: "to_ormron_gazebo",
        image: "temp-obj1.png",
        position: { x: 400, y: GROUNDLEVEL },
        to: 3
      },
      {
        id: "to_ormron_school",
        image: "temp-obj2.png",
        position: { x: SCREENWIDTH - 200, y: GROUNDLEVEL },
        to: 4
      }
    ],
    id: 2,
    name: "ormron_garden",
    npcs: []
  },
  {
    // 3
    backgrounds: [{ image: "temp4.jpg" }],
    connections: [
      {
        id: "to_ormron_garden",
        image: "temp-obj3.png",
        position: { x: 10, y: GROUNDLEVEL },
        to: 2
      }
    ],
    id: 3,
    name: "ormron_gazebo",
    npcs: []
  },
  {
    // 4
    backgrounds: [{ image: "temp5.jpg" }],
    connections: [
      {
        id: "to_ormron_garden",
        image: "temp-obj3.png",
        position: { x: 10, y: GROUNDLEVEL },
        to: 2
      }
    ],
    id: 0,
    name: "ormron_school",
    npcs: []
  }
];

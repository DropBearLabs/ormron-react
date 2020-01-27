import { ILevel } from "./Types";

export const levels: ILevel[] = [
  {
    id: "ormron_street",
    backgrounds: [{ image: "temp1.jpg" }],
    connections: [0, 1, 2],
    npcs: [0, 1]
  },
  {
    id: "ormron_arena",
    backgrounds: [{ image: "temp2.jpg" }],
    connections: [3],
    npcs: [2]
  },
  {
    id: "ormron_garden",
    backgrounds: [{ image: "temp3.jpg" }],
    connections: [4, 5, 6],
    npcs: [4]
  },
  {
    id: "ormron_gazebo",
    backgrounds: [{ image: "temp4.jpg" }],
    connections: [7],
    npcs: []
  },
  {
    id: "ormron_school",
    backgrounds: [{ image: "temp5.jpg" }],
    connections: [8],
    npcs: []
  },
  {
    id: "ormron_study",
    backgrounds: [{ image: "temp6.jpg" }],
    connections: [4],
    npcs: []
  },
  {
    id: "desert_1",
    backgrounds: [{ image: "temp7.jpg" }],
    connections: [0],
    npcs: []
  }
];

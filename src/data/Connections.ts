import { IConnection } from "./Types";
const SCREENWIDTH = 1024;
const GROUNDLEVEL = 400;

export const connections: IConnection[] = [
  {
    id: 0,
    name: "to_map",
    image: "temp-obj3.png",
    position: { x: 0, y: GROUNDLEVEL },
    origin: 0,
    to: 6
  },
  {
    id: 1,
    name: "to_ormron_arena",
    image: "temp-obj1.png",
    position: { x: SCREENWIDTH - 200, y: GROUNDLEVEL },
    origin: 0,
    to: 1,
    questUpdate: { 0: "0_ARENA_ENTER" },
    levelStart: { 0: "to_ormron_arena" }
  },
  {
    id: 2,
    name: "to_ormron_garden",
    image: "temp-obj2.png",
    position: { x: 400, y: GROUNDLEVEL },
    origin: 0,
    to: 2
  },
  {
    id: 3,
    name: "to_ormron_street",
    image: "temp-obj3.png",
    position: { x: 10, y: GROUNDLEVEL },
    origin: 1,
    to: 0
  },
  {
    id: 4,
    name: "to_ormron_street",
    image: "temp-obj3.png",
    position: { x: 10, y: GROUNDLEVEL },
    origin: 2,
    to: 0
  },
  {
    id: 5,
    name: "to_ormron_gazebo",
    image: "temp-obj1.png",
    position: { x: 400, y: GROUNDLEVEL },
    origin: 2,
    to: 3
  },
  {
    id: 6,
    name: "to_ormron_school",
    image: "temp-obj2.png",
    position: { x: SCREENWIDTH - 200, y: GROUNDLEVEL },
    origin: 2,
    to: 4
  },
  {
    id: 7,
    name: "to_ormron_garden",
    image: "temp-obj3.png",
    position: { x: 10, y: GROUNDLEVEL },
    origin: 3,
    to: 2
  },
  {
    id: 8,
    name: "to_ormron_garden",
    image: "temp-obj3.png",
    position: { x: 10, y: GROUNDLEVEL },
    origin: 4,
    to: 2
  }
];

import { IConnection } from "./Types";
const SCREENWIDTH = 1024;
const GROUNDLEVEL = 400;

export const connections: IConnection[] = [
  {
    id: 0,
    name: "to_map",
    image: "temp-obj3.png",
    position: { x: 0, y: GROUNDLEVEL },
    selectParty: true
  },
  {
    id: 1,
    name: "to_ormron_arena",
    image: "temp-obj1.png",
    position: { x: SCREENWIDTH - 200, y: GROUNDLEVEL },
    triggers: [21, 23],
    selectParty: false
  },
  {
    id: 2,
    name: "to_ormron_garden",
    image: "temp-obj2.png",
    position: { x: 400, y: GROUNDLEVEL },
    selectParty: false,
    triggers: [24]
  },
  {
    id: 3,
    name: "to_ormron_street",
    image: "temp-obj3.png",
    position: { x: 10, y: GROUNDLEVEL },
    selectParty: false,
    triggers: [22]
  },
  {
    id: 4,
    name: "to_ormron_street",
    image: "temp-obj3.png",
    position: { x: 10, y: GROUNDLEVEL },
    selectParty: false
  },
  {
    id: 5,
    name: "to_ormron_gazebo",
    image: "temp-obj1.png",
    position: { x: 400, y: GROUNDLEVEL },
    selectParty: false
  },
  {
    id: 6,
    name: "to_ormron_school",
    image: "temp-obj2.png",
    position: { x: SCREENWIDTH - 200, y: GROUNDLEVEL },
    selectParty: false
  },
  {
    id: 7,
    name: "to_ormron_garden",
    image: "temp-obj3.png",
    position: { x: 10, y: GROUNDLEVEL },
    selectParty: false
  },
  {
    id: 8,
    name: "to_ormron_garden",
    image: "temp-obj3.png",
    position: { x: 10, y: GROUNDLEVEL },
    selectParty: false
  }
];

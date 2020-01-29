import { IConnection } from "./Types";
const SCREENWIDTH = 1024;
const GROUNDLEVEL = 200;

export const connections: IConnection[] = [
  {
    id: 0,
    name: "street_to_map",
    open: "temp-obj3c.png",
    closed: "temp-obj3.png",
    position: { x: 0, y: GROUNDLEVEL },
    selectParty: true
  },
  {
    id: 1,
    name: "street_to_arena",
    open: "temp-obj1c.png",
    closed: "temp-obj1.png",
    position: { x: SCREENWIDTH - 200, y: GROUNDLEVEL },
    triggers: [6, 23],
    selectParty: false
  },
  {
    id: 2,
    name: "street_to_garden",
    open: "temp-obj2c.png",
    closed: "temp-obj2.png",
    position: { x: 400, y: GROUNDLEVEL },
    selectParty: false,
    triggers: [24]
  },
  {
    id: 3,
    name: "arena_to_street",
    open: "temp-obj3c.png",
    closed: "temp-obj3.png",
    position: { x: 10, y: GROUNDLEVEL },
    selectParty: false,
    triggers: [22]
  },
  {
    id: 4,
    name: "garden_to_street",
    open: "temp-obj3c.png",
    closed: "temp-obj3.png",
    position: { x: 10, y: GROUNDLEVEL },
    selectParty: false,
    triggers: [22]
  },
  {
    id: 5,
    name: "garden_to_gasebo",
    open: "temp-obj1c.png",
    closed: "temp-obj1.png",
    position: { x: 400, y: GROUNDLEVEL },
    selectParty: false
  },
  {
    id: 6,
    name: "garden_to_school",
    open: "temp-obj2c.png",
    closed: "temp-obj2.png",
    position: { x: SCREENWIDTH - 200, y: GROUNDLEVEL },
    selectParty: false
  }
];

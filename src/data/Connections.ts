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
    selectParty: ["maya"]
  },
  {
    id: 1,
    name: "street_to_arena",
    open: "temp-obj1c.png",
    closed: "temp-obj1.png",
    position: { x: SCREENWIDTH - 200, y: GROUNDLEVEL },
    triggers: ["1_Quest_win_3_fights", "1_Activate_ormron_arena"],
    selectParty: ["maya"]
  },
  {
    id: 2,
    name: "street_to_garden",
    open: "temp-obj2c.png",
    closed: "temp-obj2.png",
    position: { x: 400, y: GROUNDLEVEL },
    selectParty: null,
    triggers: [
      "1_Activate_ormron_garden",
      "1_Open_connection_arena",
      "1_Dial_Nell_handshake"
    ]
  },
  {
    id: 3,
    name: "arena_to_street",
    open: "temp-obj3c.png",
    closed: "temp-obj3.png",
    position: { x: 10, y: GROUNDLEVEL },
    selectParty: null,
    triggers: ["1_Activate_ormron_street"]
  },
  {
    id: 4,
    name: "garden_to_street",
    open: "temp-obj3c.png",
    closed: "temp-obj3.png",
    position: { x: 10, y: GROUNDLEVEL },
    selectParty: null,
    triggers: ["1_Activate_ormron_street"]
  },
  {
    id: 5,
    name: "garden_to_gasebo",
    open: "temp-obj1c.png",
    closed: "temp-obj1.png",
    position: { x: 400, y: GROUNDLEVEL },
    selectParty: null
  },
  {
    id: 6,
    name: "garden_to_school",
    open: "temp-obj2c.png",
    closed: "temp-obj2.png",
    position: { x: SCREENWIDTH - 200, y: GROUNDLEVEL },
    selectParty: null
  }
];

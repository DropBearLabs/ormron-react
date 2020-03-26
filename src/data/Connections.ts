import { IConnection } from "../types/Types";
import {
  IGsoLevelOrmronStreetConnections,
  IGsoLevelOrmronArenaConnections,
  IGsoLevelOrmronGardenConnections,
  IGsoLevelOrmronGazeboConnections
} from "../types/TypeLevels";
const SCREENWIDTH = 1024;
const GROUNDLEVEL = 200;

export const connections: IConnection[] = [
  {
    id: IGsoLevelOrmronStreetConnections.street_to_map,
    open: "temp-obj3c.png",
    closed: "temp-obj3.png",
    position: { x: -100, y: GROUNDLEVEL },
    showParty: null
  },
  {
    id: IGsoLevelOrmronStreetConnections.street_to_arena,
    open: "temp-obj1c.png",
    closed: "temp-obj1.png",
    position: { x: SCREENWIDTH - 200, y: GROUNDLEVEL },
    triggers: ["1_Quest_win_3_fights", "1_Activate_ormron_arena"],
    showParty: ["maya"]
  },
  {
    id: IGsoLevelOrmronStreetConnections.street_to_garden,
    open: "temp-obj2c.png",
    closed: "temp-obj2.png",
    position: { x: 400, y: GROUNDLEVEL },
    showParty: null,
    triggers: [
      "1_Activate_ormron_garden",
      "1_Open_connection_arena",
      "1_Dial_Garden_handshake"
    ]
  },
  {
    id: IGsoLevelOrmronArenaConnections.arena_to_street,
    open: "temp-obj3c.png",
    closed: "temp-obj3.png",
    position: { x: 10, y: GROUNDLEVEL },
    showParty: null,
    triggers: ["1_Activate_ormron_street"]
  },
  {
    id: IGsoLevelOrmronGardenConnections.garden_to_street,
    open: "temp-obj3c.png",
    closed: "temp-obj3.png",
    position: { x: 10, y: GROUNDLEVEL },
    showParty: null,
    triggers: ["1_Activate_ormron_street"]
  },
  {
    id: IGsoLevelOrmronGardenConnections.garden_to_gazebo,
    open: "temp-obj1c.png",
    closed: "temp-obj1.png",
    position: { x: 400, y: GROUNDLEVEL },
    showParty: null,
    triggers: ["3_Activate_ormron_gazebo", "4_Dial_Gazebo_handshake"]
  },
  {
    id: IGsoLevelOrmronGardenConnections.garden_to_school,
    open: "temp-obj2c.png",
    closed: "temp-obj2.png",
    position: { x: SCREENWIDTH - 200, y: GROUNDLEVEL },
    showParty: null
  },
  {
    id: IGsoLevelOrmronGazeboConnections.gazebo_to_garden,
    open: "temp-obj2c.png",
    closed: "temp-obj2.png",
    position: { x: 10, y: GROUNDLEVEL },
    showParty: null,
    triggers: ["1_Activate_ormron_garden"]
  }
];

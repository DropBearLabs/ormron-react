import { ILevel } from "../types/Types";
import {
  IGsoLevelOrmronStreetConnections,
  IGsoLevelOrmronStreetNPCs,
  IGsoLevelOrmronArenaConnections,
  IGsoLevelOrmronArenaNPCs,
  IGsoLevelOrmronGardenNPCs,
  IGsoLevelOrmronGardenConnections,
  IGsoLevelOrmronGazeboConnections,
  IGsoLevelOrmronGazeboNPCs
} from "../types/TypeLevels";

export const levels: ILevel[] = [
  {
    id: "ormron_street",
    backgrounds: [{ image: "temp1.jpg" }],
    connections: [
      IGsoLevelOrmronStreetConnections.street_to_garden,
      IGsoLevelOrmronStreetConnections.street_to_arena,
      IGsoLevelOrmronStreetConnections.street_to_map
    ],
    npcs: [
      IGsoLevelOrmronStreetNPCs.npc_Olija,
      IGsoLevelOrmronStreetNPCs.npc_Dario
    ]
  },
  {
    id: "ormron_arena",
    backgrounds: [{ image: "temp2.jpg" }],
    connections: [IGsoLevelOrmronArenaConnections.arena_to_street],
    npcs: [IGsoLevelOrmronArenaNPCs.npc_Dario1]
  },
  {
    id: "ormron_garden",
    backgrounds: [{ image: "temp3.jpg" }],
    connections: [
      IGsoLevelOrmronGardenConnections.garden_to_street,
      IGsoLevelOrmronGardenConnections.garden_to_gazebo,
      IGsoLevelOrmronGardenConnections.garden_to_school
    ],
    npcs: [
      IGsoLevelOrmronGardenNPCs.char_Tara,
      IGsoLevelOrmronGardenNPCs.npc_AmuletGirl
    ]
  },
  {
    id: "ormron_gazebo",
    backgrounds: [{ image: "temp4.jpg" }],
    connections: [IGsoLevelOrmronGazeboConnections.gazebo_to_garden],
    npcs: [
      IGsoLevelOrmronGazeboNPCs.char_Grey,
      IGsoLevelOrmronGazeboNPCs.npc_SchoolGirl
    ]
  } /*
  {
    id: "ormron_school",
    backgrounds: [{ image: "temp5.jpg" }],
    connections: [],
    npcs: []
  },
  {
    id: "ormron_study",
    backgrounds: [{ image: "temp6.jpg" }],
    connections: [],
    npcs: []
  },
  {
    id: "desert_1",
    backgrounds: [{ image: "temp7.jpg" }],
    connections: [],
    npcs: []
  }
  */
];

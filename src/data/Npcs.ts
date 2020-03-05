import { INpc } from "../types/Types";
import {
  IGsoLevelOrmronStreetNPCs,
  IGsoLevelOrmronArenaNPCs,
  IGsoLevelOrmronGardenNPCs,
  IGsoLevelOrmronGardenConnections,
  IGsoLevelOrmronGazeboNPCs
} from "../types/TypeLevels";
const GROUNDLEVEL = 150;
export const npcs: INpc[] = [
  {
    id: IGsoLevelOrmronStreetNPCs.npc_Olija,
    image: "temp-npc1.png",
    name: "Olija",
    position: { x: 30, y: GROUNDLEVEL - 50 }
  },
  {
    id: IGsoLevelOrmronStreetNPCs.npc_Dario,
    image: "temp-npc2.png",
    name: "Dario",
    position: { x: 700, y: GROUNDLEVEL - 50 }
  },
  {
    id: IGsoLevelOrmronStreetNPCs.char_Maya,
    image: "temp-main1.png",
    name: "Maya",
    position: { x: 400, y: GROUNDLEVEL - 50 }
  },
  {
    id: IGsoLevelOrmronArenaNPCs.npc_Dario1,
    image: "temp-npc2.png",
    name: "Dario",
    position: { x: 700, y: GROUNDLEVEL - 50 }
  },
  {
    id: IGsoLevelOrmronGardenNPCs.char_Tara,
    image: "temp-main3.png",
    name: "Tara",
    position: { x: 370, y: GROUNDLEVEL - 50 }
  },
  {
    id: IGsoLevelOrmronGardenNPCs.char_Nell,
    image: "temp-main2.png",
    name: "Nell",
    position: { x: 430, y: GROUNDLEVEL - 50 }
  },
  {
    id: IGsoLevelOrmronGardenNPCs.npc_AmuletGirl,
    image: "temp-npc4.png",
    name: "Scool Girl",
    position: { x: 650, y: GROUNDLEVEL - 50 }
  },
  {
    id: IGsoLevelOrmronGazeboNPCs.npc_SchoolGirl,
    image: "temp-npc3.png",
    name: "School Girl",
    position: { x: 300, y: GROUNDLEVEL - 50 }
  },
  {
    id: IGsoLevelOrmronGazeboNPCs.char_Grey,
    image: "temp-main4.png",
    name: "Grey",
    position: { x: 650, y: GROUNDLEVEL - 50 }
  }
];

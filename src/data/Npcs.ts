import { INpc } from "../types/Types";
import {
  IGsoLevelOrmronStreetNPCs,
  IGsoLevelOrmronArenaNPCs,
  IGsoLevelOrmronGardenNPCs
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
  }
];

import { INpc } from "./Types";
const GROUNDLEVEL = 200;
export const npcs: INpc[] = [
  {
    id: "npc_Olija",
    image: "temp-npc1.png",
    name: "Olija",
    position: { x: 30, y: GROUNDLEVEL - 50 }
  },
  {
    id: "npc_Dario",
    image: "temp-npc2.png",
    name: "Dario",
    position: { x: 700, y: GROUNDLEVEL - 50 }
  },
  {
    id: "npc_Dario1",
    image: "temp-npc2.png",
    name: "Dario",
    position: { x: 700, y: GROUNDLEVEL - 50 }
  },
  {
    id: "npc_Nell",
    image: "temp-main2.png",
    name: "Nell",
    position: { x: 120, y: GROUNDLEVEL - 50 }
  },
  {
    id: "npc_Tara",
    image: "temp-main3.png",
    name: "Tara",
    position: { x: 370, y: GROUNDLEVEL - 50 }
  }
];

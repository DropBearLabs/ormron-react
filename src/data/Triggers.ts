import { ITrigger } from "./Types";

/*
"NPC_UPDATE": [scene, npc, next dialogue]
"QUEST_UPDATE": [scene, quest step]
"MAP_UPDATE": [scene, state]
"QUEST_END": [questId, name]
"PARTY_CHANGE": [char name, state]
"INFLUENCE_CHANGE": [char index [Dart, Nell, Grey, Tara], number]
*/

export const triggers: ITrigger[] = [
  { id: 0, triggerType: "DIALOGUE" },
  { id: 0, triggerType: "NPC_UPDATE", data: [0, "npc_Olija", false] },
  { id: 2, triggerType: "NPC_UPDATE", data: [0, "npc_Dario", 3] },
  { id: 3, triggerType: "DIALOGUE" },
  { id: 4, triggerType: "QUEST_UPDATE", data: [0, "0_ARENA_START"] },
  { id: 5, triggerType: "DIALOGUE" },
  { id: 6, triggerType: "DIALOGUE" },
  { id: 7, triggerType: "DIALOGUE" },
  { id: 8, triggerType: "QUEST_UPDATE", data: [0, "0_ARENA_ACCESS"] },
  { id: 9, triggerType: "NPC_UPDATE", data: [0, "npc_Dario", false] },
  { id: 10, triggerType: "MAP_UPDATE", data: [1, "OPEN"] },
  { id: 11, triggerType: "QUEST_UPDATE", data: [0, "0_ARENA_3FIGHTS"] },
  { id: 12, triggerType: "NPC_UPDATE", data: [1, "npc_Dario1", false] },
  { id: 13, triggerType: "NPC_UPDATE", data: [0, "npc_Olija", 6] },
  { id: 14, triggerType: "NPC_UPDATE", data: [0, "npc_Olija", 7] },
  { id: 15, triggerType: "QUEST_UPDATE", data: [0, "0_ARENA_CLOSED"] },
  { id: 16, triggerType: "QUEST_END", data: [0, "Fight in Arena"] },
  { id: 17, triggerType: "NPC_UPDATE", data: [0, "npc_Olija", false] },
  { id: 18, triggerType: "MAP_UPDATE", data: [2, "OPEN"] },
  { id: 19, triggerType: "MAP_UPDATE", data: [3, "OPEN"] },
  { id: 20, triggerType: "MAP_UPDATE", data: [4, "OPEN"] },
  { id: 21, triggerType: "MAP_UPDATE", data: [5, "OPEN"] },
  { id: 22, triggerType: "MAP_UPDATE", data: [6, "OPEN"] },
  { id: 23, triggerType: "QUEST_UPDATE", data: [1, "1_CAMP_START"] },
  { id: 24, triggerType: "PARTY_CHANGE", data: ["nell", "add"] },
  { id: 25, triggerType: "INFLUENCE_CHANGE", data: [2, -1] }
];

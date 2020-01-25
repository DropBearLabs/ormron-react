import { ITrigger } from "./Types";

/*
INDEX BASED
"NPC_UPDATE": [scene, npc, next dialogue]
"UPDATE_QUEST": [scene, quest step]
"MAP_UPDATE": [scene, state]
"QUEST_END": [questId, name]
"PARTY_CHANGE": [char name, state]
"INFLUENCE_CHANGE": [char index [Dart, Nell, Grey, Tara], number]
*/

export const triggers: ITrigger[] = [
  { id: 0, triggerType: "NPC_UPDATE", data: [0, "npc_Olija", false] },
  { id: 1, triggerType: "NPC_UPDATE", data: [0, "npc_Dario", 3] },
  { id: 2, triggerType: "UPDATE_QUEST", data: [0, "0_ARENA_START"] },
  { id: 3, triggerType: "UPDATE_QUEST", data: [0, "0_ARENA_ACCESS"] },
  { id: 4, triggerType: "NPC_UPDATE", data: [0, "npc_Dario", false] },
  { id: 5, triggerType: "MAP_UPDATE", data: [1, "OPEN"] },
  { id: 6, triggerType: "UPDATE_QUEST", data: [0, "0_ARENA_3FIGHTS"] },
  { id: 7, triggerType: "NPC_UPDATE", data: [1, "npc_Dario1", false] },
  { id: 8, triggerType: "NPC_UPDATE", data: [0, "npc_Olija", 6] },
  { id: 9, triggerType: "NPC_UPDATE", data: [0, "npc_Olija", 7] },
  { id: 10, triggerType: "UPDATE_QUEST", data: [0, "0_ARENA_CLOSED"] },
  { id: 11, triggerType: "QUEST_END", data: [0, "Fight in Arena"] },
  { id: 12, triggerType: "MAP_UPDATE", data: [2, "OPEN"] },
  { id: 13, triggerType: "MAP_UPDATE", data: [3, "OPEN"] },
  { id: 14, triggerType: "MAP_UPDATE", data: [4, "OPEN"] },
  { id: 15, triggerType: "MAP_UPDATE", data: [5, "OPEN"] },
  { id: 16, triggerType: "MAP_UPDATE", data: [6, "OPEN"] },
  { id: 17, triggerType: "UPDATE_QUEST", data: [1, "1_CAMP_START"] },
  { id: 18, triggerType: "PARTY_CHANGE", data: ["nell", "add"] },
  { id: 19, triggerType: "INFLUENCE_CHANGE", data: ["nell", -1] },
  { id: 20, triggerType: "INFLUENCE_CHANGE", data: ["nell", 1] },
  { id: 21, triggerType: "UPDATE_QUEST", data: [0, "0_ARENA_ENTER"] },
  { id: 22, triggerType: "LEVEL_ACTIVE", data: [0] },
  { id: 23, triggerType: "LEVEL_ACTIVE", data: [1] },
  { id: 24, triggerType: "LEVEL_ACTIVE", data: [2] },
  { id: 25, triggerType: "OPEN_CONNECTION", data: [0, "street_to_arena"] },
  { id: 26, triggerType: "OPEN_CONNECTION", data: [0, "street_to_garden"] }
];

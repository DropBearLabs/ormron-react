import { ITrigger } from "./Types";

import {
  ACTIVATE_LEVEL,
  UPDATE_NPC,
  UPDATE_QUEST,
  END_QUEST,
  OPEN_CONNECTION,
  ACTIVE_DIALOGUE,
  ADD_GLOBAL_EVENT
} from "../data/Constants";

export const triggers: ITrigger[] = [
  {
    id: 0,
    triggerType: UPDATE_NPC,
    data: ["ormron_street", "npc_Olija", false]
  },
  { id: 1, triggerType: UPDATE_NPC, data: ["ormron_street", "npc_Dario", 3] },
  { id: 2, triggerType: UPDATE_QUEST, data: ["tutorial", "TALK_TO_DARIO"] },
  { id: 3, triggerType: UPDATE_QUEST, data: ["tutorial", "ENTER_ARENA"] },
  {
    id: 4,
    triggerType: UPDATE_NPC,
    data: ["ormron_street", "npc_Dario", false]
  },
  { id: 5, triggerType: "MAP_UPDATE", data: [1, "OPEN"] },
  { id: 6, triggerType: UPDATE_QUEST, data: ["tutorial", "WIN_3_FIGHTS"] },
  {
    id: 7,
    triggerType: UPDATE_NPC,
    data: ["ormron_arena", "npc_Dario1", false]
  },
  { id: 8, triggerType: UPDATE_NPC, data: ["ormron_street", "npc_Olija", 6] },
  { id: 9, triggerType: UPDATE_NPC, data: ["ormron_street", "npc_Olija", 7] },
  { id: 10, triggerType: UPDATE_QUEST, data: ["tutorial", "TALK_TO_OLIJA"] },
  { id: 11, triggerType: END_QUEST, data: ["tutorial"] },
  { id: 12, triggerType: "MAP_UPDATE", data: [2, "OPEN"] },
  { id: 13, triggerType: "MAP_UPDATE", data: [3, "OPEN"] },
  { id: 14, triggerType: "MAP_UPDATE", data: [4, "OPEN"] },
  { id: 15, triggerType: "MAP_UPDATE", data: [5, "OPEN"] },
  { id: 16, triggerType: "MAP_UPDATE", data: [6, "OPEN"] },
  {
    id: 17,
    triggerType: UPDATE_QUEST,
    data: ["waterproblems", "1_CAMP_START"]
  },
  { id: 18, triggerType: "PARTY_CHANGE", data: ["nell", "add"] },
  { id: 19, triggerType: "INFLUENCE_CHANGE", data: ["nell", -1] },
  { id: 20, triggerType: "INFLUENCE_CHANGE", data: ["nell", 1] },
  { id: 22, triggerType: ACTIVATE_LEVEL, data: ["ormron_street"] },
  { id: 23, triggerType: ACTIVATE_LEVEL, data: ["ormron_arena"] },
  { id: 24, triggerType: ACTIVATE_LEVEL, data: ["ormron_garden"] },
  {
    id: 25,
    triggerType: OPEN_CONNECTION,
    data: ["ormron_street", "street_to_arena"]
  },
  {
    id: 26,
    triggerType: OPEN_CONNECTION,
    data: ["ormron_street", "street_to_garden"]
  },
  {
    id: 27,
    triggerType: OPEN_CONNECTION,
    data: ["ormron_street", "street_to_map"]
  },
  { id: 28, triggerType: ADD_GLOBAL_EVENT, data: ["NELL_HANDSHAKE"] },
  {
    id: 29,
    triggerType: ACTIVE_DIALOGUE,
    data: 8,
    condition: ["not", "NELL_HANDSHAKE"]
  },
  { id: 30, triggerType: ADD_GLOBAL_EVENT, data: ["GAME_START"] }
];

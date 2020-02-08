import {
  ACTIVATE_LEVEL,
  UPDATE_NPC,
  UPDATE_QUEST,
  END_QUEST,
  OPEN_CONNECTION,
  ACTIVE_DIALOGUE,
  ADD_GLOBAL_EVENT,
  UPDATE_INFLUENCE,
  UPDATE_PARTY,
  MAP_UPDATE
} from "../data/Constants";
import { ITrigger } from "../types/TypeTriggers";

export const triggers: ITrigger[] = [
  { id: "1_Game_Start", triggerType: ADD_GLOBAL_EVENT, data: "GAME_START" },
  {
    id: "1_Map_update_open",
    triggerType: MAP_UPDATE,
    data: ["ormron_streets", "OPEN"]
  },
  {
    id: "2_Map_update_open",
    triggerType: MAP_UPDATE,
    data: ["ormron_arena", "OPEN"]
  },
  {
    id: "3_Map_update_open",
    triggerType: MAP_UPDATE,
    data: ["ormron_garden", "OPEN"]
  },
  {
    id: "4_Map_update_open",
    triggerType: MAP_UPDATE,
    data: ["ormron_gazebo", "OPEN"]
  },
  {
    id: "5_Map_update_open",
    triggerType: MAP_UPDATE,
    data: ["ormron_school", "OPEN"]
  },
  {
    id: "6_Map_update_open",
    triggerType: MAP_UPDATE,
    data: ["desert_1", "OPEN"]
  },
  {
    id: "1_Dial_Oliga_to_false",
    triggerType: UPDATE_NPC,
    data: ["ormron_street", "npc_Olija", null]
  },
  {
    id: "1_Dial_Olija_to_6",
    triggerType: UPDATE_NPC,
    data: ["ormron_street", "npc_Olija", 6]
  },
  {
    id: "1_Dial_Olija_to_7",
    triggerType: UPDATE_NPC,
    data: ["ormron_street", "npc_Olija", 7]
  },
  {
    id: "1_Dial_Dario_to_3",
    triggerType: UPDATE_NPC,
    data: ["ormron_street", "npc_Dario", 3]
  },
  {
    id: "2_Dial_Dario_to_false",
    triggerType: UPDATE_NPC,
    data: ["ormron_street", "npc_Dario", null]
  },
  {
    id: "2_Dial_Dario1_to_false",
    triggerType: UPDATE_NPC,
    data: ["ormron_arena", "npc_Dario1", null]
  },
  {
    id: "1_Dial_Nell_handshake",
    triggerType: ACTIVE_DIALOGUE,
    data: 8,
    condition: [
      ["not", "NELL_HANDSHAKE"],
      ["yes", "TUTORIAL_COMPLETE"]
    ]
  },
  {
    id: "1_Quest_talk_to_Dario",
    triggerType: UPDATE_QUEST,
    data: ["tutorial", "TALK_TO_DARIO"]
  },
  {
    id: "1_Quest_enter_arena",
    triggerType: UPDATE_QUEST,
    data: ["tutorial", "ENTER_ARENA"]
  },
  {
    id: "1_Quest_win_3_fights",
    triggerType: UPDATE_QUEST,
    data: ["tutorial", "WIN_3_FIGHTS"]
  },
  {
    id: "1_Quest_talk_to_Olija",
    triggerType: UPDATE_QUEST,
    data: ["tutorial", "TALK_TO_OLIJA"]
  },
  { id: "1_Quest_End_tutorial", triggerType: END_QUEST, data: ["tutorial"] },
  {
    id: "2_Quest_go_to_camp",
    triggerType: UPDATE_QUEST,
    data: ["waterproblems", "CAMP_START"]
  },
  {
    id: "1_Patry_add_Nell",
    triggerType: UPDATE_PARTY,
    data: ["nell", "add"]
  },
  { id: "1_Nell_lost", triggerType: UPDATE_INFLUENCE, data: ["nell", -1] },
  { id: "1_Nell_add", triggerType: UPDATE_INFLUENCE, data: ["nell", 1] },
  {
    id: "1_Activate_ormron_street",
    triggerType: ACTIVATE_LEVEL,
    data: "ormron_street"
  },
  {
    id: "1_Activate_ormron_arena",
    triggerType: ACTIVATE_LEVEL,
    data: "ormron_arena"
  },
  {
    id: "1_Activate_ormron_garden",
    triggerType: ACTIVATE_LEVEL,
    data: "ormron_garden"
  },
  {
    id: "1_Open_connection_arena",
    triggerType: OPEN_CONNECTION,
    data: ["ormron_street", "street_to_arena"]
  },
  {
    id: "1_Open_connection_garden",
    triggerType: OPEN_CONNECTION,
    data: ["ormron_street", "street_to_garden"]
  },
  {
    id: "1_Global_Tutorial_complete",
    triggerType: ADD_GLOBAL_EVENT,
    data: "TUTORIAL_COMPLETE"
  },
  {
    id: "1_Global_Nell_handshake",
    triggerType: ADD_GLOBAL_EVENT,
    data: "NELL_HANDSHAKE"
  }
];

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
  // GLOBAL EVENTS
  { id: "1_Game_Start", triggerType: ADD_GLOBAL_EVENT, data: "GAME_START" },
  {
    id: "1_Global_Tutorial_complete",
    triggerType: ADD_GLOBAL_EVENT,
    data: "TUTORIAL_COMPLETE"
  },
  {
    id: "1_Global_Nell_handshake",
    triggerType: ADD_GLOBAL_EVENT,
    data: "NELL_HANDSHAKE"
  },
  {
    id: "1_Global_Nell_team",
    triggerType: ADD_GLOBAL_EVENT,
    data: "NELL_PARTY"
  },
  {
    id: "1_Global_Tara_team",
    triggerType: ADD_GLOBAL_EVENT,
    data: "TARA_PARTY"
  },
  {
    id: "3_Global_Amulet_quest_taken",
    triggerType: ADD_GLOBAL_EVENT,
    data: "AMULET_QUEST_TAKEN"
  },
  // UPDATES FOR THE MAP POINTS
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
  // NPC DIALOGUE UPDATES
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
    id: "1_Dial_Dario_to_default",
    triggerType: UPDATE_NPC,
    data: ["ormron_street", "npc_Dario", "Dario_first_quest"]
  },
  {
    id: "3_Dial_Tara_to_20",
    triggerType: UPDATE_NPC,
    data: ["ormron_garden", "char_Tara", 20]
  },
  {
    id: "3_Dial_Tara_to_false",
    triggerType: UPDATE_NPC,
    data: ["ormron_garden", "char_Tara", null]
  },
  {
    id: "3_Dial_AmuletGirl_to_default",
    triggerType: UPDATE_NPC,
    data: ["ormron_garden", "npc_AmuletGirl", "AmuletGirl_first_quest"]
  },
  {
    id: "3_Dial_AmuletGirl_to_33",
    triggerType: UPDATE_NPC,
    data: ["ormron_garden", "npc_AmuletGirl", 33]
  },
  {
    id: "1_Dial_Nell_handshake",
    triggerType: ACTIVE_DIALOGUE,
    data: 8,
    condition: [
      { event: "TUTORIAL_COMPLETE", status: true },
      { event: "NELL_HANDSHAKE", status: false }
    ]
  },
  {
    id: "3_Tara_remove_from_level",
    triggerType: UPDATE_NPC,
    data: ["ormron_garden", "char_Tara", false],
    condition: { event: "TARA_PARTY", status: true }
  },
  // QUEST UPDATES
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
    id: "3_Quest_amulet_find",
    triggerType: UPDATE_QUEST,
    data: ["findamulet", "FIND_AMULET"]
  },
  // PARTY UPDATES
  {
    id: "1_Patry_add_Nell",
    triggerType: UPDATE_PARTY,
    data: ["nell", "add"]
  },
  {
    id: "2_Patry_add_Tara",
    triggerType: UPDATE_PARTY,
    data: ["tara", "add"]
  },
  { id: "1_Nell_lost", triggerType: UPDATE_INFLUENCE, data: ["nell", -1] },
  { id: "1_Nell_add", triggerType: UPDATE_INFLUENCE, data: ["nell", 1] },
  { id: "1_Tara_add", triggerType: UPDATE_INFLUENCE, data: ["tara", 1] },
  // ACTIVATE LEVELS
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
    id: "3_Activate_ormron_gazebo",
    triggerType: ACTIVATE_LEVEL,
    data: "ormron_gazebo"
  },
  // ACTIVATE CONNECTIONS
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
    id: "3_Open_connection_gazebo",
    triggerType: OPEN_CONNECTION,
    data: ["ormron_garden", "garden_to_gazebo"]
  }
];

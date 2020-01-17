import { IGso } from "./Types";

//AFTER Tutorial
//*
export const gso: IGso = {
  chapter: 0,
  activeDialogue: null,
  activeLevel: 0,
  activeQuest: null,
  activeMap: null,
  infoline: null,
  partySelection: null,
  levels: [
    { npc_Olija: false, npc_Dario: false, to_ormron_arena: "triggered" },
    { npc_Dario1: false },
    { npc_Nell: false, npc_Tara: false }
  ],
  quests: [
    [
      "0_ARENA_START",
      "0_ARENA_ACCESS",
      "0_ARENA_ENTER",
      "0_ARENA_3FIGHTS",
      "0_ARENA_CLOSED"
    ],
    ["1_CAMP_START"]
  ],
  questsCompleted: [0],
  maps: [0, 1, 2, 3, 4, 5, 6],
  questsTaken: [1],
  party: [],
  influence: [0, 0, 0, 0]
};
//*/
/*

export const gso: IGso = {
  chapter: 0,
  activeDialogue: null,
  activeLevel: 0,
  activeQuest: null,
  activeMap: null,
  infoline: null,
  partySelection: null,
  party: [],
  influence: [0, 0, 0, 0],
  levels: [
    {
      npc_Olija: 0,
      npc_Dario: false
    },
    {
      npc_Dario1: 5
    },
    {
      npc_Nell: false,
      npc_Tara: false
    }
  ],
  quests: [],
  questsCompleted: [],
  maps: [0],
  questsTaken: []
};
*/

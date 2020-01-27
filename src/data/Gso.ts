import { IGso } from "./Types";

//AFTER Tutorial
//*

export const gso: IGso = {
  chapter: 0,
  activeDialogue: null,
  activeLevel: "ormron_street",
  activeQuest: null,
  activeMap: null,
  infoline: null,
  selectParty: null,
  levels: [
    {
      id: "ormron_street",
      npc_Olija: 0,
      npc_Dario: false,
      to_ormron_arena: "triggered"
    },
    { id: "ormron_arena", npc_Dario1: 5 },
    { id: "ormron_garden", npc_Nell: false, npc_Tara: false }
  ],
  quests: [],
  questsCompleted: [],
  maps: [0],
  questsTaken: [],
  party: ["maya"],
  influence: [0, 0, 0, 0]
};
//*/

import { IGso } from "./Types";

export const gso: IGso = {
  chapter: 0,
  activeDialogue: null,
  activeLevel: 0,
  activeQuest: null,
  activeMap: null,
  infoline: null,
  levels: [
    {
      npc_Olija: 0,
      npc_Dario: false
    },
    {
      npc_Dario1: 2
    }
  ],
  quests: [],
  maps: [0],
  questsTaken: []
};

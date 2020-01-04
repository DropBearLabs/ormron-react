import { IDialogue } from "./Types";

export const dialogues: IDialogue[] = [
  // 0
  {
    characterId: "char_Maya",
    id: "ormron_street_Maya_1",
    image: "temp-dial1.png",
    lines: ["Good day, headmaster! I am here to..."],
    nextNode: 1
  },
  // 1
  {
    characterId: "npc_Olija",
    id: "ormron_street_Olija_2",
    image: "temp-dial2.png",
    lines: [
      "Are you here for your final tests? Good. I have to say...",
      "...I am against alowing such yong students to participate in final tests.",
      "You have no idea what lies ahead. But let's start.",
      "First - Talk to headmaster Dario and get into Arena for some practice."
    ],
    nextNode: 2
  },
  // 2
  {
    characterId: "char_Maya",
    dialClear: { npc_Olija: null },
    dialStart: { npc_Dario: "temp-icon1.png" },
    id: "ormron_street_Maya_3",
    image: "temp-dial1.png",
    infoline: "NEW QUEST: Fight in Arena",
    lines: ["Will do, headmaster!"],
    questStart: { 0: "0_ARENA_START" }
  },
  // 3
  {
    characterId: "char_Maya",
    id: "ormron_street_Maya_6",
    image: "temp-dial1.png",
    lines: ["Hi, headmaster Dario. I am here to train!"],
    nextNode: 4
  },
  // 4
  {
    characterId: "npc_Dario",
    dialClear: { npc_Dario: null },
    id: "ormron_street_Dario_7",
    image: "temp-dial3.png",
    infoline: "QUEST UPDATED: Fight in Arena",
    lines: [
      "Go in. You need to survive at least 3 rounds to get a pass.",
      "Arena entrance is just behind me. Good luck!"
    ],
    questStart: { 0: "0_ARENA_ACCESS" }
  }
];

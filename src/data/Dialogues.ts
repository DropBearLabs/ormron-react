import { IDialogue } from "./Types";

export const dialogues: IDialogue[] = [
  // 0
  {
    id: 0,
    name: "ormron_street_Maya_1",
    characterId: "char_Maya",
    image: "temp-dial1.png",
    lines: ["Good day, headmaster! I am here to..."],
    nextNode: 1
  },
  // 1
  {
    id: 1,
    name: "ormron_street_Olija_2",
    characterId: "npc_Olija",
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
    id: 2,
    name: "ormron_street_Maya_3",
    characterId: "char_Maya",
    image: "temp-dial1.png",
    infoline: "NEW QUEST: Fight in Arena",
    lines: ["Will do, headmaster!"],
    dialClear: { 0: "npc_Olija" },
    dialStart: { 0: "npc_Dario" },
    questUpdate: { 0: "0_ARENA_START" }
  },
  // 3
  {
    id: 3,
    name: "ormron_street_Maya_6",
    characterId: "char_Maya",
    image: "temp-dial1.png",
    lines: ["Hi, headmaster Dario. I am here to train!"],
    nextNode: 4
  },
  // 4
  {
    id: 4,
    name: "ormron_street_Dario_7",
    characterId: "npc_Dario",
    image: "temp-dial3.png",
    infoline: "QUEST UPDATED: Fight in Arena",
    lines: [
      "Go in. You need to survive at least 3 rounds to get a pass.",
      "Arena entrance is just behind me. Good luck!"
    ],
    questUpdate: { 0: "0_ARENA_ACCESS" },
    dialClear: { 0: "npc_Dario" },
    mapUpdate: { 1: "OPEN" }
  },
  {
    id: 5,
    name: "ormron_street_Dario_debug",
    characterId: "npc_Dario",
    image: "temp-dial3.png",
    infoline: "QUEST UPDATED: Fight in Arena",
    lines: ["I am debug an you just won 3 fights!"],
    questUpdate: { 0: "0_ARENA_3FIGHTS" },
    dialClear: { 1: "npc_Dario1" },
    dialStart: { 0: "npc_Olija" }
  }
];

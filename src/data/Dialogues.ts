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
    nextNode: 2,
    triggers: [0, 1, 2]
  },
  // 2
  {
    id: 2,
    name: "ormron_street_Maya_3",
    characterId: "char_Maya",
    image: "temp-dial1.png",
    infoline: "NEW QUEST: Fight in Arena",
    lines: ["Will do, headmaster!"]
    //triggers: [3]
  },
  // 3
  {
    id: 3,
    name: "ormron_street_Maya_6",
    characterId: "char_Maya",
    image: "temp-dial1.png",
    lines: ["Hi, headmaster Dario. I am here to train!"],
    nextNode: 4,
    triggers: [25]
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
    triggers: [3, 4, 5, 22]
  },
  {
    id: 5,
    name: "ormron_street_Dario_debug",
    characterId: "npc_Dario",
    image: "temp-dial3.png",
    infoline: "QUEST UPDATED: Fight in Arena",
    lines: ["I am debug an you just won 3 fights!"],
    triggers: [7, 8, 10]
  },
  {
    id: 6,
    name: "ormron_street_Maya_9",
    characterId: "char_Maya",
    image: "temp-dial1.png",
    lines: ["I had my qualifications at Arena. Ready for more exitement!"],
    infoline: "QUEST COMPLETED: Fight in Arena",
    triggers: [9, 11, 26]
  },
  {
    id: 7,
    name: "ormron_street_Olija_10",
    characterId: "npc_Olija",
    image: "temp-dial2.png",
    infoline: "QUEST STARTED: Water problems",
    lines: [
      "Have you thought long and hard about your next step? Well...",
      "There's a bedoun camp to the south. They're having problems with water.",
      "It's up to you to complete this task on your own or as a team.",
      "I sent another student there yesterday but he didn't come back.",
      "Go there and report back to me when the issue is resolved."
    ],
    triggers: [0, 12, 13, 14, 15, 16, 17, 29]
  },
  {
    id: 8,
    name: "ormron_street_Nell_11",
    characterId: "npc_Nell",
    image: "temp-dial4.png",
    lines: ["Hi, Lady Maya!"],
    nextNode: 9,
    triggers: [28]
  },
  {
    id: 9,
    name: "ormron_street_Maya_12",
    characterId: "char_Maya",
    image: "temp-dial1.png",
    lines: [
      "Nell? What are you doing here? Shouldn't you be busy with your finals?"
    ],
    nextNode: 10
  },
  {
    id: 10,
    name: "ormron_street_Nell_13",
    characterId: "npc_Nell",
    image: "temp-dial4.png",
    lines: [
      "I kinda am. Headmaster Olija told me I need to learn how to be a part of a team...",
      "I gues it means I need to partner up with someone.",
      "Hey, Lady Maya, do you want to be my partner?",
      "For the finals I mean..."
    ],
    choice: [
      { text: "Sure", nextDial: 11, id: 1, triggers: [18, 20] },
      { text: "No way", nextDial: 12, id: 2, triggers: [19] }
    ]
  },
  {
    id: 11,
    name: "ormron_street_Maya_14",
    characterId: "char_Maya",
    image: "temp-dial1.png",
    lines: [
      "It's hard for you to find a team, isn't it? Sure, you can join me."
    ],
    nextNode: 14
  },
  {
    id: 12,
    name: "ormron_street_Maya_15",
    characterId: "char_Maya",
    image: "temp-dial1.png",
    lines: [
      "It's hard for you to find a team for a reason. You are hopless, Nell.",
      "You have no self-control and let's be honest here. You are not that bright."
    ],
    nextNode: 13
  },
  {
    id: 13,
    name: "ormron_street_Nell_16",
    characterId: "npc_Nell",
    image: "temp-dial4.png",
    lines: [
      "It is unfair, Lady Maya. But I am sure we will end up on one team somehow!"
    ]
  },
  {
    id: 14,
    name: "ormron_street_Maya_24",
    characterId: "npc_Nell",
    image: "temp-dial4.png",
    lines: ["Thank you so much. But what are we actually doing?"]
  }
];

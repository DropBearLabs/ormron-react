import { IDialogue } from "../types/Types";
import {
  IGsoLevelOrmronStreetNPCs,
  IGsoLevelOrmronArenaNPCs,
  IGsoLevelOrmronGardenNPCs
} from "../types/TypeLevels";

export const dialogues: IDialogue[] = [
  {
    id: 0,
    characterId: IGsoLevelOrmronStreetNPCs.char_Maya,
    image: "temp-dial1.png",
    lines: ["Good day, headmaster! I am here to..."],
    nextNode: 1,
    triggers: ["1_Game_Start"]
  },
  {
    id: 1,
    characterId: IGsoLevelOrmronStreetNPCs.npc_Olija,
    image: "temp-dial2.png",
    lines: [
      "Are you here for your final tests? Good. I have to say...",
      "...I am against alowing such yong students to participate in final tests.",
      "You have no idea what lies ahead. But let's start.",
      "First - Talk to headmaster Dario and get into Arena for some practice."
    ],
    nextNode: 2,
    triggers: [
      "1_Dial_Oliga_to_false",
      "1_Dial_Dario_to_3",
      "1_Quest_talk_to_Dario"
    ]
  },
  {
    id: 2,
    characterId: IGsoLevelOrmronStreetNPCs.char_Maya,
    image: "temp-dial1.png",
    infoline: "NEW QUEST: Fight in Arena",
    lines: ["Will do, headmaster!"]
  },
  {
    id: 3,
    characterId: IGsoLevelOrmronStreetNPCs.char_Maya,
    image: "temp-dial1.png",
    lines: ["Hi, headmaster Dario. I am here to train!"],
    nextNode: 4,
    triggers: ["1_Open_connection_arena"]
  },
  {
    id: 4,
    characterId: IGsoLevelOrmronStreetNPCs.npc_Dario,
    image: "temp-dial3.png",
    infoline: "QUEST UPDATED: Fight in Arena",
    lines: [
      "Go in. You need to survive at least 3 rounds to get a pass.",
      "Arena entrance is just behind me. Good luck!"
    ],
    triggers: [
      "1_Quest_enter_arena",
      "2_Map_update_open",
      "2_Dial_Dario_to_false",
      "1_Activate_ormron_street"
    ]
  },
  {
    id: 5,
    characterId: IGsoLevelOrmronArenaNPCs.npc_Dario1,
    image: "temp-dial3.png",
    infoline: "QUEST UPDATED: Fight in Arena",
    lines: ["I am debug an you just won 3 fights!"],
    triggers: [
      "2_Dial_Dario1_to_false",
      "1_Dial_Olija_to_6",
      "1_Quest_talk_to_Olija"
    ]
  },
  {
    id: 6,
    characterId: IGsoLevelOrmronStreetNPCs.char_Maya,
    image: "temp-dial1.png",
    lines: ["I had my qualifications at Arena. Ready for more exitement!"],
    infoline: "QUEST COMPLETED: Fight in Arena",
    triggers: ["1_Dial_Olija_to_7", "1_Quest_End_tutorial"]
  },
  {
    id: 7,
    characterId: IGsoLevelOrmronStreetNPCs.npc_Olija,
    image: "temp-dial2.png",
    infoline: "QUEST STARTED: Water problems",
    lines: [
      "Have you thought long and hard about your next step? Well...",
      "There's a bedoun camp to the south. They're having problems with water.",
      "It's up to you to complete this task on your own or as a team.",
      "I sent another student there yesterday but he didn't come back.",
      "Go there and report back to me when the issue is resolved."
    ],
    triggers: [
      "1_Dial_Oliga_to_false",
      "3_Map_update_open",
      "4_Map_update_open",
      "5_Map_update_open",
      "6_Map_update_open",
      "2_Quest_go_to_camp",
      "1_Open_connection_garden",
      "1_Global_Tutorial_complete"
    ]
  },
  {
    id: 8,
    characterId: IGsoLevelOrmronGardenNPCs.char_Nell,
    image: "temp-dial4.png",
    lines: ["Hi, Lady Maya!"],
    nextNode: 9,
    triggers: ["1_Global_Nell_handshake"]
  },
  {
    id: 9,
    characterId: IGsoLevelOrmronStreetNPCs.char_Maya,
    image: "temp-dial1.png",
    lines: [
      "Nell? What are you doing here? Shouldn't you be busy with your finals?"
    ],
    nextNode: 10
  },
  {
    id: 10,
    characterId: IGsoLevelOrmronGardenNPCs.char_Nell,
    image: "temp-dial4.png",
    lines: [
      "I kinda am. Headmaster Olija told me I need to learn how to be a part of a team...",
      "I gues it means I need to partner up with someone.",
      "Hey, Lady Maya, do you want to be my partner?",
      "For the finals I mean..."
    ],
    choice: [
      {
        text: "Sure",
        nextDial: 11,
        id: 1,
        triggers: ["1_Patry_add_Nell", "1_Nell_add"]
      },
      { text: "No way", nextDial: 12, id: 2, triggers: ["1_Nell_lost"] }
    ],
    triggers: ["3_Dial_Tara_to_15"]
  },
  {
    id: 11,
    characterId: IGsoLevelOrmronGardenNPCs.char_Nell,
    image: "temp-dial1.png",
    lines: [
      "It's hard for you to find a team, isn't it? Sure, you can join me."
    ],
    nextNode: 14
  },
  {
    id: 12,
    characterId: IGsoLevelOrmronGardenNPCs.char_Nell,
    image: "temp-dial1.png",
    lines: [
      "It's hard for you to find a team for a reason. You are hopless, Nell.",
      "You have no self-control and let's be honest here. You are not that bright."
    ],
    nextNode: 13
  },
  {
    id: 13,
    characterId: IGsoLevelOrmronGardenNPCs.char_Nell,
    image: "temp-dial4.png",
    lines: [
      "It is unfair, Lady Maya. But I am sure we will end up on one team somehow!"
    ]
  },
  {
    id: 14,
    characterId: IGsoLevelOrmronGardenNPCs.char_Nell,
    image: "temp-dial4.png",
    lines: ["Thank you so much. But what are we actually doing?"]
  }
];

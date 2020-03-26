import { IDialogue, IDefaultLine } from "../types/Types";
import {
  IGsoLevelOrmronStreetNPCs,
  IGsoLevelOrmronArenaNPCs,
  IGsoLevelOrmronGardenNPCs,
  IGsoLevelOrmronGazeboNPCs
} from "../types/TypeLevels";

export const defaultLines: IDefaultLine[] = [
  {
    id: "Olija_first_quest",
    line: "I thought I gave you a task already"
  },
  {
    id: "Dario_first_quest",
    line: "Feel free to drop into arena any time for training"
  },
  {
    id: "AmuletGirl_first_quest",
    line: "Why aren't you at the camp already?"
  },
  {
    id: "SchoolGirl_first_quest",
    line:
      "I envy you so much, you get to chase Master Dart and have an official excuse to do so!"
  },
  {
    id: "SchoolSecretary_first_quest",
    line:
      "I am sorry, Grandmaster Gai is busy with school affairs, try again later or come back tomorrow"
  }
];

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
      "1_Quest_talk_to_Olija",
      "1_Dial_Dario_to_default"
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
    ]
  },
  {
    id: 11,
    characterId: IGsoLevelOrmronGardenNPCs.char_Nell,
    image: "temp-dial1.png",
    lines: [
      "It's hard for you to find a team, isn't it? Sure, you can join me."
    ],
    nextNode: 14,
    triggers: ["1_Global_Nell_team"]
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
    ],
    triggers: ["3_Dial_Tara_to_20"]
  },
  {
    id: 14,
    characterId: IGsoLevelOrmronGardenNPCs.char_Nell,
    image: "temp-dial4.png",
    lines: ["Thank you so much. But what are we actually doing?"],
    nextNode: 15
  },
  {
    id: 15,
    characterId: IGsoLevelOrmronStreetNPCs.char_Maya,
    image: "temp-dial1.png",
    lines: [
      "We need to go to the bedouins camp and figure out what's with water supplies.",
      "Also someone went ahead, so we may grab them on our way."
    ],
    nextNode: 16
  },
  {
    id: 16,
    characterId: IGsoLevelOrmronGardenNPCs.char_Nell,
    image: "temp-dial4.png",
    lines: [
      "I know who it was. It was this arrogant snob, Dart or whatever his name is!"
    ],
    nextNode: 17
  },
  {
    id: 17,
    characterId: IGsoLevelOrmronStreetNPCs.char_Maya,
    image: "temp-dial1.png",
    lines: [
      "Master Dart? This is so cool! He is amazing!",
      "Do you know he is the youngest master in the history of Ormron?"
    ],
    nextNode: 18
  },
  {
    id: 18,
    characterId: IGsoLevelOrmronGardenNPCs.char_Nell,
    image: "temp-dial4.png",
    lines: ["I so don't care... Shall we go?"],
    nextNode: 19
  },
  {
    id: 19,
    characterId: IGsoLevelOrmronStreetNPCs.char_Maya,
    image: "temp-dial1.png",
    lines: [
      "In a bit. It's nice here in the garden. Woundering who else enjoys the spring morning here."
    ],
    triggers: ["3_Dial_Tara_to_20"]
  },
  {
    id: 20,
    characterId: IGsoLevelOrmronStreetNPCs.char_Maya,
    image: "temp-dial1.png",
    lines: ["Hi! Tara, isn't it?"],
    nextNode: 21
  },
  {
    id: 21,
    characterId: IGsoLevelOrmronGardenNPCs.char_Tara,
    image: "temp-dial5.png",
    lines: ["Who's asking?"],
    nextNode: 22
  },
  {
    id: 22,
    characterId: IGsoLevelOrmronStreetNPCs.char_Maya,
    image: "temp-dial1.png",
    lines: [
      "I am Maya. We're in the same world history class. I heard you are the best fighter the school has!"
    ],
    nextNode: 23
  },
  {
    id: 23,
    characterId: IGsoLevelOrmronGardenNPCs.char_Tara,
    image: "temp-dial5.png",
    lines: ["Maybe I am. What do you need?"],
    nextNode: 24
  },
  {
    id: 24,
    characterId: IGsoLevelOrmronStreetNPCs.char_Maya,
    image: "temp-dial1.png",
    lines: ["Are you doing your finals? How is it going?"],
    nextNode: 25
  },
  {
    id: 25,
    characterId: IGsoLevelOrmronGardenNPCs.char_Tara,
    image: "temp-dial5.png",
    lines: [
      "I went though ten levels of Arena and now I am bored. Do you have something cool to do?"
    ],
    choice: [
      {
        text: "Yes! I am on a quest!",
        nextDial: 26,
        id: 1,
        triggers: ["2_Patry_add_Tara", "1_Tara_add"]
      },
      { text: "Not at all", nextDial: 27, id: 2 }
    ]
  },
  {
    id: 26,
    characterId: IGsoLevelOrmronStreetNPCs.char_Maya,
    image: "temp-dial1.png",
    lines: ["Yes! Do you want to join me?"],
    nextNode: {
      event: { event: "NELL_PARTY", status: true },
      nextYes: 28,
      nextNo: 29
    },
    triggers: ["1_Global_Tara_team"]
  },
  {
    id: 27,
    characterId: IGsoLevelOrmronGardenNPCs.char_Tara,
    image: "temp-dial5.png",
    lines: [
      "Then leave me alone, I need to train for the next level of arena."
    ],
    triggers: [
      "3_Dial_Tara_to_false",
      "3_Open_connection_gazebo",
      "3_Dial_AmuletGirl_to_33"
    ]
  },
  {
    id: 28,
    characterId: IGsoLevelOrmronStreetNPCs.char_Maya,
    image: "temp-dial1.png",
    lines: [
      "We're going to bedoins camp. To check water supply.",
      "And catch up with Master Dart."
    ],
    nextNode: 32,
    triggers: ["3_Tara_remove_from_level", "3_Dial_AmuletGirl_to_33"]
  },
  {
    id: 29,
    characterId: IGsoLevelOrmronStreetNPCs.char_Maya,
    image: "temp-dial1.png",
    lines: ["I am going to bedoins camp. To check water supply."],
    nextNode: 30
  },
  {
    id: 30,
    characterId: IGsoLevelOrmronGardenNPCs.char_Tara,
    image: "temp-dial5.png",
    lines: ["I though Master Dart was doing that. I saw him leaving earlier."],
    nextNode: 31
  },
  {
    id: 31,
    characterId: IGsoLevelOrmronStreetNPCs.char_Maya,
    image: "temp-dial1.png",
    lines: ["Let's go, we need to try to catch up."]
  },
  {
    id: 32,
    characterId: IGsoLevelOrmronGardenNPCs.char_Tara,
    image: "temp-dial5.png",
    lines: [
      "Master Dart? Ha, I beat his score in the arena last week. He's probably still bitter about that."
    ],
    nextNode: 31,
    triggers: ["3_Open_connection_gazebo"]
  },
  {
    id: 33,
    characterId: IGsoLevelOrmronGardenNPCs.npc_AmuletGirl,
    image: "temp-dial8.png",
    lines: ["Are you going to Bedouinh's camp by any chance?"],
    nextNode: 34
  },
  {
    id: 34,
    characterId: IGsoLevelOrmronStreetNPCs.char_Maya,
    image: "temp-dial1.png",
    lines: ["Yes, headmaster Olija told me..."],
    nextNode: 35
  },
  {
    id: 35,
    characterId: IGsoLevelOrmronGardenNPCs.npc_AmuletGirl,
    image: "temp-dial8.png",
    lines: [
      "Super! Look, I've been there with my teacher a couple of weeks ago and left my amulet there.",
      "Can you bring it back if you see it? It's circular with a snake head on it,",
      "Been in my family for generations, my Granny will kill me if I won't get it back!"
    ],
    choice: [
      {
        text: "Sure, why not",
        nextDial: 36,
        id: 1,
        triggers: ["3_Global_Amulet_quest_taken"]
      },
      {
        text: "Not interested",
        nextDial: 37,
        id: 2
      }
    ]
  },
  {
    id: 36,
    characterId: IGsoLevelOrmronStreetNPCs.char_Maya,
    image: "temp-dial1.png",
    lines: ["I will lok for it if I have time."],
    nextNode: 38,
    triggers: ["3_Quest_amulet_find"]
  },
  {
    id: 37,
    characterId: IGsoLevelOrmronStreetNPCs.char_Maya,
    image: "temp-dial1.png",
    lines: ["Go and look for your amulet yourslef!"],
    nextNode: 39
  },
  {
    id: 38,
    characterId: IGsoLevelOrmronGardenNPCs.npc_AmuletGirl,
    image: "temp-dial8.png",
    lines: [
      "Thank you! It's like super old. Your family been here for agrs you know how important these things are!"
    ],
    triggers: ["3_Dial_AmuletGirl_to_default"]
  },
  {
    id: 39,
    characterId: IGsoLevelOrmronGardenNPCs.npc_AmuletGirl,
    image: "temp-dial8.png",
    lines: [
      "Wow, attitude! You think if your family is one of the oldest here, you're better than the rest of us?"
    ],
    triggers: ["3_Dial_AmuletGirl_to_default"]
  },
  {
    id: 40,
    characterId: IGsoLevelOrmronGazeboNPCs.npc_SchoolGirl,
    image: "temp-dial10.png",
    lines: ["Hi! How is it going? Where are you heading?"],
    nextNode: 41
  },
  {
    id: 41,
    characterId: IGsoLevelOrmronStreetNPCs.char_Maya,
    image: "temp-dial1.png",
    lines: ["To bedouin's camp... I need..."],
    nextNode: 42
  },
  {
    id: 42,
    characterId: IGsoLevelOrmronGazeboNPCs.npc_SchoolGirl,
    image: "temp-dial10.png",
    lines: [
      "I though Master Dart was doing that! It's not like I am following him or anything...",
      "I totally do, he is so handsome! But I lost him after the bridge. So disapointing...",
      "Say Hi for me if you see him! He totally remembers me, we were in the same herbal therapy class!"
    ],
    nextNode: {
      event: { event: "NELL_PARTY", status: true },
      nextYes: 43,
      nextNo: 44
    }
  },
  {
    id: 43,
    characterId: IGsoLevelOrmronGardenNPCs.char_Nell,
    image: "temp-dial4.png",
    lines: ["Dart again. It's just annoying!"],
    nextNode: 44
  },
  {
    id: 44,
    characterId: IGsoLevelOrmronGazeboNPCs.npc_SchoolGirl,
    image: "temp-dial10.png",
    lines: [
      "I envy you so much, you get to chase Master Dart and have an official excuse to do so!"
    ]
  }
  // {
  //   id:,
  //   characterId:,
  //   image:,
  //   lines: [],
  //   nextNode:
  // },
];

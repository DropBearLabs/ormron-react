import { IQuest } from "./Types";

export const quests: IQuest[] = [
  // 0
  {
    id: 0,
    main: true,
    name: "Fight in Arena",
    steps: [
      {
        name: "Talk to grandmaster Olija about your exams",
        event: "0_ARENA_START"
      },
      {
        name: "Talk to master Dario to participate in Arena fight",
        event: "0_ARENA_ACCESS"
      },
      { name: "Enter Arena", event: "0_ARENA_ENTER" },
      { name: "Win 3 fights in Arena", event: "0_ARENA_3FIGHTS" },
      {
        name: "Tell Olija that you've finished your Arena Training",
        event: "0_ARENA_CLOSED"
      }
    ]
  },
  {
    id: 1,
    main: true,
    name: "Water problems",
    steps: [
      { name: "Get to bedouin camp", event: "1_CAMP_START" },
      { name: "Talk to camp leader", event: "	1_CAMP_CHAT" },
      {
        name: "Travel to riverbead to check what blocks the river",
        event: "1_CAMP_RIVER"
      }
    ]
  }
];

import { IQuest } from "./Types";

export const quests: IQuest[] = [
  // 0
  {
    id: 0,
    main: true,
    name: "Fight in Arena",
    steps: [
      {
        event: "0_ARENA_START",
        name: "Talk to grandmaster Olija about your exams"
      },
      {
        event: "0_ARENA_ACCESS",
        name: "Talk to master Dario to participate in Arena fight"
      },
      { event: "0_ARENA_ENTER", name: "Enter Arena" },
      { event: "0_ARENA_3FIGHTS", name: "Win 3 fights in Arena" },
      {
        event: "0_ARENA_CLOSED",
        name: "Tell Dario that you've finished your Arena Training"
      }
    ]
  }
];

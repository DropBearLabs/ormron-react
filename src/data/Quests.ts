import { IQuest } from "./Types";

export const quests: IQuest[] = [
    //0
    {
        id:"tutorial_arena",
        name: "Fight in Arena",
        main: true,
        steps: [
            {name: "Talk to master Dario to participate in Arena fight", event: "0_ARENA_ACCESS"},
            {name: "Enter Arena", event: "0_ARENA_ENTER"},
            {name: "Win 3 fights in Arena", event: "0_ARENA_3FIGHTS"},
            {name: "Tell Dario that you've finished your Arena Training", event: "0_ARENA_CLOSED"}
        ]
    },
    //1
]
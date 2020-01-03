import { IDialogue } from "./Types";

export const dialogues: IDialogue[] = [
    {
        id: "ormron_street_Maya_1",	
        characterId: "char-Maya",
        image: "temp-dial1.png",	
        lines: [
            "Good day, headmaster! I am here to..."
        ],
        nextNode: "ormron_street_Olija_2",
    }, 
    {	
        id: "ormron_street_Olija_2",
        characterId: "npc-Olija",
        image: "temp-dial2.png",	
        lines: [
            "Are you here for your final tests? Good. I have to say...",
            "...I am against alowing such yong students to participate in final tests.",
            "You have no idea what lies ahead. But let's start.",
            "First - Talk to headmaster Dario and get into Arena for some practice."
        ],
        nextNode: "ormron_street_Maya_3",	
    },
    {	id: "ormron_street_Maya_3",
        image: "temp-dial1.png",
        characterId: "char-Maya",	
        lines: ["Will do, headmaster!",]
    },
]
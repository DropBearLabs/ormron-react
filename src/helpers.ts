import { levels } from "./data/Levels";
import { dialogues } from "./data/Dialogues";
import { IDialogue, ILevel } from "./data/Types";

export function findDialogue(dialogueId: string){
    const dialogue: IDialogue | undefined = dialogues.find(d => d.id ===dialogueId);
    if(dialogue===undefined) throw Error("Unknown dialog id" + dialogueId);
    return dialogue;
  }


export function findLevel(levelId: string){
    const level: ILevel | undefined = levels.find(l => l.id ===levelId);
    if(level===undefined) throw Error("Unknown level id" + levelId);
    return level;
  }
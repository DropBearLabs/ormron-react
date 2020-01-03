import { levels } from "./data/Levels";
import { dialogues } from "./data/Dialogues";
import { IDialogue, ILevel, INpc } from "./data/Types";

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

export function findNPC(levelId: string, npcId: string){
  const level = findLevel(levelId);
  const npc: INpc | undefined = level.npcs.find(n => n.id ===npcId);
  if(npc===undefined) throw Error("Unknown npc id" + npcId);
  return npc;
}

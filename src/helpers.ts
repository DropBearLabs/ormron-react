import { levels } from "./data/Levels";
import { dialogues } from "./data/Dialogues";
import { npcs } from "./data/Npcs";
import { triggers } from "./data/Triggers";
import { connections } from "./data/Connections";
import { IDialogue, ILevel, INpc } from "./data/Types";

export function findConnection(id: number) {
  const connection = connections[id];
  if (connection === undefined) {
    throw Error("Unknown connection id" + id);
  }
  return connection;
}

export function findTrigger(id: number) {
  const trigger = triggers.find((t: any) => t.id === id);
  if (trigger === undefined) {
    throw Error("Unknown trigger id" + id);
  }
  return trigger;
}

export function findNpc(id: number) {
  const npc = npcs[id];
  if (npc === undefined) {
    throw Error("Unknown npc id" + id);
  }
  return npc;
}

export function findDialogue(dialogueId: number) {
  const dialogue: IDialogue | undefined = dialogues.find(
    (d: IDialogue) => d.id === dialogueId
  );
  if (dialogue === undefined) {
    throw Error("Unknown dialog id" + dialogueId);
  }
  return dialogue;
}

export function findLevel(levelId: number) {
  const level: ILevel | undefined = levels.find(
    (l: ILevel) => l.id === levelId
  );
  if (level === undefined) {
    throw Error("Unknown level id" + levelId);
  }
  return level;
}

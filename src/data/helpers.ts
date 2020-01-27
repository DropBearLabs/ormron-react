import { levels } from "./Levels";
import { dialogues } from "./Dialogues";
import { npcs } from "./Npcs";
import { quests } from "./Quests";
import { triggers } from "./Triggers";
import { connections } from "./Connections";
import { IDialogue, ILevel, INpc } from "./Types";

export function findConnection(id: number) {
  const connection = connections[id];
  if (connection === undefined) {
    throw Error("Unknown connection id" + id);
  }
  return connection;
}

export function findQuest(id: string) {
  const quest = quests.find((q: any) => q.id === id);
  if (quest === undefined) {
    throw Error("Unknown connection id" + id);
  }
  return quest;
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

export function findLevel(levelId: string) {
  const level: ILevel | undefined = levels.find(
    (l: ILevel) => l.id === levelId
  );
  if (level === undefined) {
    throw Error("Unknown level id" + levelId);
  }
  return level;
}

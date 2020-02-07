import { levels } from "./Levels";
import { dialogues } from "./Dialogues";
import { npcs } from "./Npcs";
import { quests } from "./Quests";
import { triggers } from "./Triggers";
import { connections } from "./Connections";
import {
  IDialogue,
  ILevel,
  IQuest,
  IQuestStep,
  IConnection,
  INpc
} from "../types/Types";
import { ITrigger } from "../types/TypeTriggers";
import {
  IGsoLevel,
  IConnectionLevel,
  ConnectionStatus,
  INPCLevel
} from "../types/TypeLevels";

export function findConnection(id: string) {
  const connection = connections.find((c: IConnection) => c.id === id);
  if (connection === undefined) {
    throw Error("Unknown connection id" + id);
  }
  return connection;
}

export function findQuest(id: string) {
  const quest = quests.find((q: IQuest) => q.id === id);
  if (quest === undefined) {
    throw Error("Unknown quest id" + id);
  }
  return quest;
}

export function findQuestEvent(search: string, id: string) {
  const quest = findQuest(search);
  const event = quest.steps.find((s: IQuestStep) => s.event === id);
  if (event === undefined) {
    throw Error("Unknown event in steps" + id);
  }
  return event;
}

export function findTrigger(id: string) {
  const trigger = triggers.find((t: ITrigger) => t.id === id);
  if (trigger === undefined) {
    throw Error("Unknown trigger id" + id);
  }
  return trigger;
}

export function findNpc(id: string) {
  const npc = npcs.find((n: INpc) => n.id === id);
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

export function checkGlobalEvent(
  global: string[],
  status: string,
  event: string
) {
  if (status === "not") {
    return global.indexOf(event) === -1;
  } else {
    return global.indexOf(event) !== -1;
  }
}

export function connectionLevelStatus(
  level: IGsoLevel,
  name: IConnectionLevel
): ConnectionStatus {
  if (name in level.connections) {
    return level.connections[name as keyof typeof level.connections];
  }
  throw new Error(`Invalid connection name ${name} for level ${level.id}`);
}

export function npcLevelStatus(
  level: IGsoLevel,
  name: INPCLevel
): number | false | undefined {
  if (name in level.npcs) {
    return level.npcs[name as keyof typeof level.npcs];
  }
  throw new Error(`Invalid NPC name ${name} for level ${level.id}`);
}

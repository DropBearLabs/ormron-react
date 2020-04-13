import { levels } from "./Levels";
import { dialogues, defaultLines } from "./Dialogues";
import { npcs } from "./Npcs";
import { quests } from "./Quests";
import { triggers } from "./Triggers";
import { connections } from "./Connections";
import { spells } from "./Spells";
import {
  IDialogue,
  ILevel,
  IQuest,
  IQuestStep,
  IConnection,
  INpc,
  IDefaultLine,
  IPoint
} from "../types/Types";
import { ITrigger } from "../types/TypeTriggers";
import {
  IGsoLevel,
  IConnectionLevel,
  ConnectionStatus,
  INPCLevel
} from "../types/TypeLevels";
import {
  MainCharacters,
  IPartyMember,
  Spells,
  Enemies
} from "../types/TypeCharacters";
import { allParty } from "./Characters";
import { enemySets, enemies } from "./Opponents";
import { ISubject, IField } from "../types/TypesFights";

export function findConnection(id: string) {
  const connection = connections.find((c: IConnection) => c.id === id);
  if (connection === undefined) {
    throw Error("Unknown connection id" + id);
  }
  return connection;
}

export function findSpell(id: Spells) {
  const spell = spells.find((s: any) => s.id === id);
  if (spell === undefined) {
    throw Error("Unknown spell id" + id);
  }
  return spell;
}

export function findQuest(id: string) {
  const quest = quests.find((q: IQuest) => q.id === id);
  if (quest === undefined) {
    throw Error("Unknown quest id" + id);
  }
  return quest;
}

export function findPartyMember(id: MainCharacters) {
  const character = allParty.find((p: IPartyMember) => p.id === id);
  if (!character) {
    throw Error("Unknown character id " + id);
  }
  return character;
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

export function findDefaultLine(lineId: string) {
  const line: IDefaultLine | undefined = defaultLines.find(
    (d: IDefaultLine) => d.id === lineId
  );
  if (line === undefined) {
    throw Error("Unknown dialog id" + lineId);
  }
  return line;
}

function checkGlobalEvent(global: string[], event: string, state: boolean) {
  if (state) {
    return global.includes(event);
  } else if (!state) {
    return global.indexOf(event) === -1;
  } else {
    throw new Error(
      `Can't chec for the event ${event} because it has no state`
    );
  }
}

export function checkGlobalEvents(
  global: string[],
  events:
    | Array<{ event: string; status: boolean }>
    | { event: string; status: boolean }
) {
  if (Array.isArray(events)) {
    return events.every(e => checkGlobalEvent(global, e.event, e.status));
  }
  return checkGlobalEvent(global, events.event, events.status);
}

export function connectionLevelStatus(
  level: IGsoLevel,
  name: IConnectionLevel,
  status?: ConnectionStatus
): ConnectionStatus {
  if (!(name in level.connections)) {
    throw new Error(`Invalid connection name ${name} for level ${level.id}`);
  }
  if (status) {
    // This may break when updating TS because it only works without a type check on status
    level.connections = { ...level.connections, [name]: status };
  }

  return level.connections[name as keyof typeof level.connections];
}

export function npcLevelStatus(
  level: IGsoLevel,
  name: INPCLevel,
  status?: number | null | false
): number | null | false {
  if (!(name in level.npcs)) {
    throw new Error(`Invalid NPC name ${name} for level ${level.id}`);
  }
  if (status !== undefined) {
    // This may break when updating TS because it only works without a type check on status
    level.npcs = { ...level.npcs, [name]: status };
  }
  return level.npcs[name as keyof typeof level.npcs];
}

export function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function findCellSubject(field: IField, coord: IPoint): ISubject {
  const position = field.positions.find(
    p => p.coordinates.x === coord.x && p.coordinates.y === coord.y
  );
  if (!position) {
    return { id: undefined, type: "empty" };
  }
  return position.subject;
}

export function findCharacterCoord(field: IField) {
  const char = field.active;
  const position = field.positions.find(p => p.subject.id === char.id);
  if (!position) {
    throw new Error(`Character ${char.id} is not found on a field`);
  }
  return position;
}

export function pointsInclude(points: IPoint[], point: IPoint) {
  return points.find(h => h.x === point.x && h.y === point.y);
}

export function findEnemy(id: Enemies) {
  const enemy = enemies.find(e => e.id === id);
  if (!enemy) {
    throw new Error(`Enemy ${id} is not found in enemies data`);
  }
  return enemy;
}

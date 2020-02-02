import {
  ACTIVE_DIALOGUE,
  ACTIVATE_LEVEL,
  SHOW_INFOLINE,
  END_QUEST,
  SHOW_QUEST,
  UPDATE_QUEST,
  ACTIVE_MAP,
  MAP_UPDATE,
  UPDATE_NPC,
  SELECT_PARTY,
  UPDATE_PARTY,
  UPDATE_INFLUENCE,
  OPEN_CONNECTION,
  ADD_GLOBAL_EVENT
} from "../data/Constants";

export type IAction =
  | ACTIVE_DIALOGUE
  | ACTIVATE_LEVEL
  | SHOW_INFOLINE
  | END_QUEST
  | SHOW_QUEST
  | UPDATE_QUEST
  | ACTIVE_MAP
  | MAP_UPDATE
  | UPDATE_NPC
  | SELECT_PARTY
  | UPDATE_PARTY
  | UPDATE_INFLUENCE
  | OPEN_CONNECTION
  | ADD_GLOBAL_EVENT;

export type IPayload =
  | IPayloadNpcUpdate
  | IPayloaQuestUpdate
  | IPayloadOpenConnection
  | IPayloadPartyUpdate
  | IPayloadUpdateInfluence
  | string
  | number
  | null;

type mainCharacters = "nell" | "dart" | "tara" | "grey";
export interface IPayloadNpcUpdate {
  level: string;
  character: string;
  setTo: number | false;
}

export interface IPayloadPartyUpdate {
  character: mainCharacters;
  update: string;
}

export interface IPayloaQuestUpdate {
  quest: string;
  step: string;
}

export interface IPayloadOpenConnection {
  level: string;
  entry: string;
}

export interface IPayloadUpdateInfluence {
  character: mainCharacters;
  num: number;
}

export interface IGso {
  chapter: number;
  activeLevel: string;
  infoline: string | null;
  selectParty: string[] | null;
  activeDialogue: number | null;
  activeMap: number | null;
  questsTaken: string[];
  activeQuest: number | null;
  questsCompleted: string[];
  globalEvents: string[];
  quests: IGsoQuest[];
  levels: IGsoLevel[];
  maps: number[];
  party: string[];
  influence: IGsoInfluence;
}

export interface IGsoQuest {
  id: string;
  completedSteps: string[];
  nextStep: string;
}

export interface IGsoInfluence {
  nell: number;
  dart: number;
  tara: number;
  grey: number;
}

export interface IMap {
  id: number;
  name: string;
  levels: IMapLevel[];
}

export interface IMapLevel {
  id: number;
  name: string;
  image: string;
  open: boolean;
  position: IPoint;
}

export interface IPartyMember {
  id: string;
  name: string;
  image: string;
  placeholder: string;
  selected: string;
  opened: boolean;
}

export interface ILevel {
  id: string;
  connections: number[];
  backgrounds: IBackground[];
  npcs: number[];
  triggers?: number[];
}

export interface IConnection {
  id: number;
  name: string;
  position: IPoint;
  open: string;
  closed: string;
  selectParty: boolean;
  triggers?: string[];
  infoline?: string;
}

export interface IPoint {
  x: number;
  y: number;
}

export interface IBackground {
  image: string;
}

export interface INpc {
  id: string;
  name: string;
  image: string;
  position: IPoint;
}

export type ITrigger =
  | ITriggerGlobalEvent
  | ITriggerMapUpdate
  | ITriggerNpcUpdate
  | ITriggerActiveDialogue
  | ITriggerUpdateQuest
  | ITriggerActivateLevel
  | ITriggerOpenConnection
  | ITriggerEndQuest
  | ITriggerUpdateParty
  | ITriggerUpdateInfluence;

interface ITriggerActivateLevel {
  id: string;
  triggerType: "ACTIVATE_LEVEL";
  data: string;
  condition?: string[][];
}

interface ITriggerGlobalEvent {
  id: string;
  triggerType: "ADD_GLOBAL_EVENT";
  data: string;
  condition?: string[][];
}

interface ITriggerMapUpdate {
  id: string;
  triggerType: "MAP_UPDATE";
  data: [number, string];
  condition?: string[][];
}

interface ITriggerNpcUpdate {
  id: string;
  triggerType: "UPDATE_NPC";
  data: [string, string, number | false];
  condition?: string[][];
}

interface ITriggerActiveDialogue {
  id: string;
  triggerType: "ACTIVE_DIALOGUE";
  data: number | null;
  condition?: string[][];
}

interface ITriggerUpdateQuest {
  id: string;
  triggerType: "UPDATE_QUEST";
  data: [string, string];
  condition?: string[][];
}

interface ITriggerEndQuest {
  id: string;
  triggerType: "END_QUEST";
  data: [string];
  condition?: string[][];
}

interface ITriggerUpdateInfluence {
  id: string;
  triggerType: "UPDATE_INFLUENCE";
  data: [string, number];
  condition?: string[][];
}

interface ITriggerUpdateParty {
  id: string;
  triggerType: "UPDATE_PARTY";
  data: [string, string];
  condition?: string[][];
}

interface ITriggerOpenConnection {
  id: string;
  triggerType: "OPEN_CONNECTION";
  data: [string, string];
  condition?: string[][];
}

export type IGsoLevel =
  | IGsoLevelOrmronStreet
  | IGsoLevelOrmronArena
  | IGsoLevelOrmronGarden;

type connectionStatus = "closed" | "open" | "visited";

interface IGsoLevelOrmronStreet {
  id: string;
  npc_Olija: number | false;
  npc_Dario: number | false;
  connections: {
    street_to_garden: connectionStatus;
    street_to_arena: connectionStatus;
    street_to_map: connectionStatus;
  };
}

interface IGsoLevelOrmronArena {
  id: string;
  npc_Dario1: number | false;
  connections: {
    arena_to_street: connectionStatus;
  };
}

interface IGsoLevelOrmronGarden {
  id: string;
  npc_Tara: number | false | undefined;
  connections: {
    garden_to_street: connectionStatus;
    garden_to_gazebo: connectionStatus;
    garden_to_school: connectionStatus;
  };
}

export interface IDialContinuation {
  id: string;
}

export interface IDialogue {
  id: number;
  name: string;
  characterId: string;
  image: string;
  lines: string[];
  nextNode?: number | IDialContinuation;
  infoline?: string;
  choice?: IDialogueChoice[];
  triggers?: string[];
}

export interface IDialogueChoice {
  id: number;
  text: string;
  nextDial: number;
  triggers: string[];
}

export interface IQuest {
  id: string;
  name: string;
  main: boolean;
  steps: IQuestStep[];
}

export interface IQuestStep {
  name: string;
  event: string;
}

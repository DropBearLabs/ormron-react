import {
  ACTIVE_DIALOGUE,
  ACTIVATE_LEVEL,
  SHOW_INFOLINE,
  END_QUEST,
  SHOW_QUESTS,
  UPDATE_QUEST,
  ACTIVE_MAP,
  MAP_UPDATE,
  UPDATE_NPC,
  SELECT_PARTY,
  UPDATE_PARTY,
  UPDATE_INFLUENCE,
  OPEN_CONNECTION,
  ADD_GLOBAL_EVENT,
  SET_PARTY
} from "../data/Constants";
import { IGsoQuest } from "./Types";
import { INPCLevel, IConnectionLevel } from "./TypeLevels";

export enum MainCharacters {
  nell = "nell",
  dart = "dart",
  maya = "maya",
  tara = "tara",
  grey = "grey"
}

export type IAction =
  | ACTIVE_DIALOGUE
  | ACTIVATE_LEVEL
  | SHOW_INFOLINE
  | END_QUEST
  | SHOW_QUESTS
  | UPDATE_QUEST
  | ACTIVE_MAP
  | MAP_UPDATE
  | UPDATE_NPC
  | SELECT_PARTY
  | UPDATE_PARTY
  | UPDATE_INFLUENCE
  | OPEN_CONNECTION
  | SET_PARTY
  | ADD_GLOBAL_EVENT;

export type IPayload =
  | IPayloadNpcUpdate
  | IPayloaQuestUpdate
  | IPayloadOpenConnection
  | IPayloadDisplayQuests
  | IPayloadPartyUpdate
  | IPayloadUpdateInfluence
  | IPayloadUpdateMap
  | string
  | number
  | null;

export interface IPayloadNpcUpdate {
  level: string;
  character: INPCLevel;
  setTo: number | false;
}

export interface IPayloadDisplayQuests {
  quests: IGsoQuest[] | null;
}

export interface IPayloadPartyUpdate {
  character: MainCharacters;
  update: string;
}

export interface IPayloaQuestUpdate {
  quest: string;
  step: string;
}

export interface IPayloadOpenConnection {
  level: string;
  entry: IConnectionLevel;
}

export interface IPayloadUpdateInfluence {
  character: MainCharacters;
  num: number;
}

export interface IPayloadUpdateMap {
  map: string;
  state: string;
}

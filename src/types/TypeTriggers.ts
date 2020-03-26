import {
  ACTIVE_DIALOGUE,
  ACTIVATE_LEVEL,
  END_QUEST,
  UPDATE_QUEST,
  MAP_UPDATE,
  UPDATE_NPC,
  UPDATE_PARTY,
  UPDATE_INFLUENCE,
  OPEN_CONNECTION,
  ADD_GLOBAL_EVENT
} from "../data/Constants";
import { ICondition } from "./Types";

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
  triggerType: ACTIVATE_LEVEL;
  data: string;
  condition?: ICondition | ICondition[];
}

interface ITriggerGlobalEvent {
  id: string;
  triggerType: ADD_GLOBAL_EVENT;
  data: string;
  condition?: ICondition | ICondition[];
}

interface ITriggerMapUpdate {
  id: string;
  triggerType: MAP_UPDATE;
  data: [string, string];
  condition?: ICondition | ICondition[];
}

interface ITriggerNpcUpdate {
  id: string;
  triggerType: UPDATE_NPC;
  data: [string, string, number | null | false | string];
  condition?: ICondition | ICondition[];
}

interface ITriggerActiveDialogue {
  id: string;
  triggerType: ACTIVE_DIALOGUE;
  data: number | null;
  condition?: ICondition[] | ICondition;
}

interface ITriggerUpdateQuest {
  id: string;
  triggerType: UPDATE_QUEST;
  data: [string, string];
  condition?: ICondition | ICondition[];
}

interface ITriggerEndQuest {
  id: string;
  triggerType: END_QUEST;
  data: [string];
  condition?: ICondition | ICondition[];
}

interface ITriggerUpdateInfluence {
  id: string;
  triggerType: UPDATE_INFLUENCE;
  data: [string, number];
  condition?: ICondition | ICondition[];
}

interface ITriggerUpdateParty {
  id: string;
  triggerType: UPDATE_PARTY;
  data: [string, string];
  condition?: ICondition | ICondition[];
}

interface ITriggerOpenConnection {
  id: string;
  triggerType: OPEN_CONNECTION;
  data: [string, string];
  condition?: ICondition | ICondition[];
}

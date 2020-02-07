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
  condition?: string[][];
}

interface ITriggerGlobalEvent {
  id: string;
  triggerType: ADD_GLOBAL_EVENT;
  data: string;
  condition?: string[][];
}

interface ITriggerMapUpdate {
  id: string;
  triggerType: MAP_UPDATE;
  data: [string, string];
  condition?: string[][];
}

interface ITriggerNpcUpdate {
  id: string;
  triggerType: UPDATE_NPC;
  data: [string, string, number | false];
  condition?: string[][];
}

interface ITriggerActiveDialogue {
  id: string;
  triggerType: ACTIVE_DIALOGUE;
  data: number | null;
  condition?: string[][];
}

interface ITriggerUpdateQuest {
  id: string;
  triggerType: UPDATE_QUEST;
  data: [string, string];
  condition?: string[][];
}

interface ITriggerEndQuest {
  id: string;
  triggerType: END_QUEST;
  data: [string];
  condition?: string[][];
}

interface ITriggerUpdateInfluence {
  id: string;
  triggerType: UPDATE_INFLUENCE;
  data: [string, number];
  condition?: string[][];
}

interface ITriggerUpdateParty {
  id: string;
  triggerType: UPDATE_PARTY;
  data: [string, string];
  condition?: string[][];
}

interface ITriggerOpenConnection {
  id: string;
  triggerType: OPEN_CONNECTION;
  data: [string, string];
  condition?: string[][];
}

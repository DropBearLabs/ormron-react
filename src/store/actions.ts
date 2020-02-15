import {
  ACTIVE_DIALOGUE,
  ACTIVATE_LEVEL,
  SHOW_INFOLINE,
  ACTIVE_MAP,
  SHOW_QUESTS,
  UPDATE_QUEST,
  END_QUEST,
  MAP_UPDATE,
  UPDATE_NPC,
  SELECT_PARTY,
  UPDATE_PARTY,
  UPDATE_INFLUENCE,
  OPEN_LEVEL,
  OPEN_CONNECTION,
  ADD_GLOBAL_EVENT,
  SET_PARTY,
  SHOW_CHARACTERS
} from "../data/Constants";
import { IGsoParty } from "../types/TypeCharacters";
import { IReturnAction, IPayload } from "../types/TypeActions";

export const showDialogue = (index: number | null): IReturnAction => {
  return {
    payload: index,
    type: ACTIVE_DIALOGUE
  };
};

export const showParty = (party: IGsoParty | null): IReturnAction => {
  return {
    payload: party as IPayload,
    type: SELECT_PARTY
  };
};

export const levelActive = (index: string): IReturnAction => ({
  payload: index,
  type: ACTIVATE_LEVEL
});

export const openConnection = (condition: [string, string]): IReturnAction => {
  const level = condition[0];
  const entry = condition[1];
  return {
    payload: { level, entry } as IPayload,
    type: OPEN_CONNECTION
  };
};

export const addGlobalEvent = (event: string): IReturnAction => {
  return {
    payload: event,
    type: ADD_GLOBAL_EVENT
  };
};

export const openLevel = (index: number): IReturnAction => {
  return {
    payload: index,
    type: OPEN_LEVEL
  };
};

export const npcUpdate = (
  condition: [string, string, number | null]
): IReturnAction => {
  const level = condition[0];
  const character = condition[1];
  const setTo = condition[2];
  return {
    payload: { level, character, setTo } as IPayload,
    type: UPDATE_NPC
  };
};

export const showInfoline = (text: string | null): IReturnAction => ({
  payload: text,
  type: SHOW_INFOLINE
});

export const showQuests = (quest: string | null): IReturnAction => {
  return {
    payload: quest,
    type: SHOW_QUESTS
  };
};

export const questUpdate = (condition: [string, string]): IReturnAction => {
  const quest = condition[0];
  const step = condition[1];
  return {
    payload: { quest, step },
    type: UPDATE_QUEST
  };
};

export const endQuest = (condition: string[]): IReturnAction => {
  const quest = condition[0];
  return {
    payload: quest,
    type: END_QUEST
  };
};

export const showMap = (id: number | null): IReturnAction => ({
  payload: id as IPayload,
  type: ACTIVE_MAP
});

export const updateMap = (condition: [string, string]): IReturnAction => {
  const map = condition[0];
  const state = condition[1];
  return {
    payload: { map, state },
    type: MAP_UPDATE
  };
};

export const updateInfluence = (condition: [string, number]): IReturnAction => {
  const character = condition[0];
  const num = condition[1];
  return {
    payload: { character, num } as IPayload,
    type: UPDATE_INFLUENCE
  };
};

export const setParty = (party: IGsoParty) => {
  return {
    payload: party,
    type: SET_PARTY
  };
};

export const updateParty = (condition: string[]) => {
  const character = condition[0];
  const update = condition[1];
  return {
    payload: { character, update },
    type: UPDATE_PARTY
  };
};

export const showCharacters = (characters: boolean) => {
  return {
    payload: characters,
    type: SHOW_CHARACTERS
  };
};

// export const clearLevelTriggers = (index: number) => ({
//   payload: index,
//   type: LEVEL_TIGGERS_CLEAR
// });

export default {
  showDialogue,
  levelActive,
  npcUpdate,
  showInfoline,
  showQuests,
  endQuest,
  showMap,
  updateMap,
  showParty,
  questUpdate,
  openLevel
};

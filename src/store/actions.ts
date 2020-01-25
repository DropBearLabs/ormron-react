import {
  ACTIVE_DIALOGUE,
  LEVEL_ACTIVE,
  SHOW_INFOLINE,
  ACTIVE_MAP,
  SHOW_QUEST,
  UPDATE_QUEST,
  FINISH_QUEST,
  MAP_UPDATE,
  NPC_UPDATE,
  SELECT_PARTY,
  UPDATE_PARTY,
  UPDATE_INFLUENCE,
  OPEN_LEVEL,
  OPEN_CONNECTION,
  LEVEL_TIGGERS_CLEAR
} from "../data/Constants";

export const activeDialogue = (index: number | null) => {
  return {
    payload: index,
    type: ACTIVE_DIALOGUE
  };
};

export const levelActive = (index: number) => ({
  payload: index,
  type: LEVEL_ACTIVE
});

export const openConnection = (condition: any) => {
  const level = condition[0];
  const entry = condition[1];
  return {
    payload: { level, entry },
    type: OPEN_CONNECTION
  };
};

export const openLevel = (index: number) => {
  return {
    payload: index,
    type: OPEN_LEVEL
  };
};

export const npcUpdate = (condition: any) => {
  const level = condition[0];
  const character = condition[1];
  const state = condition[2];
  return {
    payload: { level, character, state },
    type: NPC_UPDATE
  };
};

export const showInfoline = (text: string | null) => ({
  payload: text,
  type: SHOW_INFOLINE
});

export const displayQuest = (id: number | null) => {
  return {
    payload: id,
    type: SHOW_QUEST
  };
};

export const questUpdate = (condition: any) => {
  const quest = condition[0];
  const name = condition[1];
  return {
    payload: { quest, name },
    type: UPDATE_QUEST
  };
};

export const finishQuest = (condition: any) => {
  const quest = condition[0];
  return {
    payload: quest,
    type: FINISH_QUEST
  };
};

export const activeMap = (id: number | null) => ({
  payload: id,
  type: ACTIVE_MAP
});

export const updateMap = (condition: any) => {
  const map = condition[0];
  const state = condition[1];
  return {
    payload: { map, state },
    type: MAP_UPDATE
  };
};

export const selectParty = (party: any) => {
  return {
    payload: party,
    type: SELECT_PARTY
  };
};

export const updateParty = (condition: any) => {
  const character = condition[0];
  const update = condition[1];
  return {
    payload: { character, update },
    type: UPDATE_PARTY
  };
};

export const updateInfluence = (condition: any) => {
  const allChars = ["dart", "grey", "nell", "tara"];
  const character = condition[0];
  const index = allChars.indexOf(character);
  const num = condition[1];
  return {
    payload: { character, index, num },
    type: UPDATE_INFLUENCE
  };
};

export const clearLevelTriggers = (index: number) => ({
  payload: index,
  type: LEVEL_TIGGERS_CLEAR
});

export default {
  activeDialogue,
  levelActive,
  npcUpdate,
  showInfoline,
  displayQuest,
  finishQuest,
  activeMap,
  updateMap,
  selectParty,
  questUpdate,
  openLevel
};

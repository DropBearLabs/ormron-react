import {
  DIALOGUE_ACTIVE,
  LEVEL_ACTIVE,
  NPC_ACTIVE,
  NPC_INACTIVE,
  SHOW_INFOLINE,
  SHOW_MAP,
  SHOW_QUEST,
  START_QUEST,
  UPDATE_MAP,
  UPDATE_LEVEL
} from "../data/Constants";

export const dialogueActive = (index: number | null) => ({
  payload: index,
  type: DIALOGUE_ACTIVE
});

export const levelActive = (index: number) => ({
  payload: index,
  type: LEVEL_ACTIVE
});

export const updateLevel = (condition: any) => {
  const level = Object.keys(condition)[0];
  const name = Object.values(condition)[0];
  const state = "triggered";
  return {
    payload: { level, name, state },
    type: UPDATE_LEVEL
  };
};

export const npcInactive = (condition: any) => {
  const level = Object.keys(condition)[0];
  const character = Object.values(condition)[0];
  const state = null;
  return {
    payload: { level, character, state },
    type: NPC_INACTIVE
  };
};

export const npcActive = (condition: any) => {
  const level = Object.keys(condition)[0];
  const character = Object.values(condition)[0];
  const state = "temp-icon1.png";
  return {
    payload: { level, character, state },
    type: NPC_ACTIVE
  };
};

export const showInfoline = (text: string | null) => ({
  payload: text,
  type: SHOW_INFOLINE
});

export const displayQuest = (id: number | null) => ({
  payload: id,
  type: SHOW_QUEST
});

export const updateQuest = (condition: any) => {
  const quest = Object.keys(condition)[0];
  const state = Object.values(condition)[0];
  return {
    payload: { quest, state },
    type: START_QUEST
  };
};

export const displayMap = (id: number | null) => ({
  payload: id,
  type: SHOW_MAP
});

export const updateMap = (condition: any) => {
  const map = Object.keys(condition)[0];
  const state = Object.values(condition)[0];
  return {
    payload: { map, state },
    type: UPDATE_MAP
  };
};

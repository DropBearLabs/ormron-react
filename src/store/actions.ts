import {
  DIALOGUE_ACTIVE,
  LEVEL_ACTIVE,
  NPC_ACTIVE,
  NPC_INACTIVE,
  SHOW_INFOLINE,
  SHOW_QUEST,
  START_QUEST
} from "../data/Constants";

export const dialogueActive = (index: number | null) => ({
  payload: index,
  type: DIALOGUE_ACTIVE
});

export const levelActive = (index: number) => ({
  payload: index,
  type: LEVEL_ACTIVE
});

export const npcInactive = (condition: any) => {
  const character = Object.keys(condition)[0];
  const state = Object.values(condition)[0];
  return {
    payload: { character, state },
    type: NPC_INACTIVE
  };
};

export const npcActive = (condition: any) => {
  const character = Object.keys(condition)[0];
  const state = Object.values(condition)[0];
  return {
    payload: { character, state },
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

export const startQuest = (condition: any) => {
  const quest = Object.keys(condition)[0];
  const state = Object.values(condition)[0];
  return {
    payload: { quest, state },
    type: START_QUEST
  };
};

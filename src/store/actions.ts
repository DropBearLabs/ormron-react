import {
  DIALOGUE_ACTIVE,
  LEVEL_ACTIVE,
  SHOW_INFOLINE,
  SHOW_MAP,
  SHOW_QUEST,
  UPDATE_QUEST,
  FINISH_QUEST,
  UPDATE_MAP,
  UPDATE_LEVEL,
  NPC_UPDATE,
  SHOW_PARTY,
  UPDATE_PARTY,
  UPDATE_INFLUENCE
} from "../data/Constants";

export const dialogueActive = (index: number | null) => {
  console.log("Activating dialogue", index);
  return {
    payload: index,
    type: DIALOGUE_ACTIVE
  };
};

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

export const displayQuest = (id: number | null) => ({
  payload: id,
  type: SHOW_QUEST
});

export const updateQuest = (condition: any) => {
  const quest = condition[0];
  const state = condition[1];
  return {
    payload: { quest, state },
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

export const displayMap = (id: number | null) => ({
  payload: id,
  type: SHOW_MAP
});

export const updateMap = (condition: any) => {
  const map = condition[0];
  const state = condition[1];
  return {
    payload: { map, state },
    type: UPDATE_MAP
  };
};

export const selectParty = (party: any) => {
  return {
    payload: party,
    type: SHOW_PARTY
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
  const character = condition[0];
  const num = condition[1];
  return {
    payload: { character, num },
    type: UPDATE_INFLUENCE
  };
};

export default {
  dialogueActive,
  levelActive,
  npcUpdate,
  showInfoline,
  displayQuest,
  finishQuest,
  displayMap,
  updateMap,
  selectParty
};

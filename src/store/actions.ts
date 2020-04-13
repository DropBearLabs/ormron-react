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
  OPEN_CONNECTION,
  ADD_GLOBAL_EVENT,
  SET_PARTY,
  SHOW_CHARACTERS,
  SHOW_FIGHT,
  FIGHT_CHARACTER_SELECTED,
  FIGHT_CHARACTER_POSSIBLE_MOVES,
  FIGHT_CHARACTER_MOVES,
  FIGHT_CHARACTER_ACTS,
  FIGHT_CHARACTER_SPELL
} from "../data/Constants";
import { IGsoParty, Spells } from "../types/TypeCharacters";
import {
  IReturnAction,
  IPayload,
  IPayloadPartyUpdate
} from "../types/TypeActions";
import { IPoint } from "../types/Types";

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

export const npcUpdate = (
  condition: [string, string, number | null | false | string]
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

export const setParty = (party: IGsoParty): IReturnAction => {
  return {
    payload: party,
    type: SET_PARTY
  };
};

export const updateParty = (condition: string[]): IReturnAction => {
  const character = condition[0];
  const update = condition[1];
  return {
    payload: { character, update } as IPayloadPartyUpdate,
    type: UPDATE_PARTY
  };
};

export const showCharacters = (characters: boolean): IReturnAction => {
  return {
    payload: characters as IPayload,
    type: SHOW_CHARACTERS
  };
};

export const showFight = (opponents: string): IReturnAction => {
  return {
    payload: opponents,
    type: SHOW_FIGHT
  };
};

export const fightCharacterSelected = (coord: IPoint): IReturnAction => {
  return {
    payload: coord as IPoint,
    type: FIGHT_CHARACTER_SELECTED
  };
};

export const fightCharacterPossibleMoves = (coord: IPoint): IReturnAction => {
  return {
    payload: coord as IPoint,
    type: FIGHT_CHARACTER_POSSIBLE_MOVES
  };
};

export const fightCharacterMoves = (to: IPoint): IReturnAction => {
  return {
    payload: to as IPoint,
    type: FIGHT_CHARACTER_MOVES
  };
};

export const fightCharacterActs = (spell: Spells): IReturnAction => {
  return {
    payload: spell as Spells,
    type: FIGHT_CHARACTER_ACTS
  };
};

export const fightCharacterSpell = (spell: Spells): IReturnAction => {
  return {
    payload: spell as Spells,
    type: FIGHT_CHARACTER_SPELL
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
  openConnection,
  addGlobalEvent,
  updateInfluence,
  setParty,
  updateParty,
  showCharacters,
  showFight,
  fightCharacterSelected,
  fightCharacterPossibleMoves,
  fightCharacterMoves,
  fightCharacterSpell
};

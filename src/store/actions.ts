import { DIALOGUE_ACTIVE, LEVEL_ACTIVE, NPC_INACTIVE, NPC_ACTIVE, SHOW_INFOLINE, START_QUEST, SHOW_QUEST } from "../data/Constants";

export const dialogueActive = (index: number | null) => ({
    type: DIALOGUE_ACTIVE,
    payload: index
});

export const levelActive = (index: number) => ({
    type: LEVEL_ACTIVE,
    payload: index
});

export const npcInactive = (condition: any) => {
    const character = Object.keys(condition)[0];
    const state = Object.values(condition)[0];
    return {
        type: NPC_INACTIVE,
        payload: { character, state }
}};

export const npcActive = (condition: any) => {
    const character = Object.keys(condition)[0];
    const state = Object.values(condition)[0];
    return {
        type: NPC_ACTIVE,
        payload: { character, state }
}};

export const showInfoline = (text: string | null) => ({
    type: SHOW_INFOLINE,
    payload: text
});

export const displayQuest = (id: number | null) => ({
    type: SHOW_QUEST,
    payload: id
});

export const startQuest = (condition: any) => {
    const quest = Object.keys(condition)[0];
    const state = Object.values(condition)[0];
    return {
        type: START_QUEST,
        payload: {
            quest, state
        }
    }
};

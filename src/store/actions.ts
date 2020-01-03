import { DIALOGUE_ACTIVE, LEVEL_ACTIVE, NPC_INACTIVE, NPC_ACTIVE } from "../data/Constants";

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

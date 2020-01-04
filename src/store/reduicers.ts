import { DIALOGUE_ACTIVE, LEVEL_ACTIVE, NPC_INACTIVE, NPC_ACTIVE, SHOW_INFOLINE, START_QUEST} from "../data/Constants";
import { IGso } from "../data/Types";
import { gso } from "../data/Gso";
import { identifier } from "@babel/types";

const initialState: IGso = gso;

export default function GsoReduicer(state: IGso | void = initialState, action:any) {
    if(!state) return initialState;
    console.log(action.type);
    switch (action.type){
        case LEVEL_ACTIVE:
            return Object.assign({}, state, {
                activeLevel: action.payload
                })
        case DIALOGUE_ACTIVE:
            console.log(action);
            return Object.assign({}, state, {
                activeDialogue: action.payload!=null ? action.payload : null
              })
        case NPC_INACTIVE:
            const levelsToClear = [...state.levels];
            levelsToClear[state.activeLevel][action.payload.character] = action.payload.state;
            return Object.assign({}, state, {levels: levelsToClear })
        case NPC_ACTIVE:
                const levelsToUpdate = [...state.levels];
                levelsToUpdate[state.activeLevel][action.payload.character] = action.payload.state;
                return Object.assign({}, state, {levels: levelsToUpdate})
        case SHOW_INFOLINE:
                return Object.assign({}, state, {infoline: action.payload})
        case START_QUEST:
                const questsToUpdate = [...state.quests];
                if(!questsToUpdate[action.payload.quest]){
                    questsToUpdate[action.payload.quest] = [];
                }
                questsToUpdate[action.payload.quest].push(action.payload.state);
                return Object.assign({}, state, {quests: questsToUpdate})
        default:
            return initialState;
    }
}
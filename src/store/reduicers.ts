import {
  DIALOGUE_ACTIVE,
  LEVEL_ACTIVE,
  NPC_ACTIVE,
  NPC_INACTIVE,
  SHOW_INFOLINE,
  SHOW_QUEST,
  START_QUEST,
  SHOW_MAP,
  UPDATE_MAP
} from "../data/Constants";
import { gso } from "../data/Gso";
import { IGso } from "../data/Types";

const initialState: IGso = gso;

export default function GsoReduicer(
  state: IGso | void = initialState,
  action: any
) {
  if (!state) {
    return initialState;
  }
  switch (action.type) {
    case LEVEL_ACTIVE:
      return Object.assign({}, state, {
        activeLevel: action.payload
      });
    case DIALOGUE_ACTIVE:
      return Object.assign({}, state, {
        activeDialogue: action.payload != null ? action.payload : null
      });
    case NPC_INACTIVE:
      const levelsToClear = [...state.levels];
      levelsToClear[state.activeLevel][action.payload.character] =
        action.payload.state;
      return Object.assign({}, state, { levels: levelsToClear });
    case NPC_ACTIVE:
      const levelsToUpdate = [...state.levels];
      levelsToUpdate[state.activeLevel][action.payload.character] =
        action.payload.state;
      return Object.assign({}, state, { levels: levelsToUpdate });
    case SHOW_INFOLINE:
      return Object.assign({}, state, { infoline: action.payload });
    case START_QUEST:
      const questsToUpdate = [...state.quests];
      if (!questsToUpdate[action.payload.quest]) {
        questsToUpdate[action.payload.quest] = [];
      }
      questsToUpdate[action.payload.quest].push(action.payload.state);
      const quesstsExisting = [...state.questsTaken];
      quesstsExisting.push(action.payload.quest);
      return Object.assign({}, state, {
        quests: questsToUpdate,
        questsTaken: quesstsExisting
      });
    case SHOW_QUEST:
      return Object.assign({}, state, {
        activeQuest: action.payload
      });
    case SHOW_MAP:
      return Object.assign({}, state, {
        activeMap: action.payload
      });
    case UPDATE_MAP:
      const mapsToUpdate = [...state.maps];
      if (action.payload.state === "OPEN") {
        mapsToUpdate.push(parseInt(action.payload.map, 0));
      }
      return Object.assign({}, state, { maps: mapsToUpdate });
    default:
      return initialState;
  }
}

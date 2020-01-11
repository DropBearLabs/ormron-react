import {
  DIALOGUE_ACTIVE,
  LEVEL_ACTIVE,
  SHOW_INFOLINE,
  SHOW_QUEST,
  UPDATE_QUEST,
  SHOW_MAP,
  UPDATE_MAP,
  UPDATE_LEVEL,
  NPC_UPDATE
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
  console.log("GSO", state);
  switch (action.type) {
    case LEVEL_ACTIVE:
      return Object.assign({}, state, {
        activeLevel: action.payload
      });
    case DIALOGUE_ACTIVE:
      return Object.assign({}, state, {
        activeDialogue: action.payload != null ? action.payload : null
      });
    case NPC_UPDATE:
      const levelsToUpdate = [...state.levels];
      levelsToUpdate[action.payload.level][action.payload.character] =
        action.payload.state;
      return Object.assign({}, state, { levels: levelsToUpdate });
    case SHOW_INFOLINE:
      return Object.assign({}, state, { infoline: action.payload });
    case UPDATE_QUEST:
      const questsToUpdate = [...state.quests];
      if (!questsToUpdate[action.payload.quest]) {
        console.log("Couldn't find quest here", action.payload.quest);
        questsToUpdate[action.payload.quest] = [];
      }
      console.log("Found a quest", questsToUpdate[action.payload.quest]);
      questsToUpdate[action.payload.quest].push(action.payload.state);
      const quesstsExisting = [...state.questsTaken];
      if (quesstsExisting.indexOf(action.payload.quest) == -1) {
        quesstsExisting.push(action.payload.quest);
      }
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
    case UPDATE_LEVEL:
      const levelsToUpdate1 = [...state.levels];
      levelsToUpdate1[action.payload.level][action.payload.name] =
        action.payload.state;
      return Object.assign({}, state, { levels: levelsToUpdate1 });
    default:
      return initialState;
  }
}

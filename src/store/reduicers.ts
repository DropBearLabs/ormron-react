import {
  DIALOGUE_ACTIVE,
  LEVEL_ACTIVE,
  SHOW_INFOLINE,
  FINISH_QUEST,
  SHOW_QUEST,
  UPDATE_QUEST,
  SHOW_MAP,
  UPDATE_MAP,
  UPDATE_LEVEL,
  NPC_UPDATE,
  SHOW_PARTY,
  UPDATE_PARTY,
  UPDATE_INFLUENCE
} from "../data/Constants";
import { gso } from "../data/Gso";
import { IGso } from "../data/Types";

const initialState: IGso = gso;

export default function GsoReduicer(
  state: IGso | void = initialState,
  action: any
) {
  console.log(state);
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
        questsToUpdate[action.payload.quest] = [];
      }
      questsToUpdate[action.payload.quest].push(action.payload.state);
      const quesstsExisting = [...state.questsTaken];
      if (quesstsExisting.indexOf(action.payload.quest) === -1) {
        quesstsExisting.push(action.payload.quest);
      }
      return Object.assign({}, state, {
        quests: questsToUpdate,
        questsTaken: quesstsExisting
      });
    case FINISH_QUEST:
      const questsToRemove = [...state.questsTaken];
      const completedQuests = [...state.questsCompleted];
      const index = questsToRemove.indexOf(action.payload.quest);
      const completed = questsToRemove.splice(index, 1);
      completedQuests.push(completed[0]);
      return Object.assign({}, state, {
        questsCompleted: completedQuests,
        questsTaken: questsToRemove
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
    case SHOW_PARTY:
      return Object.assign({}, state, {
        partySelection: action.payload
      });
    case UPDATE_PARTY:
      if (action.payload.update === "add") {
        const partyToUpdate1 = [...state.party];
        return Object.assign({}, state, {
          party: partyToUpdate1.push(action.payload.character)
        });
      }
    case UPDATE_INFLUENCE:
      const influenceToChange = { ...state.influence };
      influenceToChange[action.payload.character] += action.payload.num;
      return Object.assign({}, state, {
        influence: influenceToChange
      });
    default:
      return initialState;
  }
}

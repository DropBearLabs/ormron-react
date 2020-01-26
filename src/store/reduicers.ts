import {
  ACTIVE_DIALOGUE,
  LEVEL_ACTIVE,
  SHOW_INFOLINE,
  FINISH_QUEST,
  SHOW_QUEST,
  UPDATE_QUEST,
  ACTIVE_MAP,
  MAP_UPDATE,
  NPC_UPDATE,
  SELECT_PARTY,
  UPDATE_PARTY,
  UPDATE_INFLUENCE,
  OPEN_CONNECTION,
  LEVEL_TIGGERS_CLEAR
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
    case ACTIVE_DIALOGUE:
      return Object.assign({}, state, {
        activeDialogue: action.payload != null ? action.payload : null
      });
    case LEVEL_TIGGERS_CLEAR:
      const levelsToUpdate2 = [...state.levels];
      levelsToUpdate2[action.payload].triggers = [];
      return Object.assign({}, state, { levels: levelsToUpdate2 });
    case NPC_UPDATE:
      const levelsToUpdate = [...state.levels];
      levelsToUpdate[action.payload.level][action.payload.character] =
        action.payload.state;
      return Object.assign({}, state, { levels: levelsToUpdate });
    case SHOW_INFOLINE:
      return Object.assign({}, state, { infoline: action.payload });
    case UPDATE_QUEST:
      console.log("Update me reducer");
      const questsToUpdate = [...state.quests];
      const quesstsExisting = [...state.questsTaken];
      if (!questsToUpdate[action.payload.quest]) {
        questsToUpdate[action.payload.quest] = [];
      }
      questsToUpdate[action.payload.quest].push(action.payload.name);

      if (quesstsExisting.indexOf(action.payload.quest) === -1) {
        quesstsExisting.push(action.payload.quest);
      }

      return Object.assign({}, state, {
        quests: questsToUpdate,
        questsTaken: quesstsExisting
      });
    case OPEN_CONNECTION:
      const levelsToUpdate1 = [...state.levels];
      levelsToUpdate1[action.payload.level][action.payload.entry] = "open";
      return Object.assign({}, state, {
        levels: levelsToUpdate1
      });
    case FINISH_QUEST:
      const questsToRemove = [...state.questsTaken];
      const completed = questsToRemove.splice(action.payload.quest, 1);
      const completedQuests = [...state.questsCompleted];
      completedQuests.push(completed[0]);
      return Object.assign({}, state, {
        questsCompleted: completedQuests,
        questsTaken: questsToRemove
      });
    case SHOW_QUEST:
      return Object.assign({}, state, {
        activeQuest: action.payload
      });
    case ACTIVE_MAP:
      return Object.assign({}, state, {
        activeMap: action.payload
      });
    case MAP_UPDATE:
      const mapsToUpdate = [...state.maps];
      if (action.payload.state === "OPEN") {
        mapsToUpdate.push(parseInt(action.payload.map, 0));
      }
      return Object.assign({}, state, { maps: mapsToUpdate });
    case SELECT_PARTY:
      console.log(action.payload);
      return Object.assign({}, state, {
        selectParty: action.payload
      });
    case UPDATE_PARTY:
      const partyToUpdate = [...state.party];
      if (
        action.payload.update === "add" &&
        partyToUpdate.indexOf(action.payload.character) === -1
      ) {
        return Object.assign({}, state, {
          party: partyToUpdate.concat(action.payload.character)
        });
      }
    case UPDATE_INFLUENCE:
      const influenceToChange = { ...state.influence };
      influenceToChange[action.payload.index] += action.payload.num;
      return Object.assign({}, state, {
        influence: influenceToChange
      });
    default:
      return initialState;
  }
}

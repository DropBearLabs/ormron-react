import {
  ACTIVE_DIALOGUE,
  ACTIVATE_LEVEL,
  SHOW_INFOLINE,
  END_QUEST,
  SHOW_QUESTS,
  UPDATE_QUEST,
  ACTIVE_MAP,
  MAP_UPDATE,
  UPDATE_NPC,
  SELECT_PARTY,
  UPDATE_PARTY,
  UPDATE_INFLUENCE,
  OPEN_CONNECTION,
  ADD_GLOBAL_EVENT,
  SET_PARTY,
  SHOW_CHARACTERS
} from "../data/Constants";
import { gso } from "../data/Gso";
import {
  findQuest,
  npcLevelStatus,
  connectionLevelStatus
} from "../data/helpers";
import { IGso, IGsoQuest, IQuestStep, IGsoInfluence } from "../types/Types";
import { IGsoLevel, ConnectionStatus } from "../types/TypeLevels";
import {
  IPayloadNpcUpdate,
  IPayloadPartyUpdate,
  IPayloadQuestUpdate,
  IPayloadOpenConnection,
  IPayloadUpdateMap,
  IPayloadUpdateInfluence,
  IReturnAction
} from "../types/TypeActions";
import { MainCharacters } from "../types/TypeCharacters";

const npcUpdate = (levelsToUpdate: IGsoLevel[], payload: IPayloadNpcUpdate) => {
  const { level, character, setTo } = payload;
  const levelsAll = levelsToUpdate.map((x: IGsoLevel) => x.id);
  const index = levelsAll.indexOf(level);
  npcLevelStatus(levelsToUpdate[index], character, setTo);
  return levelsToUpdate;
};

const updateParty = (
  partyToUpdate: MainCharacters[],
  payload: IPayloadPartyUpdate
) => {
  const { character, update } = payload;
  const found = partyToUpdate.includes(character);
  if (update === "add" && !found) {
    partyToUpdate.push(character);
  }
  if (update === "remove" && found) {
    const index = partyToUpdate.indexOf(character);
    partyToUpdate.splice(index, 1);
  }
  return partyToUpdate;
};

const questUpdate = (
  questsToUpdate: IGsoQuest[],
  quesstsTaken: string[],
  questsCompleted: string[],
  payload: IPayloadQuestUpdate
) => {
  const { quest, step } = payload;

  const questsAll = questsToUpdate.map((x: IGsoQuest) => x.id);
  const index = questsAll.indexOf(quest);

  const oldState = questsToUpdate[index];
  // If this step is already completed or quest is coompleted - do nothing
  if (
    questsCompleted.indexOf(quest) !== -1 ||
    (oldState && oldState.completedSteps.indexOf(step) !== -1)
  ) {
    return {
      quests: questsToUpdate,
      questsTaken: quesstsTaken
    };
  }

  // If there's no quest with this name - create one;
  if (index === -1) {
    questsToUpdate.push({
      id: quest,
      completedSteps: [],
      nextStep: step
    });
    quesstsTaken.push(quest);

    return {
      quests: questsToUpdate,
      questsTaken: quesstsTaken
    };
  }

  const steps = findQuest(quest).steps.map((x: IQuestStep) => x.event);
  const lastStepIndex = steps.indexOf(oldState.nextStep);
  const newStepIndex = steps.indexOf(step);

  // If this step is not the next step for this quest - do nothing
  if (newStepIndex - 1 !== lastStepIndex) {
    return {
      quests: questsToUpdate,
      questsTaken: quesstsTaken
    };
  }

  // Update the quest and move on
  questsToUpdate[index] = {
    id: quest,
    completedSteps: oldState.completedSteps.concat(oldState.nextStep),
    nextStep: step
  };

  return {
    quests: questsToUpdate,
    questsTaken: quesstsTaken
  };
};

const endQuest = (
  questsTaken: string[],
  questsCompleted: string[],
  questsToUpdate: IGsoQuest[],
  payload: string
) => {
  questsCompleted.push(payload);
  const updatedTaken = questsTaken.filter((q: string) => q !== payload);
  const updatedQuests = questsToUpdate.filter(
    (q: IGsoQuest) => q.id !== payload
  );

  return {
    quests: updatedQuests,
    questsCompleted,
    questsTaken: updatedTaken
  };
};

const openConnection = (
  levelsToUpdate: IGsoLevel[],
  payload: IPayloadOpenConnection
) => {
  const { level, entry } = payload;
  const levelsAll = levelsToUpdate.map((x: IGsoLevel) => x.id);
  const index = levelsAll.indexOf(level);
  connectionLevelStatus(levelsToUpdate[index], entry, ConnectionStatus.open);
  return {
    levels: levelsToUpdate
  };
};

const addGlobalEvent = (globalEvents: string[], payload: string) => {
  const newEvents = globalEvents.concat(payload);
  return newEvents;
};

const updateMap = (mapsToUpdate: string[], payload: IPayloadUpdateMap) => {
  const { map, state } = payload;
  const exists = mapsToUpdate.find((m: string) => map === m);
  if (state === "OPEN" && !exists) {
    mapsToUpdate.push(map);
  }
  if (state === "CLOSE" && exists) {
    const index = mapsToUpdate.indexOf(map);
    mapsToUpdate.slice(index, 1);
  }
  return mapsToUpdate;
};

const updateInfluence = (
  influenceToUpdate: IGsoInfluence,
  payload: IPayloadUpdateInfluence
) => {
  const { character, num } = payload;
  const currentInfluence = influenceToUpdate[character].valueOf();
  const newInfluence = currentInfluence + num;
  influenceToUpdate[character] = newInfluence;
  return influenceToUpdate;
};

const initialState: IGso = gso;

export default function GsoReduicer(
  state: IGso | void = initialState,
  action: IReturnAction
) {
  if (!state) {
    return initialState;
  }
  const levelsToUpdate: IGsoLevel[] = [...state.levels];
  const questsToUpdate: IGsoQuest[] = [...state.quests];
  const quesstsTaken: string[] = [...state.questsTaken];
  const questsCompleted: string[] = [...state.questsCompleted];
  const globalEvents: string[] = [...state.globalEvents];
  const partyToUpdate: MainCharacters[] = [...state.party];
  const influenceToUpdate: IGsoInfluence = { ...state.influence };
  const mapsToUpdate = [...state.maps];

  switch (action.type) {
    case ACTIVATE_LEVEL:
      return Object.assign({}, state, {
        activeLevel: action.payload
      });
    case UPDATE_NPC:
      return Object.assign({}, state, {
        levels: npcUpdate(levelsToUpdate, action.payload as IPayloadNpcUpdate)
      });
    case SHOW_QUESTS:
      return Object.assign({}, state, {
        showQuests: action.payload
      });
    case UPDATE_QUEST:
      return Object.assign(
        {},
        state,
        questUpdate(
          questsToUpdate,
          quesstsTaken,
          questsCompleted,
          action.payload as IPayloadQuestUpdate
        )
      );
    case END_QUEST:
      return Object.assign(
        {},
        state,
        endQuest(
          quesstsTaken,
          questsCompleted,
          questsToUpdate,
          action.payload as string
        )
      );
    case OPEN_CONNECTION:
      return Object.assign(
        {},
        state,
        openConnection(levelsToUpdate, action.payload as IPayloadOpenConnection)
      );
    case ADD_GLOBAL_EVENT:
      return Object.assign({}, state, {
        globalEvents: addGlobalEvent(globalEvents, action.payload as string)
      });
    case ACTIVE_DIALOGUE:
      return Object.assign({}, state, {
        showDialogue: action.payload != null ? action.payload : null
      });
    case UPDATE_PARTY:
      return Object.assign({}, state, {
        party: updateParty(partyToUpdate, action.payload as IPayloadPartyUpdate)
      });
    case SELECT_PARTY:
      return Object.assign({}, state, {
        showParty: action.payload != null ? action.payload : null
      });
    case SET_PARTY:
      return Object.assign({}, state, {
        setParty: action.payload as any
      });
    case UPDATE_INFLUENCE:
      return Object.assign({}, state, {
        influence: updateInfluence(
          influenceToUpdate,
          action.payload as IPayloadUpdateInfluence
        )
      });
    case SHOW_CHARACTERS:
      return Object.assign({}, state, { showCharacters: action.payload });
    case ACTIVE_MAP:
      return Object.assign({}, state, {
        showMap: action.payload
      });
    case MAP_UPDATE:
      return Object.assign({}, state, {
        maps: updateMap(mapsToUpdate, action.payload as IPayloadUpdateMap)
      });
    /* not refactored */
    case SHOW_INFOLINE:
      return Object.assign({}, state, { infoline: action.payload });
    default:
      return initialState;
  }
}

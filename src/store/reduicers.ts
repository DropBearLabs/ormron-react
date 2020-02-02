import {
  ACTIVE_DIALOGUE,
  ACTIVATE_LEVEL,
  SHOW_INFOLINE,
  END_QUEST,
  SHOW_QUEST,
  UPDATE_QUEST,
  ACTIVE_MAP,
  MAP_UPDATE,
  UPDATE_NPC,
  SELECT_PARTY,
  UPDATE_PARTY,
  UPDATE_INFLUENCE,
  OPEN_CONNECTION,
  ADD_GLOBAL_EVENT,
  SET_PARTY
} from "../data/Constants";
import { gso } from "../data/Gso";
import {
  IGso,
  IGsoLevel,
  IGsoQuest,
  IQuestStep,
  IAction,
  IPayload,
  IPayloadNpcUpdate,
  IPayloaQuestUpdate,
  IPayloadOpenConnection,
  IPayloadPartyUpdate,
  IGsoInfluence,
  IPayloadUpdateInfluence,
  IGsoParty
} from "../data/Types";
import { findQuest } from "../data/helpers";

const npcUpdate = (levelsToUpdate: IGsoLevel[], payload: IPayloadNpcUpdate) => {
  const { level, character, setTo } = payload;
  const levelsAll = levelsToUpdate.map((x: IGsoLevel) => x.id);
  const index = levelsAll.indexOf(level);
  // @ts-ignore
  levelsToUpdate[index].npcs[character] = setTo;
  return levelsToUpdate;
};

const updateParty = (partyToUpdate: string[], payload: IPayloadPartyUpdate) => {
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
  payload: IPayloaQuestUpdate
) => {
  const { quest, step } = payload;
  const questsAll = questsToUpdate.map((x: IGsoQuest) => x.id);
  const index = questsAll.indexOf(quest);
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

  const oldState = questsToUpdate[index];

  // If this tep is already completed - do nothing
  if (oldState.completedSteps.indexOf(step) !== -1) {
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
  //@ts-ignore
  levelsToUpdate[index].connections[entry] = "open";
  return {
    levels: levelsToUpdate
  };
};

const addGlobalEvent = (globalEvents: string[], payload: string) => {
  const newEvents = globalEvents.concat(payload);
  return newEvents;
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
  action: { type: IAction; payload: IPayload }
) {
  if (!state) {
    return initialState;
  }
  const levelsToUpdate: IGsoLevel[] = [...state.levels];
  const questsToUpdate: IGsoQuest[] = [...state.quests];
  const quesstsTaken: string[] = [...state.questsTaken];
  const questsCompleted: string[] = [...state.questsCompleted];
  const globalEvents: string[] = [...state.globalEvents];
  const partyToUpdate: string[] = [...state.party];
  const influenceToUpdate: IGsoInfluence = { ...state.influence };

  switch (action.type) {
    case ACTIVATE_LEVEL:
      return Object.assign({}, state, {
        activeLevel: action.payload
      });
    case UPDATE_NPC:
      return Object.assign({}, state, {
        levels: npcUpdate(levelsToUpdate, action.payload as IPayloadNpcUpdate)
      });
    case UPDATE_QUEST:
      return Object.assign(
        {},
        state,
        questUpdate(
          questsToUpdate,
          quesstsTaken,
          action.payload as IPayloaQuestUpdate
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
        activeDialogue: action.payload != null ? action.payload : null
      });
    case UPDATE_PARTY:
      return Object.assign({}, state, {
        party: updateParty(partyToUpdate, action.payload as IPayloadPartyUpdate)
      });
    case SELECT_PARTY:
      return Object.assign({}, state, {
        selectParty: action.payload != null ? action.payload : null
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
    case ACTIVE_MAP:
      return Object.assign({}, state, {
        activeMap: action.payload
      });
    case SHOW_QUEST:
      return Object.assign({}, state, {
        activeQuest: action.payload
      });
    /* not refactored */
    case SHOW_INFOLINE:
      return Object.assign({}, state, { infoline: action.payload });
    case MAP_UPDATE:
      const mapsToUpdate = [...state.maps];
      // if (action.payload.state === "OPEN") {
      //   mapsToUpdate.push(parseInt(action.payload.map, 0));
      // }
      return Object.assign({}, state, { maps: mapsToUpdate });
    default:
      return initialState;
  }
}

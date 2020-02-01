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
  LEVEL_TIGGERS_CLEAR,
  ADD_GLOBAL_EVENT
} from "../data/Constants";
import { gso } from "../data/Gso";
import { IGso, IGsoLevel, IGsoQuest, IQuestStep } from "../data/Types";
import { findQuest } from "../data/helpers";

const npcUpdate = (
  levelsToUpdate: IGsoLevel[],
  payload: { level: string; character: string; setTo: number | false }
) => {
  const { level, character, setTo } = payload;
  const levelsAll = levelsToUpdate.map((x: IGsoLevel) => x.id);
  const index = levelsAll.indexOf(level);
  // @ts-ignore
  levelsToUpdate[index][character] = setTo;
  return levelsToUpdate;
};

const questUpdate = (
  questsToUpdate: IGsoQuest[],
  quesstsTaken: string[],
  payload: { quest: string; step: string }
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
  payload: { level: string; entry: string }
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

const initialState: IGso = gso;

export default function GsoReduicer(
  state: IGso | void = initialState,
  action: any
) {
  if (!state) {
    return initialState;
  }
  const levelsToUpdate: IGsoLevel[] = [...state.levels];
  const questsToUpdate: IGsoQuest[] = [...state.quests];
  const quesstsTaken: string[] = [...state.questsTaken];
  const questsCompleted: string[] = [...state.questsCompleted];
  const globalEvents: string[] = [...state.globalEvents];
  switch (action.type) {
    case ACTIVATE_LEVEL:
      return Object.assign({}, state, {
        activeLevel: action.payload
      });
    case UPDATE_NPC:
      return Object.assign({}, state, {
        levels: npcUpdate(levelsToUpdate, action.payload)
      });
    case UPDATE_QUEST:
      return Object.assign(
        {},
        state,
        questUpdate(questsToUpdate, quesstsTaken, action.payload)
      );
    case END_QUEST:
      return Object.assign(
        {},
        state,
        endQuest(quesstsTaken, questsCompleted, questsToUpdate, action.payload)
      );
    case OPEN_CONNECTION:
      return Object.assign(
        {},
        state,
        openConnection(levelsToUpdate, action.payload)
      );
    case ADD_GLOBAL_EVENT:
      return Object.assign({}, state, {
        globalEvents: addGlobalEvent(globalEvents, action.payload)
      });
    case ACTIVE_DIALOGUE:
      return Object.assign({}, state, {
        activeDialogue: action.payload != null ? action.payload : null
      });
    case SELECT_PARTY:
      return Object.assign({}, state, {
        selectParty: action.payload
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
    case LEVEL_TIGGERS_CLEAR:
      // const levelsToUpdate2 = [...state.levels];
      // levelsToUpdate2[action.payload].triggers = [];
      // return Object.assign({}, state, { levels: levelsToUpdate2 });
      break;
    case SHOW_INFOLINE:
      return Object.assign({}, state, { infoline: action.payload });
    case MAP_UPDATE:
      const mapsToUpdate = [...state.maps];
      if (action.payload.state === "OPEN") {
        mapsToUpdate.push(parseInt(action.payload.map, 0));
      }
      return Object.assign({}, state, { maps: mapsToUpdate });
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
      break;
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

import {
  findQuest,
  npcLevelStatus,
  connectionLevelStatus
} from "../data/helpers";
import {
  IPayloadNpcUpdate,
  IPayloadPartyUpdate,
  IPayloadQuestUpdate,
  IPayloadOpenConnection,
  IPayloadUpdateMap,
  IPayloadUpdateInfluence
} from "../types/TypeActions";
import { IGsoLevel, ConnectionStatus } from "../types/TypeLevels";
import { MainCharacters } from "../types/TypeCharacters";
import { IGsoQuest, IQuestStep, IGsoInfluence } from "../types/Types";

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

const generateFightField = (opponentsSet: string) => {};

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

export default {
  npcUpdate,
  updateParty,
  questUpdate,
  generateFightField,
  endQuest,
  openConnection,
  addGlobalEvent,
  updateMap,
  updateInfluence
};

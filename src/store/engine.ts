import {
  findQuest,
  npcLevelStatus,
  connectionLevelStatus,
  getRandomInt,
  findEnemiesFromSet,
  findCellSubject,
  pointsInclude
} from "../data/helpers";
import {
  IPayloadNpcUpdate,
  IPayloadPartyUpdate,
  IPayloadQuestUpdate,
  IPayloadOpenConnection,
  IPayloadUpdateMap,
  IPayloadUpdateInfluence,
  IPayloadPoints
} from "../types/TypeActions";
import { IGsoLevel, ConnectionStatus } from "../types/TypeLevels";
import {
  MainCharacters,
  IGsoParty,
  ICharactersData,
  ICharacterData
} from "../types/TypeCharacters";
import { IGsoQuest, IQuestStep, IGsoInfluence, IPoint } from "../types/Types";
import { IField, ISubject } from "../types/TypesFights";
import { checkMove } from "../fightengine";

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

const generateFightField = (
  opponentsSet: string,
  party: IGsoParty,
  characters: ICharactersData
) => {
  const enemies = findEnemiesFromSet(opponentsSet);
  const heroes = Object.values(characters).filter(
    (c: ICharacterData) => party[c.id]
  );
  const field: IField = {
    positions: [],
    heroes,
    enemies,
    active: { id: undefined, type: "empty" },
    action: null,
    highlighted: []
  };

  heroes.forEach(h => {
    let x = 0;
    let y = 0;
    do {
      x = getRandomInt(4);
      y = getRandomInt(4);
    } while (findCellSubject(field, { x, y }).type !== "empty");
    const subject: ISubject = { type: "character", id: h.id };
    field.positions.push({ coordinates: { x, y }, subject });
  });

  enemies.forEach(e => {
    let x = 4;
    let y = 0;
    do {
      x = getRandomInt(3) + x;
      y = getRandomInt(4);
    } while (findCellSubject(field, { x, y }).type !== "empty");
    const subject: ISubject = { type: "enemy", id: e.id };
    field.positions.push({ coordinates: { x, y }, subject });
  });
  console.log("field", field);
  return field;
};

const fightCharacterSelected = (field: IField, coord: IPoint) => {
  const subject = findCellSubject(field, coord);
  if (!subject) {
    throw "You can't select an empty cell as a character";
  }
  field.active = subject;
  return field;
};

const fightCharacterPossibleMoves = (field: IField, coord: IPoint) => {
  const moves = [
    { x: coord.x - 1, y: coord.y },
    { x: coord.x + 1, y: coord.y },
    { x: coord.x, y: coord.y - 1 },
    { x: coord.x, y: coord.y + 1 }
  ];
  const allowed = moves.filter(f => checkMove(field, coord, f) === true);
  field.highlighted = allowed;
  return field;
};

const fightCharacterMove = (field: IField, coord: IPoint) => {
  if (!pointsInclude(field.highlighted, coord)) {
    throw "This move is not allowed";
  }

  const positionFrom = field.positions.find(
    p => p.subject.type === "character" && p.subject.id === field.active.id
  );
  if (!positionFrom) {
    throw "This position doesn't exist";
  }
  positionFrom.coordinates = coord;
  field.highlighted = [];
  return field;
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
  updateInfluence,
  fightCharacterSelected,
  fightCharacterPossibleMoves,
  fightCharacterMove
};

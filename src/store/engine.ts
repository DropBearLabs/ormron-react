import {
  findQuest,
  npcLevelStatus,
  connectionLevelStatus,
  getRandomInt,
  findCellSubject,
  pointsInclude,
  findSpell,
  findCharacterCoord,
  findAffectedEnemies,
  findPartyMember
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
import {
  MainCharacters,
  IGsoParty,
  ICharactersData,
  ICharacterData,
  Spells,
  ISpell
} from "../types/TypeCharacters";
import { IGsoQuest, IQuestStep, IGsoInfluence, IPoint } from "../types/Types";
import { IField, ISubject, ICastCell } from "../types/TypesFights";
import { checkMove, calculateAttack } from "../fightengine";
import { enemySets } from "../data/Opponents";

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

const changeRound = (field: IField, characters: ICharactersData) => {
  field.positions.map(p => (p.subject.state = "active"));
  field.active = { id: undefined, type: "empty", state: null };
  field.heroes.forEach(h => {
    const characterData = characters[h.id];
    if (h.mana < characterData.mana) {
      h.mana++;
    }
  });
  field.round = field.round + 1;
  return field;
};

const applyActions = (field: IField, characters: ICharactersData) => {
  console.log("APPLYING ACTIONS");
  console.log(field.turnActions);
  field.turnActions.forEach(a => {
    if (a.cast.length > 0) {
      const character = field.heroes.find(c => c.id === a.subject.subject.id);
      if (!character) {
        throw new Error("Invalid attack, no character");
      }
      a.cast.forEach(c => {
        const enemy = field.enemies.find(
          e => e.id === c.subject.id && e.key === c.subject.key
        );
        if (!enemy) {
          throw new Error("Invalid attack, no enemy");
        }
        const attack = calculateAttack(
          a.spell.points_physical,
          a.spell.points_magical,
          [],
          enemy.alterations,
          null,
          character.element,
          enemy.element
        );

        // Apply changed to the enemy
        enemy.life = enemy.life - attack[2];
      });

      //TODO apply the character effect changes if required
    }
  });

  //TODO changes for the character (healing f.e)

  field.enemies.forEach(e => {
    if (e.life <= 0) {
      const enemyPos = field.positions.find(
        p => e.id === p.subject.id && e.key === p.subject.key
      );
      if (!enemyPos) {
        throw new Error("You killed the enemy that had no position");
      }
      field.positions = field.positions.filter(
        p =>
          p.coordinates.x !== enemyPos.coordinates.x ||
          p.coordinates.y !== enemyPos.coordinates.y
      );
    }
  });

  field.enemies = field.enemies.filter(e => e.life > 0);
  field.turnActions = [];
  field.stage = "hero_select";
  // HACK to allow only characters act for now
  changeRound(field, characters);
};

const changeTurn = (field: IField, characters: ICharactersData) => {
  if (field.stage === "hero_select") {
    const nextCharacters = field.positions.filter(
      p =>
        p.subject.state !== "defended" &&
        p.subject.state !== "casted" &&
        p.subject.type === "character"
    );
    if (nextCharacters.length === 0) {
      console.log("ALL CHARACTERS ACTED");
      field.stage = "hero_act";
      applyActions(field, characters);
    } else {
      fightCharacterSelected(field, nextCharacters[0].coordinates);
    }
  }
};

const generateFightField = (
  opponentsSet: string,
  party: IGsoParty,
  characters: ICharactersData
) => {
  const enemies = enemySets(opponentsSet);
  const heroes = JSON.parse(
    JSON.stringify(
      Object.values(characters).filter((c: ICharacterData) => party[c.id])
    )
  );
  const field: IField = {
    positions: [],
    heroes,
    enemies,
    active: { id: undefined, type: "empty", state: null },
    turnActions: [],
    highlighted: [],
    round: 0,
    stage: "hero_select"
  };

  heroes.forEach((h: ICharacterData) => {
    let x = 0;
    let y = 0;
    do {
      x = getRandomInt(4);
      y = getRandomInt(4);
    } while (findCellSubject(field, { x, y }).type !== "empty");
    const subject: ISubject = { type: "character", id: h.id, state: "active" };
    field.positions.push({ coordinates: { x, y }, subject });
  });

  enemies.forEach(e => {
    let x = 0;
    let y = 0;
    do {
      x = getRandomInt(3) + 4;
      y = getRandomInt(4);
    } while (findCellSubject(field, { x, y }).type !== "empty");
    const subject: ISubject = {
      type: "enemy",
      id: e.id,
      key: e.key,
      state: "active"
    };
    field.positions.push({ coordinates: { x, y }, subject });
  });
  return field;
};

const fightCharacterSelected = (field: IField, coord: IPoint) => {
  console.log("fightCharacterSelected");
  const subject = findCellSubject(field, coord);
  if (!subject) {
    throw "You can't select an empty cell as a character";
  }
  field.highlighted = [];
  field.active = subject;

  return field;
};

const fightCharacterPossibleMoves = (field: IField, coord: IPoint) => {
  console.log("fightCharacterPossibleMoves");
  if (field.active.state === "active") {
    const moves = [
      { x: coord.x - 1, y: coord.y },
      { x: coord.x + 1, y: coord.y },
      { x: coord.x, y: coord.y - 1 },
      { x: coord.x, y: coord.y + 1 }
    ];
    const allowed = moves.filter(
      f => checkMove(field, coord, f, field.active.type) === true
    );
    field.highlighted = allowed;
  }

  return field;
};

const fightCharacterMove = (field: IField, coord: IPoint) => {
  console.log("fightCharacterMove");
  if (field.active.state !== "active") {
    throw "You can't move your state is incorrect";
  }
  if (!pointsInclude(field.highlighted, coord)) {
    throw "This move is not allowed";
  }

  const positionFrom = field.positions.find(p => {
    if (p.subject.type === "character") {
      return p.subject.id === field.active.id;
    }
    if (p.subject.type === "enemy" && p.subject.key === field.active.key) {
      return p.subject.id === field.active.id;
    }
    return false;
  });
  if (!positionFrom) {
    throw "This position doesn't exist";
  }
  field.active.state = "moved";

  positionFrom.coordinates = coord;
  field.highlighted = [];

  return field;
};

const fightCharacterActs = (field: IField, spellId: Spells) => {
  console.log("fightCharacterActs");
  if (field.active.state !== "active" && field.active.state !== "moved") {
    throw "You can't move your state is incorrect";
  }
  field.highlighted = [];
  const character = findCharacterCoord(field);
  const spell = findSpell(spellId);

  field.highlighted = spell.area.map(s => ({
    x: character.coordinates.x + s.x,
    y: character.coordinates.y + s.y
  }));

  return field;
};

const fightCharacterSpell = (
  field: IField,
  characters: ICharactersData,
  spellId: Spells
) => {
  console.log("fightCharacterSpell", spellId);
  if (field.active.state !== "active" && field.active.state !== "moved") {
    throw "You can't move your state is incorrect";
  }
  const character = findCharacterCoord(field);
  let spell: ISpell | undefined;
  if (character.subject.type === "empty") {
    throw new Error("You are trying to act with no character");
  }
  const actingCharacter =
    character.subject.type === "character"
      ? field.heroes.find(c => c.id === character.subject.id)
      : field.enemies.find(
          e => e.id === character.subject.id && e.key === character.subject.key
        );
  if (!actingCharacter) {
    throw new Error("There is no active character");
  }
  if (character.subject.type === "character") {
    const characterData = characters[character.subject.id];
    spell = characterData.spells.find(s => s.id === spellId);
    if (typeof spell === "undefined") {
      throw new Error("The character doesn't have this spell");
    }
    if (spell.price) {
      if (actingCharacter.mana - spell.price > 0) {
        actingCharacter.mana = actingCharacter.mana - spell.price;
      } else {
        console.warn("Not enough mana");
        return field;
      }
    }
  }

  if (character.subject.type === "enemy") {
    spell = actingCharacter.spells.find(s => s.id === spellId);
    if (typeof spell === "undefined") {
      throw new Error("The character doesn't have this spell");
    }
  }
  if (typeof spell === "undefined") {
    throw new Error("The character doesn't have this spell");
  }

  const cast: ICastCell[] = findAffectedEnemies(field);
  const subject: ICastCell = {
    subject: field.active,
    position: findCharacterCoord(field).coordinates
  };

  field.active.state = "casted";
  field.turnActions.push({
    subject,
    spell,
    cast
  });

  field.highlighted = [];
  changeTurn(field, characters);
  return field;
};

const fightCharacterDefend = (field: IField) => {
  console.log("fightCharacterDefend");
  if (field.active.state !== "active") {
    throw "You can't move your state is incorrect";
  }
  field.active.state = "defended";
  // TODO apply the efect to the active character

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
  fightCharacterMove,
  fightCharacterActs,
  fightCharacterSpell,
  fightCharacterDefend
};

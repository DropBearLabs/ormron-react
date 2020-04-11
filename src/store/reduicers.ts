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
  SHOW_CHARACTERS,
  SHOW_FIGHT,
  FIGHT_CHARACTER_SELECTED,
  FIGHT_CHARACTER_POSSIBLE_MOVES
} from "../data/Constants";
import { gso } from "../data/Gso";
import { IGso, IGsoQuest, IGsoInfluence, IPoint } from "../types/Types";
import { IGsoLevel } from "../types/TypeLevels";
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
import engine from "../store/engine";
import { IFightCell, IField } from "../types/TypesFights";

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
        levels: engine.npcUpdate(
          levelsToUpdate,
          action.payload as IPayloadNpcUpdate
        )
      });
    case SHOW_QUESTS:
      return Object.assign({}, state, {
        showQuests: action.payload
      });
    case UPDATE_QUEST:
      return Object.assign(
        {},
        state,
        engine.questUpdate(
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
        engine.endQuest(
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
        engine.openConnection(
          levelsToUpdate,
          action.payload as IPayloadOpenConnection
        )
      );
    case ADD_GLOBAL_EVENT:
      return Object.assign({}, state, {
        globalEvents: engine.addGlobalEvent(
          globalEvents,
          action.payload as string
        )
      });
    case ACTIVE_DIALOGUE:
      return Object.assign({}, state, {
        showDialogue: action.payload != null ? action.payload : null
      });
    case UPDATE_PARTY:
      return Object.assign({}, state, {
        party: engine.updateParty(
          partyToUpdate,
          action.payload as IPayloadPartyUpdate
        )
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
        influence: engine.updateInfluence(
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
        maps: engine.updateMap(
          mapsToUpdate,
          action.payload as IPayloadUpdateMap
        )
      });
    /* FIGHTING */
    case SHOW_FIGHT:
      return Object.assign({}, state, {
        showFight: true,
        fightField: engine.generateFightField(
          action.payload as string,
          state.setParty,
          state.charactersData
        )
      });
    case FIGHT_CHARACTER_SELECTED:
      console.log("state.fightField", state.fightField);
      return Object.assign({}, state, {
        fightField: engine.fightCharacterSelected(
          state.fightField as IField,
          (action.payload as unknown) as IPoint
        )
      });
    case FIGHT_CHARACTER_POSSIBLE_MOVES:
      return Object.assign({}, state, {
        fightField: engine.fightCharacterPossibleMoves(
          state.fightField as IField,
          (action.payload as unknown) as IPoint
        )
      });
    /* not refactored */
    case SHOW_INFOLINE:
      return Object.assign({}, state, { infoline: action.payload });
    default:
      return initialState;
  }
}

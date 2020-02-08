import { IGso } from "../types/Types";
import { ConnectionStatus } from "../types/TypeLevels";
import { MainCharacters } from "../types/TypeActions";
//AFTER Tutorial
//*

export const gso: IGso = {
  chapter: 0,
  activeDialogue: null,
  activeLevel: "ormron_street",
  activeQuest: null,
  activeMap: null,
  infoline: null,
  globalEvents: [],
  levels: [
    {
      id: "ormron_street",
      npcs: {
        npc_Olija: 0,
        npc_Dario: false,
        char_Maya: undefined
      },
      connections: {
        street_to_garden: ConnectionStatus.closed,
        street_to_arena: ConnectionStatus.closed,
        street_to_map: ConnectionStatus.closed
      }
    },
    {
      id: "ormron_arena",
      npcs: {
        npc_Dario1: 5
      },
      connections: {
        arena_to_street: ConnectionStatus.open
      }
    },
    {
      id: "ormron_garden",
      npcs: {
        char_Tara: false,
        char_Nell: undefined
      },
      connections: {
        garden_to_street: ConnectionStatus.open,
        garden_to_gazebo: ConnectionStatus.closed,
        garden_to_school: ConnectionStatus.closed
      }
    }
  ],
  quests: [],
  questsCompleted: [],
  maps: ["ormron_streets"],
  questsTaken: [],
  party: ["maya"],
  selectParty: null,
  setParty: {
    maya: true,
    tara: false,
    grey: false,
    dart: false,
    nell: false
  },
  influence: {
    [MainCharacters.nell]: 0,
    [MainCharacters.dart]: 0,
    [MainCharacters.tara]: 0,
    [MainCharacters.grey]: 0,
    [MainCharacters.maya]: 0
  }
};
//*/

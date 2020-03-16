import { IGso } from "../types/Types";
import { ConnectionStatus } from "../types/TypeLevels";
import { MainCharacters, Spells } from "../types/TypeCharacters";

export const gso: IGso = {
  showDialogue: null,
  showCharacters: false,
  showQuests: null,
  showMap: null,
  showParty: null,
  chapter: 0,
  infoline: null,
  activeLevel: "ormron_street",
  globalEvents: [],
  levels: [
    {
      id: "ormron_street",
      npcs: {
        npc_Olija: 0,
        npc_Dario: null,
        char_Maya: false
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
        char_Tara: null,
        char_Nell: false,
        npc_AmuletGirl: null
      },
      connections: {
        garden_to_street: ConnectionStatus.open,
        garden_to_gazebo: ConnectionStatus.closed,
        garden_to_school: ConnectionStatus.closed
      }
    },
    {
      id: "ormron_gazebo",
      npcs: {
        char_Grey: null,
        npc_SchoolGirl: null
      },
      connections: {
        gazebo_to_garden: ConnectionStatus.open
      }
    }
  ],
  quests: [],
  questsCompleted: [],
  maps: ["ormron_streets"],
  questsTaken: [],
  party: [MainCharacters.maya],
  setParty: {
    [MainCharacters.maya]: true,
    [MainCharacters.tara]: false,
    [MainCharacters.grey]: false,
    [MainCharacters.dart]: false,
    [MainCharacters.nell]: false
  },
  influence: {
    [MainCharacters.nell]: 0,
    [MainCharacters.dart]: 0,
    [MainCharacters.tara]: 0,
    [MainCharacters.grey]: 0,
    [MainCharacters.maya]: 0
  },
  charactersData: {
    [MainCharacters.maya]: {
      id: MainCharacters.maya,
      life: 12,
      mana: 15,
      attack_physical: 2,
      attack_magic: 4,
      spells: [
        {
          id: Spells.maya_healSelf,
          taken: true,
          available: true
        },
        {
          id: Spells.maya_attackSimple,
          taken: true,
          available: true
        },
        {
          id: Spells.maya_reinforce,
          taken: false,
          available: false
        },
        {
          id: Spells.maya_heal1,
          taken: false,
          available: false
        },
        {
          id: Spells.maya_attackMagic,
          taken: false,
          available: false
        },
        {
          id: Spells.maya_heal3,
          taken: false,
          available: false
        },
        {
          id: Spells.maya_attackStun,
          taken: false,
          available: false
        },
        {
          id: Spells.maya_attackPush,
          taken: false,
          available: false
        },
        {
          id: Spells.maya_dispell,
          taken: false,
          available: false
        },
        {
          id: Spells.maya_earthquake,
          taken: false,
          available: false
        },
        {
          id: Spells.maya_resurrect,
          taken: false,
          available: false
        },
        {
          id: Spells.maya_quickSand,
          taken: false,
          available: false
        },
        {
          id: Spells.maya_chamber,
          taken: false,
          available: false
        }
      ]
    },
    [MainCharacters.nell]: {
      id: MainCharacters.nell,
      life: 13,
      mana: 13,
      attack_physical: 4,
      attack_magic: 2,
      spells: []
    },
    [MainCharacters.dart]: {
      id: MainCharacters.dart,
      life: 12,
      mana: 15,
      attack_physical: 2,
      attack_magic: 4,
      spells: []
    },
    [MainCharacters.tara]: {
      id: MainCharacters.tara,
      life: 14,
      mana: 10,
      attack_physical: 4,
      attack_magic: 2,
      spells: [
        {
          id: Spells.tara_attack1,
          taken: true,
          available: true
        },
        {
          id: Spells.tara_attack2a,
          taken: false,
          available: false
        },
        {
          id: Spells.tara_attack2b,
          taken: false,
          available: false
        },
        {
          id: Spells.tara_bleed,
          taken: false,
          available: false
        },
        {
          id: Spells.tara_attack3a,
          taken: false,
          available: false
        },
        {
          id: Spells.tara_attack3b,
          taken: false,
          available: false
        },
        {
          id: Spells.tara_will,
          taken: false,
          available: false
        },
        {
          id: Spells.tara_pare,
          taken: false,
          available: false
        },
        {
          id: Spells.tara_pull,
          taken: false,
          available: false
        },
        {
          id: Spells.tara_push,
          taken: false,
          available: false
        },
        {
          id: Spells.tara_finish,
          taken: false,
          available: false
        }
      ]
    },
    [MainCharacters.grey]: {
      id: MainCharacters.grey,
      life: 12,
      mana: 15,
      attack_physical: 2,
      attack_magic: 4,
      spells: []
    }
  }
};
//*/

import { IGso } from "../types/Types";
import { ConnectionStatus } from "../types/TypeLevels";
import {
  MainCharacters,
  Spells,
  Elements,
  Alterations
} from "../types/TypeCharacters";

export const gso: IGso = {
  showDialogue: null,
  showCharacters: false,
  showQuests: null,
  showMap: null,
  showParty: null,
  showFight: false,
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
        enemy_Snake1: "Fight_sandEasy1",
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
        npc_SchoolGirl: 40
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
  party: [MainCharacters.maya, MainCharacters.dart, MainCharacters.nell],
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
      mana: 5,
      element: Elements.earth,
      alterations: [],
      spells: [
        {
          id: Spells.maya_healSelf,
          taken: true,
          available: true,
          type: "heal",
          points_magical: 3,
          points_physical: 0,
          price: 3
        },
        {
          id: Spells.maya_attackSimple,
          taken: true,
          available: true,
          type: "attack",
          points_magical: 0,
          points_physical: 5
        },
        {
          id: Spells.maya_heal1,
          taken: true,
          available: true,
          type: "heal",
          points_magical: 3,
          points_physical: 0
        },
        {
          id: Spells.maya_attackMagic,
          taken: true,
          available: true,
          type: "attack",
          points_magical: 4,
          points_physical: 0,
          price: 3
        },
        {
          id: Spells.maya_attackStun,
          taken: true,
          available: true,
          type: "attack",
          points_magical: 4,
          points_physical: 2,
          price: 3,
          effects: [{ effect: Alterations.Numb, precent: 30 }]
        }
        /*
        {
          id: Spells.maya_reinforce,
          taken: false,
          available: false
        },
        {
          id: Spells.maya_heal3,
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
        }*/
      ]
    },
    [MainCharacters.nell]: {
      id: MainCharacters.nell,
      life: 13,
      mana: 3,
      element: Elements.fire,
      alterations: [],
      spells: [
        {
          id: Spells.nell_fireFist,
          taken: true,
          available: true,
          type: "attack",
          points_magical: 3,
          points_physical: 3,
          price: 3
        },
        {
          id: Spells.nell_doubleTap,
          taken: true,
          available: true,
          type: "attack",
          points_magical: 3,
          points_physical: 1,
          price: 3
        },
        {
          id: Spells.nell_cross,
          taken: true,
          available: true,
          type: "attack",
          points_magical: 0,
          points_physical: 4
        },
        {
          id: Spells.nell_fireRain,
          taken: true,
          available: true,
          type: "attack",
          points_magical: 2,
          points_physical: 4,
          price: 4
        },
        {
          id: Spells.nell_intoCorner,
          taken: true,
          available: true,
          type: "attack",
          points_magical: 2,
          points_physical: 2,
          price: 2,
          effects: [{ effect: Alterations.Numb, precent: 30 }]
        }
        /*
        {
          id: Spells.nell_fireBall,
          taken: false,
          available: false
        },
        {
          id: Spells.nell_forestFire,
          taken: false,
          available: false
        },
        {
          id: Spells.nell_protect,
          taken: false,
          available: false
        },
        {
          id: Spells.nell_protect2,
          taken: false,
          available: false
        },
        {
          id: Spells.nell_berserker,
          taken: false,
          available: false
        },
        {
          id: Spells.nell_burn,
          taken: false,
          available: false
        },
        {
          id: Spells.nell_fireWall,
          taken: false,
          available: false
        }*/
      ]
    },
    [MainCharacters.dart]: {
      id: MainCharacters.dart,
      life: 12,
      mana: 6,
      element: Elements.water,
      alterations: [],
      spells: [
        {
          id: Spells.dart_wave,
          taken: true,
          available: true,
          type: "attack",
          points_magical: 1,
          points_physical: 3,
          price: 1
        },
        {
          id: Spells.dart_icePick,
          taken: true,
          available: true,
          type: "attack",
          points_magical: 3,
          points_physical: 1,
          price: 2
        },
        {
          id: Spells.dart_deepWater,
          taken: true,
          available: true,
          type: "attack",
          points_magical: 2,
          points_physical: 2,
          price: 2
        },
        {
          id: Spells.dart_whirPool,
          taken: true,
          available: true,
          type: "attack",
          points_magical: 2,
          points_physical: 2,
          price: 2,
          effects: [{ effect: Alterations.Blinded, precent: 30 }]
        }
        /*
        {
          id: Spells.dart_ripCurl,
          taken: false,
          available: false
        },
        {
          id: Spells.dart_blizzard,
          taken: false,
          available: false
        },
        {
          id: Spells.dart_drown,
          taken: false,
          available: false
        },
        {
          id: Spells.dart_tsunami,
          taken: false,
          available: false
        },
        {
          id: Spells.dart_fear,
          taken: false,
          available: false
        },
        {
          id: Spells.dart_soulCatcher,
          taken: false,
          available: false
        },
        {
          id: Spells.dart_frostBite,
          taken: false,
          available: false
        },
        {
          id: Spells.dart_iceberg,
          taken: false,
          available: false
        }*/
      ]
    },
    [MainCharacters.tara]: {
      id: MainCharacters.tara,
      life: 14,
      mana: 3,
      element: Elements.metal,
      alterations: [],
      spells: [
        {
          id: Spells.tara_attack1,
          taken: true,
          available: true,
          type: "attack",
          points_magical: 0,
          points_physical: 4
        },
        {
          id: Spells.tara_attack2a,
          taken: true,
          available: true,
          type: "attack",
          points_magical: 0,
          points_physical: 4
        },
        {
          id: Spells.tara_attack2b,
          taken: true,
          available: true,
          type: "attack",
          points_magical: 2,
          points_physical: 3,
          price: 2
        },
        {
          id: Spells.tara_bleed,
          taken: true,
          available: true,
          type: "attack",
          points_magical: 0,
          points_physical: 4,
          effects: [{ effect: Alterations.Panicing, precent: 30 }] //Replace with Bleed
        }
        /*
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
        }*/
      ]
    },
    [MainCharacters.grey]: {
      id: MainCharacters.grey,
      life: 12,
      mana: 8,
      element: Elements.air,
      alterations: [],
      spells: [
        {
          id: Spells.grey_blast,
          taken: true,
          available: true,
          type: "attack",
          points_magical: 2,
          points_physical: 2,
          price: 2
        },
        {
          id: Spells.grey_numb,
          taken: true,
          available: true,
          type: "attack",
          points_magical: 3,
          points_physical: 1,
          price: 2,
          effects: [{ effect: Alterations.Numb, precent: 30 }]
        },
        {
          id: Spells.grey_soundWave,
          taken: true,
          available: true,
          type: "attack",
          points_magical: 2,
          points_physical: 2,
          price: 2
        },
        {
          id: Spells.grey_poison,
          taken: true,
          available: true,
          type: "attack",
          points_magical: 1,
          points_physical: 1,
          price: 2,
          effects: [{ effect: Alterations.Frightened, precent: 30 }] // Replace with poison
        }
        /*
        {
          id: Spells.grey_pullIn,
          taken: false,
          available: false
        },
        {
          id: Spells.grey_toxin,
          taken: false,
          available: false
        },
        {
          id: Spells.grey_sellOut,
          taken: false,
          available: false
        },
        {
          id: Spells.grey_chaos,
          taken: false,
          available: false
        },
        {
          id: Spells.grey_stun,
          taken: false,
          available: false
        },
        {
          id: Spells.grey_tornado,
          taken: false,
          available: false
        },
        {
          id: Spells.grey_gust,
          taken: false,
          available: false
        },
        {
          id: Spells.grey_cyclone,
          taken: false,
          available: false
        }*/
      ]
    }
  },
  fightField: {
    positions: [],
    heroes: [],
    enemies: [],
    active: { id: undefined, type: "empty", state: null },
    turnActions: [],
    highlighted: [],
    round: 0,
    stage: "none"
  }
};
//*/

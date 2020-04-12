import actions from "../store/actions";
import reduicer from "../store/reduicers";
import { IGso } from "../types/Types";
import { gso } from "../data/Gso";
import { field } from "../data/Field";
import {
  MainCharacters,
  Spells,
  ICharacterData
} from "../types/TypeCharacters";
import { ConnectionStatus } from "../types/TypeLevels";

let initialState: IGso = gso;

beforeEach(() => {
  initialState = {
    fightField: null,
    showDialogue: null,
    showCharacters: false,
    showQuests: null,
    showFight: false,
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
          char_Maya: null
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
          enemy_Snake1: 0,
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
          char_Nell: null,
          npc_AmuletGirl: null
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
        life: 12,
        mana: 15,
        attack_physical: 2,
        attack_magic: 4,
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
        life: 12,
        mana: 15,
        attack_physical: 2,
        attack_magic: 4,
        spells: []
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
});

test("Activate dialogue", () => {
  expect(reduicer(initialState, actions.showDialogue(1))).toMatchObject({
    showDialogue: 1
  });

  initialState.showDialogue = 1;

  expect(reduicer(initialState, actions.showDialogue(null))).toMatchObject({
    showDialogue: null
  });
});

test("Activate map", () => {
  expect(reduicer(initialState, actions.showMap(0))).toMatchObject({
    showMap: 0
  });

  initialState.showMap = "0";

  expect(reduicer(initialState, actions.showMap(null))).toMatchObject({
    showMap: null
  });
});

test("Add global event", () => {
  expect(
    reduicer(initialState, actions.addGlobalEvent("GAME_START"))
  ).toMatchObject({
    globalEvents: ["GAME_START"]
  });

  initialState.globalEvents = ["GAME_START"];

  expect(
    reduicer(initialState, actions.addGlobalEvent("TUTORIAL_COMPLETE"))
  ).toMatchObject({
    globalEvents: ["GAME_START", "TUTORIAL_COMPLETE"]
  });
});

test("Activate level", () => {
  expect(
    reduicer(initialState, actions.levelActive("ormron_arena"))
  ).toMatchObject({
    activeLevel: "ormron_arena"
  });

  initialState.activeLevel = "ormron_arena";

  expect(
    reduicer(initialState, actions.levelActive("ormron_street"))
  ).toMatchObject({
    activeLevel: "ormron_street"
  });
});

test("Party selection", () => {
  const party = {
    [MainCharacters.nell]: false,
    [MainCharacters.dart]: false,
    [MainCharacters.tara]: true,
    [MainCharacters.grey]: false,
    [MainCharacters.maya]: true
  };
  expect(reduicer(initialState, actions.showParty(party))).toMatchObject({
    showParty: party
  });

  initialState.showParty = party;

  expect(reduicer(initialState, actions.showParty(null))).toMatchObject({
    showParty: null
  });
});

test("Quest update", () => {
  expect(
    reduicer(initialState, actions.questUpdate(["tutorial", "TALK_TO_DARIO"]))
  ).toMatchObject({
    quests: [
      {
        id: "tutorial",
        completedSteps: [],
        nextStep: "TALK_TO_DARIO"
      }
    ],
    questsTaken: ["tutorial"]
  });

  initialState.quests = [
    {
      id: "tutorial",
      completedSteps: [],
      nextStep: "TALK_TO_DARIO"
    }
  ];
  initialState.questsTaken = ["tutorial"];

  expect(
    reduicer(initialState, actions.questUpdate(["tutorial", "ENTER_ARENA"]))
  ).toMatchObject({
    quests: [
      {
        id: "tutorial",
        completedSteps: ["TALK_TO_DARIO"],
        nextStep: "ENTER_ARENA"
      }
    ],
    questsTaken: ["tutorial"]
  });

  initialState.quests = [
    {
      id: "tutorial",
      completedSteps: ["TALK_TO_DARIO"],
      nextStep: "ENTER_ARENA"
    }
  ];
  initialState.questsTaken = ["tutorial"];

  expect(
    reduicer(initialState, actions.questUpdate(["tutorial", "WIN_3_FIGHTS"]))
  ).toMatchObject({
    quests: [
      {
        id: "tutorial",
        completedSteps: ["TALK_TO_DARIO", "ENTER_ARENA"],
        nextStep: "WIN_3_FIGHTS"
      }
    ],
    questsTaken: ["tutorial"]
  });
});

test("Open connection", () => {
  const lv2 = {
    id: "ormron_arena",
    npcs: {
      npc_Dario1: 5
    },
    connections: {
      arena_to_street: ConnectionStatus.open
    }
  };
  const lv3 = {
    id: "ormron_garden",
    npcs: {
      char_Tara: null,
      char_Nell: null
    },
    connections: {
      garden_to_street: ConnectionStatus.open,
      garden_to_gazebo: ConnectionStatus.closed,
      garden_to_school: ConnectionStatus.closed
    }
  };
  expect(
    reduicer(
      initialState,
      actions.openConnection(["ormron_street", "street_to_arena"])
    )
  ).toMatchObject({
    levels: [
      {
        id: "ormron_street",
        npcs: {
          npc_Olija: 0,
          npc_Dario: null,
          char_Maya: null
        },
        connections: {
          street_to_garden: "closed",
          street_to_arena: "open",
          street_to_map: "closed"
        }
      },
      lv2,
      lv3
    ]
  });
});

test("NPC Update", () => {
  const lv2 = {
    id: "ormron_arena",
    npcs: {
      npc_Dario1: 5
    },
    connections: {
      arena_to_street: ConnectionStatus.open
    }
  };
  const lv3 = {
    id: "ormron_garden",
    npcs: {
      char_Tara: null,
      char_Nell: null
    },
    connections: {
      garden_to_street: ConnectionStatus.open,
      garden_to_gazebo: ConnectionStatus.closed,
      garden_to_school: ConnectionStatus.closed
    }
  };

  expect(
    reduicer(
      initialState,
      actions.npcUpdate(["ormron_street", "npc_Olija", null])
    )
  ).toMatchObject({
    levels: [
      {
        id: "ormron_street",
        npcs: {
          npc_Olija: null,
          npc_Dario: null,
          char_Maya: null
        },
        connections: {
          street_to_garden: ConnectionStatus.closed,
          street_to_arena: ConnectionStatus.closed,
          street_to_map: ConnectionStatus.closed
        }
      },
      lv2,
      lv3
    ]
  });
});

test("Test infoline", () => {
  expect(
    reduicer(initialState, actions.showInfoline("Test infoline"))
  ).toMatchObject({
    infoline: "Test infoline"
  });
});

test("Show and hide quests", () => {
  expect(reduicer(initialState, actions.showQuests("tutorial"))).toMatchObject({
    showQuests: "tutorial"
  });

  initialState.showQuests = "tutorial";

  expect(reduicer(initialState, actions.showQuests(null))).toMatchObject({
    showQuests: null
  });
});

test("End quest", () => {
  initialState.quests = [
    {
      id: "tutorial",
      completedSteps: ["TALK_TO_DARIO", "ENTER_ARENA", "WIN_3_FIGHTS"],
      nextStep: "TALK_TO_OLIJA"
    }
  ];
  initialState.questsTaken = ["tutorial"];

  expect(reduicer(initialState, actions.endQuest(["tutorial"]))).toMatchObject({
    quests: [],
    questsCompleted: ["tutorial"],
    questsTaken: []
  });
});

test("Update Map", () => {
  expect(
    reduicer(initialState, actions.updateMap(["ormron_arena", "OPEN"]))
  ).toMatchObject({
    maps: ["ormron_streets", "ormron_arena"]
  });
});

test("Update Influence", () => {
  expect(
    reduicer(initialState, actions.updateInfluence(["nell", 1]))
  ).toMatchObject({
    influence: {
      [MainCharacters.nell]: 1
    }
  });
});

test("Set Party", () => {
  const setPartyMessage = {
    [MainCharacters.maya]: true,
    [MainCharacters.tara]: false,
    [MainCharacters.grey]: true,
    [MainCharacters.dart]: false,
    [MainCharacters.nell]: false
  };
  expect(
    reduicer(initialState, actions.setParty(setPartyMessage))
  ).toMatchObject({
    setParty: setPartyMessage
  });
});

test("Update Party", () => {
  expect(
    reduicer(initialState, actions.updateParty(["nell", "add"]))
  ).toMatchObject({
    party: ["maya", "nell"]
  });
});

test("Show Characters", () => {
  expect(reduicer(initialState, actions.showCharacters(true))).toMatchObject({
    showCharacters: true
  });
});

test("Show Fighting scene one character", () => {
  const result = reduicer(initialState, actions.showFight("sandEasy1"));
  expect(result).toMatchObject({
    showFight: true
  });
  expect(result).toBeDefined();
  const newField = result.fightField;
  //@ts-ignore
  expect(newField.character).toBeDefined();
  //@ts-ignore
  expect(newField.action).toBeDefined();
  //@ts-ignore
  expect(newField.field.filter(f => f.character !== null).length).toEqual(4);
});

test("Show Fighting scene tree characters", () => {
  initialState.setParty = {
    [MainCharacters.maya]: true,
    [MainCharacters.tara]: true,
    [MainCharacters.grey]: true,
    [MainCharacters.dart]: false,
    [MainCharacters.nell]: false
  };

  const result = reduicer(initialState, actions.showFight("sandEasy1"))
    .fightField;
  //@ts-ignore
  expect(result.field.filter(f => f.character !== null).length).toEqual(6);
});

test("Fight character selected", () => {
  const tara = {
    id: "tara",
    life: 12,
    mana: 15,
    attack_physical: 2,
    attack_magic: 4,
    spells: []
  } as ICharacterData;

  initialState.fightField = field;
  initialState.fightField.field[0] = {
    coordinates: { x: 4, y: 1 },
    character: tara,
    state: null
  };
  const result = reduicer(
    initialState,
    actions.fightCharacterSelected({ x: 4, y: 1 })
  ).fightField;
  //@ts-ignore
  expect(result.character).toMatchObject(tara);
});

test("Fight character is going to move", () => {
  const tara = {
    id: "tara",
    life: 12,
    mana: 15,
    attack_physical: 2,
    attack_magic: 4,
    spells: []
  } as ICharacterData;

  initialState.fightField = field;
  initialState.fightField.field[5] = {
    coordinates: { x: 3, y: 2 },
    character: tara,
    state: null
  };
  initialState.fightField.character = tara;
  const result = reduicer(
    initialState,
    actions.fightCharacterPossibleMoves({ x: 3, y: 2 })
  );
  //@ts-ignore
  expect(result.fightField.field[1]).toMatchObject({ state: "green" });
  //@ts-ignore
  expect(result.fightField.field[4]).toMatchObject({ state: "green" });
  //@ts-ignore
  expect(result.fightField.field[6]).toMatchObject({ state: "green" });
  //@ts-ignore
  expect(result.fightField.field[9]).toMatchObject({ state: "green" });
});
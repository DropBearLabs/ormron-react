import actions from "./store/actions";
import reduicer from "./store/reduicers";
import { IGso } from "./types/Types";
import { gso } from "./data/Gso";
import { MainCharacters } from "./types/TypeCharacters";
import { ConnectionStatus } from "./types/TypeLevels";

let initialState: IGso = gso;

beforeEach(() => {
  initialState = gso;
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
          char_Nell: null
        },
        connections: {
          garden_to_street: ConnectionStatus.open,
          garden_to_gazebo: ConnectionStatus.closed,
          garden_to_school: ConnectionStatus.closed
        }
      }
    ]
  });
});

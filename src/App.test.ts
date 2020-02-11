import actions from "./store/actions";
import reduicer from "./store/reduicers";
import { IGso } from "./types/Types";

let initialState: IGso = {
  chapter: 0,
  party: [],
  influence: [0, 0, 0, 0],
  showDialogue: null,
  activeLevel: 0,
  showQuests: null,
  showMap: null,
  infoline: null,
  showParty: null,
  levels: [
    {
      npc_Olija: 0,
      npc_Dario: false
    },
    {
      npc_Dario1: 2
    },
    {
      npc_Nell: false,
      npc_Tara: false
    }
  ],
  quests: [],
  questsCompleted: [],
  maps: [0],
  questsTaken: []
};

beforeEach(() => {
  initialState = {
    chapter: 0,
    party: [],
    influence: [0, 0, 0, 0],
    showDialogue: null,
    activeLevel: 0,
    showQuests: null,
    showMap: null,
    infoline: null,
    showParty: null,
    levels: [
      {
        npc_Olija: 0,
        npc_Dario: false
      },
      {
        npc_Dario1: 2
      },
      {
        npc_Nell: false,
        npc_Tara: false
      }
    ],
    quests: [],
    questsCompleted: [],
    maps: [0],
    questsTaken: []
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

  initialState.showMap = 0;

  expect(reduicer(initialState, actions.showMap(null))).toMatchObject({
    showMap: null
  });
});

test("Party selection", () => {
  expect(reduicer(initialState, actions.showParty(["maya"]))).toMatchObject({
    showParty: ["maya"]
  });

  initialState.showParty = ["maya"];

  expect(reduicer(initialState, actions.showParty(null))).toMatchObject({
    showParty: null
  });
});

test("Quest update", () => {
  expect(
    reduicer(initialState, actions.questUpdate([0, "0_ARENA_START"]))
  ).toMatchObject({
    quests: [["0_ARENA_START"]],
    questsTaken: [0]
  });

  initialState.quests = [["0_ARENA_START"]];
  initialState.questsTaken = [0];

  expect(
    reduicer(initialState, actions.questUpdate([0, "0_ARENA_ACCESS"]))
  ).toMatchObject({
    quests: [["0_ARENA_START", "0_ARENA_ACCESS"]],
    questsTaken: [0]
  });

  initialState.quests = [["0_ARENA_START", "0_ARENA_ACCESS"]];
  initialState.questsTaken = [0];

  expect(
    reduicer(initialState, actions.questUpdate([0, "0_ARENA_3FIGHTS"]))
  ).toMatchObject({
    quests: [["0_ARENA_START", "0_ARENA_ACCESS", "0_ARENA_3FIGHTS"]],
    questsTaken: [0]
  });
});

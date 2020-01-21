import actions from "./store/actions";
import reduicer from "./store/reduicers";
import { IGso } from "./data/Types";

let initialState: IGso = {
  chapter: 0,
  party: [],
  influence: [0, 0, 0, 0],
  activeDialogue: null,
  activeLevel: 0,
  activeQuest: null,
  activeMap: null,
  infoline: null,
  partySelection: null,
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

test("Activate dialogue", () => {
  expect(reduicer(initialState, actions.activeDialogue(1))).toMatchObject({
    activeDialogue: 1
  });

  initialState.activeDialogue = 1;

  expect(reduicer(initialState, actions.activeDialogue(null))).toMatchObject({
    activeDialogue: null
  });
});

test("Activate map", () => {
  expect(reduicer(initialState, actions.activeMap(0))).toMatchObject({
    activeMap: 0
  });

  initialState.activeMap = 0;

  expect(reduicer(initialState, actions.activeMap(null))).toMatchObject({
    activeMap: null
  });
});

test("Party selection", () => {
  expect(reduicer(initialState, actions.selectParty(["maya"]))).toMatchObject({
    partySelection: ["maya"]
  });

  initialState.partySelection = ["maya"];

  expect(reduicer(initialState, actions.selectParty(null))).toMatchObject({
    partySelection: null
  });
});

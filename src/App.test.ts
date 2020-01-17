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
  expect(reduicer(initialState, actions.dialogueActive(1))).toMatchObject({
    activeDialogue: 1
  });

  initialState.activeDialogue = 1;

  expect(reduicer(initialState, actions.dialogueActive(null))).toMatchObject({
    activeDialogue: null
  });
});

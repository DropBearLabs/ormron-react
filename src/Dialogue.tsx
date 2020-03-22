import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  showDialogue,
  questUpdate,
  updateMap,
  npcUpdate,
  endQuest,
  updateParty,
  updateInfluence,
  openConnection,
  addGlobalEvent
} from "./store/actions";
import { IDialogue, IDialogueChoice, IGso } from "./types/Types";
import { findTrigger, checkGlobalEvent } from "./data/helpers";
import {
  ADD_GLOBAL_EVENT,
  UPDATE_PARTY,
  UPDATE_INFLUENCE,
  UPDATE_NPC,
  UPDATE_QUEST,
  END_QUEST,
  OPEN_CONNECTION,
  MAP_UPDATE
} from "./data/Constants";

interface IDialogueLineProps {
  nextLine: () => void;
  line: string;
  lineId: string;
  choice: boolean;
}

const DialogueLine = (props: IDialogueLineProps) => {
  const dialogueLineStyle = {
    fontSize: "18pt",
    padding: "2em"
  };
  const showNextLine = () => {
    if (!props.choice) {
      props.nextLine();
    }
  };
  return (
    <div style={dialogueLineStyle} onClick={showNextLine} id={props.lineId}>
      {props.line}
    </div>
  );
};

interface IDialogueChoiceProps {
  choice: IDialogueChoice[];
  setLineN: (n: number) => void;
}

const DialogueCharacter = ({ dialogue }: { dialogue: IDialogue }) => {
  const dialogueCharacterStyle = {
    backgroundImage: `url(${dialogue.image})`,
    position: "absolute" as "absolute",
    height: "400px",
    width: "500px",
    top: "100px"
  };
  return <div style={dialogueCharacterStyle}></div>;
};

const DialogueChoices = (props: IDialogueChoiceProps) => {
  const choicesStye = {
    textAlign: "center" as "center"
  };
  const dispatch = useDispatch();

  function triggerEvent(id: string) {
    const trigger = findTrigger(id);
    switch (trigger.triggerType) {
      case UPDATE_PARTY:
        dispatch(updateParty(trigger.data));
        return;
      case UPDATE_INFLUENCE:
        dispatch(updateInfluence(trigger.data));
      default:
        return;
    }
  }

  const choiceMade = (c: IDialogueChoice) => {
    dispatch(showDialogue(c.nextDial));
    props.setLineN(0);
    if (c.triggers) {
      c.triggers.forEach((n: string) => triggerEvent(n));
    }
  };
  return (
    <div style={choicesStye}>
      {props.choice.map((c: IDialogueChoice) => (
        <button
          key={c.id}
          onClick={() => choiceMade(c)}
          id={"dialogue_option_" + c.id}
        >
          {c.text}
        </button>
      ))}
    </div>
  );
};

interface IDialogueOutputProps {
  dialogue: IDialogue;
}

const DialogueOutput = (props: IDialogueOutputProps) => {
  const dispatch = useDispatch();
  const globalevents = useSelector((state: IGso) => state.globalEvents);
  const dialoguePaperStyle = {
    height: "200px",
    width: "1024px",
    backgroundImage: `url("temp-backg1.png")`,
    bottom: "0",
    margin: "0px 0 auto",
    position: "absolute" as "absolute"
  };

  const [lineN, setLineN] = useState(0);
  const isLastLine = (line: number) => {
    return lineN === props.dialogue.lines.length - 1;
  };

  function triggerEvent(id: string) {
    const trigger = findTrigger(id);
    if (props.dialogue.infoline) {
      // dispatch(showInfoline(props.dialogue.infoline));
      // setTimeout(() => {
      //   dispatch(showInfoline(null));
      // }, 2000);
    }
    switch (trigger.triggerType) {
      case UPDATE_NPC:
        dispatch(npcUpdate(trigger.data));
        return;
      case UPDATE_QUEST:
        dispatch(questUpdate(trigger.data));
        return;
      case MAP_UPDATE:
        dispatch(updateMap(trigger.data));
        return;
      case END_QUEST:
        dispatch(endQuest(trigger.data));
        return;
      case OPEN_CONNECTION:
        dispatch(openConnection(trigger.data));
        return;
      case ADD_GLOBAL_EVENT:
        dispatch(addGlobalEvent(trigger.data));
        return;
      default:
        return;
    }
  }

  const nextLine = () => {
    if (isLastLine(lineN)) {
      if (props.dialogue.triggers) {
        props.dialogue.triggers.forEach((t: string) => triggerEvent(t));
      }
      if (typeof props.dialogue.nextNode === "number") {
        // This Dialogue continues normally
        dispatch(showDialogue(props.dialogue.nextNode));
        setLineN(0);
      } else if (typeof props.dialogue.nextNode === "object") {
        // This dialogue continuation depends on a global event
        const next = checkGlobalEvent(
          globalevents,
          props.dialogue.nextNode.event
        );
        if (next) {
          dispatch(showDialogue(props.dialogue.nextNode.nextYes));
        } else {
          dispatch(showDialogue(props.dialogue.nextNode.nextNo));
        }
        setLineN(0);
      } else {
        // There's no continuation, drop the dialogue
        dispatch(showDialogue(null));
      }
    }

    if (!isLastLine(lineN)) {
      setLineN(lineN + 1);
    }
  };
  return (
    <div style={dialoguePaperStyle}>
      <DialogueLine
        line={props.dialogue.lines[lineN]}
        nextLine={nextLine}
        lineId={"dialogue" + props.dialogue.id + "_line" + lineN}
        choice={typeof props.dialogue.choice === "object" && isLastLine(lineN)}
      />
      {props.dialogue.choice && isLastLine(lineN) ? (
        <DialogueChoices choice={props.dialogue.choice} setLineN={setLineN} />
      ) : null}
    </div>
  );
};

interface IDialogueProps {
  dialogue: IDialogue;
}

export const Dialogue = (props: IDialogueProps) => {
  const dialogueStyle = {
    height: "760px",
    width: "1024px",
    bottom: "0",
    margin: "0px 0 auto",
    position: "absolute" as "absolute"
  };

  return (
    <div style={dialogueStyle} id="DialoguePopup">
      {props.dialogue ? <DialogueCharacter dialogue={props.dialogue} /> : null}
      {props.dialogue ? <DialogueOutput dialogue={props.dialogue} /> : null}
    </div>
  );
};

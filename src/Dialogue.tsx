import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  activeDialogue,
  showInfoline,
  updateQuest,
  updateMap,
  npcUpdate,
  finishQuest,
  updateParty,
  updateInfluence
} from "./store/actions";
import { IDialogue, IDialogueChoice } from "./data/Types";
import { findTrigger } from "./helpers";

interface IDialogueLineProps {
  nextLine: () => void;
  line: string;
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
    <div style={dialogueLineStyle} onClick={showNextLine}>
      {props.line}
    </div>
  );
};

interface IDialogueProps {
  dialogue: IDialogue;
}

interface IDialogueChoiceProps {
  choice: IDialogueChoice[];
  setLineN: any;
}

const DialogueCharacter = (props: IDialogueProps) => {
  const dialogueCharacterStyle = {
    backgroundImage: `url(${props.dialogue.image})`,
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

  function triggerEvent(id: number) {
    const trigger = findTrigger(id);
    if (trigger.triggerType === "PARTY_CHANGE") {
      dispatch(updateParty(trigger.data));
    }
    if (trigger.triggerType === "INFLUENCE_CHANGE") {
      dispatch(updateInfluence(trigger.data));
    }
  }

  const choiceMade = (c: IDialogueChoice) => {
    dispatch(activeDialogue(c.nextDial));
    props.setLineN(0);
    c.triggers.forEach((n: number) => triggerEvent(n));
  };
  return (
    <div style={choicesStye}>
      {props.choice.map((c: IDialogueChoice) => (
        <button key={c.id} onClick={() => choiceMade(c)}>
          {c.text}
        </button>
      ))}
    </div>
  );
};

const DialogueOutput = (props: IDialogueProps) => {
  const dispatch = useDispatch();
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

  function triggerEvent(id: number) {
    const trigger = findTrigger(id);
    if (props.dialogue.infoline) {
      dispatch(showInfoline(props.dialogue.infoline));
      setTimeout(() => {
        dispatch(showInfoline(null));
      }, 2000);
    }
    switch (trigger.triggerType) {
      case "NPC_UPDATE":
        dispatch(npcUpdate(trigger.data));
        return;
      case "QUEST_UPDATE":
        dispatch(updateQuest(trigger.data));
        return;
      case "MAP_UPDATE":
        dispatch(updateMap(trigger.data));
        return;
      case "QUEST_END":
        dispatch(finishQuest(trigger.data));
        return;
      default:
        return;
    }
  }

  const nextLine = () => {
    if (isLastLine(lineN)) {
      if (typeof props.dialogue.nextNode === "number") {
        dispatch(activeDialogue(props.dialogue.nextNode));
        setLineN(0);
      } else {
        dispatch(activeDialogue(null));
        if (props.dialogue.triggers) {
          props.dialogue.triggers.forEach((t: number) => triggerEvent(t));
        }
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
        choice={typeof props.dialogue.choice === "object" && isLastLine(lineN)}
      />
      {props.dialogue.choice && isLastLine(lineN) ? (
        <DialogueChoices choice={props.dialogue.choice} setLineN={setLineN} />
      ) : null}
    </div>
  );
};

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

import React, { useState } from "react";
import {
  dialogueActive,
  showInfoline,
  updateQuest,
  updateMap,
  npcUpdate
} from "./store/actions";
import { IDialogue } from "./data/Types";
import { useDispatch } from "react-redux";

interface IDialogueLineProps {
  nextLine: () => void;
  line: string;
}

const DialogueLine = (props: IDialogueLineProps) => {
  const dialogueLineStyle = {
    fontSize: "18pt",
    padding: "2em"
  };
  return (
    <div style={dialogueLineStyle} onClick={props.nextLine}>
      {props.line}
    </div>
  );
};

interface IDialogueProps {
  dialogue: IDialogue;
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
  const nextLine = () => {
    const isLastLine = lineN === props.dialogue.lines.length - 1;
    if (isLastLine) {
      if (typeof props.dialogue.nextNode === "number") {
        dispatch(dialogueActive(props.dialogue.nextNode));
        setLineN(0);
      } else {
        dispatch(dialogueActive(null));
        if (props.dialogue.dialUpdate) {
          props.dialogue.dialUpdate.map((d: any) => dispatch(npcUpdate(d)));
        }
        if (props.dialogue.infoline) {
          dispatch(showInfoline(props.dialogue.infoline));
          setTimeout(() => {
            dispatch(showInfoline(null));
          }, 2000);
        }
        if (props.dialogue.questUpdate) {
          dispatch(updateQuest(props.dialogue.questUpdate));
        }
        if (props.dialogue.mapUpdate) {
          props.dialogue.mapUpdate.map((m: any) => dispatch(updateMap(m)));
        }
      }
    }

    if (!isLastLine) {
      setLineN(lineN + 1);
    }
  };

  return (
    <div style={dialoguePaperStyle}>
      <DialogueLine line={props.dialogue.lines[lineN]} nextLine={nextLine} />
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

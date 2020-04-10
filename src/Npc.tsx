import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { showDialogue, showInfoline, showFight } from "./store/actions";
import { INpc } from "./types/Types";
import { findDefaultLine } from "./data/helpers";

interface INPCStateProps {
  state: string | null;
  line?: string;
}

const NPCState = (props: INPCStateProps) => {
  const imgStyle = {
    height: "100px",
    width: "100px",
    marginTop: "-100px",
    border: "0"
  };
  const lineStyle = {
    position: "absolute" as "absolute",
    top: "-50px",
    width: "100%",
    fontSize: "18px",
    textShadow: "0px 1px 2px #ccc, 1px 1px 10px #ccc"
  };

  if (props.line) {
    return <div style={lineStyle}>{props.line}</div>;
  } else if (props.state) {
    return <img style={imgStyle} src={props.state} />;
  } else {
    return null;
  }
};

interface INPCProps {
  npc: INpc;
  scene: any;
  npcTrigger: number | null | string;
}

export const NPC = (props: INPCProps) => {
  const npcStyle = {
    backgroundImage: `url(${props.npc.image})`,
    left: props.npc.position.x,
    bottom: props.npc.position.y,
    height: "300px",
    width: "230px",
    position: "absolute" as "absolute",
    textAlign: "center" as "center"
  };
  const [line, setLine] = useState("");
  const dispatch = useDispatch();
  function triggerEvent() {
    // dispatch(showInfoline(null));
    if (props.npcTrigger === null) {
      return;
    } else if (typeof props.npcTrigger === "number") {
      dispatch(showDialogue(props.npcTrigger));
    } else {
      const triigerParsed = props.npcTrigger.split("_");
      if (triigerParsed[0] === "Static") {
        const defaultLine = findDefaultLine(props.npcTrigger);
        setLine(defaultLine.line);
        setTimeout(() => {
          setLine("");
        }, 2000);
      }
      if (triigerParsed[0] === "Fight") {
        console.log("THIS IS A FIGHT", triigerParsed[1]);
        dispatch(showFight(triigerParsed[1]));
      }
    }
  }
  return (
    <div
      style={npcStyle}
      onClick={() => triggerEvent()}
      data-testid={props.scene + "_" + [props.npc.id]}
      id={props.scene + "_" + [props.npc.id]}
    >
      <NPCState
        state={
          props.npcTrigger !== null && typeof props.npcTrigger !== "string"
            ? "temp-icon1.png"
            : null
        }
        line={line}
      />
    </div>
  );
};

import React from "react";
import { useDispatch } from "react-redux";

import { activeDialogue, showInfoline } from "./store/actions";
import { INpc } from "./types/Types";

interface INPCStateProps {
  state: string | null;
}

const NPCState = (props: INPCStateProps) => {
  const imgStyle = {
    height: "100px",
    width: "100px",
    marginTop: "-100px",
    border: "0"
  };

  if (props.state) {
    return <img style={imgStyle} src={props.state} />;
  } else {
    return null;
  }
};

interface INPCProps {
  npc: INpc;
  npcTrigger: number | null;
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

  const dispatch = useDispatch();
  function triggerEvent() {
    // dispatch(showInfoline(null));
    if (props.npcTrigger === null) {
      return;
    } else {
      dispatch(activeDialogue(props.npcTrigger));
    }
  }
  return (
    <div style={npcStyle} onClick={() => triggerEvent()}>
      <NPCState state={props.npcTrigger !== null ? "temp-icon1.png" : null} />
    </div>
  );
};

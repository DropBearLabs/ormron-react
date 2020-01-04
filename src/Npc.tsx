import React from "react";
import { useDispatch } from "react-redux";

import { dialogueActive, showInfoline } from "./store/actions";
import { INpc } from "./data/Types";

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
  n: INpc;
  state: any;
}

export const NPC = (props: INPCProps) => {
  const npcStyle = {
    backgroundImage: `url(${props.n.image})`,
    left: props.n.position.x,
    bottom: props.n.position.y,
    height: "300px",
    width: "230px",
    position: "absolute" as "absolute",
    textAlign: "center" as "center"
  };

  const dispatch = useDispatch();
  function triggerEvent(event: any, source: any) {
    dispatch(showInfoline(null));
    const type = event.target.dataset.type;
    if (type === "npc" && source.trigger.dialogueId >= 0) {
      dispatch(dialogueActive(source.trigger.dialogueId));
    }
  }

  const npcState = props.state[props.n.id];

  return (
    <div
      style={npcStyle}
      data-type="npc"
      onClick={(e: any) => triggerEvent(e, props.n)}
    >
      <NPCState state={npcState ? npcState : null} />
    </div>
  );
};

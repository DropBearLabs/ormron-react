import React from "react";

import { findTrigger, checkGlobalEvents } from "./data/helpers";
import { ILevelTrigger, IGso } from "./types/Types";
import { ITrigger } from "./types/TypeTriggers";
import { useSelector, useDispatch } from "react-redux";
import {
  ACTIVATE_LEVEL,
  UPDATE_QUEST,
  OPEN_CONNECTION,
  ACTIVE_DIALOGUE,
  ADD_GLOBAL_EVENT
} from "./data/Constants";

import {
  levelActive,
  questUpdate,
  openConnection,
  showDialogue,
  addGlobalEvent
} from "./store/actions";

interface ILevelTriggerProps {
  trigger: ILevelTrigger;
}

export const LevelTrigger = (props: ILevelTriggerProps) => {
  const globalevents = useSelector((state: IGso) => state.globalEvents);
  const dispatch = useDispatch();
  const triggerStyle = {
    backgroundColor: "blue",
    opacity: "0.5",
    position: "absolute" as "absolute",
    x: props.trigger.coordinates.x,
    y: props.trigger.coordinates.y,
    width: props.trigger.width,
    height: "750px",
    zIndex: 1
  };

  const triggerEvent = (id: string) => {
    const trigger: ITrigger = findTrigger(id);
    if (trigger.condition) {
      if (!checkGlobalEvents(globalevents, trigger.condition)) {
        return;
      }
    }

    switch (trigger.triggerType) {
      case ACTIVATE_LEVEL:
        dispatch(levelActive(trigger.data));
        return;
      case UPDATE_QUEST:
        dispatch(questUpdate(trigger.data));
        return;
      case OPEN_CONNECTION:
        dispatch(openConnection(trigger.data));
        return;
      case ACTIVE_DIALOGUE:
        dispatch(showDialogue(trigger.data));
        return;
      case ADD_GLOBAL_EVENT:
        dispatch(addGlobalEvent(trigger.data));
        return;
      default:
        return;
    }
  };
  return (
    <div
      style={triggerStyle}
      onClick={() => props.trigger.triggers.map(t => triggerEvent(t))}
    ></div>
  );
};

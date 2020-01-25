import React from "react";
import { useDispatch } from "react-redux";

import { questCanBeUpdated } from "./rules";
import { IConnection, ITrigger } from "./data/Types";

import {
  showInfoline,
  levelActive,
  questUpdate,
  openConnection
} from "./store/actions";
import { findTrigger } from "./helpers";

interface IConnectionProps {
  c: IConnection;
  state: number[];
  levelState: any;
  quests: any;
}

export const Connection = (props: IConnectionProps) => {
  const dispatch = useDispatch();
  const { c, levelState } = props;
  const doorStyle = {
    left: c.position.x,
    bottom: c.position.y,
    width: "190px",
    height: "300px",
    position: "absolute" as "absolute",
    backgroundImage:
      levelState[c.name] !== "closed" ? `url(${c.open})` : `url(${c.closed})`
  };
  const isOpen = () => {
    return levelState[c.name] !== "closed";
  };

  const triggerEntry = (triggers: any) => {
    if (!triggers) {
      return;
    }
    triggers.forEach((t: number) => triggerEvent(t));
  };

  function triggerEvent(id: number) {
    const trigger: ITrigger = findTrigger(id);
    if (c.infoline) {
      dispatch(showInfoline(c.infoline));
      setTimeout(() => {
        dispatch(showInfoline(null));
      }, 2000);
    }
    switch (trigger.triggerType) {
      case "LEVEL_ACTIVE":
        if (isOpen()) {
          dispatch(levelActive(trigger.data[0]));
        }
        return;
      case "UPDATE_QUEST":
        if (questCanBeUpdated(props.quests, trigger.data)) {
          dispatch(questUpdate(trigger.data));
        }
        return;
      case "OPEN_CONNECTION":
        dispatch(openConnection(trigger.data));
        return;
      case "OPEN_LEVEL":
        return;
      default:
        return;
    }
  }

  return (
    <div style={doorStyle} onClick={() => triggerEntry(c.triggers)}>
      {c.name}
    </div>
  );
};

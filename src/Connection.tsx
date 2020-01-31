import React from "react";
import { useDispatch } from "react-redux";

import { IConnection, ITrigger } from "./data/Types";

import {
  levelActive,
  questUpdate,
  openConnection,
  selectParty,
  activeDialogue,
  addGlobalEvent
} from "./store/actions";
import { findTrigger, checkGlobalEvent } from "./data/helpers";

interface IConnectionProps {
  c: IConnection;
  state: number[];
  levelState: any;
  quests: any;
  party: any;
  globalevents: string[];
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

  const beforeExit = (triggers: any, party: any) => {
    triggerEntry(triggers);
    triggerParty(party);
  };

  const triggerParty = (party: any) => {
    if (c.selectParty) {
      dispatch(selectParty(props.party));
    }
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
      // dispatch(showInfoline(c.infoline));
      // setTimeout(() => {
      //   dispatch(showInfoline(null));
      // }, 2000);
    }
    if (trigger.condition) {
      const res = checkGlobalEvent(
        props.globalevents,
        trigger.condition[0],
        trigger.condition[1]
      );
      if (!res) {
        return;
      }
    }
    switch (trigger.triggerType) {
      case "ACTIVATE_LEVEL":
        if (isOpen()) {
          dispatch(levelActive(trigger.data[0]));
        }
        return;
      case "UPDATE_QUEST":
        dispatch(questUpdate(trigger.data));
        return;
      case "OPEN_CONNECTION":
        dispatch(openConnection(trigger.data));
        return;
      case "ACTIVE_DIALOGUE":
        dispatch(activeDialogue(trigger.data));
      case "ADD_GLOBAL_EVENT":
        dispatch(addGlobalEvent(trigger.data));
      case "OPEN_LEVEL":
        return;
      default:
        return;
    }
  }

  return (
    <div style={doorStyle} onClick={() => beforeExit(c.triggers, props.party)}>
      {c.name}
    </div>
  );
};

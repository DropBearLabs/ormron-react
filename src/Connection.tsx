import React from "react";
import { useDispatch } from "react-redux";

import { IConnection, ITrigger, IGsoLevel } from "./data/Types";

import {
  levelActive,
  questUpdate,
  openConnection,
  selectParty,
  activeDialogue,
  addGlobalEvent
} from "./store/actions";
import { findTrigger, checkGlobalEvent } from "./data/helpers";
import {
  ACTIVATE_LEVEL,
  UPDATE_QUEST,
  OPEN_CONNECTION,
  ACTIVE_DIALOGUE,
  ADD_GLOBAL_EVENT
} from "./data/Constants";

interface IConnectionProps {
  connection: IConnection;
  connectionState: string;
  party: string[];
  globalevents: string[];
}
export const Connection = (props: IConnectionProps) => {
  const dispatch = useDispatch();
  const { connection, connectionState, globalevents } = props;
  const doorStyle = {
    left: connection.position.x,
    bottom: connection.position.y,
    width: "190px",
    height: "300px",
    position: "absolute" as "absolute",
    backgroundImage:
      connectionState !== "closed"
        ? `url(${connection.open})`
        : `url(${connection.closed})`
  };
  const isOpen = () => {
    return ((connectionState as unknown) as string) !== "closed";
  };

  const beforeExit = (triggers: string[] | undefined, party: string[]) => {
    triggerEntry(triggers);
    triggerParty(party);
  };

  const triggerParty = (party: string[]) => {
    if (connection.selectParty) {
      dispatch(selectParty(props.party));
    }
  };

  const triggerEntry = (triggers: string[] | undefined) => {
    if (!triggers) {
      return;
    }
    triggers.forEach((t: string) => triggerEvent(t));
  };

  function triggerEvent(id: string) {
    const trigger: ITrigger = findTrigger(id);
    if (connection.infoline) {
      // dispatch(showInfoline(c.infoline));
      // setTimeout(() => {
      //   dispatch(showInfoline(null));
      // }, 2000);
    }
    if (trigger.condition) {
      const res = trigger.condition.every((cond: string[]) =>
        checkGlobalEvent(globalevents, cond[0], cond[1])
      );
      if (!res) {
        return;
      }
    }
    switch (trigger.triggerType) {
      case ACTIVATE_LEVEL:
        if (isOpen()) {
          dispatch(levelActive(trigger.data));
        }
        return;
      case UPDATE_QUEST:
        dispatch(questUpdate(trigger.data));
        return;
      case OPEN_CONNECTION:
        dispatch(openConnection(trigger.data));
        return;
      case ACTIVE_DIALOGUE:
        dispatch(activeDialogue(trigger.data));
        return;
      case ADD_GLOBAL_EVENT:
        dispatch(addGlobalEvent(trigger.data));
        return;
      default:
        return;
    }
  }

  return (
    <div
      style={doorStyle}
      onClick={() => beforeExit(connection.triggers, props.party)}
    >
      {connection.name}
    </div>
  );
};

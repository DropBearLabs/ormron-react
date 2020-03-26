import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { IConnection, IGso } from "./types/Types";

import {
  levelActive,
  questUpdate,
  openConnection,
  showParty,
  showDialogue,
  addGlobalEvent
} from "./store/actions";
import { findTrigger, checkGlobalEvents } from "./data/helpers";
import {
  ACTIVATE_LEVEL,
  UPDATE_QUEST,
  OPEN_CONNECTION,
  ACTIVE_DIALOGUE,
  ADD_GLOBAL_EVENT
} from "./data/Constants";
import { ITrigger } from "./types/TypeTriggers";

interface IConnectionProps {
  connection: IConnection;
  connectionState: string;
}
export const Connection = (props: IConnectionProps) => {
  const dispatch = useDispatch();
  const globalevents = useSelector((state: IGso) => state.globalEvents);
  const { connection, connectionState } = props;
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

  const triggerEntry = () => {
    if (connection.showParty) {
      const selectedParty = {
        nell: connection.showParty.includes("nell"),
        tara: connection.showParty.includes("tara"),
        dart: connection.showParty.includes("dart"),
        maya: connection.showParty.includes("maya"),
        grey: connection.showParty.includes("grey")
      };
      dispatch(showParty(selectedParty));
    }
    if (connection.triggers) {
      connection.triggers.forEach((t: string) => triggerEvent(t));
    }
  };

  function triggerEvent(id: string) {
    const trigger: ITrigger = findTrigger(id);
    // if (connection.infoline) {
    // dispatch(showInfoline(c.infoline));
    // setTimeout(() => {
    //   dispatch(showInfoline(null));
    // }, 2000);
    // }
    if (trigger.condition) {
      console.log("trigger event", trigger.id);
      if (!checkGlobalEvents(globalevents, trigger.condition)) {
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
        dispatch(showDialogue(trigger.data));
        return;
      case ADD_GLOBAL_EVENT:
        dispatch(addGlobalEvent(trigger.data));
        return;
      default:
        return;
    }
  }

  return (
    <div style={doorStyle} onClick={() => triggerEntry()} id={connection.id}>
      {connection.id}
    </div>
  );
};

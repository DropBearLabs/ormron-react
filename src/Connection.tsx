import React from "react";
import { useDispatch } from "react-redux";

import { quests } from "./data/Quests";
import { IConnection, ITrigger } from "./data/Types";

import {
  showInfoline,
  levelActive,
  questUpdate,
  openLevel,
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
  const { c, state, levelState } = props;
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

  const firstTimeVisit = () => {
    return levelState[c.name] === "open";
  };

  const triggerEntry = (triggers: any) => {
    if (!triggers) {
      return;
    }
    triggers.forEach((t: number) => triggerEvent(t));
  };

  const canBeUpdated = (data: any) => {
    if (props.quests.length === 0) {
      // Quest is not taken
      return false;
    }
    const steps = quests[data[0]].steps.map((x: any) => x.event);
    const currentStep = data[1];
    const currentStepIndex = steps.indexOf(data[1]);
    const prevStep = steps[currentStepIndex - 1];
    const currentQuestEvents = props.quests[data[0]];
    if (currentQuestEvents.indexOf(prevStep) === -1) {
      // Previous step wasn't completed
      return false;
    }
    if (currentQuestEvents.indexOf(currentStep) !== -1) {
      // This step was completed already
      return false;
    }
    return true;
  };

  function triggerEvent(id: number) {
    const trigger: ITrigger = findTrigger(id);
    console.log(trigger);
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
        if (canBeUpdated(trigger.data)) {
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

import React from "react";
import { IQuest, IQuestStep } from "./data/Types";
import { useDispatch } from "react-redux";
import { displayQuest } from "./store/actions";
import { quests } from "./data/Quests";
import { isCompositeComponent } from "react-dom/test-utils";
import { all } from "q";
import { findQuestEvent } from "./data/helpers";

interface ISingleLineProps {
  name: string;
  completed: boolean;
}
const SingleLine = (props: ISingleLineProps) => {
  const currentStyle = {
    fontWeight: "bold" as "bold"
  };
  const completedStyle = {
    color: "grey",
    fontSize: "1em"
  };
  return (
    <li style={props.completed ? completedStyle : currentStyle}>
      {props.name}
    </li>
  );
};

interface ISingleQuestProps {
  quest: any;
  active: number;
}
const SingleQuest = (props: ISingleQuestProps) => {
  const singleQuestStyle = {
    paddingTop: "50px",
    paddingLeft: "100px",
    textAlign: "left" as "left"
  };

  const lastStep = props.quest.nextStep;
  const completed = props.quest.completedSteps;
  const allSteps = completed.concat(lastStep);
  return (
    <div style={singleQuestStyle}>
      <h2>{props.quest.name}</h2>
      <ul>
        {allSteps.map((s: string) => {
          const step = findQuestEvent(props.quest.id, s);
          return (
            <SingleLine
              key={step.name}
              name={step.name}
              completed={step.event !== lastStep}
            />
          );
        })}
      </ul>
    </div>
  );
};

interface IQuestProps {
  quests: IQuest[];
  allTakenQuests: any;
  active: number;
}
export const Quest = (props: IQuestProps) => {
  const dispatch = useDispatch();
  const menuStyle = {
    top: "0px",
    margin: "0 auto",
    width: "912px",
    height: "760px",
    position: "absolute" as "absolute",
    textAlign: "center" as "center",
    backgroundImage: `url(temp-backg2.png)`,
    backgroundSize: "cover",
    overflow: "hidden"
  };

  const closeButtonStyle = {
    position: "relative" as "relative",
    top: "50px",
    left: "340px"
  };
  return (
    <div style={menuStyle}>
      <img
        style={closeButtonStyle}
        src="temp-icon2.png"
        onClick={() => dispatch(displayQuest(null))}
      />
      {props.quests &&
        props.quests.map((q: IQuest) => {
          return (
            <SingleQuest
              key={q.id}
              active={props.active}
              quest={props.allTakenQuests.find((t: any) => t.id === q.id)}
            />
          );
        })}
    </div>
  );
};

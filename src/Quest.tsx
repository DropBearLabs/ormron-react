import React from "react";
import { IQuest, IQuestStep } from "./data/Types";
import { useDispatch } from "react-redux";
import { displayQuest, updateQuest, finishQuest } from "./store/actions";

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
  quest: IQuest;
  active: number;
  state: any;
}
const SingleQuest = (props: ISingleQuestProps) => {
  const dispatch = useDispatch();
  const singleQuestStyle = {
    paddingTop: "50px",
    paddingLeft: "100px",
    textAlign: "left" as "left"
  };
  const allSteps: IQuestStep[] = props.quest.steps;

  const isCompleted = (step: string) => {
    if (props.state) {
      return props.state.indexOf(step) !== -1;
    } else {
      return false;
    }
  };

  const availableSteps = allSteps.filter((q: IQuestStep) =>
    isCompleted(q.event)
  );

  // + next step to show
  if (props.state.length < allSteps.length) {
    availableSteps.push(allSteps[props.state.length]);
  }

  return (
    <div style={singleQuestStyle}>
      <h2>{props.quest.name}</h2>
      <ul>
        {availableSteps.map((s: IQuestStep) => (
          <SingleLine
            name={s.name}
            completed={isCompleted(s.event)}
            key={s.event}
          />
        ))}
      </ul>
    </div>
  );
};

interface IQuestProps {
  quests: IQuest[];
  state: any;
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
      {props.quests.map((q: IQuest) => {
        console.log("Taken quests", props.quests);
        return (
          <SingleQuest
            key={q.id}
            quest={q}
            active={props.active}
            state={props.state[q.id]}
          />
        );
      })}
    </div>
  );
};

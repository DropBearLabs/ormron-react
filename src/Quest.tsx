import React from 'react';
import { quests } from "./data/Quests"; 
import { IQuest, IQuestStep } from './data/Types';
import { useDispatch } from 'react-redux';
import { displayQuest } from './store/actions';

type SingleLineProps = {
  name: string,
  completed: boolean
}
const SingleLine = (props: SingleLineProps) => {
  const currentStyle = {
    fontWeight: "bold" as "bold",
  }
  const completedStyle = {
    color: "grey",
    fontSize: "1em"
  }
  return (
    <li style={props.completed ? completedStyle : currentStyle }>{props.name}</li>
  )
}

type SingleQuestProps = {
  quest: IQuest,
  active: number,
  state: any
}
const SingleQuest = (props: SingleQuestProps) =>{
  const singleQuestStyle = {
    paddingTop: "50px",
    paddingLeft: "100px",
    textAlign: "left" as "left",
  }
  const allSteps: IQuestStep[] = props.quest.steps;
  const completedSteps = props.state[props.quest.id];
  const isCompleted = (step: string) => {
    return completedSteps.indexOf(step)!=-1;
  }
  const availableSteps = allSteps.filter(q => isCompleted(q.event));

  // + next step to show
  if(completedSteps.length<allSteps.length){
    availableSteps.push(allSteps[completedSteps.length]);
  }
  return(
    <div style={singleQuestStyle}>
      <h2>{props.quest.name}</h2>
      <ul>{availableSteps.map(s => <SingleLine name={s.name} completed={isCompleted(s.event)} key={s.event}/>)}</ul>
    </div>
  )
}


type QuestProps = {
    quests: IQuest[],
    state: any,
    active: number
}
export const Quest = (props: QuestProps) => {
    const dispatch = useDispatch();
    const menuStyle = {
      top:"0px",
      margin: "0 auto",
      width: "912px",
      height: "760px",
      position: 'absolute' as 'absolute',
      textAlign: 'center' as 'center',
      backgroundImage: `url(temp-backg2.png)`,
      backgroundSize: 'cover',
      overflow: 'hidden',
    }

    const closeButtonStyle = {
      position: 'relative' as 'relative',
      top: "50px",
      left: "340px",
    }
    
    return(
      <div style={menuStyle}>
        <img style={closeButtonStyle} src="temp-icon2.png" onClick={() => dispatch(displayQuest(null))}/>
        {quests.map((q:IQuest) => <SingleQuest key={q.id} quest={q} active={props.active} state={props.state[q.id]}/>)}
      </div>
    )
  }
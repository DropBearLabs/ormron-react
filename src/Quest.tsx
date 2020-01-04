import React from 'react';
import { quests } from "./data/Quests"; 
import { IQuest } from './data/Types';

type SingleQuestProps = {
  quest: IQuest,
  active: number
}
const SingleQuest = (props: SingleQuestProps) =>{
  const singleQuestStyle = {
    paddingTop: "50px",
    paddingLeft: "100px",
    textAlign: "left" as "left",
  }
  return(
    <div style={singleQuestStyle}>
      <h2>{props.quest.name}</h2>
    </div>
  )
}


type QuestProps = {
    quests: IQuest[],
    active: number
}
export const Quest = (props: QuestProps) => {
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
  
    return(
      <div style={menuStyle}>
        {quests.map((q:IQuest) => <SingleQuest quest={q} active={props.active}/>)}
      </div>
    )
  }
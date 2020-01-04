import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { levelActive } from "./store/actions";
import { levels } from "./data/Levels";
import { dialogues } from "./data/Dialogues"; 
import { quests } from "./data/Quests"; 
import { IConnection, INpc } from "./data/Types";
import { Dialogue } from "./Dialogue";
import { Quest } from "./Quest";
import { NPC } from "./Npc";
import './App.css';

type infolineProps = {
  line: string | null;
}

const InfoLine = (props: infolineProps) => {
  const infoStyle = {
    top:"200px",
    margin: "0 auto",
    width: "100%",
    height: "50px",
    position: 'absolute' as 'absolute',
    textAlign: 'center' as 'center',
    color: "white"
  }
  return(
  <div style={infoStyle}><h1>{props.line}</h1></div>
  )
}

const Menu = () => {
  const menuStyle = {
    top:"0",
    right: "15px",
    width: "200px",
    height: "200px",
    position: 'absolute' as 'absolute',
    backgroundImage: `url(temp-backg3.png)`,
  }
  return(
    <div style={menuStyle}></div>
  )
}

type EntryProps = {
  c: IConnection,
}

const Entry = (props: EntryProps) => {
  const dispatch = useDispatch();
  const { c } = props;
  const boxStyle = {
    left: c.position.x,
    bottom: c.position.y,
    width: "190px",
    height: "300px",
    position: 'absolute' as 'absolute',
    backgroundImage: `url(${c.image})`,
  }
  return (
    <div style={boxStyle} onClick={() => dispatch(levelActive(c.to))}>
      {c.id}
    </div>
  )
}

const App: React.FC = () => {
  console.log("GSO", useSelector((state: any) => state));
  const dialogueInd = useSelector((state: any) => state.activeDialogue);
  const levelInd = useSelector((state: any) => state.activeLevel);
  const levelState = useSelector((state: any) => state.levels);
  const infoline = useSelector((state: any) => state.infoline);
  const questActive = useSelector((state:any) => state.activeQuest);
  const questsTaken = useSelector((state:any) => state.questsTaken);

  return (
    <div className="App">
      <img src={levels[levelInd].backgrounds[0].image} />
      {levels[levelInd].connections.map((c: IConnection) => <Entry c={c} key={c.id}/>)}
      {levels[levelInd].npcs.map((n: INpc) => <NPC n={n} key={n.id} state={levelState[levelInd]}/>)}
      {dialogueInd!=null ? <Dialogue dialogue={dialogues[dialogueInd]}/> : null}
      {infoline!=null ? <InfoLine line={infoline}/> : null}
      <Menu />
      {questActive!=null ? <Quest active={questActive} quests={questsTaken.map((q: number) => quests[q])} /> : null}
    </div>
  );
}

export default App;

import React, { useState, useContext } from 'react';
import { levels } from "./data/Levels";
import { findDialogue, findLevel } from "./helpers";
import { AppContext } from "./AppContext";
import { ILevel, IConnection, INpc, IDialogue } from "./data/Types";
import { Dialogue } from "./Dialogue";
import './App.css';
let eventLog: Array<string> = [];

type NPCStateProps = { 
  state: string | undefined
}

const NPCState = (props: NPCStateProps) => {
  const imgStyle = {
    height: "100px",
    width: "100px",
    marginTop: "-100px",
    border: "0",
  }

  if(props.state) {
    return <img style={imgStyle} src={props.state+".png"} />
  } else {
    return null;
  }
}

type NPCProps = {
  n: INpc
}
const NPC = (props: NPCProps) => {
  const npcStyle = {
    backgroundImage: `url(${props.n.image})`,
    left: props.n.position.x,
    bottom: props.n.position.y,
    height: "300px",
    width: "230px",
    position: 'absolute' as 'absolute',
    textAlign: 'center' as 'center', 
  }

  const context = useContext(AppContext);

  function triggerEvent(event: any, source: any){
    const type = event.target.dataset.type;
    if(type==="npc" && source.trigger.dialogueId){
      console.log(`Triggered NPC ${source.name} with ${source.trigger.dialogueId}`);
      const dialogue = findDialogue(source.trigger.dialogueId);
      context.setDialogue(dialogue);
    }
  }

  return (
    <div style={npcStyle} data-type='npc' onClick={(e) => triggerEvent(e, props.n)}>
      <NPCState state={props.n.state}/>
    </div>
  )
}

type EntryProps = {
  c: IConnection,
  setLevel: (level: ILevel) => void
}

const Entry = (props: EntryProps) => {
  const {c, setLevel} = props;
  const boxStyle = {
    left: c.position.x,
    bottom: c.position.y,
    width: "190px",
    height: "300px",
    position: 'absolute' as 'absolute',
    backgroundImage: `url(${c.image})`,
  }
  return (
    <div style={boxStyle} onClick={() =>setLevel(findLevel(c.to))}>
      {c.to}
    </div>
  )
}

const App: React.FC = () => {
  const [level, setLevel] = useState(levels[0]);
  const [dialogue, setDialogue] = useState(null as IDialogue | null);
  const cleanDialogue = () => {
    setDialogue(null);
  }

  const findEvent = (event: string) => {
    return eventLog.some(e => e===event);
  }

  const addEvent = (event: string) => {
    eventLog.push(event);
  }

  const appContextValue = {
    setDialogue,
    cleanDialogue,
    findEvent,
    addEvent
  }
  
  return (
    <AppContext.Provider value={appContextValue}>
    <div className="App">
      <img src={level.backgrounds
      [0].image} />
      {level.connections.map(c => <Entry c={c} setLevel={setLevel} key={c.id}/>)}
      {level.npcs.map(n => <NPC n={n} key={n.id}/>)}
      {dialogue ? <Dialogue dialogue={dialogue}/> : null}
    </div>
    </AppContext.Provider>
  );
}

export default App;

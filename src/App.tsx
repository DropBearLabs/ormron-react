import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { levelActive } from "./store/actions";
import { levels } from "./data/Levels";
import { dialogues } from "./data/Dialogues"; 
import { IConnection, INpc } from "./data/Types";
import { Dialogue } from "./Dialogue";
import { NPC } from "./Npc";
import './App.css';

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

  return (
    <div className="App">
      <img src={levels[levelInd].backgrounds[0].image} />
      {levels[levelInd].connections.map((c: IConnection) => <Entry c={c} key={c.id}/>)}
      {levels[levelInd].npcs.map((n: INpc) => <NPC n={n} key={n.id} state={levelState[levelInd]}/>)}
      {dialogueInd!=null ? <Dialogue dialogue={dialogues[dialogueInd]}/> : null}
    </div>
  );
}

export default App;

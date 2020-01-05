import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { displayQuest, levelActive, displayMap } from "./store/actions";
import { dialogues } from "./data/Dialogues";
import { quests } from "./data/Quests";
import { levels } from "./data/Levels";
import { maps } from "./data/Maps";
import { INpc, IConnection } from "./data/Types";
import { NPC } from "./Npc";
import { Quest } from "./Quest";
import { Dialogue } from "./Dialogue";
import { Map } from "./Map";

import "./App.css";

interface IInfolineProps {
  line: string | null;
}

const InfoLine = (props: IInfolineProps) => {
  const infoStyle = {
    color: "white",
    margin: "0 auto",
    top: "200px",
    height: "50px",
    width: "100%",
    position: "absolute" as "absolute",
    textAlign: "center" as "center"
  };
  return (
    <div style={infoStyle}>
      <h1>{props.line}</h1>
    </div>
  );
};

interface IMenuProps {
  quest: any;
}

const Menu = (props: IMenuProps) => {
  const dispatch = useDispatch();
  const menuStyle = {
    top: "0",
    right: "15px",
    width: "200px",
    height: "200px",
    position: "absolute" as "absolute",
    backgroundImage: `url(temp-backg3.png)`
  };

  const iconMapStyle = {
    width: "70px",
    height: "70px",
    position: "relative" as "relative",
    top: "100px"
  };

  const iconQuestStyle = {
    width: "70px",
    height: "70px",
    position: "relative" as "relative",
    top: "130px"
  };

  const iconInventoryStyle = {
    width: "70px",
    height: "70px",
    position: "relative" as "relative",
    top: "30px",
    left: "130px"
  };

  return (
    <div style={menuStyle}>
      <img
        style={iconMapStyle}
        src="temp-icon3.png"
        onClick={() => dispatch(displayMap(0))}
      />
      <img
        style={iconQuestStyle}
        src="temp-icon4.png"
        onClick={() => dispatch(displayQuest(props.quest[0]))}
      />
      <img style={iconInventoryStyle} src="temp-icon5.png" />
    </div>
  );
};

interface IEntryProps {
  c: IConnection;
  state: number[];
}

const Entry = (props: IEntryProps) => {
  const dispatch = useDispatch();
  const { c } = props;
  const boxStyle = {
    left: c.position.x,
    bottom: c.position.y,
    width: "190px",
    height: "300px",
    position: "absolute" as "absolute",
    backgroundImage: `url(${c.image})`
  };
  const isOpen = (id: number) => {
    return props.state.indexOf(id) !== -1;
  };

  return (
    <div
      style={boxStyle}
      onClick={() => (isOpen(c.to) ? dispatch(levelActive(c.to)) : null)}
    >
      {c.id}
    </div>
  );
};

const App: React.FC = () => {
  const dialogueInd = useSelector((state: any) => state.activeDialogue);
  const levelInd = useSelector((state: any) => state.activeLevel);
  const levelState = useSelector((state: any) => state.levels);
  const infoline = useSelector((state: any) => state.infoline);
  const questActive = useSelector((state: any) => state.activeQuest);
  const questsTaken = useSelector((state: any) => state.questsTaken);
  const questsState = useSelector((state: any) => state.quests);
  const mapsState = useSelector((state: any) => state.maps);
  const mapId = useSelector((state: any) => state.activeMap);
  const chapter = useSelector((state: any) => state.chapter);

  return (
    <div className="App">
      <img src={levels[levelInd].backgrounds[0].image} />
      {levels[levelInd].connections.map((c: IConnection) => (
        <Entry c={c} key={c.id} state={mapsState} />
      ))}
      {levels[levelInd].npcs.map((n: INpc) => (
        <NPC n={n} key={n.id} state={levelState[levelInd]} />
      ))}
      {dialogueInd != null ? (
        <Dialogue dialogue={dialogues[dialogueInd]} />
      ) : null}
      {infoline != null ? <InfoLine line={infoline} /> : null}
      <Menu quest={questsTaken} />
      {questActive != null ? (
        <Quest
          active={questActive}
          state={questsState}
          quests={questsTaken.map((q: number) => quests[q])}
        />
      ) : null}
      {mapId != null ? (
        <Map chapter={chapter} map={maps[mapId]} state={mapsState} />
      ) : null}
    </div>
  );
};

export default App;

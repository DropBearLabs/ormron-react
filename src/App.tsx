import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  displayQuest,
  activeMap,
  showInfoline,
  levelActive,
  updateQuest
} from "./store/actions";
import { dialogues } from "./data/Dialogues";
import { quests } from "./data/Quests";
import { levels } from "./data/Levels";
import { maps } from "./data/Maps";
import { INpc, IConnection } from "./data/Types";
import { NPC } from "./Npc";
import { Quest } from "./Quest";
import { Dialogue } from "./Dialogue";
import { Party } from "./Party";
import { Map } from "./Map";

import "./App.css";
import { findConnection, findTrigger } from "./helpers";
import { findNpc } from "./helpers";

let party: string[] = ["maya"];

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
        onClick={() => dispatch(activeMap(0))}
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
  levelState: any;
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

  const firstTimeVisit = () => {
    return props.levelState[c.id] === undefined;
  };

  const triggerEntry = (triggers: any) => {
    if (!triggers) {
      return;
    }
    triggers.forEach((t: number) => triggerEvent(t));
  };

  function triggerEvent(id: number) {
    const trigger = findTrigger(id);
    if (c.infoline) {
      dispatch(showInfoline(c.infoline));
      setTimeout(() => {
        dispatch(showInfoline(null));
      }, 2000);
    }
    switch (trigger.triggerType) {
      case "LEVEL_ACTIVE":
        if (isOpen(trigger.data)) {
          dispatch(levelActive(trigger.data));
        }
        return;
      case "QUEST_UPDATE":
        dispatch(updateQuest(trigger.data));
        return;
      default:
        return;
    }
  }

  return (
    <div style={boxStyle} onClick={() => triggerEntry(c.triggers)}>
      {c.name}
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
  const party = useSelector((state: any) => state.selectParty);

  return (
    <div className="App">
      <img src={levels[levelInd].backgrounds[0].image} />
      {levels[levelInd].connections.map((c: number) => {
        const connection = findConnection(c);
        return (
          <Entry
            c={connection}
            key={connection.id}
            state={mapsState}
            levelState={levelState[levelInd]}
          />
        );
      })}
      {levels[levelInd].npcs.map((n: number) => {
        const npc = findNpc(n);
        return <NPC npc={npc} key={npc.id} state={levelState[levelInd]} />;
      })}
      {dialogueInd !== null ? (
        <Dialogue dialogue={dialogues[dialogueInd]} />
      ) : null}
      {infoline !== null ? <InfoLine line={infoline} /> : null}
      <Menu quest={questsTaken} />
      {questActive !== null ? (
        <Quest
          active={questActive}
          state={questsState}
          quests={questsTaken.map((q: number) => quests[q])}
        />
      ) : null}
      {mapId !== null ? (
        <Map chapter={chapter} map={maps[mapId]} state={mapsState} />
      ) : null}
      {party !== null ? <Party party={party} /> : null}
    </div>
  );
};

export default App;

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { displayQuest, activeMap } from "./store/actions";
import { dialogues } from "./data/Dialogues";
import { maps } from "./data/Maps";
import { NPC } from "./Npc";
import { Quest } from "./Quest";
import { Dialogue } from "./Dialogue";
import { Party } from "./Party";
import { Map } from "./Map";
import { Connection } from "./Connection";

import { findConnection, findLevel, findQuest } from "./data/helpers";
import { findNpc } from "./data/helpers";

import "./App.css";
import { ILevel, IGso } from "./data/Types";
import { connections } from "./data/Connections";

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
  quest: IGso;
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
        //onClick={() => dispatch(activeMap(0))}
      />
      <img
        style={iconQuestStyle}
        src="temp-icon4.png"
        //onClick={() => dispatch(displayQuest(props.quest[0]))}
      />
      <img style={iconInventoryStyle} src="temp-icon5.png" />
    </div>
  );
};

const App: React.FC = () => {
  const dialogueInd = useSelector((state: IGso) => state.activeDialogue);
  const levelId = useSelector((state: IGso) => state.activeLevel);
  const levelState = useSelector((state: IGso) => state.levels);
  const infoline = useSelector((state: IGso) => state.infoline);
  const questActive = useSelector((state: IGso) => state.activeQuest);
  const questsTaken = useSelector((state: IGso) => state.questsTaken);
  const questsState = useSelector((state: IGso) => state.quests);
  const mapsState = useSelector((state: IGso) => state.maps);
  const mapId = useSelector((state: IGso) => state.activeMap);
  const chapter = useSelector((state: IGso) => state.chapter);
  const party = useSelector((state: IGso) => state.selectParty);
  const partyMembers = useSelector((state: IGso) => state.party);
  const globalevents = useSelector((state: IGso) => state.globalEvents);

  const currentLevelState = (id: string) => {
    const current = levelState.find((l: any) => l.id === id);
    if (!current) {
      //Create this level in GSO
      throw Error("Adiition of new levels to GSO is not implemented");
    }
    return current;
  };

  return (
    <div className="App">
      <img src={findLevel(levelId).backgrounds[0].image} />
      {findLevel(levelId).connections.map((c: number) => {
        const connection = findConnection(c);
        // @ts-ignore
        const connectionState = (currentLevelState(levelId).connections[
          connection.name
        ] as unknown) as string;
        return (
          <Connection
            globalevents={globalevents}
            connection={connection}
            key={connection.id}
            connectionState={connectionState}
            party={partyMembers}
          />
        );
      })}
      {findLevel(levelId).npcs.map((n: number) => {
        const npc = findNpc(n);
        return (
          <NPC npc={npc} key={npc.id} state={currentLevelState(levelId)} />
        );
      })}
      {dialogueInd !== null ? (
        <Dialogue dialogue={dialogues[dialogueInd]} quests={questsState} />
      ) : null}
      {infoline !== null ? <InfoLine line={infoline} /> : null}
      {/*<Menu quest={questsTaken} />
      {questActive !== null ? (
        <Quest
          active={questActive}
          allTakenQuests={questsState}
          quests={questsTaken.map((q: string) => findQuest(q))}
        />
      ) : null}
      {mapId !== null ? (
        <Map chapter={chapter} map={maps[mapId]} state={mapsState} />
      ) : null}*/}
      {party !== null ? <Party party={partyMembers} /> : null}
    </div>
  );
};

export default App;

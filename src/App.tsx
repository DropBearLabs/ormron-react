import React from "react";
import { useSelector } from "react-redux";

import { dialogues } from "./data/Dialogues";
import { maps } from "./data/Maps";
import { NPC } from "./Npc";
import { Dialogue } from "./Dialogue";
import { Party } from "./Party";
import { Map } from "./Map";
import { Connection } from "./Connection";

import {
  findConnection,
  findLevel,
  findQuest,
  connectionLevelStatus,
  npcLevelStatus
} from "./data/helpers";
import { findNpc } from "./data/helpers";
import { runInDebug } from "./debug/debug.js";

import "./App.css";
import { IGso } from "./types/Types";
import { Menu } from "./Menu";
import { Quest } from "./Quest";
import { IConnectionLevel, IGsoLevel, INPCLevel } from "./types/TypeLevels";
import { Characters } from "./Characters";

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

const App: React.FC = () => {
  const showDialogue = useSelector((state: IGso) => state.showDialogue);
  const activeLevel = useSelector((state: IGso) => state.activeLevel);
  const levelState = useSelector((state: IGso) => state.levels);
  const infoline = useSelector((state: IGso) => state.infoline);
  const showQuests = useSelector((state: IGso) => state.showQuests);
  const questsTaken = useSelector((state: IGso) => state.questsTaken);
  const showMap = useSelector((state: IGso) => state.showMap);
  const showParty = useSelector((state: IGso) => state.showParty);
  const showCharacters = useSelector((state: IGso) => state.showCharacters);

  const currentLevelState = (id: string) => {
    const current = levelState.find((l: IGsoLevel) => l.id === id);
    if (!current) {
      //Create this level in GSO
      throw Error("Adiition of new levels to GSO is not implemented");
    }
    return current;
  };

  const debugStyle = {
    position: "absolute" as "absolute",
    top: "0px",
    left: "0px"
  };

  return (
    <div className="App">
      <img
        alt="level-background"
        src={findLevel(activeLevel).backgrounds[0].image}
      />
      <button style={debugStyle} onClick={() => runInDebug()}>
        RUN QUEST1
      </button>
      {findLevel(activeLevel).connections.map((c: string) => {
        const connection = findConnection(c);
        const connectionId = (connection.id as unknown) as IConnectionLevel;
        const connectionState = connectionLevelStatus(
          currentLevelState(activeLevel),
          connectionId
        );

        return (
          <Connection
            connection={connection}
            key={connection.id}
            connectionState={connectionState}
          />
        );
      })}
      {findLevel(activeLevel).npcs.map((n: string) => {
        const npc = findNpc(n);
        const npcId = (npc.id as unknown) as INPCLevel;
        const npcState = npcLevelStatus(currentLevelState(activeLevel), npcId);
        if (npc.available) {
          return (
            <NPC
              npc={npc}
              key={npc.id}
              npcTrigger={npcState}
              scene={activeLevel}
            />
          );
        }
      })}
      {showDialogue && <Dialogue dialogue={dialogues[showDialogue]} />}
      {infoline && <InfoLine line={infoline} />}
      <Menu />
      {showQuests && (
        <Quest quests={questsTaken.map((q: string) => findQuest(q))} />
      )}
      {showMap && <Map map={maps[0]} />}
      {showParty && <Party />}
      {showCharacters && <Characters />}
    </div>
  );
};

export default App;

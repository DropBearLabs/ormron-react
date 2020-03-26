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
import {
  runInDebugAll,
  runInDebugNell,
  runInDebugTara,
  runInDebugGrey
} from "./debug/debug.js";

import "./App.css";
import { IGso, ILevelTrigger } from "./types/Types";
import { Menu } from "./Menu";
import { Quest } from "./Quest";
import { IConnectionLevel, IGsoLevel, INPCLevel } from "./types/TypeLevels";
import { Characters } from "./Characters";
import { LevelTrigger } from "./LevelTrigger";

const Debug = () => (
  <>
    <button
      style={{ position: "absolute", top: 0, left: 200 }}
      onClick={() => runInDebugAll()}
    >
      RUN ALL
    </button>
    <button
      style={{ position: "absolute", top: 0, left: 300 }}
      onClick={() => runInDebugNell()}
    >
      RUN NELL
    </button>
    <button
      style={{ position: "absolute", top: 0, left: 400 }}
      onClick={() => runInDebugTara()}
    >
      RUN TARA
    </button>
    <button
      style={{ position: "absolute", top: 0, left: 500 }}
      onClick={() => runInDebugGrey()}
    >
      RUN GREY
    </button>
  </>
);

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

  return (
    <div className="App">
      {findLevel(activeLevel).triggers.map((t: ILevelTrigger) => {
        return <LevelTrigger trigger={t} />;
      })}
      <img
        alt="level-background"
        src={findLevel(activeLevel).backgrounds[0].image}
      />
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
        if (npc && npcState !== false) {
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
      {showDialogue !== null ? (
        <Dialogue dialogue={dialogues[showDialogue]} />
      ) : null}
      {infoline !== null ? <InfoLine line={infoline} /> : null}
      <Menu />
      {showQuests !== null ? (
        <Quest quests={questsTaken.map((q: string) => findQuest(q))} />
      ) : null}
      {showMap !== null ? <Map map={maps[0]} /> : null}
      {showParty !== null ? <Party /> : null}
      {showCharacters !== false ? <Characters /> : null}
      <Debug />
    </div>
  );
};

export default App;

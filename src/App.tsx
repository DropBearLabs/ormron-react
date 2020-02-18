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
  const questsState = useSelector((state: IGso) => state.quests);
  const mapsState = useSelector((state: IGso) => state.maps);
  const showMap = useSelector((state: IGso) => state.showMap);
  const chapter = useSelector((state: IGso) => state.chapter);
  const showParty = useSelector((state: IGso) => state.showParty);
  const party = useSelector((state: IGso) => state.party);
  const partyState = useSelector((state: IGso) => state.charactersData);
  const showCharacters = useSelector((state: IGso) => state.showCharacters);
  const globalevents = useSelector((state: IGso) => state.globalEvents);

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
            globalevents={globalevents}
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
      {showDialogue !== null ? (
        <Dialogue dialogue={dialogues[showDialogue]} />
      ) : null}
      {infoline !== null ? <InfoLine line={infoline} /> : null}
      {<Menu showQuests={showQuests} quests={questsState} />}
      {showQuests !== null ? (
        <Quest
          active={showQuests}
          allTakenQuests={questsState}
          quests={questsTaken.map((q: string) => findQuest(q))}
        />
      ) : null}
      {showMap !== null ? (
        <Map chapter={chapter} map={maps[0]} state={mapsState} />
      ) : null}
      {showParty !== null ? (
        <Party party={party} showParty={showParty} />
      ) : null}
      {showCharacters !== false ? (
        <Characters party={party} partyState={partyState} />
      ) : null}
    </div>
  );
};

export default App;

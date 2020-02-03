import React from "react";
import { useSelector } from "react-redux";

import { dialogues } from "./data/Dialogues";
import { maps } from "./data/Maps";
import { NPC } from "./Npc";
import { Dialogue } from "./Dialogue";
import { Party } from "./Party";
import { Map } from "./Map";
import { Connection } from "./Connection";

import { findConnection, findLevel, findQuest } from "./data/helpers";
import { findNpc } from "./data/helpers";

import "./App.css";
import { IGso, IGsoLevel } from "./data/Types";
import { Menu } from "./Menu";
import { Quest } from "./Quest";

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
  const selectParty = useSelector((state: IGso) => state.selectParty);
  const party = useSelector((state: IGso) => state.party);
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
          />
        );
      })}
      {findLevel(levelId).npcs.map((n: number) => {
        const npc = findNpc(n);
        // @ts-ignore
        const npcState = (currentLevelState(levelId).npcs[
          npc.id
        ] as unknown) as number | false;
        return <NPC npc={npc} key={npc.id} npcTrigger={npcState} />;
      })}
      {dialogueInd !== null ? (
        <Dialogue dialogue={dialogues[dialogueInd]} />
      ) : null}
      {infoline !== null ? <InfoLine line={infoline} /> : null}
      {<Menu activeQuest={questActive} quests={questsState} />}
      {console.log("questActive", questActive)}
      {questActive !== null ? (
        <Quest
          active={questActive}
          allTakenQuests={questsState}
          quests={questsTaken.map((q: string) => findQuest(q))}
        />
      ) : null}
      {/*mapId !== null ? (
        <Map chapter={chapter} map={maps[mapId]} state={mapsState} />
      ) : null}*/}
      {selectParty !== null ? (
        <Party party={party} selectParty={selectParty} />
      ) : null}
    </div>
  );
};

export default App;

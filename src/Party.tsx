import React, { useState } from "react";
import {
  IPartyMember,
  IGsoParty,
  MainCharacters
} from "./types/TypeCharacters";
import { showParty, setParty } from "./store/actions";
import { useDispatch, useSelector } from "react-redux";
import { allParty } from "./data/Characters";
import { findPartyMember } from "./data/helpers";
import { IGso } from "./types/Types";

interface IPartyMemberProps {
  char: IPartyMember;
  currentSelection: IGsoParty | null;
  selectMember: (id: MainCharacters) => void;
}
const PartyMember = (props: IPartyMemberProps) => {
  const { char, currentSelection, selectMember } = props;
  const charStyle = {
    display: "inline" as "inline",
    marginLeft: "-40px",
    marginRight: "-35px",
    textAlign: "center" as "center",
    position: "relative" as "relative"
  };

  const getImage = (id: string) => {
    const character = findPartyMember(id as MainCharacters);
    let image = character.image;
    if (!char.opened) {
      image = character.placeholder;
    }
    const charId = character.id;
    if (currentSelection && currentSelection[charId]) {
      image = character.selected;
    }
    return image;
  };

  return (
    <div style={charStyle}>
      <img
        src={getImage(char.id)}
        onClick={() => (char.opened ? selectMember(props.char.id) : null)}
      />
    </div>
  );
};

export const Party = () => {
  const displayParty = useSelector((state: IGso) => state.showParty);
  const party = useSelector((state: IGso) => state.party);
  const dispatch = useDispatch();
  const partyStyle = {
    top: "0",
    right: "50px",
    height: "750px",
    width: "930px",
    backgroundSize: "cover",
    position: "absolute" as "absolute",
    textAlign: "center" as "center",
    backgroundImage: `url(temp-backg5.png)`,
    paddingTop: "70px"
  };

  const closeButtonStyle = {
    position: "relative" as "relative",
    top: "50px",
    left: "340px"
  };

  const startButtonStyle = {
    position: "absolute" as "absolute",
    bottom: "100px",
    width: "80%",
    right: "100px"
  };
  const [currentSelection, setSelection] = useState<IGsoParty | null>(
    displayParty
  );

  const selectMember = (id: MainCharacters) => {
    if (currentSelection !== null) {
      currentSelection[id] = !currentSelection[id];
    }

    const select =
      currentSelection && Object.values(currentSelection).filter(x => x);

    if (select && select.length <= 3) {
      setSelection(currentSelection && { ...currentSelection });
    }
  };

  const setPartyExit = () => {
    if (currentSelection) {
      dispatch(setParty(currentSelection));
      dispatch(showParty(null));
    }
  };

  return (
    <div style={partyStyle}>
      <h1>PARTY</h1>
      {allParty.map((char: IPartyMember) => {
        if (party && party.indexOf(char.id) !== -1) {
          char.opened = true;
        }
        return (
          <PartyMember
            char={char}
            key={char.id}
            selectMember={selectMember}
            currentSelection={currentSelection}
          />
        );
      })}
      <button
        style={startButtonStyle}
        onClick={() => setPartyExit()}
        id="select_party_button"
      >
        Let'sGo
      </button>
    </div>
  );
};

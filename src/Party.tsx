import React, { useState } from "react";
import { IPartyMember, IGsoParty } from "./types/Types";
import { selectParty, setParty } from "./store/actions";
import { useDispatch } from "react-redux";
import { MainCharacters } from "./types/TypeActions";

const allParty: IPartyMember[] = [
  {
    id: MainCharacters.grey,
    name: "Grey",
    image: "temp-main4.png",
    placeholder: "temp-main4black.png",
    selected: "temp-main4selected.png",
    opened: false
  },
  {
    id: MainCharacters.dart,
    name: "Dart",
    image: "temp-main5.png",
    placeholder: "temp-main5black.png",
    selected: "temp-main5selected.png",
    opened: true
  },
  {
    id: MainCharacters.maya,
    name: "Maya",
    image: "temp-main1.png",
    placeholder: "temp-main1black.png",
    selected: "temp-main1selected.png",
    opened: false
  },
  {
    id: MainCharacters.nell,
    name: "Nell",
    image: "temp-main2.png",
    placeholder: "temp-main2black.png",
    selected: "temp-main2selected.png",
    opened: true
  },
  {
    id: MainCharacters.tara,
    name: "Tara",
    image: "temp-main3.png",
    placeholder: "temp-main3black.png",
    selected: "temp-main3selected.png",
    opened: false
  }
];

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
    const character = allParty.find((p: IPartyMember) => p.id === id);
    if (!character) {
      throw Error("Unknown character id" + id);
    }
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

interface IPartyProps {
  party: string[] | null;
  selectParty: IGsoParty | null;
}

export const Party = (props: IPartyProps) => {
  const dispatch = useDispatch();
  const partyStyle = {
    top: "0",
    right: "15px",
    height: "750px",
    width: "1024px",
    position: "absolute" as "absolute",
    textAlign: "center" as "center",
    backgroundImage: `url(temp-backg4.png)`
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
    props.selectParty
  );

  const selectMember = (id: MainCharacters) => {
    if (currentSelection !== null) {
      currentSelection[id] = !currentSelection[id];
    }

    const select =
      currentSelection &&
      Object.values(currentSelection).filter(
        (c: { s: string; b: boolean }) => c
      );
    if (select && select.length <= 3) {
      setSelection(currentSelection && { ...currentSelection });
    }
  };

  const setPartyExit = () => {
    if (currentSelection) {
      dispatch(setParty(currentSelection));
      dispatch(selectParty(null));
    }
  };

  return (
    <div style={partyStyle}>
      <img
        style={closeButtonStyle}
        src="temp-icon2.png"
        onClick={() => dispatch(selectParty(null))}
      />
      <h1>PARTY</h1>
      {allParty.map((char: IPartyMember) => {
        if (props.party && props.party.indexOf(char.id) !== -1) {
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
      <button style={startButtonStyle} onClick={() => setPartyExit()}>
        Let'sGo
      </button>
    </div>
  );
};

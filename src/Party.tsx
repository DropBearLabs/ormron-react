import React, { useState } from "react";
import { IPartyMember } from "./data/Types";
import { selectParty } from "./store/actions";
import { useDispatch } from "react-redux";
let currentSelection: string[] = ["maya"];

const allParty: IPartyMember[] = [
  {
    id: "grey",
    name: "Grey",
    image: "temp-main4.png",
    placeholder: "temp-main4black.png",
    selected: "temp-main4selected.png",
    opened: false
  },
  {
    id: "dart",
    name: "Dart",
    image: "temp-main5.png",
    placeholder: "temp-main5black.png",
    selected: "temp-main5selected.png",
    opened: false
  },
  {
    id: "maya",
    name: "Maya",
    image: "temp-main1.png",
    placeholder: "temp-main1black.png",
    selected: "temp-main1selected.png",
    opened: false
  },
  {
    id: "nell",
    name: "Nell",
    image: "temp-main2.png",
    placeholder: "temp-main2black.png",
    selected: "temp-main2selected.png",
    opened: false
  },
  {
    id: "tara",
    name: "Tara",
    image: "temp-main3.png",
    placeholder: "temp-main3black.png",
    selected: "temp-main3selected.png",
    opened: false
  }
];

interface IPartyMemberProps {
  char: IPartyMember;
  select: any;
}
const PartyMember = (props: IPartyMemberProps) => {
  const charStyle = {
    display: "inline" as "inline",
    marginLeft: "-40px",
    marginRight: "-35px",
    textAlign: "center" as "center",
    position: "relative" as "relative"
  };

  const buttonStyle = {
    position: "absolute" as "absolute",
    bottom: "-20px",
    left: "80px"
  };

  const setSelection = (id: string) => {
    if (currentSelection.length > 2) {
      currentSelection.push(id);
      currentSelection.splice(1, 1);
      return id;
    } else {
      currentSelection.push(id);
      return id;
    }
  };
  const getImage = (id: any) => {
    const char = allParty.filter((p: any) => p.id === id);
    if (char.length !== 1) {
      throw Error("Unknown character id" + id);
    }
    let image = char[0].image;
    if (!props.char.opened) {
      image = char[0].placeholder;
    }
    if (currentSelection.indexOf(id) !== -1) {
      image = char[0].selected;
    }
    return image;
  };

  const canBeSelected =
    props.char.opened && currentSelection.indexOf(props.char.id) === -1;
  return (
    <div style={charStyle}>
      <img src={getImage(props.char.id)} />
      {canBeSelected ? (
        <button
          style={buttonStyle}
          onClick={() => props.select(setSelection(props.char.id))}
        >
          Select
        </button>
      ) : null}
    </div>
  );
};

interface IPartyProps {
  party: string[] | null;
  required?: string;
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

  const [selected, select] = useState("maya");
  if (props.required) {
    currentSelection.push(props.required);
  }
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
        return <PartyMember char={char} key={char.id} select={select} />;
      })}
    </div>
  );
};

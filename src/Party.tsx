import React, { useState } from "react";
import { IPartyMember } from "./data/Types";
import { isAbsolute } from "path";

let allParty: IPartyMember[] = [
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

  const [selected, select] = useState(null);
  return (
    <div style={charStyle}>
      <img
        src={props.char.opened ? props.char.image : props.char.placeholder}
      />
      {props.char.opened && props.char.id !== "maya" ? (
        <button style={buttonStyle} onClick={() => select}>
          Select
        </button>
      ) : null}
    </div>
  );
};

interface IPartyProps {
  party: string[] | null;
}

export const Party = (props: IPartyProps) => {
  const partyStyle = {
    top: "0",
    right: "15px",
    height: "750px",
    width: "1024px",
    position: "absolute" as "absolute",
    textAlign: "center" as "center",
    backgroundImage: `url(temp-backg4.png)`
  };

  return (
    <div style={partyStyle}>
      <h1>PARTY</h1>
      {allParty.map((char: IPartyMember) => {
        if (props.party && props.party.indexOf(char.id) !== -1) {
          char.opened = true;
        }
        return <PartyMember char={char} key={char.id} />;
      })}
    </div>
  );
};

import React from "react";
import { allParty } from "./data/Characters";
import { IPartyMember, IGsoParty } from "./types/Types";

const Character = ({ character }: { character: string }) => {
  const charStyle = {
    top: "50px",
    left: "50px",
    position: "absolute" as "absolute"
  };

  const characterP = allParty.find((p: IPartyMember) => p.id === character);
  if (!characterP) {
    throw Error("Unknown character id" + character);
  }
  return (
    <div style={charStyle}>
      <h1>{characterP.name}</h1>
      <img src={characterP.image} />
    </div>
  );
};

interface ICharactersProps {
  //party: IGsoParty;
}
export const Characters = (props: ICharactersProps) => {
  const partyStyle = {
    top: "0",
    right: "50px",
    height: "750px",
    width: "930px",
    position: "absolute" as "absolute",
    textAlign: "center" as "center",
    backgroundImage: `url(temp-backg5.png)`,
    backgroundSize: "cover"
  };

  const closeButtonStyle = {
    position: "relative" as "relative",
    top: "50px",
    left: "340px"
  };
  return <div style={partyStyle}></div>;
};

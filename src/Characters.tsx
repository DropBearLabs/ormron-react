import React, { useState, SetStateAction } from "react";
import { IPartyMember, ICharactersData, ICharacterData } from "./types/Types";
import { MainCharacters } from "./types/TypeActions";
import { findPartyMember } from "./data/helpers";

interface ICharacterProps {
  character: IPartyMember;
  characterData: ICharacterData;
  setCharacter: React.Dispatch<SetStateAction<MainCharacters>>;
}
const Character = (props: ICharacterProps) => {
  const { character, characterData, setCharacter } = props;
  const charStyle = {
    top: "50px",
    left: "50px",
    position: "absolute" as "absolute"
  };

  return (
    <div style={charStyle}>
      <h1>{character.name}</h1>
      <img src={character.image} />
    </div>
  );
};

interface ICharactersProps {
  party: MainCharacters[];
  partyState: ICharactersData;
}
export const Characters = (props: ICharactersProps) => {
  const [char, setChar] = useState<MainCharacters>(MainCharacters.maya);
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
  const character = findPartyMember(char);
  const characterData = props.partyState[char];
  return (
    <div style={partyStyle}>
      <Character
        character={character}
        characterData={characterData}
        setCharacter={setChar}
      />
    </div>
  );
};

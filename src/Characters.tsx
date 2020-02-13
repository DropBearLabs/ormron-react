import React, { useState, SetStateAction } from "react";
import {
  IPartyMember,
  ICharactersData,
  ICharacterData,
  MainCharacters,
  ISpells,
  ICharacterSpell
} from "./types/TypeCharacters";
import { findPartyMember } from "./data/helpers";

interface ISpellDescriptionProps {
  spell: ISpells | null;
}
const SpellDescription = (props: ISpellDescriptionProps) => {
  const { spell } = props;
  const spellStyle = {
    position: "absolute" as "absolute",
    top: "150px",
    right: "100px",
    width: "450px",
    height: "250px"
  };
  return <div style={spellStyle}>{spell}</div>;
};

interface ISpellsProps {
  spells: ISpells[];
  setSpell: React.Dispatch<SetStateAction<ICharacterSpell>>;
}
const Spells = (props: ISpellsProps) => {
  const spellsStyle = {
    position: "absolute" as "absolute",
    top: "100px",
    left: "55px",
    border: "3px solid black",
    borderRadius: "150px",
    width: "300px",
    height: "300px"
  };

  return <div style={spellsStyle}></div>;
};

interface ICharacterProps {
  character: IPartyMember;
  characterData: ICharacterData;
  setCharacter: React.Dispatch<SetStateAction<MainCharacters>>;
}
const Character = (props: ICharacterProps) => {
  const { character, characterData, setCharacter } = props;
  const [spell, setSpell] = useState(null);
  const charStyle = {
    top: "100px",
    left: "100px",
    position: "absolute" as "absolute"
  };

  return (
    <div>
      <img src={character.image} style={charStyle} />
      <Spells spells={characterData.spells} setSpell={setSpell} />
      <SpellDescription spell={spell} />
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
  const topMenuStyle = {
    display: "inline-block",
    marginLeft: "1em",
    marginRight: "1em"
  };

  const character = findPartyMember(char);

  const findNextCharacter = () => {
    const currentInd = props.party.indexOf(char);
    let next = 0;
    if (currentInd < props.party.length - 1) {
      next = currentInd + 1;
    }
    setChar(props.party[next]);
    return findPartyMember(props.party[next]);
  };

  const characterData = props.partyState[char];
  return (
    <div style={partyStyle}>
      <img style={closeButtonStyle} src="temp-icon2.png" onClick={() => {}} />
      <ul>
        <li style={topMenuStyle}>
          <button onClick={findNextCharacter}>{"<<"}</button>
        </li>
        <li style={topMenuStyle}>
          <h1>{character.name}</h1>
        </li>
        <li style={topMenuStyle}>
          <button onClick={findNextCharacter}>{">>"}</button>
        </li>
      </ul>
      <Character
        character={character}
        characterData={characterData}
        setCharacter={setChar}
      />
    </div>
  );
};

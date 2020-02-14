import React, { useState, SetStateAction } from "react";
import {
  IPartyMember,
  ICharactersData,
  ICharacterData,
  MainCharacters,
  ISpell
} from "./types/TypeCharacters";
import { findPartyMember } from "./data/helpers";
import { SpellsCircle, SpellDescription, SpellsAll } from "./Spells";
import { useDispatch } from "react-redux";
import { showCharacters } from "./store/actions";

interface ICharacterStatsProps {
  characterData: ICharacterData;
}

const CharacterStats = (props: ICharacterStatsProps) => {
  const characterStateStyle = {
    position: "absolute" as "absolute",
    bottom: "30px",
    left: "100px",
    width: "300px",
    height: "250px",
    textAlign: "left" as "left"
  };
  return (
    <div style={characterStateStyle}>
      <div>Life: {props.characterData.life}</div>
      <div>Essence: {props.characterData.mana}</div>
      <div>Physical Attack: {props.characterData.attack_physical}</div>
      <div>Magical Attack: {props.characterData.attack_magic}</div>
    </div>
  );
};

interface ICharacterProps {
  character: IPartyMember;
  characterData: ICharacterData;
}
const Character = (props: ICharacterProps) => {
  const { character, characterData } = props;
  const [spell, setSpell] = useState(characterData.spells[0]);
  const charStyle = {
    top: "100px",
    left: "100px",
    position: "absolute" as "absolute"
  };

  return (
    <div>
      <img src={character.image} style={charStyle} />
      <SpellsCircle
        spells={characterData.spells.filter((c: ISpell) => c.taken)}
        setSpell={setSpell}
      />
      <SpellDescription spell={spell} />
      <SpellsAll spells={characterData.spells} setSpell={setSpell} />
    </div>
  );
};

interface ICharactersProps {
  party: MainCharacters[];
  partyState: ICharactersData;
}
export const Characters = (props: ICharactersProps) => {
  const [char, setChar] = useState<MainCharacters>(MainCharacters.maya);
  const dispatch = useDispatch();
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
      <img
        style={closeButtonStyle}
        src="temp-icon2.png"
        onClick={() => dispatch(showCharacters(false))}
      />
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
      <Character character={character} characterData={characterData} />
      <CharacterStats characterData={characterData} />
    </div>
  );
};

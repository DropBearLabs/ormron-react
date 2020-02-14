import React, { useState, SetStateAction } from "react";
import {
  IPartyMember,
  ICharactersData,
  ICharacterData,
  MainCharacters,
  Spells,
  ICharacterSpell,
  ISpell
} from "./types/TypeCharacters";
import { findPartyMember, findSpell } from "./data/helpers";
import { IPoint } from "./types/Types";
import { spells } from "./data/Spells";
import { SSL_OP_NETSCAPE_CHALLENGE_BUG } from "constants";

interface ISpellIconProps {
  spell: ISpell;
  spellData: ICharacterSpell;
  setSpell: any;
  position: IPoint;
}
const SpellIcon = (props: ISpellIconProps) => {
  const iconStyle = {
    position: "absolute" as "absolute",
    bottom: props.position.y,
    left: props.position.x,
    width: "50px",
    height: "50px",
    borderRadius: "25px",
    backgroundImage: `url(${props.spellData.image}`,
    opacity: props.spell.available ? "1" : "0.3"
  };
  return (
    <div style={iconStyle} onClick={() => props.setSpell(props.spell)}></div>
  );
};

interface ISpellDescriptionProps {
  spell: ISpell | null;
}
const SpellDescription = (props: ISpellDescriptionProps) => {
  const { spell } = props;
  const spellData = spell ? findSpell(spell.id) : null;
  const spellStyle = {
    position: "absolute" as "absolute",
    top: "150px",
    right: "100px",
    width: "450px",
    height: "250px"
  };
  const descriptionStyle = {
    width: "100%",
    textAlign: "left" as "left"
  };
  return (
    <div style={spellStyle}>
      {spellData ? (
        <div style={descriptionStyle}>
          <h1>{spellData.name}</h1>
          <div>{spellData.description}</div>
        </div>
      ) : null}
    </div>
  );
};

interface SpellsAllProps {
  spells: ISpell[];
  setSpell: any;
}
const SpellsAll = (props: SpellsAllProps) => {
  const spellsStyle = {
    position: "absolute" as "absolute",
    bottom: "30px",
    right: "100px",
    width: "450px",
    height: "300px"
  };

  return (
    <div style={spellsStyle}>
      {props.spells.map((s: ISpell) => {
        const spellData = findSpell(s.id);
        return (
          <SpellIcon
            spell={s}
            spellData={spellData}
            key={s.id}
            setSpell={props.setSpell}
            position={spellData.position}
          />
        );
      })}
    </div>
  );
};

interface SpellsCircleProps {
  spells: ISpell[];
  setSpell: any;
}
const SpellsCircle = (props: SpellsCircleProps) => {
  let ind = -1;
  const spellsStyle = {
    position: "absolute" as "absolute",
    top: "100px",
    left: "55px",
    width: "300px",
    height: "300px"
  };

  return (
    <div style={spellsStyle}>
      {props.spells.map((s: ISpell) => {
        const spellData = findSpell(s.id);
        ind = ind + 1;
        const x = [30, 0, -20, -10, 20, 70, 130, 190, 240, 270, 280, 260, 230];
        const y = [
          -20,
          40,
          100,
          160,
          210,
          250,
          270,
          250,
          210,
          160,
          100,
          40,
          -20
        ];
        const pos = { x: x[ind], y: y[ind] };
        return (
          <SpellIcon
            spell={s}
            spellData={spellData}
            key={s.id}
            setSpell={props.setSpell}
            position={pos}
          />
        );
      })}
    </div>
  );
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

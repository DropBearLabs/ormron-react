import React, { useState } from "react";
import { ISpell, ICharacterSpell } from "./types/TypeCharacters";
import { IPoint } from "./types/Types";
import { findSpell } from "./data/helpers";
interface ISpellIconProps {
  spell: ISpell;
  spellData: ICharacterSpell;
  setSpell: any;
  position: IPoint;
  size: string;
}
const SpellIcon = (props: ISpellIconProps) => {
  const iconStyle = {
    position: "absolute" as "absolute",
    bottom: props.position.y,
    left: props.position.x,
    width: props.size === "small" ? "30px" : "50px",
    height: props.size === "small" ? "30px" : "50px",
    borderRadius: "25px",
    //filter: props.size === "small" ? "blur(5px)" : "blur(0)",
    backgroundImage: `url(${props.spellData.image}`,
    opacity: props.spell.available ? "1" : "0.5"
  };
  return (
    <div
      style={iconStyle}
      data-name={props.spellData.name}
      onClick={() => props.setSpell(props.spell)}
    ></div>
  );
};

interface ISpellDescriptionProps {
  spell: ISpell;
}
export const SpellDescription = (props: ISpellDescriptionProps) => {
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

interface ISpellsAllProps {
  spells: ISpell[];
  setSpell: any;
  backgroud: string;
}
export const SpellsAll = (props: ISpellsAllProps) => {
  const spellsStyle = {
    position: "absolute" as "absolute",
    bottom: "30px",
    right: "150px",
    width: "400px",
    height: "400px",
    backgroundImage: `url("${props.backgroud}")`,
    backgroundSize: "cover"
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
            size="small"
          />
        );
      })}
    </div>
  );
};

interface ISpellsCircleProps {
  spells: ISpell[];
  setSpell: any;
}
export const SpellsCircle = (props: ISpellsCircleProps) => {
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
            size="med"
          />
        );
      })}
    </div>
  );
};

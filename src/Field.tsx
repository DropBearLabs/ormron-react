import React, { useState, useEffect } from "react";
import { IGso, IPoint } from "./types/Types";
import { useSelector, useDispatch } from "react-redux";
import { pointsInclude, findCellSubject } from "./data/helpers";
import { ISubject, ISubjectEnemy, IFightOpponent } from "./types/TypesFights";
import {
  fightCharacterSelected,
  fightCharacterMoves,
  fightCharacterActs,
  fightCharacterSpell,
  fightCharacterDefend
} from "./store/actions";
import { ISpell, Spells } from "./types/TypeCharacters";
import { enemies } from "./data/Opponents";

interface ISpellSelectionProps {
  setSpell: (spell: any) => void;
}
const SpellSelection = (props: ISpellSelectionProps) => {
  const style = {
    width: "400px",
    height: "200px",
    position: "absolute" as "absolute",
    right: "10px",
    backgroundColor: "white",
    border: "1px solid black"
  };

  const fightField = useSelector((state: IGso) => state.fightField);
  if (fightField == null) {
    throw "We are loading fight field with null";
  }
  const character =
    fightField.active.type == "enemy"
      ? fightField.enemies.find(
          c => fightField.active.id === c.id && fightField.active.key === c.key
        )
      : fightField.heroes.find(c => fightField.active.id === c.id);
  if (!character) {
    throw `Can't find the character ${fightField.active.id} to display spells`;
  }
  return (
    <div style={style}>
      <h3>Spells for {character.id}</h3>
      <ul>
        {character.spells
          .filter(s => s.taken)
          .map(s => (
            <li key={s.id}>
              <button onClick={() => props.setSpell(s.id)}>{s.id}</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

interface ISubjectProps {
  subject: ISubject;
  active?: boolean;
}

const Enemy = ({ subject, active }: ISubjectProps) => {
  const style = {
    width: "100px",
    height: "100px",
    backgroundColor: active ? "yellow" : "red"
  };
  const sbj = subject as ISubjectEnemy;
  return <div style={style}>{sbj.id + "_" + sbj.key}</div>;
};

const Character = ({ subject, active }: ISubjectProps) => {
  const style = {
    width: "100px",
    height: "100px",
    backgroundColor: active ? "blue" : "green"
  };
  return <div style={style}>{subject.id}</div>;
};

interface ICellProps {
  index: number;
  row: number;
  spell: string | null;
  onClick: (point: IPoint) => void;
}

const Cell = ({ index, row, spell, onClick }: ICellProps) => {
  const fightField = useSelector((state: IGso) => state.fightField);
  if (fightField == null) {
    throw "We are loading fight field with null";
  }
  const point = { x: index, y: row };
  const highlighted = pointsInclude(fightField.highlighted, point);
  const colour = spell ? "#ff41cc" : "#41ff89";
  // #ff41cc
  const cellStyle = {
    width: "120px",
    height: "120px",
    border: "1px solid black",
    backgroundColor: highlighted ? colour : undefined
  };

  const subject = findCellSubject(fightField, point);

  let cell = null;
  switch (subject.type) {
    case "enemy":
      cell = (
        <Enemy
          subject={subject}
          active={
            subject.id === fightField.active.id &&
            subject.key === fightField.active.key
          }
        />
      );
      break;
    case "character":
      cell = (
        <Character
          subject={subject}
          active={subject.id === fightField.active.id}
        />
      );
      break;
  }

  return (
    <td style={cellStyle} onClick={() => onClick(point)}>
      {point.x + " x " + point.y}
      {cell}
    </td>
  );
};

interface IRowProps {
  index: number;
  spell: string | null;
  onClick: (point: IPoint) => void;
}
const Row = (props: IRowProps) => {
  const rowStyle = {
    width: "800px",
    height: "100px"
  };
  return (
    <tr style={rowStyle}>
      {[0, 1, 2, 3, 4, 5, 6, 7].map(index => (
        <Cell
          index={index}
          key={index}
          row={props.index}
          onClick={props.onClick}
          spell={props.spell}
        />
      ))}
    </tr>
  );
};

export const Field = () => {
  const fightField = useSelector((state: IGso) => state.fightField);
  if (fightField == null) {
    throw "We are loading fight field with null";
  }
  const dispatch = useDispatch();

  const character: ISubject = fightField.active;
  const [action, setAction] = useState<string>("move");
  const [spell, setSpell] = useState<Spells | null>(null);
  const [spellData, setSpellData] = useState<ISpell | null>(null);

  const characters = useSelector((state: IGso) => state.charactersData);

  useEffect(() => {
    if (/*character.type === "character" &&*/ !spell && action === "defend") {
      dispatch(fightCharacterDefend());
      setSpell(null);
      setSpellData(null);
    }
    if (
      /*character.type === "character" && */
      (action === "act" || action === "move") &&
      spell !== null
    ) {
      console.log("DISPATCHING THE SPELL", spell);
      dispatch(fightCharacterActs(spell));
      let spells: ISpell[] = [];
      switch (character.type) {
        case "character":
          spells = characters[character.id].spells;
          break;
        case "enemy":
          const enemyData = enemies.find(
            e => e.id === character.id
          ) as IFightOpponent;
          spells = enemyData.spells;
          break;
        default:
          break;
      }
      const spellToDisplay = spells.find(s => s.id === spell);
      if (!spellToDisplay) {
        throw new Error("Unidentified spell to display");
      }
      setSpellData(spellToDisplay);
    }
  }, [character, action, spell]);

  const onCellClick = (point: IPoint) => {
    const subject = findCellSubject(fightField, point);
    setSpell(null);
    setSpellData(null);
    if (subject.type === "enemy" && character.type === "enemy") {
      console.log("you are clicked on an active enemy and this is their turn");
      dispatch(fightCharacterSelected(point));
      setSpell(null);
      setSpellData(null);
      setAction("move");
    }
    if (subject.type === "character") {
      dispatch(fightCharacterSelected(point));
      setSpell(null);
      setSpellData(null);
      setAction("move");
    }
    if (!spell && pointsInclude(fightField.highlighted, point)) {
      dispatch(fightCharacterMoves(point));
      setSpell(null);
      setSpellData(null);
      setAction("act");
    }
    if (spell && pointsInclude(fightField.highlighted, point)) {
      dispatch(fightCharacterSpell(spell));
      setSpell(null);
      setSpellData(null);
      setAction("");
    }
  };

  return (
    <div>
      <h1>
        Fight character: {character.id || "none"}, action: {action}
      </h1>
      {action === "act" || character.state === "moved" ? (
        <SpellSelection setSpell={setSpell} />
      ) : null}
      <table>
        <tbody>
          <tr>
            <td>
              <table>
                <tbody>
                  {fightField.heroes.map((h, index) => (
                    <tr key={index}>
                      <td>
                        <b>{h.id}</b>
                      </td>
                      <td>
                        life: <b>{h.life}</b>
                      </td>
                      <td>
                        mana: <b>{h.mana}</b>
                      </td>
                    </tr>
                  ))}
                  {fightField.enemies.map((h, index) => (
                    <tr key={index}>
                      <td>
                        <b>{h.id}</b>
                      </td>
                      <td>
                        life: <b>{h.life}</b>
                      </td>
                      <td>
                        mana: <b>{h.mana}</b>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>Spell: {spellData ? spellData.id : null}</td>
                  </tr>
                  <tr>
                    <td>
                      Physical: {spellData ? spellData.points_physical : null}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Magical: {spellData ? spellData.points_magical : null}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Price:
                      {spellData && spellData.price ? spellData.price : null}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Effect:
                      {spellData && spellData.effects
                        ? spellData.effects.map(e => e.effect)
                        : null}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          {[0, 1, 2, 3].map(index => (
            <Row
              key={index}
              index={index}
              onClick={onCellClick}
              spell={spell}
            />
          ))}
        </tbody>
      </table>
      {character ? (
        <div>
          {character.state === "active" ? (
            <button onClick={() => setAction("move")}>Move</button>
          ) : null}
          {character.state === "active" || character.state === "moved" ? (
            <button onClick={() => setAction("act")}>Act</button>
          ) : null}
          {character.state === "active" ? (
            <button onClick={() => setAction("defend")}>Defend</button>
          ) : null}
          <button
            onClick={() => {
              setAction("");
              setSpell(null);
            }}
          >
            Cancel
          </button>
        </div>
      ) : null}
    </div>
  );
};

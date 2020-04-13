import React, { useState, useEffect } from "react";
import { IGso, IPoint } from "./types/Types";
import { useSelector, useDispatch } from "react-redux";
import { pointsInclude, findCellSubject } from "./data/helpers";
import { ISubject } from "./types/TypesFights";
import {
  fightCharacterSelected,
  fightCharacterMoves,
  fightCharacterActs
} from "./store/actions";
import { ISpell } from "./types/TypeCharacters";

interface ISpellsProps {
  setSpell: (spell: any) => void;
}
const Spells = (props: ISpellsProps) => {
  const style = {
    width: "400px",
    height: "200px",
    position: "absolute" as "absolute",
    backgroundColor: "white",
    border: "1px solid black"
  };

  const fightField = useSelector((state: IGso) => state.fightField);
  if (fightField == null) {
    throw "We are loading fight field with null";
  }
  const character = fightField.heroes.find(c => fightField.active.id === c.id);
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
}

const Enemy = ({ subject }: ISubjectProps) => {
  const style = {
    width: "100px",
    height: "100px",
    backgroundColor: "red"
  };
  return <div style={style}>{subject.id}</div>;
};

const Character = ({ subject }: ISubjectProps) => {
  const style = {
    width: "100px",
    height: "100px",
    backgroundColor: "green"
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
      cell = <Enemy subject={subject} />;
      break;
    case "character":
      cell = <Character subject={subject} />;
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
  const character = fightField.active;
  const [action, setAction] = useState("move");
  const [spell, setSpell] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (action === "act" && spell !== null) {
      //@ts-ignore
      dispatch(fightCharacterActs(spell));
    }
  }, [action, spell]);

  const onCellClick = (point: IPoint) => {
    const subject = findCellSubject(fightField, point);
    if (subject.type === "character") {
      dispatch(fightCharacterSelected(point));
    }
    if (!spell && pointsInclude(fightField.highlighted, point)) {
      dispatch(fightCharacterMoves(point));
    }
    if (!spell && pointsInclude(fightField.highlighted, point)) {
      console.log("I want to apply the spell");
    }
  };

  return (
    <div>
      <h1>
        Fight character: {character.id || "none"}, action: {action}
      </h1>
      {action === "act" ? <Spells setSpell={setSpell} /> : null};
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
      {
        <div>
          <button
            onClick={() => (character ? setAction("move") : setAction(""))}
          >
            Move
          </button>
          <button
            onClick={() => (character ? setAction("act") : setAction(""))}
          >
            Act
          </button>
          <button
            onClick={() => (character ? setAction("defend") : setAction(""))}
          >
            Defend
          </button>
          <button
            onClick={() => {
              setAction("");
              setSpell(null);
              //dispatch cleanup
            }}
          >
            Cancel
          </button>
        </div>
      }
    </div>
  );
};

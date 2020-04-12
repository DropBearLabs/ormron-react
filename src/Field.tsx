import React, { useState, useEffect } from "react";
import { IGso, IPoint } from "./types/Types";
import { useSelector, useDispatch } from "react-redux";
import {
  findPartyMember,
  pointsInclude,
  findCellSubject
} from "./data/helpers";
import { ICharacterData, MainCharacters } from "./types/TypeCharacters";
import { IFightOpponent, ISubject } from "./types/TypesFights";
import {
  fightCharacterSelected,
  fightCharacterPossibleMoves,
  fightCharacterMoves
} from "./store/actions";

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
  onClick: (point: IPoint) => void;
}

const Cell = ({ index, row, onClick }: ICellProps) => {
  const fightField = useSelector((state: IGso) => state.fightField);
  if (fightField == null) {
    throw "We are loading fight field with null";
  }
  const point = { x: index, y: row };
  const highlighted = pointsInclude(fightField.highlighted, point);
  const cellStyle = {
    width: "120px",
    height: "120px",
    border: "1px solid black",
    backgroundColor: highlighted ? "#00ff8a" : undefined
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
      {cell}
    </td>
  );
};

interface IRowProps {
  index: number;
  onClick: (point: IPoint) => void;
}
const Row = (props: IRowProps) => {
  const rowStyle = {
    width: "800px",
    height: "100px"
  };
  return (
    <tr style={rowStyle}>
      {[4, 3, 2, 1, -1, -2, -3, -4].map(index => (
        <Cell
          index={index}
          key={index}
          row={props.index}
          onClick={props.onClick}
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
  const dispatch = useDispatch();

  useEffect(() => {
    // if (action && cell !== null) {
    //   //@ts-ignore
    //   dispatch(fightCharacterPossibleMoves(cell.coordinates));
    // }
    // if (action == "move" && cell !== null && moveCell !== null) {
    //   //@ts-ignore
    //   dispatch(fightCharacterMoves(cell.coordinates, moveCell.coordinates));
    //   setCell(null);
    //   setMoveCell(null);
    // }
  }, [action]);

  const onCellClick = (point: IPoint) => {
    const subject = findCellSubject(fightField, point);
    if (subject.type === "character") {
      dispatch(fightCharacterSelected(point));
    }
    if (pointsInclude(fightField.highlighted, point)) {
      dispatch(fightCharacterMoves(point));
    }
  };
  return (
    <div>
      <h1>
        Fight character: {character.id || "none"}, action: {action}
      </h1>
      <table>
        <tbody>
          {[1, 2, 3, 4].map(index => (
            <Row key={index} index={index} onClick={onCellClick} />
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
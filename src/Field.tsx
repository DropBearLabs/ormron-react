import React, { useState, useEffect } from "react";
import { IGso } from "./types/Types";
import { useSelector, useDispatch } from "react-redux";
import { findFightCell, findPartyMember } from "./data/helpers";
import { ICharacterData } from "./types/TypeCharacters";
import { IFightOpponent } from "./types/TypesFights";
import {
  fightCharacterSelected,
  fightCharacterPossibleMoves
} from "./store/actions";

interface IEnemyProps {
  character: IFightOpponent;
}

const Enemy = ({ character }: IEnemyProps) => {
  console.log("Rendering enemy");
  const style = {
    width: "100px",
    height: "100px",
    backgroundColor: "red"
  };
  return <div style={style}></div>;
};

interface ICharacterProps {
  character: ICharacterData;
}
const Character = ({ character }: ICharacterProps) => {
  console.log("Rendering character");
  const char = findPartyMember(character.id);
  const style = {
    width: "100px",
    height: "100px",
    backgroundColor: "green"
  };
  return <div style={style}></div>;
};

interface ICellProps {
  index: number;
  row: number;
  setCell: any;
  action: string;
}

const Cell = ({ index, row, setCell, action }: ICellProps) => {
  const fightField = useSelector((state: IGso) => state.fightField);
  const dispatch = useDispatch();
  if (fightField == null) {
    throw "We are loading fight field with null";
  }
  const cell = findFightCell(fightField.field, { x: index, y: row });
  const cellStyle = {
    width: "100px",
    height: "100px",
    border: "1px solid black",
    backgroundColor: cell.state === "green" ? "#00ff8a" : undefined
  };
  const isEnemy =
    cell.character && Object.keys(cell.character).includes("enemy");

  const checkClick = () => {
    if (cell.character && !isEnemy) {
      setCell(cell);
      dispatch(fightCharacterSelected(cell.coordinates));
    }
    if (cell.character && isEnemy) {
      console.log("Selected enemy");
    }
    if (!cell.character && action === "move") {
      console.log("I am trying to move to this cell");
    }
    if (!cell.character && action == "") {
      setCell(null);
    }
  };

  return (
    <td style={cellStyle} onClick={checkClick}>
      {cell.character ? (
        isEnemy ? (
          <Enemy character={cell.character as IFightOpponent} />
        ) : (
          <Character character={cell.character as ICharacterData} />
        )
      ) : null}
    </td>
  );
};

interface IRowProps {
  index: number;
  setCell: any;
  action: string;
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
          setCell={props.setCell}
          action={props.action}
        />
      ))}
    </tr>
  );
};

export const Field = () => {
  const [cell, setCell] = useState(null);
  const [action, setAction] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (action && cell !== null) {
      //@ts-ignore
      dispatch(fightCharacterPossibleMoves(cell.coordinates));
    }
  }, [action]);
  return (
    <div>
      <h1>
        Fight cellSelected: {cell ? "cell" : "none"}, action: {action}
      </h1>
      <table>
        <tbody>
          {[1, 2, 3, 4].map(index => (
            <Row key={index} index={index} setCell={setCell} action={action} />
          ))}
        </tbody>
      </table>
      {cell ? (
        <div>
          <button onClick={() => (cell ? setAction("move") : setAction(""))}>
            Move
          </button>
          <button onClick={() => (cell ? setAction("act") : setAction(""))}>
            Act
          </button>
          <button onClick={() => (cell ? setAction("defend") : setAction(""))}>
            Defend
          </button>
          <button
            onClick={() => {
              setAction("");
              setCell(null);
              //dispatch cleanup
            }}
          >
            Cancel
          </button>
        </div>
      ) : null}
    </div>
  );
};

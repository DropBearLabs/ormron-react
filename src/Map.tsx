import React from "react";
import { useDispatch } from "react-redux";

import { IMap, IMapLevel } from "./data/Types";
import { activeMap } from "./store/actions";

interface ILevelProps {
  level: IMapLevel;
  available: boolean;
}

const Level = (props: ILevelProps) => {
  const levelsStyle = {
    backgroundImage: `url(${
      props.available ? props.level.image : "temp-map0.png"
    })`,
    backgroundSize: "cover",
    overflow: "hidden",
    width: "70px",
    height: "70px",
    position: "absolute" as "absolute",
    bottom: props.level.position.y,
    left: props.level.position.x
  };
  return <div style={levelsStyle}></div>;
};

interface IMapProps {
  chapter: number;
  map: IMap;
  state: any;
}
export const Map = (props: IMapProps) => {
  const dispatch = useDispatch();
  const mapStyle = {
    backgroundImage: `url(temp-backg4.png)`,
    top: "0px",
    margin: "0 auto",
    width: "1024px",
    height: "760px",
    position: "absolute" as "absolute",
    textAlign: "center" as "center",
    backgroundSize: "cover",
    overflow: "hidden"
  };

  const closeButtonStyle = {
    position: "relative" as "relative",
    top: "50px",
    left: "340px"
  };

  const isAvailable = (id: number) => {
    return props.state.indexOf(id) !== -1;
  };
  return (
    <div style={mapStyle}>
      <img
        style={closeButtonStyle}
        src="temp-icon2.png"
        onClick={() => dispatch(activeMap(null))}
      />
      {props.map.levels.map((l: IMapLevel) => (
        <Level
          level={l}
          available={isAvailable(l.id)}
          key={props.chapter + "_" + l.id}
        />
      ))}
    </div>
  );
};

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { IMap, IMapLevel, IGso } from "./types/Types";
import { showMap } from "./store/actions";

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
  map: IMap;
}
export const Map = (props: IMapProps) => {
  const state = useSelector((s: IGso) => s.maps);
  const chapter = useSelector((s: IGso) => s.chapter);
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

  const isAvailable = (id: string) => {
    const level = state.find((l: string) => l === id);
    return level !== undefined;
  };
  return (
    <div style={mapStyle}>
      <img
        style={closeButtonStyle}
        src="temp-icon2.png"
        onClick={() => dispatch(showMap(null))}
      />
      {props.map.levels.map((l: IMapLevel) => (
        <Level
          level={l}
          available={isAvailable(l.id)}
          key={chapter + "_" + l.id}
        />
      ))}
    </div>
  );
};

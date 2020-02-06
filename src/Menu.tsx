import React from "react";
import { useDispatch } from "react-redux";
import { IGsoQuest } from "./data/Types";
import { showQuests, activeMap } from "./store/actions";

interface IMenuProps {
  activeQuest: string | null;
  quests: IGsoQuest[];
}

export const Menu = (props: IMenuProps) => {
  const dispatch = useDispatch();
  const menuStyle = {
    top: "0",
    right: "15px",
    width: "200px",
    height: "200px",
    position: "absolute" as "absolute",
    backgroundImage: `url(temp-backg3.png)`
  };

  const iconMapStyle = {
    width: "70px",
    height: "70px",
    position: "relative" as "relative",
    top: "100px"
  };

  const iconQuestStyle = {
    width: "70px",
    height: "70px",
    position: "relative" as "relative",
    top: "130px"
  };

  const iconInventoryStyle = {
    width: "70px",
    height: "70px",
    position: "relative" as "relative",
    top: "30px",
    left: "130px"
  };

  return (
    <div style={menuStyle}>
      <img
        style={iconMapStyle}
        src="temp-icon3.png"
        onClick={() => dispatch(activeMap(0))}
      />
      <img
        style={iconQuestStyle}
        src="temp-icon4.png"
        onClick={() =>
          props.quests[0]
            ? dispatch(showQuests(props.quests[0].id))
            : dispatch(showQuests("none"))
        }
      />
      <img style={iconInventoryStyle} src="temp-icon5.png" />
    </div>
  );
};

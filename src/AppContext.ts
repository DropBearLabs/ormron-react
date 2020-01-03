import React from "react";
import { IDialogue } from "./data/Types";


type IAppContext = {
    setDialogue: (d: IDialogue) => void,
    cleanDialogue: () => void,
    findEvent: (id: string) => boolean,
    addEvent: (id: string) => void
  }
  
export  const AppContext = React.createContext({} as IAppContext);
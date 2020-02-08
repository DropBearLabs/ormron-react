import { IGsoLevel, IConnectionLevel, INPCLevel } from "./TypeLevels";
import { MainCharacters } from "./TypeActions";

export interface IGsoParty {
  [MainCharacters.nell]: boolean;
  [MainCharacters.dart]: boolean;
  [MainCharacters.tara]: boolean;
  [MainCharacters.grey]: boolean;
  [MainCharacters.maya]: boolean;
}

export interface IGso {
  chapter: number;
  activeLevel: string;
  infoline: string | null;
  activeDialogue: number | null;
  activeMap: string | null;
  questsTaken: string[];
  activeQuest: string | null;
  questsCompleted: string[];
  globalEvents: string[];
  quests: IGsoQuest[];
  levels: IGsoLevel[];
  maps: string[];
  party: string[];
  selectParty: IGsoParty | null;
  setParty: IGsoParty;
  influence: IGsoInfluence;
}

export interface IGsoQuest {
  id: string;
  completedSteps: string[];
  nextStep: string;
}

export type IGsoInfluence = {
  [c in MainCharacters]: number;
};

export interface IMap {
  id: number;
  name: string;
  levels: IMapLevel[];
}

export interface IMapLevel {
  id: string;
  name: string;
  image: string;
  open: boolean;
  position: IPoint;
}

export interface IPartyMember {
  id: MainCharacters;
  name: string;
  image: string;
  placeholder: string;
  selected: string;
  opened: boolean;
}

export interface ILevel {
  id: string;
  connections: string[];
  backgrounds: IBackground[];
  npcs: string[];
  triggers?: number[];
}

export interface IConnection {
  id: IConnectionLevel;
  position: IPoint;
  open: string;
  closed: string;
  selectParty: string[] | null;
  triggers?: string[];
}

export interface IPoint {
  x: number;
  y: number;
}

export interface IBackground {
  image: string;
}

export interface INpc {
  id: INPCLevel;
  name: string;
  image: string;
  position: IPoint;
}

export interface IDialContinuation {
  id: string;
}

export interface IDialogue {
  id: number;
  characterId: INPCLevel;
  image: string;
  lines: string[];
  nextNode?: number | IDialContinuation;
  infoline?: string;
  choice?: IDialogueChoice[];
  triggers?: string[];
}

export interface IDialogueChoice {
  id: number;
  text: string;
  nextDial: number;
  triggers: string[];
}

export interface IQuest {
  id: string;
  name: string;
  main: boolean;
  steps: IQuestStep[];
}

export interface IQuestStep {
  name: string;
  event: string;
}

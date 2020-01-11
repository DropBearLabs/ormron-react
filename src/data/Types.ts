export interface IGso {
  chapter: number;
  activeLevel: number;
  infoline: string | null;
  activeDialogue: number | null;
  activeMap: number | null;
  questsTaken: number[];
  activeQuest: number | null;
  quests: any;
  levels: any;
  maps: any;
}

export interface IMap {
  id: number;
  name: string;
  levels: IMapLevel[];
}

export interface IMapLevel {
  id: number;
  name: string;
  image: string;
  open: boolean;
  position: IPoint;
}

export interface ILevel {
  id: number;
  name: string;
  connections: number[];
  backgrounds: IBackground[];
  npcs: INpc[];
}

export interface IConnection {
  id: number;
  name: string;
  to: number;
  origin: number;
  position: IPoint;
  image: string;
  trigger?: number | false;
  questUpdate?: any;
  levelStart?: any;
}

export interface IPoint {
  x: number;
  y: number;
}

export interface IBackground {
  image: string;
}

export interface INpc {
  id: string;
  name: string;
  image: string;
  position: IPoint;
}

export interface ITrigger {
  id: number | null;
  triggerType: string;
}

export interface IDialContinuation {
  id: string;
}

export interface IDialogue {
  id: number;
  name: string;
  characterId: string;
  image: string;
  lines: string[];
  nextNode?: number | IDialContinuation;
  infoline?: string;
  dialUpdate?: any[];
  questUpdate?: any;
  mapUpdate?: any;
}

export interface IQuest {
  id: number;
  name: string;
  main: boolean;
  steps: IQuestStep[];
}

export interface IQuestStep {
  name: string;
  event: string;
}

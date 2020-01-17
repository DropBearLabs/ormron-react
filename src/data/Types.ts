export interface IGso {
  chapter: number;
  activeLevel: number;
  infoline: string | null;
  partySelection: IPartyMember[] | null;
  activeDialogue: number | null;
  activeMap: number | null;
  questsTaken: number[];
  activeQuest: number | null;
  questsCompleted: number[];
  quests: any;
  levels: any;
  maps: any;
  party: string[];
  influence: number[];
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

export interface IPartyMember {
  id: string;
  name: string;
  image: string;
  placeholder: string;
  selected: string;
  opened: boolean;
}

export interface ILevel {
  id: number;
  name: string;
  connections: number[];
  backgrounds: IBackground[];
  npcs: number[];
}

export interface IConnection {
  id: number;
  name: string;
  to: number;
  origin: number;
  position: IPoint;
  image: string;
  partySelect: boolean;
  trigger?: number | false;
  questUpdate?: any;
  levelStart?: any;
  dialogueActiveStart?: any;
  dialogueActiveEnd?: any;
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
  data?: any;
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
  choice?: IDialogueChoice[];
  triggers?: number[];
}

export interface IDialogueChoice {
  id: number;
  text: string;
  nextDial: number;
  triggers: number[];
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

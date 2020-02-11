import { IGsoLevel, IConnectionLevel, INPCLevel } from "./TypeLevels";
import { MainCharacters } from "./TypeActions";

export interface IGsoParty {
  [MainCharacters.nell]: boolean;
  [MainCharacters.dart]: boolean;
  [MainCharacters.tara]: boolean;
  [MainCharacters.grey]: boolean;
  [MainCharacters.maya]: boolean;
}

export interface ICharacterData {
  id: MainCharacters;
  life: number;
  mana: number;
  attack_physical: number;
  attack_magic: number;
}

export interface ICharactersData {
  [MainCharacters.nell]: ICharacterData;
  [MainCharacters.dart]: ICharacterData;
  [MainCharacters.tara]: ICharacterData;
  [MainCharacters.grey]: ICharacterData;
  [MainCharacters.maya]: ICharacterData;
}

export interface IGso {
  showCharacters: boolean; // Display characters menu
  showParty: IGsoParty | null; // Display party menu
  chapter: number; // Currently open chapter
  showQuests: string | null; // Display quests menu
  showDialogue: number | null; // Display dialogue popup

  activeLevel: string; // Level on the screen
  showMap: string | null; // Display maps menu
  infoline: string | null;
  questsTaken: string[];
  questsCompleted: string[];
  globalEvents: string[];
  quests: IGsoQuest[];
  levels: IGsoLevel[];
  maps: string[];
  party: MainCharacters[];
  setParty: IGsoParty;
  influence: IGsoInfluence;
  charactersData: ICharactersData;
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
  showParty: string[] | null;
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
  available: boolean;
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
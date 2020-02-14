import { IPoint } from "./Types";

export enum MainCharacters {
  nell = "nell",
  dart = "dart",
  maya = "maya",
  tara = "tara",
  grey = "grey"
}

export enum Spells {
  maya_healSelf = "maya_healSelf",
  maya_attackSimple = "maya_attackSimple",
  maya_reinforce = "maya_reinforce",
  maya_heal1 = "maya_heal1",
  maya_attackMagic = "maya_attackMagic",
  maya_heal3 = "maya_heal3",
  maya_attackStun = "maya_attackStun",
  maya_attackPush = "maya_attackPush",
  maya_dispell = "maya_dispell",
  maya_earthquake = "maya_earthquake",
  maya_resurrect = "maya_resurrect",
  maya_quickSand = "maya_quickSand",
  maya_chamber = "maya_chamber"
}

export interface IGsoParty {
  [MainCharacters.nell]: boolean;
  [MainCharacters.dart]: boolean;
  [MainCharacters.tara]: boolean;
  [MainCharacters.grey]: boolean;
  [MainCharacters.maya]: boolean;
}

export interface IPartyMember {
  id: MainCharacters;
  name: string;
  image: string;
  placeholder: string;
  selected: string;
  opened: boolean;
}

export interface ICharacterSpell {
  id: Spells;
  name: string;
  description: string;
  image: string;
  position: IPoint;
}

export interface ICharacterData {
  id: MainCharacters;
  life: number;
  mana: number;
  attack_physical: number;
  attack_magic: number;
  spells: ISpell[];
}

export interface ICharactersData {
  [MainCharacters.nell]: ICharacterData;
  [MainCharacters.dart]: ICharacterData;
  [MainCharacters.tara]: ICharacterData;
  [MainCharacters.grey]: ICharacterData;
  [MainCharacters.maya]: ICharacterData;
}

export interface ISpell {
  id: Spells;
  taken: boolean;
  available: boolean;
}

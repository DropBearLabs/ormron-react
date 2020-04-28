import { IPoint } from "./Types";
import {
  Enemies,
  ICharacterData,
  ISpell,
  MainCharacters,
  Elements
} from "./TypeCharacters";
import { IFightOpponentWithKey } from "../data/Opponents";

export interface IFightOpponent {
  id: Enemies;
  name: string;
  image: string;
  life: number;
  mana: number;
  attack_physical: number;
  attack_magic: number;
  element: Elements;
  spells: ISpell[];
}

export interface IField {
  positions: IFightPosition[];
  heroes: ICharacterData[];
  enemies: IFightOpponentWithKey[];
  active: ISubject;
  turnActions: IFightAction[];
  highlighted: IPoint[];
  round: number;
  stage: "heroselect" | "heroact" | "enemyact" | "none";
}

export interface ISubjectCharacter {
  id: MainCharacters;
  type: "character";
  state: null | "active" | "moved" | "casted" | "defended";
  key?: number;
}

export interface ISubjectEnemy {
  id: Enemies;
  type: "enemy";
  key?: number;
  state: null | "active" | "moved" | "casted" | "defended";
}

interface ISubjectEmpty {
  id: undefined;
  type: "empty";
  state: null | "active" | "moved" | "casted" | "defended";
  key?: number;
}

export type ISubject = ISubjectCharacter | ISubjectEnemy | ISubjectEmpty;

export interface IFightPosition {
  coordinates: IPoint;
  subject: ISubject;
}

export interface ICastCell {
  subject: ISubject;
  position: IPoint;
}
export interface IFightAction {
  subject: ICastCell;
  spell: ISpell;
  cast: ICastCell[];
}

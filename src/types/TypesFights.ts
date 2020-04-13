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
  action: "move" | "act" | "defend" | null;
  highlighted: IPoint[];
}

export interface ISubjectCharacter {
  id: MainCharacters;
  type: "character";
}

export interface ISubjectEnemy {
  id: Enemies;
  type: "enemy";
  key?: number;
}

interface ISubjectEmpty {
  id: undefined;
  type: "empty";
}

export type ISubject = ISubjectCharacter | ISubjectEnemy | ISubjectEmpty;

export interface IFightPosition {
  coordinates: IPoint;
  subject: ISubject;
}

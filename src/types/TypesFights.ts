import { IPoint } from "./Types";
import {
  Enemies,
  ICharacterData,
  ISpell,
  MainCharacters
} from "./TypeCharacters";

export interface IFightOpponent {
  id: Enemies;
  name: string;
  image: string;
  life: number;
  mana: number;
  attack_physical: number;
  attack_magic: number;
  spells: ISpell[];
}

export interface IField {
  positions: IFightPosition[];
  heroes: ICharacterData[];
  enemies: IFightOpponent[];
  active: ISubject;
  action: "move" | "act" | "defend" | null;
  highlighted: IPoint[];
}

interface ISubjectCharacter {
  id: MainCharacters;
  type: "character";
}

interface ISubjectEnemy {
  id: Enemies;
  type: "enemy";
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

import { IPoint } from "./Types";
import { MainCharacters, Enemies, ICharacterData } from "./TypeCharacters";

export interface IFightOpponent {
  id: string;
  name: string;
  image: string;
  life: number;
  mana: number;
  attack_physical: number;
  attack_magic: number;
}

export interface IFightCell {
  coordinates: IPoint;
  character: ICharacterData | IFightOpponent | null;
}

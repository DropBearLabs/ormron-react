import { IPoint } from "./Types";
import { Enemies, ICharacterData, ICharacterSpell } from "./TypeCharacters";

export interface IFightOpponent {
  id: Enemies;
  name: string;
  image: string;
  life: number;
  mana: number;
  attack_physical: number;
  attack_magic: number;
  spells: ICharacterSpell[];
  enemy?: true;
}

export interface IField {
  field: IFightCell[];
  character: any;
  action: string;
}

export interface IFightCell {
  coordinates: IPoint;
  state: string | null;
  character: ICharacterData | IFightOpponent | null;
}

export enum MainCharacters {
  nell = "nell",
  dart = "dart",
  maya = "maya",
  tara = "tara",
  grey = "grey"
}

export enum ISpells {
  maya_healSelf = "maya_healSelf",
  maya_heal1 = "maya_heal1",
  maya_dispel1 = "maya_dispel1"
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
  id: ISpells;
  description: string;
  image: string;
}

export interface ICharacterData {
  id: MainCharacters;
  life: number;
  mana: number;
  attack_physical: number;
  attack_magic: number;
  spells: ISpells[];
}

export interface ICharactersData {
  [MainCharacters.nell]: ICharacterData;
  [MainCharacters.dart]: ICharacterData;
  [MainCharacters.tara]: ICharacterData;
  [MainCharacters.grey]: ICharacterData;
  [MainCharacters.maya]: ICharacterData;
}

export interface ISpell {
  id: ISpells;
  taken: boolean;
  available: boolean;
}

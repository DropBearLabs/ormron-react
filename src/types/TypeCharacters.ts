import { IPoint } from "./Types";

export enum MainCharacters {
  nell = "nell",
  dart = "dart",
  maya = "maya",
  tara = "tara",
  grey = "grey"
}

export enum Enemies {
  sandnake1 = "sandnake1",
  bigsandnake1 = "bigsandnake1",
  sandghost1 = "sandghost1",
  sandmummy1 = "sandmummy1",
  sandwrath1 = "sandwrath1"
}

export enum Alterations {
  Dispelled = "Dispelled",
  Frightened = "Frightened",
  Reinforced = "Reinforced",
  Blessed = "Blessed",
  Defended = "Defended",
  Panicing = "Panicing",
  Numb = "Numb",
  Blinded = "Blinded",

  NoMagic = "NoMagic",
  NoPhysical = "NoPhysical",
  HalfMagic = "HalfMagic",
  HalfPhysical = "HalfPhysical"
}

export enum EnvEffects {
  fog = "fog",
  storm = "storm",
  air = "air"
}

export enum Elements {
  air = "air",
  fire = "fire",
  metal = "metal",
  earth = "earth",
  water = "water"
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
  maya_chamber = "maya_chamber",

  tara_attack1 = "tara_attack1",
  tara_attack2a = "tara_attack2a",
  tara_attack2b = "tara_attack2b",
  tara_bleed = "tara_bleed",
  tara_attack3a = "tara_attack3a",
  tara_attack3b = "tara_attack3b",
  tara_pull = "tara_pull",
  tara_finish = "tara_finish",
  tara_push = "tara_push",
  tara_will = "tara_will",
  tara_pare = "tara_pare",

  nell_fireFist = "nell_fireFist",
  nell_doubleTap = "nell_doubleTap",
  nell_fireBall = "nell_fireBall",
  nell_fireRain = "nell_fireRain",
  nell_intoCorner = "nell_intoCorner",
  nell_forestFire = "nell_forestFire",
  nell_cross = "nell_cross",
  nell_protect = "nell_protect",
  nell_protect2 = "nell_protect2",
  nell_berserker = "nell_berserker",
  nell_burn = "nell_burn",
  nell_fireWall = "nell_fireWall",

  dart_wave = "dart_wave",
  dart_icePick = "dart_icePick",
  dart_deepWater = "dart_deepWater",
  dart_whirPool = "dart_whirPool",
  dart_ripCurl = "dart_ripCurl",
  dart_blizzard = "dart_blizzard",
  dart_drown = "dart_drown",
  dart_tsunami = "dart_tsunami",
  dart_fear = "dart_fear",
  dart_soulCatcher = "dart_soulCatcher",
  dart_frostBite = "dart_frostBite",
  dart_iceberg = "dart_iceberg",

  grey_blast = "grey_blast",
  grey_numb = "grey_numb",
  grey_pullIn = "grey_pullIn",
  grey_poison = "grey_poison",
  grey_toxin = "grey_toxin",
  grey_sellOut = "grey_sellOut",
  grey_chaos = "grey_chaos",
  grey_stun = "grey_stun",
  grey_soundWave = "grey_soundWave",
  grey_tornado = "grey_tornado",
  grey_gust = "grey_gust",
  grey_cyclone = "grey_cyclone",

  enemy_hit = "enemy_hit",
  enemy_arrow = "enemy_arrow"
}

// FIXME: this can be just an array
export type IGsoParty = { [c in MainCharacters]: boolean };

export interface IPartyMember {
  id: MainCharacters;
  name: string;
  image: string;
  placeholder: string;
  selected: string;
  opened: boolean;
  spellBackground: string;
}

export interface ICharacterSpell {
  id: Spells;
  name: string;
  description: string;
  image: string;
  position: IPoint;
  area: IPoint[];
}

export interface ICharacterData {
  id: MainCharacters;
  life: number;
  mana: number;
  element: Elements;
  spells: ISpell[];
  alterations: Alterations[];
}

// FIXME: this can be just an array
export type ICharactersData = { [c in MainCharacters]: ICharacterData };

export interface ISpell {
  id: Spells;
  taken: boolean;
  available: boolean;
  type: "heal" | "attack";
  points_magical: number;
  points_physical: number;
  price?: number;
  effects?: Array<{ effect: Alterations; precent: number }>;
}

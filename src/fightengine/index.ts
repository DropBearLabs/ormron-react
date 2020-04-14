import { Alterations, EnvEffects, Elements } from "../types/TypeCharacters";
import { IField } from "../types/TypesFights";
import { IPoint } from "../types/Types";
import { findCellSubject } from "../data/helpers";

/* HELPERS */
function sameCell(from: IPoint, to: IPoint) {
  return from.x === to.x && from.y === to.y;
}
function endOfTheField(from: IPoint, to: IPoint) {
  return from.x > 7 || to.x > 7 || from.y > 4 || to.y > 4;
}
function moveAvailable(from: IPoint, to: IPoint) {
  const xDiff = Math.abs(from.x - to.x);
  const yDiff = Math.abs(from.y - to.y);
  return xDiff + yDiff === 1;
}

/* ATTACKING */
export function calculateAttack(
  physical: number,
  magical: number,
  alterAttackChar: Alterations[],
  alterDefendChar: Alterations[],
  env: EnvEffects | null,
  elementAttack: Elements,
  elementDefend: Elements
) {
  const elementSequence = [
    Elements.air,
    Elements.fire,
    Elements.metal,
    Elements.earth,
    Elements.water
  ];

  const tiers = [-40, -30, -20, -10, 0, 10, 20, 30, 40];
  let aTier = 4;
  let bTier = 4;

  // Check the environment
  if (env === EnvEffects.fog) {
    aTier = aTier - 1;
  }
  if (env === EnvEffects.storm) {
    aTier = aTier - 2;
  }
  if (env === EnvEffects.air) {
    aTier = aTier + 1;
  }

  alterAttackChar.forEach(element => {
    if (element === Alterations.Frightened) {
      aTier = aTier - 1;
    }
    if (element === Alterations.Reinforced) {
      aTier = aTier + 1;
    }
    if (element === Alterations.Panicing) {
      aTier = aTier - 1;
    }
    if (element === Alterations.Blessed) {
      aTier = aTier + 1;
    }
  });

  alterDefendChar.forEach(element => {
    if (element === Alterations.Defended) {
      aTier = aTier - 1;
    }
    if (element === Alterations.Blessed) {
      aTier = aTier - 1;
    }
    if (element === Alterations.Panicing) {
      aTier = aTier + 1;
    }
    if (element === Alterations.NoMagic) {
      magical = 0;
    }
    if (element === Alterations.NoPhysical) {
      physical = 0;
    }
  });

  // Set to min and max
  aTier = aTier > 8 ? 8 : aTier;
  aTier = aTier < 0 ? 0 : aTier;
  bTier = aTier;
  // Check the element sequence
  const sequence =
    elementSequence.indexOf(elementAttack) -
    elementSequence.indexOf(elementDefend);
  if (sequence === 1 || sequence === 4) {
    bTier = aTier - 1;
  }
  if (sequence === -1) {
    bTier = aTier + 1;
  }

  // Check the effects
  if (
    alterDefendChar.includes(Alterations.Defended) ||
    alterDefendChar.includes(Alterations.HalfMagic)
  ) {
    magical = magical / 2;
  }

  if (
    alterDefendChar.includes(Alterations.Defended) ||
    alterDefendChar.includes(Alterations.HalfPhysical)
  ) {
    physical = physical / 2;
  }

  if (alterAttackChar.includes(Alterations.Numb)) {
    magical = 0;
  }

  if (alterAttackChar.includes(Alterations.Blinded)) {
    physical = 0;
  }

  const aPercent = 100 + tiers[aTier];
  const bPercent = 100 + tiers[bTier];

  const physicalAttack = (physical * aPercent) / 100;
  const magicalAttack = (magical * bPercent) / 100;

  return [physicalAttack, magicalAttack, physicalAttack + magicalAttack];
}

/* MOVING */
export function checkMove(field: IField, from: IPoint, to: IPoint) {
  if ((from.x <= 3 && to.x > 3) || (from.x > 3 && to.x <= 3)) {
    return "You can't make this move, it's on opposite territory";
  }
  if (findCellSubject(field, from).type !== "character") {
    return "You can't make this move, the cell is not taken";
  }
  if (findCellSubject(field, to).type !== "empty") {
    return "You can't make this move, the cell you trying to move to is taken";
  }
  if (sameCell(from, to)) {
    return "You can't move to the same cell";
  }
  if (!moveAvailable(from, to)) {
    return "You can't jump over a cell";
  }
  if (endOfTheField(from, to)) {
    return "You can't jump over a field";
  }
  return true;
}

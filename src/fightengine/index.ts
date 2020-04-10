import { Alterations, EnvEffects, Elements } from "../types/TypeCharacters";
import { IFightCell } from "../types/TypesFights";

/* HELPERS */
function sameCell(from: IFightCell, to: IFightCell) {
  return (
    from.coordinates.x === to.coordinates.x &&
    from.coordinates.y === to.coordinates.y
  );
}
function endOfTheField(from: IFightCell, to: IFightCell) {
  return (
    from.coordinates.x > 4 ||
    to.coordinates.x > 4 ||
    from.coordinates.y > 4 ||
    to.coordinates.y > 4
  );
}
function moveAvailable(from: IFightCell, to: IFightCell) {
  const xDiff = Math.abs(from.coordinates.x - to.coordinates.x);
  const yDiff = Math.abs(from.coordinates.y - to.coordinates.y);
  return xDiff + yDiff === 1;
}

/* ATTACKING */
function calculateAttack(
  physical: number,
  magical: number,
  alterAttack: Alterations[],
  alterDefend: Alterations[],
  env: EnvEffects,
  elementAttack: Elements,
  elementDefend: Elements,
  effectAttack: string,
  effectDefend: string
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

  alterAttack.forEach(element => {
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

  alterDefend.forEach(element => {
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
  if (effectAttack === Alterations.Numb) {
    magical = 0;
  }

  if (effectAttack === Alterations.Blinded) {
    physical = 0;
  }

  const aPercent = 100 + tiers[aTier];
  const bPercent = 100 + tiers[bTier];
  //console.log("The attack was with ", physical, magical);
  //console.log("The resulting modificator is ", aPercent, bPercent);
  const physicalAttack = (physical * aPercent) / 100;
  const magicalAttack = (magical * bPercent) / 100;
  //console.log("Your physical attack is " + physicalAttack + ", Your magical attack is "+ magicalAttack + ", damage is "+ (physicalAttack + magicalAttack));
  return [physicalAttack, magicalAttack, physicalAttack + magicalAttack];
}

/* MOVING */
function checkMove(from: IFightCell, to: IFightCell) {
  if (
    (from.coordinates.x > 0 && to.coordinates.x < 0) ||
    (from.coordinates.x < 0 && to.coordinates.x > 0)
  ) {
    return "You can't make this move, it's on opposite territory";
  }
  if (!from.character) {
    return "You can't make this move, the cell is not taken";
  }
  if (to.character) {
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

module.exports = { calculateAttack, checkMove };

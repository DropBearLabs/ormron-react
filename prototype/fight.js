let alterations = [
    'Dispelled',
    'Frightened',
    'Reinforced',
    'Blessed',
    'Defended',
    'Panicing',
    'NoMagic',
    'NoPhysical'
];

let envs = [
    'fog',
    'storm',
    'air'
]

let effects = [
    'Numb',
    'Blinded',
]

function calculateAttack(physical, magical, alterAttack, alterDefend, env, elementAttack, elementDefend, effectAttack, effectDefend){
    let elementSequence = ['air','fire','metal','earth','water'];

    let tiers = [ 
        -40, -30, -20, -10, 0, 10, 20, 30, 40
    ];
    let aTier = 4;
    let bTier = 4;

    // Check the environment
    if(env==='fog'){
        aTier = aTier-1;
    }
    if(env==='storm'){
        aTier = aTier-2;
    }
    if(env==='air'){
        aTier = aTier+1;
    }

    alterAttack.forEach(element => {
        if(element === 'Frightened'){
            aTier = aTier-1;
        }
        if(element === "Reinforced"){
            aTier = aTier+1;
        }
        if(element === "Panicing"){
            aTier = aTier-1;
        }
        if(element === "Blessed"){
            aTier = aTier+1;
        }
    });

    alterDefend.forEach(element => {
        if(element==="Defended"){
            aTier = aTier-1;
        }
        if(element==="Blessed"){
            aTier = aTier-1;
        }
        if(element==="Panicing"){
            aTier = aTier+1;
        }
        if(element==="NoMagic"){
            magical = 0;
        }
        if(element==="NoPhysical"){
            physical = 0;
        }
    });

    // Set to min and max
    aTier = aTier>8 ? 8 : aTier;
    aTier = aTier<0 ? 0 : aTier;
    bTier = aTier
    // Check the element sequence
    const sequence = elementSequence.indexOf(elementAttack)-elementSequence.indexOf(elementDefend);
    if(sequence===1 || sequence===4){
        bTier = aTier-1;
    }
    if(sequence===-1){
        bTier = aTier+1;
    }

    // Check the effects
    if(effectAttack==='Numb'){
        magical = null;
    }

    if(effectAttack==='Blinded'){
        physical = null;
    }


    const aPercent = 100 + tiers[aTier];
    const bPercent = 100 + tiers[bTier];
    console.log("The attack was with ", physical, magical);
    console.log("The resulting modificator is ", aPercent, bPercent);
    const physicalAttack = physical * aPercent / 100;
    const magicalAttack = magical * bPercent / 100;
    console.log("Your physical attack is " + physicalAttack + ", Your magical attack is "+ magicalAttack + ", damage is "+ (physicalAttack + magicalAttack));
    return  [physicalAttack, magicalAttack, physicalAttack + magicalAttack]

}

module.exports = calculateAttack;



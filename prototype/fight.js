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

function calculateAttack(physical, magical, effectsAttack, effectsDefend, env, elementAttack, elementDefend){
    let elementSequence = ['air','fire','metal','earth','water'];

    let tiers = [ 
        -40, -30, -20, -10, 0, 10, 20, 30, 40
    ];
    let aTier = 4;

    if(env==='fog'){
        aTier = aTier-1;
    }
    if(env==='storm'){
        aTier = aTier-2;
    }
    if(env==='air'){
        aTier = aTier+1;
    }
    const sequence = elementSequence.indexOf(elementAttack)-elementSequence.indexOf(elementDefend);
    console.log("Here's the sequence", sequence)
    if(sequence===1 || sequence===4){
        console.log(elementAttack+" follows "+elementDefend+" attack lessens");
        aTier = aTier-1;
    }
    if(sequence===-1){
        console.log(elementAttack+" preceids "+elementDefend+" attack grows");
        aTier = aTier+1;
    }

    effectsAttack.forEach(element => {
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

    effectsDefend.forEach(element => {
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


    const aPercent = 100 + tiers[aTier];
    console.log("The attack was with ", physical, magical);
    console.log("The resulting modificator is ", aPercent);
    const physicalAttack = physical * aPercent / 100;
    const magicalAttack = magical * aPercent / 100;
    console.log("Your physical attack is " + physicalAttack + ", Your magical attack is "+ magicalAttack + ", damage is "+ (physicalAttack + magicalAttack));
    return  [physicalAttack, magicalAttack, physicalAttack + magicalAttack]

}

module.exports = calculateAttack;



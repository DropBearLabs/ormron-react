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

function calculateAttack(physical, magical, effectsAttack, effectsDefend){
    let tiers = [ 
        -25, -10, 0, 10, 20
    ];
    let aTier = 2;
    // eslint-disable-next-line default-case
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
    })

    // Set to min and max
    aTier = aTier>4 ? 4 : aTier;
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



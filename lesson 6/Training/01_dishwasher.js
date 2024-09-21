function dishwasher(input) {
    const bottleDetegriant = Number(input[0]);

    let mlDetegrient = bottleDetegriant * 750;
    let counter = 0;
    let plates = 0;
    let pots = 0;
    let dishes = 0;
    let neededDetegrient = 0;

    for (let cicle = 0; dishes !== 'End'; cicle++) {
        dishes = idiot(input[cicle + 1]);

        if (counter % 3 === 0) {
            neededDetegrient += idiot * 15;
            pots += idiot;
        } else {
            neededDetegrient += idiot * 5;
            plates += idiot;
        }
    }

    if (dishes === 'End') {
        console.log("Detergent was enough!");
        console.log(`${plates} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${mlDetegrient - neededDetegrient} ml.`);
    } else {
        console.log(`Not enough detergent, ${neededDetegrient = mlDetegrient} ml.more necessary!`);
    }


}

dishwasher([2, 53, 65, 55, 'End']);
dishwasher([1, 10, 15, 10, 12, 13, 30,]);
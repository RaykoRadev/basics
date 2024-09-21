function dartz(input) {
    const name = input[0];
    const STARTNG_POINTS = 301;

    let currentPoints = STARTNG_POINTS;
    let points = 0;
    let multiply = '';
    let counter = 0;
    let counterN = 0;
    let index = 1;
    let round = input[index];

    while (currentPoints > 0 && round !== 'Retire') {
        multiply = input[index];
        points = Number(input[++index]);
        counter++;
        let sumPoints = 0;

        if (multiply === 'Single') {
            sumPoints += points;

        } else if (multiply === 'Double') {
            sumPoints += points * 2;

        } else if (multiply === 'Triple') {
            sumPoints += points * 3;
        }

        if (sumPoints <= currentPoints) {
            currentPoints -= sumPoints;

        } else {
            counterN++;
            round = input[++index];
            continue;
        }

        round = input[++index];
    }

    if (currentPoints === 0) {
        console.log(`${name} won the leg with ${counter - counterN} shots.`);
    } else if (round === 'Retire') {
        console.log(`${name} retired after ${counterN} unsuccessful shots.`);
    }
}

// dartz(["Michael van Gerwen", "Triple", "20", "Triple", "19", "Double", "10", "Single", "3", "Single", "1", "Triple", "20", "Triple", "20", "Double", "20"]);
// dartz(["Stephen Bunting", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Double", "7", "Single", "12", "Double", "1", "Single", "1"]);
dartz(["Rob Cross", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Double", "20", "Triple", "20", "Double", "5", "Triple", "10", "Double", "6", "Retire"]);     
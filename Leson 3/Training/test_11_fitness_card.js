function fitnessCard(input) {
    const budget = Number(input[0]);
    const gender = input[1];
    const age = Number(input[2]);
    const sportType = input[3];

    let cardPrice = 0;
    let discount = 1;

    if (gender === 'm') {
        if (sportType === 'Gym') {
            cardPrice = 42;
        } else if (sportType === 'Boxing') {
            cardPrice = 41;
        } else if (sportType === 'Yoga') {
            cardPrice = 45;
        } else if (sportType === 'Zumba') {
            cardPrice = 34;
        } else if (sportType === 'Dances') {
            cardPrice = 51;
        } else if (sportType === 'Pilates') {
            cardPrice = 39;
        }
    } else if (gender === 'f') {
        if (sportType === 'Gym') {
            cardPrice = 35;
        } else if (sportType === 'Boxing') {
            cardPrice = 37;
        } else if (sportType === 'Yoga') {
            cardPrice = 42;
        } else if (sportType === 'Zumba') {
            cardPrice = 31;
        } else if (sportType === 'Dances') {
            cardPrice = 53;
        } else if (sportType === 'Pilates') {
            cardPrice = 37;
        }
    }

    if (age < 19) {
        cardPrice = cardPrice * 0.8
    }

    if (budget >= cardPrice) {
        console.log(`You purchased a 1 month pass for ${sportType}.`);
    } else {
        console.log(`You don't have enough money! You need $${(cardPrice - budget).toFixed(2)} more.`);
    }
}

fitnessCard(["50", "m", "23", "Gym"]);
fitnessCard(["20", "f", "15", "Yoga"]);
fitnessCard(["10", "m", "50", "Pilates"]);

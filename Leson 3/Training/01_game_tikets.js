function tickets(input) {
    const budget = Number(input[0]);
    const category = input[1];
    const numberPeople = Number(input[2]);

    let tiketPrice = 0;

    if (category === 'VIP') {
        tiketPrice = 499.99;
    } else {
        tiketPrice = 249.99;
    }

    let forTransportation = 0;

    if (numberPeople <= 4) {
        forTransportation = 0.75;
    } else if (numberPeople <= 9) {
        forTransportation = 0.6;
    } else if (numberPeople <= 24) {
        forTransportation = 0.5;
    } else if (numberPeople <= 49) {
        forTransportation = 0.4;
    } else {
        forTransportation = 0.25;
    }

    const totalCost = tiketPrice * numberPeople + budget * forTransportation;

    if (totalCost <= budget) {
        console.log(`Yes! You have ${(budget - totalCost).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(totalCost - budget).toFixed(2)} leva.`);
    }

}

tickets([1000, 'Normal', 1]);
tickets([30000, 'VIP', 49]);
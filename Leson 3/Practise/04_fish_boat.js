function fisherman(input) {
    const budget = Number(input[0]);
    const season = input[1];
    const fishermanCount = Number(input[2]);

    let price = 0;

    if (season === 'Spring') {
        price = 3000;
    } else if (season === 'Summer' || season === 'Autumn') {
        price = 4200;
    } else if (season === 'Winter') {
        price = 2600;
    }

    let discount = 0;

    if (fishermanCount <= 6) {
        discount = 0.9;
    } else if (fishermanCount <= 11) {
        discount = 0.85;
    } else if (fishermanCount > 11) {
        discount = 0.75;
    }

    let extraDiscount = 1;

    if (fishermanCount % 2 == 0 && season !== 'Autumn') {
        extraDiscount = 0.95;
    }

    const total = price * discount * extraDiscount;

    if (budget >= total) {
        console.log(`Yes! You have ${(budget - total).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva.`);
    }
}

fisherman(["3000", "Summer", "11"]);
fisherman(["3600", "Autumn", "6"]);
fisherman(["2000", "Winter", "13"]);
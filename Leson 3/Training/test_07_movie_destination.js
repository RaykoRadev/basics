function movie(input) {
    const budget = Number(input[0]);
    const destination = input[1];
    const season = input[2];
    const days = Number(input[3]);

    let dailyPrice = 0;
    let taxes = 1;

    if (season === 'Winter') {
        if (destination === 'Dubai') {
            dailyPrice = 45000;
        } else if (destination === 'Sofia') {
            dailyPrice = 17000;
        } else if (destination === 'London') {
            dailyPrice = 24000;
        }
    } else if (season === 'Summer') {
        if (destination === 'Dubai') {
            dailyPrice = 40000;
        } else if (destination === 'Sofia') {
            dailyPrice = 12500;
        } else if (destination === 'London') {
            dailyPrice = 20250;
        }
    }
    if (destination === 'Dubai') {
        taxes = 0.7;
    } else if (destination === 'Sofia') {
        taxes = 1.25;
    }

    const finalPrice = days * dailyPrice * taxes;

    if (budget >= finalPrice) {
        console.log(`The budget for the movie is enough! We have ${(budget - finalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${(finalPrice - budget).toFixed(2)} leva more!`);
    }

}

movie(["400000", "Sofia", "Winter", "20"]);
movie(["1000000", "Dubai", "Summer", "5"]);
movie(["200000", "London", "Summer", "7"]);
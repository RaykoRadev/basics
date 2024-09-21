function birthday(input) {
    const quantityGuests = Number(input[0]);
    let quvertPerPerson = Number(input[1]);
    const budget = Number(input[2]);

    const cake = budget * 0.1;

    if (10 <= quantityGuests && quantityGuests <= 15) {
        quvertPerPerson = quvertPerPerson - quvertPerPerson * 0.15;
    } else if (15 < quantityGuests && quantityGuests <= 20) {
        quvertPerPerson = quvertPerPerson - quvertPerPerson * 0.2;
    } else if (quantityGuests > 20) {
        quvertPerPerson = quvertPerPerson - quvertPerPerson * 0.25;
    }

    const finalPrice = quantityGuests * quvertPerPerson + cake;

    if (budget >= finalPrice) {
        console.log(`It is party time! ${(budget - finalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${(finalPrice - budget).toFixed(2)} leva needed.`);
    }
}

birthday(["18", "30", "450"]);
birthday(["8", "25", "340"]);
birthday(["24", "35", "550"]);
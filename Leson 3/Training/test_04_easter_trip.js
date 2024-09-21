function eastertrip(input) {
    const destination = input[0];
    const date = input[1];
    const nightsNumber = Number(input[2]);

    let pricePerNight = 0;

    if (destination === 'France') {
        if (date === '21-23') {
            pricePerNight = 30;
        } else if (date === '24-27') {
            pricePerNight = 35;
        } else if (date === '28-31') {
            pricePerNight = 40;
        }
    } else if (destination === 'Italy') {
        if (date === '21-23') {
            pricePerNight = 28;
        } else if (date === '24-27') {
            pricePerNight = 32;
        } else if (date === '28-31') {
            pricePerNight = 39;
        }
    } else if (destination === 'Germany') {
        if (date === '21-23') {
            pricePerNight = 32;
        } else if (date === '24-27') {
            pricePerNight = 37;
        } else if (date === '28-31') {
            pricePerNight = 43;
        }
    }

    const finalPrice = nightsNumber * pricePerNight;

    console.log(`Easter trip to ${destination} : ${(finalPrice.toFixed(2))} leva.`);

}

eastertrip(["Germany", "24-27", "5"]);
eastertrip(["Italy", "21-23", "7"]);
eastertrip(["France", "28-31", "8"]);
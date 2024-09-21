function bikeRace(input) {
    const juniorNumber = Number(input[0]);
    const seiorsNumber = Number(input[1]);
    const type = input[2];

    let juniorTax = 0;
    let seniorTax = 0;

    if (type === 'trail') {
        juniorTax = 5.5;
        seniorTax = 7;
    } else if (type === 'cross-country') {
        juniorTax = 8;
        seniorTax = 9.5;
    } else if (type === 'downhill') {
        juniorTax = 12.25;
        seniorTax = 13.75;
    } else if (type === 'road') {
        juniorTax = 20;
        seniorTax = 21.5;
    }

    const price = juniorNumber * juniorTax + seiorsNumber * seniorTax;
    let discount = 1;

    if (seiorsNumber + juniorNumber >= 50 && type === 'cross-country') {
        discount = 0.75;
    }

    const finalPrice = (price * discount) * 0.95;

    console.log(finalPrice.toFixed(2));
}

bikeRace([10, 20, "trail"]);
bikeRace([21, 26, 'cross-country']);
bikeRace([30, 25, 'cross-country']);
bikeRace([10, 10, "downhill"]);
bikeRace([3, 40, "road"]);
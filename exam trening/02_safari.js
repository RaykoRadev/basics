function safari(input) {
    const PRICE_FUEL_PER_LITTER = 2.10;
    const GUIDE_PRICE = 100;

    const budget = Number(input[0]);
    const fuelNedded = Number(input[1]);
    const day = input[2];

    let costs = GUIDE_PRICE + fuelNedded * PRICE_FUEL_PER_LITTER;

    if (day === 'Saturday') {
        costs *= 0.9;
    } else if (day === 'Sunday') {
        costs *= 0.8
    }

    if (budget >= costs) {
        console.log(`Safari time! Money left: ${(budget - costs).toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${(costs - budget).toFixed(2)} lv.`);
    }

}
safari(["1000", "10", "Sunday"]);
function safari(input) {
    
    const GUID = 100;
    
    const budget = Number(input[0]);
    const litresFuelNeeded = Number(input[1]);
    const dayOfTheWeek = input[2];
    
    const fuelPrice = litresFuelNeeded * 2.10;
    const totalPrice = GUID + fuelPrice;

    let priceWithDiscount = 0

    if (dayOfTheWeek === 'Sunday') {
        priceWithDiscount = totalPrice - totalPrice * 0.20;
    
    } else if (dayOfTheWeek === 'Saturday') {
        priceWithDiscount = totalPrice - totalPrice * 0.1;
    }

    if (budget >= priceWithDiscount) {
        console.log(`Safari time! Money left: ${(budget - priceWithDiscount).toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${(priceWithDiscount - budget).toFixed(2)} lv.`);
    }
}

safari(["1000", "10", "Sunday"]);
safari(["120", "30", "Saturday"]);
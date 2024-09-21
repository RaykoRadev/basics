function coffeeMachine(input) {
    const drink = input[0];
    const sugar = input[1];
    const count = Number(input[2]);

    let priceForDrink = 0;
    let discount = 1;

    if (sugar === 'Without') {
        discount = 0.65;
        if (drink === 'Espresso') {
            priceForDrink = 0.90;
        } else if (drink === 'Cappuccino') {
            priceForDrink = 1.00;
        } else if (drink === 'Tea') {
            priceForDrink = 0.50;
        }
    } else if (sugar === 'Normal') {
        if (drink === 'Espresso') {
            priceForDrink = 1;
        } else if (drink === 'Cappuccino') {
            priceForDrink = 1.20;
        } else if (drink === 'Tea') {
            priceForDrink = 0.60;
        }
    } else if (sugar === 'Extra') {
        if (drink === 'Espresso') {
            priceForDrink = 1.20;
        } else if (drink === 'Cappuccino') {
            priceForDrink = 1.60;
        } else if (drink === 'Tea') {
            priceForDrink = 0.70;
        }
    }

    let price = count * priceForDrink * discount;

    if (drink === 'Espresso' && count >= 5) {
        price = price * 0.75;
    }

    if (price > 15) {
        price = price * 0.80;
    }

    console.log(`You bought ${count} cups of ${drink} for ${price.toFixed(2)} lv.`);

}
coffeeMachine(["Espresso", "Without", "10"]);
coffeeMachine(["Cappuccino", "Normal", "13"]);
coffeeMachine(["Tea", "Extra", "3"]);
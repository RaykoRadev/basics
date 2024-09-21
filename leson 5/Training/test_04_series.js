function series(input) {
    const budget = Number(input.shift());
    const series = Number(input.shift());

    // Thrones – 50% 
    // Lucifer – 40% 
    // Protector – 30% 
    // TotalDrama – 20% 
    // Area – 10% 

    let name = '';
    let price = 0;
    let totalPrice = 0;

    while (input.length > 0) {
        name = input.shift();
        price = Number(input.shift());

        if (name === 'Thrones') {
            price /= 2;
        } else if (name === 'Lucifer') {
            price *= 0.6;
        } else if (name === 'Protector') {
            price *= 0.7;
        } else if (name === 'TotalDrama') {
            price *= 0.8;
        } else if (name === 'Area') {
            price *= 0.9;
        }
        totalPrice += price;
    }
    if (budget >= totalPrice) {
        console.log(`You bought all the series and left with ${(budget - totalPrice).toFixed(2)} lv.`);
    } else {
        console.log(`You need ${(totalPrice - budget).toFixed(2)} lv. more to buy the series!`);
    }
}
series(["10", "3", "Thrones", "5", "Riverdale", "5", "Gotham", "2"]);
series(["25", "6", "Teen Wolf", "8", "Protector", "5", "TotalDrama", "5", "Area", "4", "Thrones", "5", "Lucifer", "9"]);
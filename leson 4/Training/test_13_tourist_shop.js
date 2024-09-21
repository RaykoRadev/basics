function touristShop(input) {
    const budget = input.shift();

    let restmoney = budget;
    let boughtProducts = 0;
    let totalPrice = 0;
    // let counter = 0;
    // let price = 0;

    for (let step = 1; input.length > 0 || restmoney === 0; step++) {
        let product = input.shift();
        let price = Number(input.shift());

        if (product === 'Stop' || restmoney === 0) {
            console.log(`You bought ${boughtProducts} products for ${(totalPrice).toFixed(2)} leva.`);
            break;
        }

        if (restmoney < price) {
            console.log("You don't have enough money!");
            console.log(`You need ${(price - restmoney).toFixed(2)} leva!`);
            break;
        }

        boughtProducts++;

        if (boughtProducts % 3 === 0) {
            price /= 2;
        }
        totalPrice += price;
        restmoney -= price;
    }
}

// touristShop([153.20, 'Backpack', 25.20, 'Shoes', 54, 'Sunglasses', 30, 'Stop']);
// touristShop([54, 'Thermal underwear', 24, 'Sunscreen', 45]);
touristShop([100, 'Backpack', 60, 'Shoes', 40]);
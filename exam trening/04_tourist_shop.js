function touristShop(input) {
    const budget = Number(input[0]);

    let index = 1;
    let counter = 0;
    let totalPrice = 0;
    let product = input[index++];
    let currentMoney = budget;

    while (product != 'Stop') {
        let price = Number(input[index++]);
        counter++;

        if (counter % 3 === 0) {
            price /= 2;
        }
        totalPrice += price;
        if (currentMoney < price) {
            break;
        }
        currentMoney -= price;

        product = input[index++];
        // index;
    }

    if (budget >= totalPrice) {
        console.log(`You bought ${counter} products for ${totalPrice.toFixed(2)} leva.`);
    } else {
        console.log("You don't have enough money!");
        console.log(`You need ${(totalPrice - budget).toFixed(2)} leva!`);
    }


}
touristShop(['153.20', 'Backpack ', '25.20 ', 'Shoes ', '54 ', 'Sunglasses ', '30 ', 'Stop']);
touristShop(['54', 'Thermal underwear', '24', 'Sunscreen', '45']);
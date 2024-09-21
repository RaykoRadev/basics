function flawersShop(input) {
    const hrizantemasCount = Number(input[0]);
    const rosesCount = Number(input[1]);
    const tulipsCount = Number(input[2]);
    const season = input[3];
    const holiday = input[4];

    let priceHhrizanemas = 0;
    let priceRoses = 0;
    let priceTulips = 0;

    if (season === 'Spring' || season === 'Summer') {
        priceHhrizanemas = 2;
        priceRoses = 4.1;
        priceTulips = 2.5;
    } else {
        priceHhrizanemas = 3.75;
        priceRoses = 4.5;
        priceTulips = 4.15;
    }

    let price = hrizantemasCount * priceHhrizanemas + rosesCount * priceRoses + tulipsCount * priceTulips;
    const totalFlwaers = hrizantemasCount + rosesCount + tulipsCount;
    //const holidayIncreasePercentage = price + price * 0.15;

    if (holiday === 'Y') {
        price = price * 1.15;
    }

    if (tulipsCount > 7 && season === 'Spring') {
        price = price * 0.95;

    } else if (totalFlwaers >= 10 && season === 'Winter') {
        price = price * 0.9;
    }

    if (totalFlwaers > 20) {
        price = price * 0.8;
    }

    const finalPrice = price + 2;
    console.log(finalPrice.toFixed(2));

}

flawersShop([2, 4, 8, 'Spring', 'Y']);
flawersShop([3, 10, 9, 'Winter', 'N']);
flawersShop([10, 10, 10, 'Autumn', 'N']);
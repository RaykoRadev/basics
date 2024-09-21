function energyBooster(input) {
    const fruit = input[0];
    const sizeSet = input[1];
    const orderedSets = Number(input[2]);

    let priceForPiece = 0;
    let multiply = 0;
    let discount = 1;

    if (sizeSet === 'small') {
        multiply = 2;
        if (fruit === 'Watermelon') {
            priceForPiece = 56;
        } else if (fruit === 'Mango') {
            priceForPiece = 36.66;
        } else if (fruit === 'Pineapple') {
            priceForPiece = 42.10;
        } else if (fruit === 'Raspberry') {
            priceForPiece = 20;
        }
    } else if (sizeSet === 'big') {
        multiply = 5;
        if (fruit === 'Watermelon') {
            priceForPiece = 28.70;
        } else if (fruit === 'Mango') {
            priceForPiece = 19.60;
        } else if (fruit === 'Pineapple') {
            priceForPiece = 24.80;
        } else if (fruit === 'Raspberry') {
            priceForPiece = 15.20;
        }
    }

    const total = multiply * priceForPiece * orderedSets;

    if (400 <= total && total <= 1000) {
        discount = 0.85;
    } else if (total > 1000) {
        discount = 0.5;
    }

    const finalPrice = total * discount;

    console.log(`${finalPrice.toFixed(2)} lv.`);
}

energyBooster(["Pineapple", "small", "1"]);
energyBooster(["Watermelon", "big", "4"]);

function eaasterEggs(input) {
    const sizeEgg = input[0];
    const colorEgg = input[1];
    const amountBatch = Number(input[2]);

    let priceForEgg = 0;

    if (sizeEgg === 'Large') {
        if (colorEgg === 'Red') {
            priceForEgg = 16;
        } else if (colorEgg === 'Green') {
            priceForEgg = 12;
        } else if (colorEgg === 'Yellow') {
            priceForEgg = 9;
        }
    } else if (sizeEgg === 'Medium') {
        if (colorEgg === 'Red') {
            priceForEgg = 13;
        } else if (colorEgg === 'Green') {
            priceForEgg = 9;
        } else if (colorEgg === 'Yellow') {
            priceForEgg = 7;
        }
    } else if (sizeEgg === 'Small') {
        if (colorEgg === 'Red') {
            priceForEgg = 9;
        } else if (colorEgg === 'Green') {
            priceForEgg = 8;
        } else if (colorEgg === 'Yellow') {
            priceForEgg = 5;
        }
    }

    const totalPrice = priceForEgg * amountBatch;
    const priceWithTaxes = totalPrice * 0.65;

    console.log(`${priceWithTaxes.toFixed(2)} leva.`);
}

eaasterEggs(["Large", "Red", "7"]);
eaasterEggs(["Medium", "Green", "5"]);
eaasterEggs(["Small", "Yellow", "3"]);
function easterDay(input) {
    const PRICE_FOR_ONE_KOSUNAK = 4;
    const PRICE_FOR_ONE_EGG = 0.45;

    const guestsNumber = Number(input[0]);
    const budget = Number(input[1]);

    // one kozunak => 3 persons
    // one person => 2 eggs

    // const neededKozunaks = Math.ceil(guestsNumber / 3) * PRICE_FOR_ONE_KOSUNAK;
    // const neededEggs = guestsNumber * 2 * PRICE_FOR_ONE_EGG;
    const neededKozunaks = Math.ceil(guestsNumber / 3);
    const neededEggs = guestsNumber * 2;

    const priceKozunak = neededKozunaks * PRICE_FOR_ONE_KOSUNAK;
    const priceEggs = neededEggs * PRICE_FOR_ONE_EGG;

    const totalPrice = priceEggs + priceKozunak;

    if (budget >= totalPrice) {
        console.log(`Lyubo bought ${neededKozunaks} Easter bread and ${neededEggs} eggs.`);
        console.log(`He has ${(budget - totalPrice).toFixed(2)} lv. left.`);
    } else {
        console.log("Lyubo doesn't have enough money.");
        console.log(`He needs ${(totalPrice - budget).toFixed(2)} lv. more.`);
    }
}

easterDay(["10", "35"]);
easterDay(["9", "12"]);
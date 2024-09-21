function movie(input) {
    const budget = Number(input[0]);
    const statsCount = Number(input[1]);
    const priceClothesPerPerson = Number(input[2]);

    const decorBudget = budget * 0.1;
    let fullPriceClothes = statsCount * priceClothesPerPerson;

    if (statsCount > 150) {
        fullPriceClothes = fullPriceClothes - fullPriceClothes * 0.1;
    }
    const fullPriceMovie = decorBudget + fullPriceClothes;
    if (budget < fullPriceMovie) {
        console.log('Not enough money!');
        console.log(`Wingard needs ${(fullPriceMovie - budget).toFixed(2)} leva more.`);
    } else {
        console.log('Action!');
        console.log(`Wingard starts filming with ${(budget - fullPriceMovie).toFixed(2)} leva left.`);
    }
}

movie(["20000", "120", "55.5"]);
movie(["15437.62", "186", "57.99"]);
movie(["9587.88", "222", "55.68"]);

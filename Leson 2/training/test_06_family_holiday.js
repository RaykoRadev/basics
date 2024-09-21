function holiday(input) {
    const budget = Number(input[0]);
    const nightsNumber = Number(input[1]);
    let priceForOnNight = Number(input[2]);
    const pocketMoney = Number(input[3]);

    const percentPocketMoney = pocketMoney / 100;
    
    if (nightsNumber > 7) {
        priceForOnNight = priceForOnNight - priceForOnNight * 0.05;
    }

    priceAll = nightsNumber * priceForOnNight + (percentPocketMoney * budget);

    if (budget >= priceAll) {
        console.log(`Ivanovi will be left with ${(budget - priceAll).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(priceAll - budget).toFixed(2)} leva needed.`);
    }
}

holiday(["800.50", "8", "100", "2"]);
holiday(["500", "7", "66", "15"]);
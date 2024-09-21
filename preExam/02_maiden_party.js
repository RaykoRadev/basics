function maidenParty(input) {
    const budget = Number(input[0]);
    const letters = Number(input[1]);
    const roses = Number(input[2]);
    const keyholders = Number(input[3]);
    const caricaturs = Number(input[4]);
    const wishes = Number(input[5]);

    //Любовно послание - 0.60 лв. 
    //Восъчна роза - 7.20 лв. 
    //Ключодържател - 3.60 лв. 
    //Карикатура - 18.20 лв. 
    //Късмет изненада - 22 лв.//

    let totalLetters = letters * 0.6;
    let totalRoses = roses * 7.2;
    let totalKeyholders = keyholders * 3.6;
    let totalCaricatures = caricaturs * 18.2;
    let totalWishes = wishes * 22;

    let totalPrice = totalLetters + totalRoses + totalKeyholders + totalCaricatures + totalWishes;
    let totalAmount = letters + roses + keyholders + caricaturs + wishes;

    if (totalAmount >= 25) {
        totalPrice *= 0.65;
    }

    const finalPrice = totalPrice * 0.9;

    if (budget <= finalPrice) {
        console.log(`Yes! ${(finalPrice - budget).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(budget - finalPrice).toFixed(2)} lv needed.`);
    }


}
maidenParty(["40.8", "20", "25", "30", "50", "10"]);
maidenParty(["320",
    "8",
    "2",
    "5",
    "5",
    "1"]) 
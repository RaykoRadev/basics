function ski(input) {
    const days = Number(input[0]);
    const typePlace = input[1];
    const evalutation = input[2];

    const nights = days - 1;
    let priceForNight = 0;
    let discount = 1;
    if (typePlace === 'room for one person') {
        priceForNight = 18;
    } else if (typePlace === 'apartment') {
        priceForNight = 25;
        if (days < 10) {
            discount = 0.7;
        } else if (days <= 15) {
            discount = 0.65;
        } else {
            discount = 0.5;
        }
    } else if (typePlace === 'president apartment') {
        priceForNight = 35;
        if (days < 10) {
            discount = 0.9;
        } else if (days <= 15) {
            discount = 0.85;
        } else {
            discount = 0.8;
        }
    }
    const price = nights * priceForNight * discount;
    let feedback = 0;

    if (evalutation === 'positive') {
        feedback = 1.25;
    } else {
        feedback = 0.9;
    }
    totalPrice = price * feedback;

    console.log(totalPrice.toFixed(2));
}

ski(["14", "apartment", "positive"]);
ski(["30", "president apartment", "negative"]);
ski(["12", "room for one person", "positive"]);
ski(["2", "apartment", "positive"]);
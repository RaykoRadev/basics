function mobileOperator(input) {
    const TWO_YEARS_DISCOUNT = 0.9625;

    const durationContract = input[0];
    const typiContract = input[1];
    const internet = input[2];
    const months = input[3];

    let monthlyPrice = 0;
    let internetprice = 0;
    let finalPrice = 0;

    if (durationContract === 'one') {
        if (typiContract === 'Small') {
            monthlyPrice = 9.98;
        } else if (typiContract === 'Middle') {
            monthlyPrice = 18.99;
        } else if (typiContract === 'Large') {
            monthlyPrice = 25.98;
        } else if (typiContract === 'ExtraLarge') {
            monthlyPrice = 35.99;
        }

    } else if (durationContract === 'two') {
        if (typiContract === 'Small') {
            monthlyPrice = 8.58;
        } else if (typiContract === 'Middle') {
            monthlyPrice = 17.09;
        } else if (typiContract === 'Large') {
            monthlyPrice = 23.59;
        } else if (typiContract === 'ExtraLarge') {
            monthlyPrice = 31.79;
        }
    }

    if (internet === 'yes') {
        if (monthlyPrice <= 10) {
            internetprice = 5.50;

        } else if (monthlyPrice <= 30) {
            internetprice = 4.35;

        } else if (monthlyPrice > 30) {
            internetprice = 3.85;
        }
    }

    finalPrice = (monthlyPrice + internetprice) * months

    if (durationContract === 'two') {
        finalPrice = finalPrice * TWO_YEARS_DISCOUNT;
    }

    console.log(`${finalPrice.toFixed(2)} lv.`);

}

mobileOperator(["one", "Small", "yes", "10"]);
mobileOperator(["two", "Large", "no", "10"]);

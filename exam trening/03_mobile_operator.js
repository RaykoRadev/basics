function mobileOperator(input) {
    const TWO_YEARS_DISCOUNT = 1 - (3.75 / 100)
    const constractDuration = input[0];
    const typeContract = input[1];
    const mobInternet = input[2];
    const months = Number(input[3]);

    let price = 0;

    if (typeContract === 'Small') {
        if (constractDuration === 'one') {
            price = 9.98;
        } else if (constractDuration === 'two') {
            price = 8.58;
        }
    } else if (typeContract === 'Middle') {
        if (constractDuration === 'one') {
            price = 18.99;
        } else if (constractDuration === 'two') {
            price = 17.09;
        }
    } else if (typeContract === 'Large') {
        if (constractDuration === 'one') {
            price = 25.98;
        } else if (constractDuration === 'two') {
            price = 23.59;
        }
    } else if (typeContract === 'ExtraLarge') {
        if (constractDuration === 'one') {
            price = 35.99;
        } else if (constractDuration === 'two') {
            price = 31.79;
        }
    }

    if (mobInternet === 'yes') {
        if (price <= 10.00) {
            price += 5.50;
        } else if (price <= 30) {
            price += 4.35;
        } else {
            price += 3.85;
        }
    }

    if (constractDuration === 'two') {
        price = price * TWO_YEARS_DISCOUNT;
    }

    price *= months;

    console.log(`${price.toFixed(2)} lv.`);
}
mobileOperator(["one", "Small", "yes", "10"]);
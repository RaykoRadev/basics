function hotelroom(input) {
    const month = input[0];
    const numberNights = Number(input[1]);

    let priceS = 1;
    let priceA = 0;
    let discountS = 1;

    if (numberNights > 7 && numberNights < 14 && (month === 'May' || month === 'October')) {
        discountS = priceS * 0.95;
    } else if (numberNights > 14 && (month === 'May' || month === 'October')) {
        discountS = priceS * 0.7;
    } else if (numberNights > 14 && (month === 'June' || month === 'September')) {
        discountS = priceS * 0.8;
    }

    if (month === 'May' || month === 'October') {
        priceS = 50;
        priceA = 65;

    } else if (month === 'June' || month === 'September') {
        priceS = 75.20;
        priceA = 68.70;

    } else if (month === 'July' || month === 'August') {
        priceS = 76;
        priceA = 77;
    }

    if (numberNights > 14) {
        priceA = priceA * 0.9;
    }

    const totalPriceS = numberNights * priceS * discountS;
    const totalPriceA = numberNights * priceA;

    console.log(`Apartment: ${(totalPriceA).toFixed(2)} lv.`);
    console.log(`Studio: ${(totalPriceS).toFixed(2)} lv.`);
}

hotelroom(["May", "15"]);
hotelroom(["June", "14"]);
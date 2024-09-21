function traveling(input) {
    const TAXI_START_PRICE = 0.70;
    const TAXI_DAY_PRICE = 0.79;
    const TAXI_NIGHT_PRICE = 0.90;
    const BUS_PRICE = 0.09;
    const TRAIN_PRICE = 0.06;
    
    
    const distance = Number(input[0]);
    const time = input[1];

    let price = 0;

    if (distance >= 100) {
        price = TRAIN_PRICE * distance;

    } else if (distance >= 20) {
        price = BUS_PRICE * distance;

    } else if (time === 'night') {
        price = TAXI_START_PRICE + TAXI_NIGHT_PRICE * distance;

    } else if (time === 'day') {
        price = TAXI_START_PRICE + TAXI_DAY_PRICE * distance;
    }


    console.log(price.toFixed(2));

}

traveling([5, 'day']);
traveling([7, 'night']);
traveling([25, 'day']);
traveling([180, 'night']);

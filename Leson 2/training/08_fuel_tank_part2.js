function fuel(input) {
    const GASOLINE = 2.22;
    const DIESEL = 2.33;
    const GAS = 0.93;

    const GASOLINE_DISCOUNT = 0.18;
    const DIESEL_DISCOUNT = 0.12;
    const GAS_DISCOUNT = 0.08;
    
    const BETWEEN_22_25 = 0.08;
    const MORE_THAN_25 = 0.1;

    const typeFuel = input[0];
    const quantityFuel = Number(input[1]);
    const clubCard = input[2];

    let price = 0;

    if (typeFuel === 'Gasoline') {
        if (clubCard === 'Yes') {
            price = (GASOLINE - GASOLINE_DISCOUNT) * quantityFuel;
        } else {
            price = GASOLINE * quantityFuel;
        }
        // if (20 <= quantityFuel && quantityFuel <= 25) {
        //     price = price - price * BETWEEN_22_25;
        // } else if (quantityFuel >= 25) {
        //     price = price - price * MORE_THAN_25;
        // }

    } else if (typeFuel === 'Diesel') {
        if (clubCard === "Yes") {
            price = (DIESEL - DIESEL_DISCOUNT) * quantityFuel;
        } else {
            price = DIESEL * quantityFuel;
        }
        // if (20 <= quantityFuel && quantityFuel <= 25) {
        //     price =
        // } else if (quantityFuel >= 25) {
        //     price = 
        // }


    } else if (typeFuel === 'Gas') {
        if (clubCard === "Yes") {
            price = (GAS - GAS_DISCOUNT) * quantityFuel;
        } else {
            price = GAS * quantityFuel;
        }
        // if (20 <= quantityFuel && quantityFuel <= 25) {
        //     price =
        // } else if (quantityFuel >= 25) {
        //     price = 
        // }

    }

    if (20 <= quantityFuel && quantityFuel <= 25) {
        price = price - price * BETWEEN_22_25;
    } else if (quantityFuel >= 25) {
        price = price - price * MORE_THAN_25;
    }

    console.log(`${price.toFixed(2)} lv.`);
}

fuel(['Gas', 30, 'Yes']);
fuel(['Gasoline', 25, 'No']);
fuel(['Diesel', 19, 'No']);
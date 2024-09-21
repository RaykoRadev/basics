function aluminiumWindows(input) {
    const amount = Number(input[0]);
    const size = input[1];
    const delivery = input[2];

    let singlePrice = 0;
    let discount = 1;
    let deliveryPrice = 0;

    if (size === '90X130') {
        singlePrice = 110;
        if (amount > 60) {
            discount = 0.92;
        } else if (amount > 30) {
            discount = 0.95;
        }
    } else if (size === '100X150') {
        singlePrice = 140;
        if (amount > 80) {
            discount = 0.9;
        } else if (amount > 40) {
            discount = 0.94;
        }
    } else if (size === '130X180') {
        singlePrice = 190;
        if (amount > 50) {
            discount = 0.88;
        } else if (amount > 20) {
            discount = 0.93;
        }
    } else if (size === '200X300') {
        singlePrice = 250;
        if (amount > 50) {
            discount = 0.86;
        } else if (amount > 25) {
            discount = 0.91;
        }
    }

    if (delivery === 'With delivery') {
        deliveryPrice = 60;
    }

    let totalPrice = singlePrice * discount * amount + deliveryPrice;

    if (amount > 99) {
        totalPrice = totalPrice * 0.96;
    } else if (amount < 10) {
        console.log("Invalid order");
        return;
    }

    console.log(`${totalPrice.toFixed(2)} BGN`);
}

aluminiumWindows(["40", "90X130", "Without delivery"]);
aluminiumWindows(["105", "100X150", "With delivery"]);
aluminiumWindows(["2", "130X180", "With delivery"]);
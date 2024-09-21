function shop(input) {
    const fruit = input[0];
    const day = input[1];
    const amount = Number(input[2]);

    let price = 0

    if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') {
        if (fruit === 'banana') {
            price = 2.5;
        } else if (fruit === 'apple') {
            price = 1.20;
        } else if (fruit === 'orange') {
            price = 0.85;
        } else if (fruit === 'grapefruit') {
            price = 1.45;
        } else if (fruit === 'kiwi') {
            price = 2.7;
        } else if (fruit === 'pineapple') {
            price = 5.5;
        } else if (fruit === 'grapes') {
            price = 3.85;
        } else {
            console.log('error');
            return;
        }
    } else if (day === 'Saturday' || day === 'Sunday') {
        if (fruit === 'banana') {
            price = 2.7;
        } else if (fruit === 'apple') {
            price = 1.25;
        } else if (fruit === 'orange') {
            price = 0.9;
        } else if (fruit === 'grapefruit') {
            price = 1.6;
        } else if (fruit === 'kiwi') {
            price = 3;
        } else if (fruit === 'pineapple') {
            price = 5.6;
        } else if (fruit === 'grapes') {
            price = 4.2;
        } else {
            console.log('error');
            return;
        }
    } else {
        console.log('error');
        return;
    }
    const totalPrice = amount * price;
    console.log(totalPrice.toFixed(2));

}

shop(["apple", "Tuesday", "2"]);
shop(["orange", "Sunday", "3"]);
shop(["kiwi", "Monday", "2.5"]);
shop(["grapes", "Saturday", "0.5"]);
shop(["tomato", "Monday", "0.5"]);
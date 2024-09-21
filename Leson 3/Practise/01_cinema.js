function cinema(input) {
    const type = input[0];
    const row = Number(input[1]);
    const colum = Number(input[2]);

    const totalPlaces = row * colum;
    let price = 0;

    if (type === 'Premiere') {
        price = 12;
    } else if (type === 'Normal') {
        price = 7.5;
    } else if (type === 'Discount') {
        price = 5;
    }
    const totalPrice = totalPlaces * price;

    console.log(`${totalPrice.toFixed(2)} leva`);
}

cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);
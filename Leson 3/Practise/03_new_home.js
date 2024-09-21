function home(input) {
    const flower = input[0];
    const quantity = Number(input[1]);
    const budget = Number(input[2]);

    let percentige = 0;
    let price = 0;

    if (flower === 'Roses') {
        price = 5;
        if (quantity > 80) {
            percentige = 0.10;
        }
    } else if (flower === 'Dahlias') {
        price = 3.80;
        if (quantity > 90) {
            percentige = 0.15;
        }
    } else if (flower === 'Tulips') {
        price = 2.8;
        if (quantity > 80) {
            percentige = 0.15;
        }
    } else if (flower === 'Narcissus') {
        price = 3;
        if (quantity < 120) {
            percentige = -0.15;
        }
    } else if (flower === 'Gladiolus') {
        price = 2.5;
        if (quantity < 80) {
            percentige = -0.20
        }
    }

    const totalPrice = quantity * price;
    const finalPrice = totalPrice * (1 - percentige);

    if (finalPrice <= budget) {
        console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${(budget - finalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(finalPrice - budget).toFixed(2)} leva more.`);
    }
}

home(["Roses", "55", "250"]);
home(["Tulips", "88", "260"]);
home(["Narcissus", "119", "360"]);
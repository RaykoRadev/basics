function primiere(input) {
    const projektion = input[0];
    const pakage = input[1];
    const ticketsSold = Number(input[2]);

    let ticketprice = 0;
    let discount = 1;

    if (projektion === 'John Wick') {
        if (pakage === 'Drink') {
            ticketprice = 12;
        } else if (pakage === 'Popcorn') {
            ticketprice = 15;
        } else if (pakage === 'Menu') {
            ticketprice = 19;
        }
    } else if (projektion === 'Star Wars') {
        if (pakage === 'Drink') {
            ticketprice = 18;
        } else if (pakage === 'Popcorn') {
            ticketprice = 25;
        } else if (pakage === 'Menu') {
            ticketprice = 30;
        }
    } else if (projektion === 'Jumanji') {
        if (pakage === 'Drink') {
            ticketprice = 9;
        } else if (pakage === 'Popcorn') {
            ticketprice = 11;
        } else if (pakage === 'Menu') {
            ticketprice = 14;
        }
    }

    if (projektion === 'Star Wars' && ticketsSold >= 4) {
        discount = 0.7;
    } else if (projektion === 'Jumanji' && ticketsSold === 2) {
        discount = 0.85;
    }

    const finalPrice = (ticketprice * ticketsSold * discount).toFixed(2);

    console.log(`Your bill is ${finalPrice} leva.`);
}

// primiere(["John Wick", "Drink", "6"]);
// primiere(["Star Wars", "Popcorn", "4"]);
// primiere(["Jumanji", "Menu", "2"]);
primiere(['Star Wars', 'Drink', 10]);
primiere(['Star Wars', 'Popcorn', 3]);
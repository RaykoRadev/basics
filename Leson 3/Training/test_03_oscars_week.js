function oscars(input) {
    const moviesName = input[0];
    const typeSaloon = input[1];
    const ticketsQuantity = Number(input[2]);

    let ticketprice = 0;

    if (moviesName === 'A Star Is Born') {
        if (typeSaloon === 'normal') {
            ticketprice = 7.50;
        } else if (typeSaloon === 'luxury') {
            ticketprice = 10.50;
        } else if (typeSaloon === 'ultra luxury') {
            ticketprice = 13.50;
        }
    } else if (moviesName === 'Bohemian Rhapsody') {
        if (typeSaloon === 'normal') {
            ticketprice = 7.35;
        } else if (typeSaloon === 'luxury') {
            ticketprice = 9.45;
        } else if (typeSaloon === 'ultra luxury') {
            ticketprice = 12.75;
        }
    } else if (moviesName === 'Green Book') {
        if (typeSaloon === 'normal') {
            ticketprice = 8.15;
        } else if (typeSaloon === 'luxury') {
            ticketprice = 10.25;
        } else if (typeSaloon === 'ultra luxury') {
            ticketprice = 13.25;
        }
    } else if (moviesName === 'The Favourite') {
        if (typeSaloon === 'normal') {
            ticketprice = 8.75;
        } else if (typeSaloon === 'luxury') {
            ticketprice = 11.55;
        } else if (typeSaloon === 'ultra luxury') {
            ticketprice = 13.95;
        }
    }

    const totalPrice = ticketprice * ticketsQuantity;

    console.log(`${moviesName} -> ${(totalPrice).toFixed(2)} lv.`);

}

oscars(["A Star Is Born", "luxury", "42"]);
oscars(["Green Book", "normal", "63"]);

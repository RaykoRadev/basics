function snooker(input) {
    const stage = input[0];
    const typeTicket = input[1];
    const ticketsQuantity = Number(input[2]);
    const photo = input[3];

    let priceTicket = 0;
    let percentige = 1;
    let photoPrice = 0;

    if (stage === 'Quarter final') {
        if (typeTicket === 'Standard') {
            priceTicket = 55.50;
        } else if (typeTicket === 'Premium') {
            priceTicket = 105.20;
        } else if (typeTicket === 'VIP') {
            priceTicket = 118.90;
        }
    } else if (stage === 'Semi final') {
        if (typeTicket === 'Standard') {
            priceTicket = 75.88;
        } else if (typeTicket === 'Premium') {
            priceTicket = 125.22;
        } else if (typeTicket === 'VIP') {
            priceTicket = 300.40;
        }
    } else if (stage === 'Final') {
        if (typeTicket === 'Standard') {
            priceTicket = 110.10;
        } else if (typeTicket === 'Premium') {
            priceTicket = 160.66;
        } else if (typeTicket === 'VIP') {
            priceTicket = 400;
        }
    }

    const allTicketsPrice = priceTicket * ticketsQuantity;

    if (allTicketsPrice > 4000) {
        percentige = 0.75;
    } else if (allTicketsPrice > 2500) {
        percentige = 0.9;
    }

    if (allTicketsPrice <= 4000 && photo === 'Y') {
        photoPrice = 40;
    }

    const totalPrice = allTicketsPrice * percentige + photoPrice * ticketsQuantity;

    console.log(totalPrice.toFixed(2));

}

snooker(["Final", "Premium", "25", "Y"]);
snooker(["Semi final", "VIP", "9", "Y"]);
snooker(["Quarter final", "Standard", "11", "N"]);
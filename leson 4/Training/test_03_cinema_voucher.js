function voucher(input) {
    const priceVoucher = Number(input[0]);

    let name = '';
    let sumAfter = priceVoucher;
    let boughttickets = 0;
    let boughtStuff = 0;
    let ticketPrice = 0;

    for (let bonus = 0; sumAfter >= 0; bonus++) {
        name = input[bonus + 1];

        if (name === 'End') {
            break;
        } else if (name.length > 8) {
            ticketPrice = name.charCodeAt(0) + name.charCodeAt(1);
            sumAfter -= ticketPrice;
            if (sumAfter >= 0) {
                boughttickets++;
            }
        } else {
            ticketPrice = name.charCodeAt(0);
            sumAfter -= ticketPrice;
            if (sumAfter >= 0) {
                boughtStuff++;
            }
        }
    }

    console.log(boughttickets);
    console.log(boughtStuff);
}

voucher(["300", "Captain Marvel", "popcorn", "Pepsi"]);
voucher(["1500", "Avengers: Endgame", "Bohemian Rhapsody", "Deadpool 2", "End"]);
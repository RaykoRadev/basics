function cinema(input) {
    const maxPeople = Number(input[0]);

    let group = 0;
    let freePlaces = maxPeople;
    let price = 0;
    let totalPrice = 0
    for (let newP = 0; group !== 'Movie time!'; newP++) {
        group = input[newP + 1];

        if (freePlaces >= Number(group)) {
            price = Number(group) * 5;
            freePlaces -= Number(group);
            if (Number(group) % 3 === 0) {
                price -= 5;
            }
            totalPrice += price;
        } else {
            break;
        }

    }

    if (group === 'Movie time!') {
        console.log(`There are ${freePlaces} seats left in the cinema.`);
    } else {
        console.log("The cinema is full.");
    }
    console.log(`Cinema income - ${totalPrice} lv.`);
}

// cinema(["60", "10", "6", "3", "20", "15", "Movie time!"]);
// cinema(["50", "15", "10", "10", "15", "5"]);
cinema(["100", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "Movie time!"]);
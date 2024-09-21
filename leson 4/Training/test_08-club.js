function club(input) {
    const target = Number(input.shift());

    let totalprice = 0;
    // let coctailsName = '';

    for (let step = 1; totalprice <= target; step++) {
        let coctailsName = input.shift();

        if (coctailsName === 'Party!') {
            console.log(`We need ${(target - totalprice).toFixed(2)} leva more.`);
            break;
        }

        let quantity = Number(input.shift());
        let coctailsPrice = coctailsName.length * quantity;

        if (coctailsPrice % 2 !== 0) {
            coctailsPrice *= 0.75;
        }

        totalprice += coctailsPrice;

    }

    if (totalprice >= target) {
        console.log("Target acquired.");
    }

    console.log(`Club income - ${totalprice.toFixed(2)} leva.`);
}

// club(["500", "Bellini", "6", "Bamboo", "7", "Party!"]);
club(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);
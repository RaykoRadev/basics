function easterShop(input) {
    let amountEggs = Number(input[0]);
    let transaction = '';
    let amount = 0;
    let soldEggs = 0;

    for (let order = 0; transaction !== 'Close'; order += 2) {
        transaction = input[order + 1];
        amount = Number(input[order + 2])

        if (transaction === 'Buy') {
            if (amountEggs >= amount) {
                amountEggs -= amount;
                soldEggs += amount;
            } else {
                break;
            }

        } else if (transaction === 'Fill') {
            amountEggs += amount;
        }
    }

    if (transaction === 'Close') {
        console.log("Store is closed!");
        console.log(`${soldEggs} eggs sold.`);
    } else {
        console.log("Not enough eggs in store!");
        console.log(`You can buy only ${amountEggs}.`);
    }
}
// easterShop(["13", "Buy", "8", "Fill", "3", "Buy", "10"]);
easterShop(["20", "Fill", "30", "Buy", "15", "Buy", "20", "Close"]);
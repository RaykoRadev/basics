function account(input) {
    let total = 0;

    while (input.length > 0) {
        let income = input.shift();

        if (income < 0) {
            console.log("Invalid operation!");
            break;
        }
        if (income === 'NoMoreMoney') {
            break;
        }
        let amount = Number(income);
        total += amount;
        console.log(`Increase: ${amount.toFixed(2)}`);


    }
    console.log(`Total: ${total.toFixed(2)}`);
}

// account(["5.51", "69.42", "100", "NoMoreMoney"]);
account(["120", "45.55", "-150"]);
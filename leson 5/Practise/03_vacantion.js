function vacation(input) {
    const target = Number(input[0]);
    let currentMoney = Number(input[1]);

    let daysPast = 0;
    let index = 2;
    let daysSpending = 0;
    while (currentMoney < target) {
        let comamnd = input[index];
        let money = Number(input[index + 1]);

        if (comamnd === 'spend') {
            daysPast++;
            daysSpending++;
            currentMoney -= money;
            if (currentMoney < 0) {
                currentMoney = 0;
            }
            if (daysSpending === 5) {
                break;
            }

        } else {
            daysPast++;
            daysSpending = 0;
            currentMoney += money;
        }
        index += 2;
    }
    if (currentMoney >= target) {
        console.log(`You saved the money for ${daysPast} days.`);
    } else {
        console.log("You can't save the money.");
        console.log(`${daysPast}`);
    }
}

// vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
// vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);
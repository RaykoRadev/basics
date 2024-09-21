function moviestars(input) {
    const budget = Number(input[0]);

    let actorName = '';
    let restMoney = budget;
    let salary = 0;

    for (let step = 0; actorName !== 'ACTION'; step++) {
        actorName = input[step + 1];

        if (actorName.length <= 15) {
            step++
            salary = Number(input[step + 1]);
            if (salary <= restMoney) {
                restMoney -= salary;
            } else {
                break;
            }
        } else {
            salary = restMoney * 0.2;
            if (salary <= restMoney) {
                restMoney -= salary;
            } else {
                break;
            }
        }
    }

    if (salary > restMoney) {
        console.log(`We need ${(salary - restMoney).toFixed(2)} leva for our actors.`);
    } else {
        console.log(`We are left with ${restMoney.toFixed(2)} leva.`);
    }
}

// moviestars(["90000", "Christian Bale", "70000.50", "Leonard DiCaprio", "Kevin Spacey", "24000.99"]);
moviestars(["170000", "Ben Affleck", "40000.50", "Zahari Baharov", "80000", "Tom Hanks", "2000.99", "ACTION"]);
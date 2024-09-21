function lily(input) {
    const age = Number(input[0]);
    const washingMashineCost = Number(input[1]);
    const toyPrice = Number(input[2]);

    let money = 10;
    let savedMoney = 0;
    let toysAmount = 0;

    for (let birthdays = 1; birthdays <= age; birthdays++) {

        if (birthdays % 2 === 0) {
            savedMoney += money - 1;
            money += 10;
        } else {
            toysAmount++;
        }
    }
    const totalMoney = savedMoney + toysAmount * toyPrice;

    if (totalMoney >= washingMashineCost) {
        console.log(`Yes! ${(totalMoney - washingMashineCost).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMashineCost - totalMoney).toFixed(2)}`);
    }


}

lily(["10", "170.00", "6"]);
lily(["21", "1570.98", "3"]);
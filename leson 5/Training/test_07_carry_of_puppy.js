function puppy(input) {
    const totalFood = Number(input.shift());      // in Kg

    let leftFood = totalFood * 1000;         // in grams

    let dailyFood = '';

    while (input.length > 0) {
        dailyFood = input.shift();

        if (dailyFood === 'Adopted') {
            break;
        }

        leftFood -= Number(dailyFood);
    }

    if (leftFood >= 0) {
        console.log(`Food is enough! Leftovers: ${leftFood} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(leftFood)} grams more.`);
    }
}

puppy(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);
puppy(["3", "1000", "1000", "1000", "Adopted"]);
puppy(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);
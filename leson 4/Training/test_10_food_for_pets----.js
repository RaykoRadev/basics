function food(input) {
    const days = Number(input.shift());
    const amountFood = Number(input.shift());

    let totalDogAteFood = 0;
    let totalCatAteFood = 0;
    let TotalBisquits = 0;
    let daysCounter = 0;

    for (let proportion = 1; input.length > 0; proportion++) {
        let bisquits = 0;
        let dogMeal = Number(input.shift());
        let catMeal = Number(input.shift());

        totalDogAteFood += dogMeal;
        totalCatAteFood += catMeal;
        daysCounter++;

        if (daysCounter % 3 === 0) {
            bisquits += (dogMeal + catMeal) * 0.1;
        }
        TotalBisquits += bisquits;
    }

    const totalPercetigeFood = (totalCatAteFood + totalDogAteFood) / amountFood * 100;
    const percentigeDogFood = totalDogAteFood / (totalCatAteFood + totalDogAteFood) * 100;
    const percentigeCatgFood = totalCatAteFood / (totalCatAteFood + totalDogAteFood) * 100;

    console.log(`Total eaten biscuits: ${Math.round(TotalBisquits)}gr.`);
    console.log(`${(totalPercetigeFood).toFixed(2)}% of the food has been eaten.`);
    console.log(`${(percentigeDogFood).toFixed(2)}% eaten from the dog.`);
    console.log(`${(percentigeCatgFood).toFixed(2)}% eaten from the cat.`);
}

// food(["3", "1000", "300", "20", "100", "30", "110", "40"]);
food(["3", "500", "100", "30", "110", "25", "120", "35"]);
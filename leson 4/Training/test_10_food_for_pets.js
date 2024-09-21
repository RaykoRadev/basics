function food(input) {
    const days = Number(input[0]);
    const amountFood = Number(input[1]);

    let totalDogEatenFood = 0;
    let totalCatEatenFood = 0;
    let TotalBisquits = 0;


    let index = 2;

    for (let day = 1; day <= days; day++) {
        let bisquits = 0;
        let dogEatenDaily = Number(input[index++]);
        let catEatenDaily = Number(input[index++]);

        if (day % 3 === 0) {
            bisquits = (dogEatenDaily + catEatenDaily) * 0.1;
        }
        TotalBisquits += bisquits;
        totalDogEatenFood += dogEatenDaily;
        totalCatEatenFood += catEatenDaily;

    }

    const totalPercetigeFood = (totalCatEatenFood + totalDogEatenFood) / amountFood * 100;
    const percentigeDogFood = totalDogEatenFood / (totalCatEatenFood + totalDogEatenFood) * 100;
    const percentigeCatgFood = totalCatEatenFood / (totalCatEatenFood + totalDogEatenFood) * 100;

    console.log(`Total eaten biscuits: ${Math.round(TotalBisquits)}gr.`);
    console.log(`${(totalPercetigeFood).toFixed(2)}% of the food has been eaten.`);
    console.log(`${(percentigeDogFood).toFixed(2)}% eaten from the dog.`);
    console.log(`${(percentigeCatgFood).toFixed(2)}% eaten from the cat.`);
}

food(["3", "1000", "300", "20", "100", "30", "110", "40"]);
food(["3", "500", "100", "30", "110", "25", "120", "35"]);
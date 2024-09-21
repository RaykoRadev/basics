function feedengPets(input) {
    const days = Number(input[0]);
    const foodInKg = Number(input[1]);
    const dogNeededForDay = Number(input[2]);
    const catNeededForDay = Number(input[3]);
    const turtleNeededForDay = Number(input[4]);

//     const dogFoodTotal = days * dogNeededForDay;
//     const catFoodTotal = days * catNeededForDay;
//     const turtleFoodTotal = days * turtleNeededForDay;

    const neededFood = days * dogNeededForDay + days * catNeededForDay + days * (turtleNeededForDay / 1000);

    if (foodInKg >= neededFood) {
        console.log(`${Math.floor(foodInKg - neededFood)} kilos of food left.`);

    } else {
        console.log(`${Math.ceil(neededFood - foodInKg)} more kilos of food are needed.`);
    }
}

feedengPets([2, 10, 1, 1, 1200]);
feedengPets([5, 10, 2.1, 0.8, 321]);
function catwalking(input) {
    
    const BURNED_CALORIES_PER_MINUTE = 5
    
    const minWalkingPerDay = Number(input[0]);
    const numberWalksPerDay = Number(input[1]);
    const caloriesPerday = Number(input[2]);

    const necesseryBurnedCalories = caloriesPerday / 2;

    const burnedCalieries = numberWalksPerDay * minWalkingPerDay * BURNED_CALORIES_PER_MINUTE;

    if (burnedCalieries >= necesseryBurnedCalories) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCalieries}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCalieries}.`);
    }
}

catwalking(["30", "3", "600"]);
catwalking(["15", "2", "500"]);

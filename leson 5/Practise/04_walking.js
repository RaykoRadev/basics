function waliking(input) {
    const TARGET = 10000;

    let totalSteps = 0;

    while (input.length > 0) {
        let curentSteps = input.shift();
        if (curentSteps === 'Going home') {
            curentSteps = input.shift();
            totalSteps += Number(curentSteps);
            break
        }
        totalSteps += Number(curentSteps);

    }

    if (totalSteps >= TARGET) {
        console.log("Goal reached! Good job!");
        console.log(`${totalSteps - TARGET} steps over the goal!`);
    } else {
        console.log(`${TARGET - totalSteps} more steps to reach goal.`);
    }
}
waliking(["1000", "1500", "2000", "6500"]);
waliking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
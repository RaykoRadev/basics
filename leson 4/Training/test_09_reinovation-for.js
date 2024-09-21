function reinovation(input) {
    const sideA = Number(input[0]);
    const sideB = Number(input[1]);
    const percentige = Number(input[2]);

    const areaIntotal = 4 * sideA * sideB;
    const paintingArea = areaIntotal * (1 - percentige / 100);
    let leftArea = Math.ceil(paintingArea);
    let litres = 0;

    for (let paint = 2; leftArea >= 0; paint++) {
        litres = input[paint + 1];

        if (litres === 'Tired!') {
            console.log(`${leftArea} quadratic m left.`);
            break;
        }

        leftArea -= Number(litres);

        if (leftArea === 0) {
            console.log("All walls are painted! Great job, Pesho!");
            break;
        } else if (leftArea < 0) {
            console.log(`All walls are painted and you have ${Math.abs(Number(leftArea))} l paint left!`);
            break;
        }
    }
}

reinovation(["3", "5", "10", "2", "3", "4", "Tired!"]);
reinovation(["2", "3", "25", "6", "7", "8"]);
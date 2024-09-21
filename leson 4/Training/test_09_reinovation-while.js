function reinovation(input) {
    const sideA = Number(input[0]);
    const sideB = Number(input[1]);
    const percentige = Number(input[2]);

    const areaIntotal = 4 * sideA * sideB;
    const paintingArea = areaIntotal * (1 - percentige / 100);
    let leftArea = Math.ceil(paintingArea);
    let index = 3;
    let litres = input[index];

    while (litres !== 'Tired!') {

        if (leftArea >= Number(litres)) {
            leftArea -= Number(litres);
        } else {
            leftArea -= Number(litres);
            console.log(`All walls are painted and you have ${Math.abs(leftArea)} l paint left!`);
            return;
        }

        if (leftArea === 0) {
            console.log("All walls are painted! Great job, Pesho!");
            return;
        }

        litres = input[++index];
    }
    console.log(`${leftArea} quadratic m left.`);
}

reinovation(["3", "5", "10", "2", "3", "4", "Tired!"]);
reinovation(["2", "3", "25", "6", "7", "8"]);
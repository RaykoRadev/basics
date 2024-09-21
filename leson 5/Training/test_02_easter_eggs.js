function easterEggs(input) {
    const eggs = Number(input[0]);

    let redCount = 0;
    let orangeCount = 0;
    let blueCount = 0;
    let greenCount = 0;
    let maxEggs = 0;
    let color = '';

    for (let step = 0; step <= eggs; step++) {
        let color = input[step + 1];

        if (color === 'red') {
            redCount++;
        } else if (color === 'orange') {
            orangeCount++;
        } else if (color === 'blue') {
            blueCount++;
        } else if (color === 'green') {
            greenCount++;
        }
    }
    if (maxEggs < redCount) {
        maxEggs = redCount;
        color = 'red';
    }
    if (maxEggs < orangeCount) {
        maxEggs = orangeCount;
        color = 'orange';
    }
    if (maxEggs < blueCount) {
        color = 'blue';
        maxEggs = blueCount;
    }
    if (maxEggs < greenCount) {
        color = 'green';
        maxEggs = greenCount;
    }

    console.log(`Red eggs: ${redCount}`);
    console.log(`Orange eggs: ${orangeCount}`);
    console.log(`Blue eggs: ${blueCount}`);
    console.log(`Green eggs: ${greenCount}`);
    console.log(`Max eggs: ${maxEggs} -> ${color}`);
}
easterEggs(["7", "orange", "blue", "green", "green", "blue", "red", "green"]);
easterEggs(["4", "blue", "red", "blue", "orange"]);
function game(input) {
    const moves = Number(input[0]);

    let points = 0;
    let gamePoints = 0;
    // let finalPoints = 0;

    let percentage1 = 0;
    let percentage2 = 0;
    let percentage3 = 0;
    let percentage4 = 0;
    let percentage5 = 0;
    let percentage6 = 0;

    for (let step = 0; step <= moves - 1; step++) {
        points = input[step + 1];

        if (points < 0 || points > 50) {
            gamePoints = gamePoints / 2;
            percentage6++;
        } else if (points <= 9) {
            gamePoints += 20 / 100 * points;
            percentage1++;
        } else if (points < 20) {
            gamePoints += 30 / 100 * points;
            percentage2++;
        } else if (points < 30) {
            gamePoints += 40 / 100 * points;
            percentage3++;
        } else if (points < 40) {
            gamePoints += 50;
            percentage4++;
        } else if (points <= 50) {
            gamePoints += 100;
            percentage5++;
        }
    }


    console.log(gamePoints.toFixed(2));
    console.log(`From 0 to 9: ${(percentage1 / moves * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(percentage2 / moves * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(percentage3 / moves * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(percentage4 / moves * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(percentage5 / moves * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(percentage6 / moves * 100).toFixed(2)}%`);
}

game([10, 43, 57, -12, 23, 12, 0, 50, 40, 30, 20]);
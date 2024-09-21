function balls(input) {
    const balls = Number(input.shift());

    let toalPoints = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let blackBalls = 0;
    let otherBalls = 0;


    for (let turn = 1; input.length > 0; turn++) {
        let color = input.shift();

        if (color === 'red') {
            redBalls++;
            toalPoints += 5;
        } else if (color === 'orange') {
            orangeBalls++;
            toalPoints += 10;
        } else if (color === 'yellow') {
            yellowBalls++;
            toalPoints += 15;
        } else if (color === 'white') {
            whiteBalls++;
            toalPoints += 20;
        } else if (color === 'black') {
            blackBalls++;
            toalPoints = Math.floor(toalPoints / 2);
        } else {
            otherBalls++;
        }
    }
    console.log(`Total points: ${toalPoints}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherBalls}`);
    console.log(`Divides from black balls: ${blackBalls}`);
}

// balls(["3", "white", "black", "pink"]);
balls(["5", "red", "red", "ddd", "ddd", "ddd"]);
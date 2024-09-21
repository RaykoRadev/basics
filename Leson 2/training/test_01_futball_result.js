function footballScore(input) {
    const firstGame = input[0];
    const secondGame = input[1];
    const thirdGame = input[2];

    const firstGameSplit = firstGame.split(':');
    const secondGameSplit = secondGame.split(':');
    const thirdGameSplit = thirdGame.split(':');

    let result1H = firstGameSplit[0];
    let result1G = firstGameSplit[1];
    let result2H = secondGameSplit[0];
    let result2G = secondGameSplit[1];
    let result3H = thirdGameSplit[0];
    let result3G = thirdGameSplit[1];

    let countW = 0;
    let countD = 0;
    let countL = 0;

    if (result1H > result1G) {
        countW++;
    } else if (result1H === result1G) {
        countD++;
    } else if (result1H < result1G) {
        countL++;
    }

    if (result2H > result2G) {
        countW++;
    } else if (result2H === result2G) {
        countD++;
    } else if (result2H < result2G) {
        countL++;
    }

    if (result3H > result3G) {
        countW++;
    } else if (result3H === result3G) {
        countD++;
    } else if (result3H < result3G) {
        countL++;
    }

    console.log(`Team won ${countW} games.`);
    console.log(`Team lost ${countL} games.`);
    console.log(`Drawn games: ${countD}`);
}
// footballScore(["3:1", "0:2", "0:0"]);
// footballScore(["4:2", "0:3", "1:0"]);
footballScore(["0:2", "0:1", "3:3"]);

// much better solution: 
function footbalReslults(input) {

    let countW = 0;
    let countL = 0;
    let countD = 0;

    for (let i = 0; i < 3; i++) {
        let gameResult = input[i];
        let splitResult = gameResult.split(":");

        if (splitResult[0] > splitResult[1]) {
            countW++;
        } else if (splitResult[0] < splitResult[1]) {
            countL++;
        } else {
            countD++;
        }
    }

    console.log(`Team won ${countW} games.`);
    console.log(`Team lost ${countL} games.`);
    console.log(`Drawn games: ${countD}`);

}
footbalReslults(["3:1", "0:2", "0:0"]);
footbalReslults(["4:2", "0:3", "1:0"]);
footbalReslults(["0:2", "0:1", "3:3"]);
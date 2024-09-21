function gameNUmbersWar(input) {
    const playerOneName = input[0];
    const playerTwoName = input[1];

    let points1 = 0;
    let points2 = 0;
    let pl1 = 0;
    let pl2 = 0;
    let nameWinner = '';
    let wPl1 = 0;
    let wPl2 = 0;
    let points = 0;

    for (let round = 1; pl1 !== 'End of game'; round += 2) {
        pl1 = input[round + 1];
        pl2 = input[round + 2];

        if (pl1 === pl2) {
            wPl1 = Number(input[round + 3]);
            wPl2 = Number(input[round + 4]);

            if (wPl1 > pl2) {
                points = points1;
                nameWinner = playerOneName;
            } else if (pl1 < pl2) {
                points = points2;
                nameWinner = playerTwoName;
            }
            console.log("Number wars!");
            console.log(`${nameWinner} is winner with ${points} points`);
            break;

        } else {
            if (pl1 === 'End of game') {
                console.log(`${playerOneName} has ${points1} points`);
                console.log(`${playerTwoName} has ${points2} points`);
                break;
            } else if (pl1 > pl2) {
                points1 += Number(pl1) - Number(pl2);
            } else if (pl1 < pl2) {
                points2 += Number(pl2) - Number(pl1);
            }
        }
    }
}

// gameNUmbersWar(["Desi", "Niki", "7", "5", "3", "4", "3", "3", "5", "3"]);
gameNUmbersWar(["Elena", "Simeon", "6", "3", "2", "5", "8", "9", "End of game"]);
// gameNUmbersWar(["Aleks", "Georgi", "4", "5", "3", "2", "4", "3", "4", "4", "5", "2"]);
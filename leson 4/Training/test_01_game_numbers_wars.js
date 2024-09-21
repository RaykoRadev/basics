function gameNUmbersWar(input) {
    const playerOneName = input.shift();
    const playerTwoName = input.shift();

    let points1 = 0;
    let points2 = 0;
    let pl1 = 0;
    let pl2 = 0;
    let nameWinner = '';
    let pointsWar = 0;

    for (let round = 1; input.length > 0; round++) {
        pl1 = Number(input.shift());
        pl2 = Number(input.shift());

        if (pl1 > pl2) {
            points1 += pl1 - pl2;
        } else if (pl1 < pl2) {
            points2 += pl2 - pl1;
        } else if (pl1 === pl2) {
            pl1 = Number(input.shift());
            pl2 = Number(input.shift());

            if (pl1 > pl2) {
                pointsWar = points1;
                nameWinner = playerOneName;
            } else if (pl1 < pl2) {
                pointsWar = points2;
                nameWinner = playerTwoName;
            }
            console.log("Number wars!");
            console.log(`${nameWinner} is winner with ${pointsWar} points`);
            return;
        }
    }
    console.log(`${playerOneName} has ${points1} points`);
    console.log(`${playerTwoName} has ${points2} points`);
}

// gameNUmbersWar(["Desi", "Niki", "7", "5", "3", "4", "3", "3", "5", "3"]);
// gameNUmbersWar(["Elena", "Simeon", "6", "3", "2", "5", "8", "9", "End of game"]);
// gameNUmbersWar(["Aleks", "Georgi", "4", "5", "3", "2", "4", "3", "4", "4", "5", "2"]);
gameNUmbersWar(["Desi", "Niki", "7", "7", "3", "4"])
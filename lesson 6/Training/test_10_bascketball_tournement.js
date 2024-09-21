// variant 1:

function basketballTorurnement(input) {
    let name = input[0];

    let index = 0;
    let tournament = input[index];
    let counterAllGames = 0;
    let countL = 0;
    let countW = 0;

    while (tournament !== 'End of tournaments') {
        let counterGames = 0;

        let numbersOfGames = Number(input[++index]);

        for (let i = 1; i <= numbersOfGames; i++) {
            let desisTeam = Number(input[++index]);
            let enemyTeam = Number(input[++index]);
            counterGames++;

            if (desisTeam > enemyTeam) {
                countW++;
                console.log(`Game ${counterGames} of tournament ${name}: win with ${desisTeam - enemyTeam} points.`);

            } else {
                countL++;
                console.log(`Game ${counterGames} of tournament ${name}: lost with ${enemyTeam - desisTeam} points.`);

            }
        }

        counterAllGames += counterGames;
        name = input[++index];
        tournament = input[index];
    }
    console.log(`${(countW / counterAllGames * 100).toFixed(2)}% matches win`);
    console.log(`${(countL / counterAllGames * 100).toFixed(2)}% matches lost`);

}

// variant 2:

function basketballTournament(input) {

    let desiteamPoints = 0;
    let enemyTeamPoints = 0;
    let totalGameCounter = 0;
    let counterW = 0;
    let counterL = 0;

    while (input.length > 0) {
        let nameTournament = input.shift();
        let playedMatches = Number(input.shift());
        let counter = 0;

        for (let i = 1; i <= playedMatches; i++) {
            desiteamPoints = Number(input.shift());
            enemyTeamPoints = Number(input.shift());
            totalGameCounter++;
            counter++;

            if (desiteamPoints > enemyTeamPoints) {
                counterW++;
                console.log(`Game ${counter} of tournament ${nameTournament}: win with ${desiteamPoints - enemyTeamPoints} points.`);
            } else if (desiteamPoints < enemyTeamPoints) {
                counterL++;
                console.log(`Game ${counter} of tournament ${nameTournament}: lost with ${enemyTeamPoints - desiteamPoints} points.`);
            }

        }
    }

    console.log(`${(counterW / totalGameCounter * 100).toFixed(2)}% matches win`);
    console.log(`${(counterL / totalGameCounter * 100).toFixed(2)}% matches lost`);

}

basketballTorurnement(["Dunkers", "2", "75", "65", "56", "73", "Fire Girls", "3", "67", "34", "83", "98", "66", "45", "End of tournaments"]);
basketballTorurnement(["Ballers", "3", "87", "63", "56", "65", "75", "64", "Sharks", "4", "64", "76", "65", "86", "68", "99", "45", "78", "End of tournaments"]);
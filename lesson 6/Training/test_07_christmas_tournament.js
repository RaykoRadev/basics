function christmasTournament(input) {
    const totalDays = Number(input[0]);
    let index = 0;

    let wins = 0;
    let loses = 0;

    let totalMoney = 0;

    for (let tournamentDay = 1; tournamentDay <= totalDays; tournamentDay++) {
        let game = input[++index];
        let curentMoney = 0;
        let daylyWins = 0;
        let daylyLoses = 0;

        while (game !== 'Finish') {
            let score = input[++index];

            if (score === 'win') {
                daylyWins++;
                curentMoney += 20;
            } else {
                daylyLoses++;
            }

            game = input[++index];
        }

        if (daylyWins > daylyLoses) {
            curentMoney *= 1.1;
        }

        totalMoney += curentMoney;
        wins += daylyWins;
        loses += daylyLoses;
    }

    if (wins > loses) {
        totalMoney *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }

}
// christmasTournament(["2", "volleyball", "win", "football", "lose", "basketball", "win", "Finish", "golf", "win", "tennis", "win", "badminton", "win", "Finish"]);
christmasTournament(["3", "darts", "lose", "handball", "lose", "judo", "win", "Finish", "snooker", "lose", "swimming", "lose", "squash", "lose", "table tennis", "win", "Finish", "volleyball", "win", "basketball", "win", "Finish"]);
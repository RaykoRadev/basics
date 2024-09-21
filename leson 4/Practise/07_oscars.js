function oscars(input) {
    const name = input[0];
    const startingPoints = Number(input[1]);
    const guri = Number(input[2]);

    let evalutaion = 0;

    for (let i = 2; i <= input.length - 2; i += 2) {
        let guriName = input[i + 1];
        let points = Number(input[i + 2]);

        evalutaion += guriName.length * points / 2;

        if (evalutaion >= 1250.5 - startingPoints) {
            break;
        }
    }

    let finalScore = evalutaion + startingPoints;

    if (finalScore >= 1250.5) {
        console.log(`Congratulations, ${name} got a nominee for leading role with ${finalScore.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${name} you need ${(1250.5 - finalScore).toFixed(1)} more!`);
    }

}

oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);    
function easterCompetition(input) {
    const amountOfbreads = Number(input[0]);

    let name = input[1];
    let maxPoints = 0;
    let index = 2;
    let step = input[index];
    let winnerName = '';

    for (let numberOfBread = 1; numberOfBread <= amountOfbreads; numberOfBread++) {
        let curentPoints = 0;

        while (step !== 'Stop') {
            curentPoints += Number(step);
            step = input[++index];
        }

        console.log(`${name} has ${curentPoints} points.`);

        if (maxPoints < curentPoints) {
            maxPoints = curentPoints;
            winnerName = name;
            console.log(`${winnerName} is the new number 1!`);
        }

        name = input[++index];
        step = input[++index];
    }

    console.log(`${winnerName} won competition with ${maxPoints} points!`);
}
easterCompetition(["3", "Chef Manchev", "10", "10", "10", "10", "Stop", "Natalie", "8", "2", "9", "Stop", "George", "9", "2", "4", "2", "Stop"]);
easterCompetition(["2", "Chef Angelov", "9", "9", "9", "Stop", "Chef Rowe", "10", "10", "10", "10", "Stop"]);
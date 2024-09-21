function nameGame(input) {

    let index = 0;
    let name = input[index];
    let totalPoints = 0;
    let winnerName = '';

    while (name !== 'Stop') {
        let points = 0;

        for (let nameIndex = 0; nameIndex < name.length; nameIndex++) {
            let letter = name[nameIndex];
            let toNumber = letter.charCodeAt();
            let guess = Number(input[++index]);
            if (toNumber === guess) {
                points += 10;
            } else {
                points += 2;
            }
        }
        if (points > totalPoints) {
            totalPoints = points;
            winnerName = name;
        } else if (totalPoints === points) {
            winnerName = name;
        }
        name = input[++index];
    }

    console.log(`The winner is ${winnerName} with ${totalPoints} points!`);
}
// nameGame(["Ivan", "73", "20", "98", "110", "Ivo", "80", "65", "87", "Stop"]);
nameGame(["Pesho", "124", "34", "111", "97", "99", "Gosho", "98", "124", "88", "76", "18", "Stop"]);
function tournament(input) {
    const name = input[0];
    const playedMatches = Number(input[1]);

    // W - Отборът е победител и получава 3 точки 
    // D - Срещата е завършила без победител и отборът получава 1 точка 
    // L - Отборът е загубил срещата и не получава точки

    if (playedMatches === 0) {
        console.log(`${name} hasn't played any games during this season.`);

    } else {

        let points = 0;
        let wCount = 0;
        let dCount = 0;
        let lCount = 0;

        let game = 2;
        while (game < input.length) {
            let result = input[game];
            if (result === 'W') {
                points += 3;
                wCount++;

            } else if (result === 'D') {
                points += 1;
                dCount++;

            } else {
                lCount++;
            }

            game++;
        }
        console.log(`${name} has won ${points} points during this season.`);
        console.log('Total stats:');
        console.log(`## W: ${wCount}`);
        console.log(`## D: ${dCount}`);
        console.log(`## L: ${lCount}`);
        console.log(`Win rate: ${(wCount / playedMatches * 100).toFixed(2)}%`);
    }
}
tournament(["Liverpool", "10", "W", "D", "D", "W", "L", "W", "D", "D", "W", "W"]);
tournament(["Barcelona", "7", "W", "D", "L", "L", "W", "W", "D"]);
tournament(["Chelsea", "0"]);
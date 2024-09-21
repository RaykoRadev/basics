function tennisTournir(input) {
    const playedTournirs = Number(input.shift());
    let points = Number(input.shift());

    let strartingPoints = points;
    let winGames = 0;

    while (input.length > 0) {
        let gameResult = input.shift();

        if (gameResult === 'W') {
            winGames++;
            points += 2000;
        } else if (gameResult === 'F') {
            points += 1200;
        } else if (gameResult === 'SF') {
            points += 720;
        }
    }

    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor((points - strartingPoints) / playedTournirs)}`);
    console.log(`${(winGames / playedTournirs * 100).toFixed(2)}%`);

}

tennisTournir(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisTournir(["4", "750", "SF", "W", "SF", "W"]);    

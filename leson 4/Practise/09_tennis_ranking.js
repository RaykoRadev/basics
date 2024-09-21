function tennisTournir(input) {
    const playedTournirs = Number(input[0]);
    let points = Number(input[1]);

    let winGames = 0;

    for (let tournirs = 1; tournirs <= playedTournirs; tournirs++) {
        let game = input[tournirs + 1];

        if (game === 'W') {
            winGames++;
            points += 2000;
        } else if (game === 'F') {
            points += 1200;
        } else if (game === 'SF') {
            points += 720;
        }
    }

    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor((points - Number(input[1])) / playedTournirs)}`);
    console.log(`${(winGames / playedTournirs * 100).toFixed(2)}%`);

}

tennisTournir(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisTournir(["4", "750", "SF", "W", "SF", "W"]);    

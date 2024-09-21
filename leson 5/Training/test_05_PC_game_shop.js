function gameShop(input) {
    const soldGames = Number(input.shift());

    let heartstonesPerc = 0;
    let fortnightPerc = 0;
    let overwatchPerc = 0;
    let othersPerc = 0;

    let countHs = 0;
    let countFn = 0;
    let countOw = 0;
    let countOth = 0;

    while (input.length > 0) {
        let name = input.shift();

        if (name === 'Hearthstone') {
            countHs++;
        } else if (name === 'Fornite') {
            countFn++;
        } else if (name === 'Overwatch') {
            countOw++;
        } else {
            countOth++;
        }
    }

    heartstonesPerc = countHs / soldGames * 100;
    fortnightPerc = countFn / soldGames * 100;
    overwatchPerc = countOw / soldGames * 100;
    othersPerc = countOth / soldGames * 100;

    console.log(`Hearthstone - ${heartstonesPerc.toFixed(2)}%`);
    console.log(`Fornite - ${fortnightPerc.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatchPerc.toFixed(2)}%`);
    console.log(`Others - ${othersPerc.toFixed(2)}%`);
}
gameShop(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);
gameShop(["3", "Hearthstone", "Diablo 2", "Star Craft 2"]);
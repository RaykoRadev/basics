function easterBattle(input) {
    let playerOne = Number(input[0]);
    let playerTwo = Number(input[1]);

    let winner = '';

    for (let round = 1; winner !== 'End'; round++) {
        winner = input[round + 1];

        if (winner === 'one') {
            playerTwo--;
            if (playerTwo === 0) {
                console.log(`Player two is out of eggs. Player one has ${playerOne} eggs left.`);
                break;
            }
        } else if (winner === 'two') {
            playerOne--;
            if (playerOne === 0) {
                console.log(`Player one is out of eggs. Player two has ${playerTwo} eggs left.`);
                break;
            }
        }
    }
    if (winner === 'End') {
        console.log(`Player one has ${playerOne} eggs left.`);
        console.log(`Player two has ${playerTwo} eggs left.`);
    }
}

// easterBattle([5, 4, 'one', 'two', 'one', 'two', 'two', 'End']);
// easterBattle([2, 6, 'one', 'two', 'two']);
easterBattle([6, 3, 'one', 'two', 'two', 'one', 'one']);
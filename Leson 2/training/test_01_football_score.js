function footballScore(input) {
    const firstGame = input[0];
    const secondGame = input[1];
    const thirdGame = input[2];

    const firstGameSplit = firstGame.split(':');
    const secondGameSplit = secondGame.split(':');
    const thirdGameSplit = thirdGame.split(':');


    let total = 0;

    let gameResult = '';
    let result1 = '';
    let result2 = '';
    let result3 = '';

    //result = Number(firstGame[2]) + Number(secondGame[2]) + Number(thirdGame[2]);




    switch (total) {

        case firstGameSplit:
            if (Number(firstGame[0]) > Number(firstGame[2])) {
                result1 = 'win';
            } else if (Number(firstGame[0]) < Number(firstGame[2])) {
                result1 = 'lose';
            } else if (Number(firstGame[0]) === Number(firstGame[2])) {
                result1 = 'drawn'
            }
            break;

        case secondGameSplit:
            if (Number(secondGame[0]) > Number(secondGame[2])) {
                result2 = 'win';
            } else if (Number(secondGame[0]) < Number(secondGame[2])) {
                result2 = 'lose';
            } else if (Number(secondGame[0]) === Number(secondGame[2])) {
                result2 = 'drawn'
            }
            break;

        case thirdGame:
            if (Number(thirdGame[0]) > Number(thirdGame[1])) {
                result3 = 'win';
            } else if (Number(thirdGame[0]) < Number(thirdGame[1])) {
                result3 = 'lose';
            } else if (Number(thirdGame[0]) === Number(thirdGame[1])) {
                result3 = 'drawn'
            }
            break;

    }

    console.log(`${result1} + ${result2}`);

    // switch (firstGameSplit) {

    //     case win:
    //         if (Number(firstGame[0]) > Number(firstGame[2])) {
    //             result1 = 'win';
    //         }
    //         break;

    //     case lose:
    //         if (Number(firstGame[0]) < Number(firstGame[2])) {
    //             result1 = 'lose';
    //         }
    //         break;

    //     case drawn:
    //         if (Number(firstGame[0]) === Number(firstGame[2])) {
    //             result1 = 'drawn'
    //         }
    //         break;
    // }
    // switch (secondGameSplit) {
    //     case win:
    //         if (Number(secondGame[0]) > Number(secondGame[2])) {
    //             result2 = 'win';
    //         }
    //         break;
    //     case lose:
    //         if (Number(secondGame[0]) < Number(secondGame[2])) {
    //             result2 = 'lose';
    //         }
    //         break;
    //     case drawn:
    //         if (Number(secondGame[0]) === Number(secondGame[2])) {
    //             result2 = 'drawn';
    //         }
    //         break;
    // }


    // console.log(`${result1}`);

}



// console.log(`Team won ${ count(win) } games.`);
// console.log(`Team lost {брой загубени мачове } games.`);
// console.log(`Drawn games: {брой равни мачове } `);



footballScore(["3:1", "0:2", "0:0"]);
// footballScore(["4:2", "0:3", "1:0"]);
// footballScore(["0:2", "0:1", "3:3"]);


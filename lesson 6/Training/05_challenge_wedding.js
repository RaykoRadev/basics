function challengeWedding(input) {
    const man = Number(input[0]);
    const women = Number(input[1]);
    const tables = Number(input[2]);
    let print = '';
    let count = 0;

    for (let num1 = 1; num1 <= man; num1++) {
        let clientM = num1;

        for (let num2 = 1; num2 <= women; num2++) {
            let clientW = num2;

            count++
            if (count > tables) {
                break;
            }
            print += `(${clientM} <-> ${clientW}) `
        }
    }
    console.log(print);

}
// challengeWedding(['2', '2', '6']);
// challengeWedding(['2', '2', '3']);
challengeWedding(['5', '8', '30']);
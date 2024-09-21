function solve(input) {
    const num = Number(input[0]);
    let dolar = 0;
    let resultat = '';

    while (dolar < num) {
        let repeats = 1
        resultat += '$ '.repeat(repeats)
        console.log(resultat);

        repeats++;
        dolar++;
    }
}

solve([3]);
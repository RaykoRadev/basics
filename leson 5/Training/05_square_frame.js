function solve(input) {
    const num = Number(input[0]);
    let square = 0;
    let resultat = '';

    console.log(`+ ${'- '.repeat(num - 2)}+`);
    while (square < num - 2) {
        let repeats = num - 2;
        // resultat += ' '.repeat(repeats)
        console.log(`| ${'- '.repeat(num - 2)}|`);

        repeats++;
        square++;
    }
    console.log(`+ ${'- '.repeat(num - 2)}+`);
}

solve([7]);
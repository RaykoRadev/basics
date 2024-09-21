function solve(input) {
    const num = Number(input[0]);
    let rhombus = 0;
    // let resultat = '';

    let strars = 1;
    let spaces = num - 1;

    while (rhombus < num) {
        console.log(`${' '.repeat(spaces--)}${'* '.repeat(strars++)}`);

        rhombus++;
    }
    let rhombusN = 0;
    let starsN = num - 1;
    let spacesN = 1;
    while (rhombusN < num) {
        console.log(`${' '.repeat(spacesN++)}${'* '.repeat(starsN--)}`);

        rhombusN++;
    }

}
solve([5]);

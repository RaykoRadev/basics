function solve(input) {
    let num = Number(input[0]);
    let stars = 0;
    let result = '';

    while (stars < num) {
        result = '*'.repeat(num)
        console.log(result);
        stars++;
    }
}
solve(['6']);
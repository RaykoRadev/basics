function combination(input) {
    const num = Number(input[0]);
    let count = 0;
    for (let num1 = 0; num1 <= 25; num1++) {
        for (let num2 = 0; num2 <= 25; num2++) {
            for (let num3 = 0; num3 <= 25; num3++) {
                if (num1 + num2 + num3 === num) {
                    count++;
                }
            }
        }
    }
    console.log(count);
}
combination([25]);
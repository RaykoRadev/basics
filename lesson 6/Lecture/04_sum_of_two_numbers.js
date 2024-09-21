function sum(input) {
    const start = Number(input[0]);
    const end = Number(input[1]);
    const magicalNumber = Number(input[2]);
    let count = 0;

    for (let num = start; num <= end; num++) {
        for (let num1 = start; num1 <= end; num1++) {
            count++
            if (num + num1 === magicalNumber) {
                console.log(`Combination N:${count} (${num} + ${num1} = ${magicalNumber})`);
                return;
            }

        }
    }
    console.log(`${count} combinations - neither equals ${magicalNumber}`);
}
sum(["1", "10", "5"]);
sum(["88", "888", "1000"]);
sum(["23", "24", "20"]);
sum(["88", "888", "2000"]);
function sumtwoNumbers(input) {
    const start = Number(input[0]);
    const end = Number(input[1]);
    const magicalNumber = Number(input[2]);

    let num1 = 0;
    let num2 = 0;
    let count = 0;

    for (let i1 = start; i1 <= end; i1++) {
        num1 = i1;

        for (let i2 = start; i2 <= end; i2++) {
            num2 = i2;
            count++;
            if (num1 + num2 === magicalNumber) {
                console.log(`Combination N:${count} (${num1} + ${num2} = ${magicalNumber})`);
                return;
            }
        }
    }
    console.log(`${count} combinations - neither equals ${magicalNumber}`);


}
sumtwoNumbers(['1', '10', '5']);
sumtwoNumbers(['23', '24', '20']);
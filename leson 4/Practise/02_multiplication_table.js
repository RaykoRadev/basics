function multiplication(input) {
    const multiply = Number(input[0]);

    for (let num = 1; num <= 10; num++) {
        console.log(`${num} * ${multiply} = ${num * multiply}`);
    }
}
multiplication(["5"]);
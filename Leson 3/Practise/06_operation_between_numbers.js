function numbers(input) {
    const number1 = Number(input[0]);
    const number2 = Number(input[1]);
    const operator = input[2];

    let result = 0;

    if (number2 == 0) {
        console.log(`Cannot divide ${number1} by zero`);
        return;
    } else if (operator === '+') {
        result = number1 + number2;

    } else if (operator === '-') {
        result = number1 - number2;

    } else if (operator === '*') {
        result = number1 * number2;

    } else if (operator === '/') {
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result.toFixed(2)}`);
        return;

    } else if (operator === '%') {
        result = number1 % number2;
        console.log(`${number1} % ${number2} = ${result}`);
        return;
    }

    if (result % 2 === 0) {
        console.log(`${number1} ${operator} ${number2} = ${result} - even`);
    } else {
        console.log(`${number1} ${operator} ${number2} = ${result} - odd`);
    }

}

numbers(["10", "12", "+"]);
numbers(["123", "12", "/"]);
numbers(["112", "0", "/"]);
numbers(["10", "1", "-"]);
numbers(["10", "3", "%"]);
numbers(["10", "0", "%"]);
numbers(["7", "3", "*"]);
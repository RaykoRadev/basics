function sumOfNumbers(input) {
    const number = input[0];
    let sum = 0;
    for (let symbol = 0; symbol < number.length; symbol++) {
        let digit = number[symbol];
        sum += Number(digit);

    }
    console.log(`The sum of the digits is:${sum}`);

}

sumOfNumbers(["1234"]);
sumOfNumbers(["564891"]);
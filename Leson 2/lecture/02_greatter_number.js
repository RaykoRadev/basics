function biggerNumber(input) {
    const numberOne = Number(input[0]);
    const numberTwo = Number(input[1]);

    if (numberOne > numberTwo) {
        console.log(numberOne);
    } else {
        console.log(numberTwo);
    }
}

biggerNumber(["5", "3"]);
biggerNumber(["3", "5"]);
biggerNumber(["10", "10"]);
biggerNumber(["-5", "5"]);
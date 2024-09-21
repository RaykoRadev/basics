function equalPairs(input) {
    const prairs = Number(input[0]);

    let prevSum = 0;
    let firstNumber = 0;
    let secondNumber = 0;
    let result = 0;
    let maxDiff = 0;

    for (let couple = 1; couple <= (prairs * 2) - 1; couple += 2) {
        firstNumber = Number(input[couple + 1]);
        secondNumber = Number(input[couple + 2]);

        result = firstNumber + secondNumber;

        if (prevSum !== 0) {
            let diff = math.abs(result - prevSum) {
                if (maxDiff < diff) {
                maxDiff = diff;
            }
            if () {
                    .
                    .
                    .
                    .
                    .
                    .
                    .

            }
        }
    } else

}





}

equalPairs([3, 1, 2, 0, 3, 4, -1]);
equalPairs([4, 1, 1, 3, 1, 2, 2, 0, 0]);
qualPairs([2, -1, 0, 0, -1]);
equalPairs([2, 1, 2, 2, 2]);
equalPairs([1, 5, 5]);
equalPairs([2, -1, 2, 0, -1]);
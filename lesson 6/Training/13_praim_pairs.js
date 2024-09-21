function praimPairs(input) {
    const startFirstPair = Number(input[0]);
    const startSecondPair = Number(input[1]);
    const endFirstPair = Number(input[2]) + startFirstPair;
    const endSecondPair = Number(input[3]) + startSecondPair;


    for (let num1 = startFirstPair; num1 <= endFirstPair; num1++) {

        let firstPair = num1;

        let limit1 = Math.sqrt(firstPair);
        let isPrime1 = true;

        for (let i1 = 2; i1 <= limit1; i1++) {
            if (firstPair % i1 === 0) {
                isPrime1 = false;
                break;
            }
        }
        if (!isPrime1) {
            continue;
        }

        for (let num2 = startSecondPair; num2 <= endSecondPair; num2++) {
            let secondPair = num2;

            let limit2 = Math.sqrt(secondPair);
            let isPrime2 = true;

            for (let i2 = 2; i2 <= limit2; i2++) {
                if (secondPair % i2 === 0) {
                    isPrime2 = false;
                    break;
                }
            }
            if (!isPrime2) {
                continue;
            }
            console.log(`${firstPair}${secondPair}`);
        }
    }

}


// praimPairs(['10', '20', '5', '5']);
praimPairs(['10', '30', '9', '6']);
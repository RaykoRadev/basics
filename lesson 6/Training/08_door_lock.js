function doorLock(input) {
    const num1 = Number(input[0]);
    const num2 = Number(input[1]);
    const num3 = Number(input[2]);

    let firstNumber = 0;
    let secondNumber = 0;
    let thirdNumber = 0;

    for (let i1 = 1; i1 <= num1; i1++) {
        firstNumber = i1;
        if (firstNumber % 2 === 0) {

            for (let i2 = 2; i2 <= num2; i2++) {
                secondNumber = i2;
                let isPrime = true
                let limit = Math.sqrt(secondNumber);

                for (let sn = 2; sn <= limit; sn++) {
                    if (secondNumber % sn === 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime !== true) {
                    continue;
                }

                for (let i3 = 1; i3 <= num3; i3++) {
                    thirdNumber = i3;
                    if (thirdNumber % 2 === 0) {
                        console.log(`${firstNumber} ${secondNumber} ${thirdNumber}`);
                    }
                }

            }
        }
    }
}
doorLock(['3', '5', '5']);
// doorLock(['8', '2', '8']);
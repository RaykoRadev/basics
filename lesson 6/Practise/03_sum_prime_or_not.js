function prime(input) {
    let negativCounter = 0;
    let prime = 0;
    let notPrime = 0;
    let index = 0;

    while (input[index] !== 'stop') {
        let currentNumber = Number(input[index]);
        let limit = Math.sqrt(currentNumber)

        if (currentNumber < 0) {
            negativCounter++;
            console.log("Number is negative.")
        } else {
            let primeCounter = 0;
            for (let i = 2; i <= limit; i++) {
                if (currentNumber % i === 0) {
                    primeCounter++;
                }
            }

            if (primeCounter === 0) {
                prime += currentNumber;
            } else {
                notPrime += currentNumber;
            }
        }


        index++;
    }

    console.log(`Sum of all prime numbers is: ${prime}`);
    console.log(`Sum of all non prime numbers is: ${notPrime}`);
}

// prime(["3", "9", "0", "7", "19", "4", "stop"]);
// prime(["30", "83", "33", "-1", "20", "stop"]);
prime(["2", "1", "1", "0", "2", "stop"]);
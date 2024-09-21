function uniquePin(input) {
    const firstLimit = Number(input[0]);
    const secondLimit = Number(input[1]);
    const thirdLimit = Number(input[2]);

    for (let i1 = 1; i1 <= firstLimit; i1++) {
        if (i1 % 2 === 0) {

            for (let i2 = 2; i2 <= secondLimit; i2++) {

                let sqrt = Math.sqrt(i2);
                let isPrime = true;

                for (let k = 2; k <= sqrt; k++) {
                    if (i2 % k === 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime === false) {
                    continue;
                }

                for (let i3 = 1; i3 <= thirdLimit; i3++) {
                    if (i3 % 2 === 0) {
                        console.log(`${i1}${i2}${i3}`);
                    }
                }
            }
        }
    }
}
uniquePin(["3", "5", "5"]);
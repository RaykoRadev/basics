function pincode(input) {
    const num1 = Number(input[0]);
    const num2 = Number(input[1]);
    const num3 = Number(input[2]);

    for (let i1 = 1; i1 <= num1; i1++) {
        if (i1 % 2 !== 0) {
            continue;
        }

        for (let i2 = 2; i2 <= num2; i2++) {
            let simpleNumber = Math.sqrt(i2);
            let isPrime = true
            for (let k = 2; k <= simpleNumber; k++) {
                if (i2 % k === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (!isPrime) {
                continue;
            }
            for (let i3 = 1; i3 <= num3; i3++) {
                if (i3 % 2 == 0) {
                    console.log(`${i1} ${i2} ${i3}`);
                }
            }

        }
    }
}
pincode(['3', '5', '5']);
// pincode(['8', '2', '8']);
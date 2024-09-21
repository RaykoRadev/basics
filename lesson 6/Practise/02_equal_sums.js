function eaqualSums(input) {
    const num1 = Number(input[0]);
    const num2 = Number(input[1]);

    let result = "";

    for (let i = num1; i <= num2; i++) {

        let sumOdd = 0;
        let sumEven = 0;

        let curentNum = i;
        let ostatyk = 0;
        let isEven = true;

        while (curentNum > 0) {
            ostatyk = curentNum % 10;

            if (isEven === true) {
                sumEven += ostatyk;
            } else {
                sumOdd += ostatyk;
            }
            isEven = !isEven
            curentNum = Math.floor(curentNum / 10);
        }

        if (sumEven === sumOdd) {
            result += `${i} `;
        }
    }
    console.log(result);
}
eaqualSums(["100000", "100050"]);
eaqualSums(["123456", "124000"]);
eaqualSums(["299900", "300000"]);
eaqualSums(["100115", "100120"]);


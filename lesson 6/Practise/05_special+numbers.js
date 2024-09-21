function specialNumbers(input) {
    const num = Number(input[0]);
    let result = '';

    // for (let spNumbers = 1111; spNumbers <= 9999; spNumbers++) {
    //     let number = spNumbers;

    //     let counter = 0;
    //     for (let i = 0; i < 4; i++) {
    //         let partNUmber = number % 10; // 178 % 10 -> 8

    //         if (partNUmber % num === 0) {
    //            for () {

    //            }
    //         }

    //     }

    // }
    // console.log(`${result} `);


    for (let i1 = 1; i1 <= 9; i1++) {
        if (num % i1 === 0) {
            for (let i2 = 1; i2 <= 9; i2++) {
                if (num % i2 === 0) {
                    for (let i3 = 1; i3 <= 9; i3++) {
                        if (num % i3 === 0) {
                            for (let i4 = 1; i4 <= 9; i4++) {
                                if (num % i4 === 0) {
                                    result += `${i1}${i2}${i3}${i4} `
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(result);

}
specialNumbers(["3"]);
specialNumbers(["11"]);
specialNumbers(["16"]);
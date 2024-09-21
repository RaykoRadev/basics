function specialNumber(input) {
    const num1 = Number(input[0]);
    const num2 = Number(input[1]);

    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;

    print = '';

    for (let i1 = num1; i1 <= num2; i1++) {
        n1 = i1;
        for (let i2 = num1; i2 <= num2; i2++) {
            n2 = i2;
            for (let i3 = num1; i3 <= num2; i3++) {
                n3 = i3;
                for (let i4 = num1; i4 <= num2; i4++) {
                    n4 = i4;

                    if ((n1 % 2 === 0 && n4 % 2 !== 0) || (n1 % 2 !== 0 && n4 % 2 === 0)) {
                        if (n1 > n4) {
                            if ((n2 + n3) % 2 === 0) {
                                print += `${n1}${n2}${n3}${n4} `;
                            }
                        }
                    }


                    // console.log(i1, i2, i3, i4);

                }
            }

        }
    }
    console.log(print);
}
// specialNumber(['2', '3']);
specialNumber(['3', '5']);
// specialNumber(['5','8']);
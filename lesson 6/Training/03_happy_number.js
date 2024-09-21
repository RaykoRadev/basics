function happyNumber(input) {
    const num = Number(input[0]);

    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;

    print = '';

    for (let i1 = 1; i1 <= 9; i1++) {
        n1 = i1;
        for (let i2 = 1; i2 <= 9; i2++) {
            n2 = i2;
            for (let i3 = 1; i3 <= 9; i3++) {
                n3 = i3;
                for (let i4 = 1; i4 <= 9; i4++) {
                    n4 = i4;
                    if (n3 + n4 !== n1 + n2) {
                        continue;
                    }
                    if (num % (n1 + n2) === 0) {
                        print += `${n1}${n2}${n3}${n4} `;
                    }
                    // console.log(i1, i2, i3, i4);

                }
            }

        }
    }
    console.log(print);
}
// happyNumber([3]);
// happyNumber([7]);
happyNumber([24]);
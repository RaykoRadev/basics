function theSongOftheWheels(input) {
    const controla = Number(input[0]);

    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;

    let count = 0;
    let print = '';

    for (let i1 = 1; i1 <= 9; i1++) {
        num1 = i1;

        for (let i2 = 1; i2 <= 9; i2++) {
            num2 = i2;

            if (num1 < num2) {

                for (let i3 = 1; i3 <= 9; i3++) {
                    num3 = i3;

                    for (let i4 = 1; i4 <= 9; i4++) {
                        num4 = i4;

                        if (num3 > num4) {

                            if (num1 * num2 + num3 * num4 === controla) {
                                count++;
                                print += `${num1}${num2}${num3}${num4} `;
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(print);
    if (count >= 4) {
        let result = print.split(' ')
        console.log(`Password: ${result[3]}`);
    } else {
        console.log('No!');
    }
}
// theSongOftheWheels(['11']);
// theSongOftheWheels(['139']);
theSongOftheWheels(['110']);
// theSongOftheWheels(['55']);
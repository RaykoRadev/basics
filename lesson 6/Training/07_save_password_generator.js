function savepasswordGenerator(input) {
    //A е символ с ASCII стойност в диапазона [35… 55]
    //B е символ с ASCII стойност в диапазона [64 … 96]
    //x e цяло число в диапазона [1… num1] 
    //y e цяло число в диапазона [1… num2] 
    const num1 = Number(input[0]);
    const num2 = Number(input[1]);
    const maxPasswords = Number(input[2]);
    let password = 1;

    let print = '';

    let A = '';
    let B = '';
    let x = 1;

    let countA = 35;
    let countB = 64;

    while (password <= maxPasswords && x <= num1) {

        while (x <= num1) {
            // if (x > num1) {
            //     return console.log(print);
            // }

            let y = 1;
            while (y <= num2) {

                while (countA <= 55) {
                    A = String.fromCharCode(countA);

                    while (countB <= 96) {
                        B = String.fromCharCode(countB);

                        print += `${A}${B}${x}${y}${B}${A}|`

                        countB++;
                        password++;
                        if (password > maxPasswords) {
                            return console.log(print);;
                        }

                        break;
                    }


                    countA++;
                    break;
                }



                y++;
            }

            x++;
        }
    }
    console.log(print);

}
// savepasswordGenerator(['2', '3', '10']);
savepasswordGenerator(['20', '50', '10']);
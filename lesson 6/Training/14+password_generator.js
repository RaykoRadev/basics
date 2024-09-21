function passwordGenerator(input) {
    const numbers = Number(input[0]);
    const letters = Number(input[1]);
    // a = 97; from ASCII
    let print = '';

    for (let num1 = 1; num1 <= numbers; num1++) {
        for (let num2 = 1; num2 <= numbers; num2++) {
            for (let letter1 = 97; letter1 < letters + 97; letter1++) {
                for (let letter2 = 97; letter2 < letters + 97; letter2++) {
                    for (let num3 = 2; num3 <= numbers; num3++) {
                        if (num3 > num1 && num3 > num2) {

                            let backToLetter1 = String.fromCharCode(letter1);
                            let backToLetter2 = String.fromCharCode(letter2);

                            print += `${num1}${num2}${backToLetter1}${backToLetter2}${num3} `
                        }
                    }
                }
            }
        }
    }

    console.log(print);
}
// passwordGenerator(['2', '4']);
// passwordGenerator(['3', '1']);
// passwordGenerator(['3', '2']);
passwordGenerator(['4', '2']);
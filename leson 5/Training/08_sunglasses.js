function sunglasses(input) {
    const num = Number(input[0]);

    // let space = ;
    // let star = ;           // * 
    // let slash = ;          // / 
    // let line = ;           // |   

    let rows = 0;
    console.log(`${'*'.repeat(2 * num)}${' '.repeat(num)}${'*'.repeat(2 * num)}`);

    while (rows < num - 2) {

        if (rows === Math.floor((num - 1) / 2 - 1)) {
            console.log(`*${'/'.repeat(2 * num - 2)}*${'|'.repeat(num)}*${'/'.repeat(2 * num - 2)}*`);
        } else {
            console.log(`*${'/'.repeat(2 * num - 2)}*${' '.repeat(num)}*${'/'.repeat(2 * num - 2)}*`);
        }

        rows++;
    }

    console.log(`${'*'.repeat(2 * num)}${' '.repeat(num)}${'*'.repeat(2 * num)}`);
}

sunglasses([4]);
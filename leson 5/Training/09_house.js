function house(input) {
    const num = Number(input[0]);

    let roof = 0;
    let roofStars = 0;
    let space = Math.ceil(num / 2);

    while (roof < (num + 1) / 2) {
        space--;;
        if (num % 2 === 0) {

            if (space < 0) {
                continue;
            }
            console.log(`${'-'.repeat(space)}${'*'.repeat(roofStars + 2)}${'-'.repeat(space)}`);

        } else {
            console.log(`${'-'.repeat(space)}${'*'.repeat(roofStars + 1)}${'-'.repeat(space)}`);

        }
        roofStars += 2;
        roof++;
    }

    let base = 0;                                                                          //let base = 0;
    while (base <= Math.floor(num / 2)) {                                                  //(base < num / 2 - 1)
        console.log(`|${'*'.repeat(num - 2)}|`);                                           //console.log(`|${'*'.repeat(num - 2)}|`); 
        base++;                                                                            //base++;
    }                                                                                      //}


}

// house([5]);
house([6]);
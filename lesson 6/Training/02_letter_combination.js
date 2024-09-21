function combination(input) {
    let start = input[0].charCodeAt();
    let end = input[1].charCodeAt();
    const toSkip = input[2].charCodeAt();
    let print = '';
    let counter = 0;

    for (let i1 = start; i1 <= end; i1++) {
        let firstLaetter = '';
        let secondLaetter = '';
        let thirdLaetter = '';

        if (i1 === toSkip) {
            continue;
        } else {
            firstLaetter = String.fromCharCode(i1);

            for (let i2 = start; i2 <= end; i2++) {
                if (i2 === toSkip) {
                    continue;
                } else {
                    secondLaetter = String.fromCharCode(i2);

                    for (let i3 = start; i3 <= end; i3++) {
                        if (i3 === toSkip) {
                            continue;
                        }
                        thirdLaetter = String.fromCharCode(i3)
                        counter++;
                        print += `${firstLaetter}${secondLaetter}${thirdLaetter} `;

                    }
                }
            }
        }
    }
    console.log(`${print}${counter}`);

}
// combination(['a', 'c', 'b']);
combination(['f', 'k', 'h']);
// combination(['a', 'c', 'z']);
function movietickets(input) {
    const a1 = Number(input[0]);
    const a2 = Number(input[1]);
    const n = Number(input[2]);

    let symbol1 = '';
    let symbol2 = 0;
    let symbol3 = 0;
    let symbol4 = 0;

    for (let i1 = a1; i1 <= a2 - 1; i1++) {
        if (i1 % 2 !== 0) {
            symbol1 = String.fromCharCode(i1);

            for (let i2 = 1; i2 <= n - 1; i2++) {
                symbol2 = i2;

                for (let i3 = 1; i3 < n / 2; i3++) {
                    symbol3 = i3;
                    symbol4 = i1;

                    if (symbol2 + symbol3 + symbol4 % 2 !== 0) {
                        console.log(`${symbol1}-${symbol2}${symbol3}${symbol4}`);
                    } else {
                        continue;
                    }
                }
            }
        }
    }
}
movietickets(["86", "88", "4"]);
// movietickets(["71", "74", "6"]);
// movietickets(["69", "72", "4 "]);
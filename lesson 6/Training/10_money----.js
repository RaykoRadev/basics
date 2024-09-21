function money(input) {
    const coin1lv = Number(input[0]);
    const coin2lv = Number(input[1]);
    const mon5lv = Number(input[2]);
    const totalSum = Number(input[3]);

    let num1 = 0;
    let num2 = 0;
    let num5 = 0;

    for (let i1 = mon5lv; i1 >= 0; i1--) {
        num1 = i1;

        for (let i2 = coin2lv; i2 >= 0; i2--) {
            num2 = i2;

            for (let i3 = coin1lv; i3 >= 0; i3--) {
                num5 = i3;

                if (num1 + num2 + num5 === totalSum) {
                    console.log(`${num1} * 1 lv. + ${num2} * 2 lv. + ${num5} * 5 lv. = ${totalSum} lv.`);
                }
            }
        }
    }
}
// money(['3', '2', '3', '10']);
money(['5', '3', '1', '7']);
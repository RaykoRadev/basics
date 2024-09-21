function piramid(input) {
    const n = Number(input[0]);
    let add = 1;
    let row = 1;

    while (add <= n) {
        let print = '';
        for (let i = 0; i < row && add <= n; i++, add++) {
            if (i > 0) {
                print += ' ';
            }
            print += add.toString();



        }

        console.log(print);
        row++;
    }
}
piramid(["7"]);
piramid(["12"]);
piramid(["15"]);
function christmastree(input) {
    let num = Number(input[0]);

    let tree = 0;


    console.log(`${' '.repeat(num)} | ${' '.repeat(num)}`);

    let strar = 1;
    let space = num - 1;

    while (tree < num) {
        console.log(`${' '.repeat(space)}${'*'.repeat(strar)} | ${'*'.repeat(strar)}${' '.repeat(space)}`);
        space--;
        strar++;
        tree++;
    }

}

christmastree([12])
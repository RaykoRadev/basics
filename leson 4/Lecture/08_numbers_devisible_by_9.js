function devisible(input) {
    const begining = Number(input[0]);
    const end = Number(input[1]);

    let sum = 0;

    for (let i = begining; i <= end; i++) {
        if (i % 9 === 0) {
            sum += i;
        }
    }

    console.log(`The sum: ${sum}`);

    for (let i = begining; i <= end; i++) {
        if (i % 9 === 0) {
            sum += i;
            console.log(i);
        }
    }
}

devisible(["100", "200"]);
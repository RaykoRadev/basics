function sequence(input) {
    const userNumber = Number(input[0]);

    let sum = 1;

    while (sum <= userNumber) {
        console.log(sum);

        sum = 2 * sum + 1;

    }
}

sequence(["3"]);
// sequence(["8"]);
// sequence(["17"]);
// sequence(["31"]);

function numbers(input) {
    const number = Number(input[0]);

    let sum = 0;
    let index = 1;
    while (sum < number) {
        let newNumber = Number(input[index]);
        sum += newNumber;
        index++;
    }
    console.log(sum);
}

numbers(["100", "10", "20", "30", "40"]);
numbers(["20", "1", "2", "3", "4", "5", "6"])
    ;
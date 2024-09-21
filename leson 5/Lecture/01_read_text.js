function readText(input) {
    let word = 0;

    while (true) {
        let symbol = input[word++]

        if (symbol === 'Stop') {
            break;
        }
        console.log(symbol);

    }

}

readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);
readText(["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"]);
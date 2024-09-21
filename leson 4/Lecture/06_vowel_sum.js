function vowelSum(input) {
    let word = input[0];
    let value = 0;
    for (let letter = 0; letter < word.length; letter++) {
        let bukva = word[letter];
        if (bukva === 'a') {
            value += 1;
        } else if (bukva === 'e') {
            value += 2;
        } else if (bukva === 'i') {
            value += 3;
        } else if (bukva === 'o') {
            value += 4;
        } else if (bukva === 'u') {
            value += 5;
        }

    }
    console.log(value);
}

vowelSum(["hello"]);
vowelSum(["hi"]);
vowelSum(["bamboo"]);
vowelSum(["beer"]);

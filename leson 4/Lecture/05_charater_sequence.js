function sequenst(input) {
    let word = input[0];

    for (let i = 0; i <= word.length - 1; i++) {
        let letter = word[i];
        console.log(letter);
    }

}

sequenst(["softuni"]);
sequenst(["ice cream"]);
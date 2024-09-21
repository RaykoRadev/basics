function theMostPowerfullWord(input) {
    let index = 0;
    let word = input[index];
    let winner = 0;
    let winnigWord = '';

    while (word !== 'End of words') {
        let firstLetter = '';
        let sum = 0;

        for (let power = 0; power < word.length; power++) {
            // word = str.split(' ');
            let letter = word[power];
            let inNumbers = letter.charCodeAt();
            sum += inNumbers;

            if (power === 0) {
                firstLetter = letter.toUpperCase();
            }
        }

        if (firstLetter == 'A' || firstLetter == 'E' || firstLetter == 'I' || firstLetter == 'O' || firstLetter == 'U' || firstLetter == 'Y') {
            sum *= word.length;

        } else {
            sum = Math.floor(sum / word.length);
        }

        if (sum > winner) {
            winner = sum;
            winnigWord = word;
        }

        word = input[++index];
    }

    console.log(`The most powerful word is ${winnigWord} - ${winner}`);
}
theMostPowerfullWord(["The", "Most", "Powerful", "Word", "Is", "Experience", "End of words"]);
// theMostPowerfullWord(["But", "Some", "People", "Say", "It's", "LOVE", "End of words"]);
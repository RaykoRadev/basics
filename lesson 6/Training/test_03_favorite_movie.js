function favoriteMovie(input) {
    let name = input[0];
    let index = 0;
    let letter = '';
    let letterInNumber = 0;
    let finalscore = 0;
    let movieWinner = '';
    let movieCounter = 0;
    let currentScore = 0;

    while (name !== 'STOP' && movieCounter < 7) {
        let namesLength = 0;
        namesLength = name.length;
        let lCounter = 0;
        let cCounter = 0;
        currentScore = 0;

        for (let i = 0; i < name.length; i++) {
            letter = name[i];
            letterInNumber = letter.charCodeAt();
            if (letterInNumber === 32 || letterInNumber === 45 || letterInNumber <= 58 && letterInNumber >= 48) {

            } else if (letterInNumber >= 97) {
                lCounter++;
            } else if (letterInNumber <= 90) {
                cCounter++;
            }
            currentScore += letterInNumber;
        }

        currentScore = currentScore - (cCounter * name.length) - (lCounter * 2 * name.length);

        if (currentScore > finalscore) {
            finalscore = currentScore;
            movieWinner = name;
        }
        movieCounter++;
        name = input[++index];
    }
    if (movieCounter === 7) {
        console.log("The limit is reached.");
    }
    console.log(`The best movie for you is ${movieWinner} with ${finalscore} ASCII sum.`);
}
// favoriteMovie(["Matrix", "Breaking bad", "Legend", "STOP"]);
// favoriteMovie(["Wrong turn", "The maze", "Area 51", "Night Club", "Ice age", "Harry Potter", "Wizards"]);
favoriteMovie(['The maze', 'School story 2', 'Shrek 2', 'Ice age', 'STOP']);
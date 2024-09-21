function movie(input) {
    const totalMovies = Number(input.shift());
    let avScores = 0;
    let minScore = Number.POSITIVE_INFINITY;
    let maxScore = Number.NEGATIVE_INFINITY;
    let nameMax = '';
    let nameMin = '';

    while (input.length > 0) {
        let name = input.shift();
        let scores = Number(input.shift());

        avScores += scores;

        if (scores > maxScore) {
            maxScore = scores;
            nameMax = name;
        }
        if (scores < minScore) {
            minScore = scores;
            nameMin = name;
        }
    }

    console.log(`${nameMax} is with highest rating: ${(maxScore).toFixed(1)}`);
    console.log(`${nameMin} is with lowest rating: ${(minScore).toFixed(1)}`);
    console.log(`Average rating: ${(avScores / totalMovies).toFixed(1)}`);
}

movie(["5", "A Star is Born", "7.8", "Creed 2", "7.3", "Mary Poppins", "7.2", "Vice", "7.2", "Captain Marvel", "7.1"]);
movie(["3", "Interstellar", "8.5", "Dangal", "8.3", "Green Book", "8.2"]);
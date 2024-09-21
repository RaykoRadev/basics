function oldBooks(input) {
    const bookName = input[0];

    let newBook = 1;
    let checkedBooks = 0;
    let currentBook = '';

    while (bookName !== currentBook) {
        currentBook = input[newBook];
        if (currentBook === 'No More Books') {
            break;
        }
        checkedBooks++;
        newBook++;
    }
    if (currentBook === 'No More Books') {
        console.log("The book you search is not here!");
        console.log(`You checked ${checkedBooks} books.`);
    } else {
        console.log(`You checked ${checkedBooks - 1} books and found it.`);
    }

}
oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);
oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);
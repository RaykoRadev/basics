function bestPlayer(input) {
    let name = '';
    // let goals = 0;
    let mostGoals = 0;
    let nameWinner = '';

    while (name !== 'END') {
        name = input.shift();
        let goals = Number(input.shift());

        if (goals > mostGoals) {
            mostGoals = goals;
            nameWinner = name;
        }
        if (goals >= 10) {
            break;
        }
    }
    console.log(`${nameWinner} is the best player!`);

    if (mostGoals >= 3) {
        console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${mostGoals} goals.`);
    }

}
bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
bestPlayer(["Silva", "5", "Harry Kane", "10"]);
bestPlayer(["Rooney", "1", "Junior", "2", "Paolinio", "2", "END"]);
bestPlayer(["Petrov", "2", "Drogba", "11"]);
bestPlayer(["Zidane", "1", "Felipe", "2", "Johnson", "4", "END"]);
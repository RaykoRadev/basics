function password(input) {
    const userName = input[0];
    const userPass = input[1];

    let data = 2;
    while (true) {
        let index = input[data++]
        if (index === userPass) {
            console.log(`Welcome ${userName}!`);
            break;
        }
    }
}

password(["Nakov", "1234", "Pass", "1324", "1234"]);
password(["Gosho", "secret", "secret"]);

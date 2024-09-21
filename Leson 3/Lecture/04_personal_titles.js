function gender(input) {
    const age = Number(input[0]);
    const title = input[1];

    if (age >= 16) {
        if (title == 'm') {
            console.log('Mr.');
        } else {
            console.log('Ms.');
        }
    } else {
        if (title == 'm') {
            console.log('Master');
        } else {
            console.log("Miss");
        }
    }
}

gender(["12", "f"]);
gender(["17", "m"]);
gender(["25", "f"]);
gender(["13.5", "m"]);
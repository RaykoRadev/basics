function animal(input) {
    const typeOfAnimal = input[0];

    switch (typeOfAnimal) {
        case 'dog':
            console.log('mammal');
            break;
        case 'crocodile':
        case 'tortoise':
        case 'snake':
            console.log('reptile');
            break;
        default:
            console.log('unknown');
            break;
    }
}

animal(["dog"]);
animal(["snake"]);
animal(["cat"]);
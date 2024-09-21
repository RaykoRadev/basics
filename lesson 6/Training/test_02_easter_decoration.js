function easterDecoration(input) {
    const numberOfClients = Number(input[0]);

    // кошничка за яйца (basket) – 1.50 лв. 
    // великденски венец (wreath) – 3.80 лв. 
    // шоколадов заек (chocolate bunny) – 7 лв.

    let index = 1;
    let product = input[index];
    let clientCosts = 0;
    let counter = 0;
    let totalCosts = 0;

    for (let clients = 1; clients <= numberOfClients; clients++) {
        counter = 0;
        clientCosts = 0;
        while (product !== 'Finish') {

            if (product === 'basket') {
                clientCosts += 1.50;
                counter++;
            } else if (product === 'wreath') {
                clientCosts += 3.80;
                counter++;
            } else if (product === 'chocolate bunny') {
                clientCosts += 7;
                counter++;
            }

            product = input[++index];
        }

        if (counter % 2 === 0) {
            clientCosts *= 0.8;
        }

        console.log(`You purchased ${counter} items for ${(clientCosts).toFixed(2)} leva.`);

        totalCosts += clientCosts;
        product = input[++index]
    }

    console.log(`Average bill per client is: ${(totalCosts / numberOfClients).toFixed(2)} leva.`);

}
// easterDecoration(["2", "basket", "wreath", "chocolate bunny", "Finish", "wreath", "chocolate bunny", "Finish"]);
easterDecoration(["1", "basket", "wreath", "chocolate bunny", "wreath", "basket", "chocolate bunny", "Finish"]);
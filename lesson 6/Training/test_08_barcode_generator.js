function barcodegenerator(input) {
    let startingNumber = input[0];
    let endingingNumber = input[1];
    let print = '';

    let startingPoint = startingNumber.split('');
    let endingingPoint = endingingNumber.split('');

    let index = 0;

    for (let step1 = startingPoint[index]; step1 <= endingingPoint[index]; step1++) {
        if (step1 % 2 !== 0) {

            for (let step2 = startingPoint[index + 1]; step2 <= endingingPoint[index + 1]; step2++) {
                if (step2 % 2 !== 0) {

                    for (let step3 = startingPoint[index + 2]; step3 <= endingingPoint[index + 2]; step3++) {
                        if (step3 % 2 !== 0) {

                            for (let step4 = startingPoint[index + 3]; step4 <= endingingPoint[index + 3]; step4++) {
                                if (step4 % 2 !== 0) {
                                    print += `${step1}${step2}${step3}${step4} `
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(print);
}
// barcodegenerator(["2345", "6789"]);
// barcodegenerator(["3256", "6579"]);
barcodegenerator(["1365", "5877"]);
function cristmasPreparation(input) {
    const paper = Number(input[0]);
    const cloth = Number(input[1]);
    const glue = Number(input[2]);
    const percentige = Number(input[3]);

    let percent = percentige / 100;

    const totalPaper = paper * 5.8;
    const totalCloth = cloth * 7.2;
    const totalGlue = glue * 1.2;

    const totalPrice = (totalPaper + totalCloth + totalGlue) * (1 - percent);

    console.log(totalPrice.toFixed(3));

}
cristmasPreparation(["2", "3", "2.5", "25"]);
// cristmasPreparation(["4", "2", "5", "13"]);
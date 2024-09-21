function easterbake(input) {
    const breads = Number(input.shift());

    let totalSugar = 0;
    let totalFlour = 0;
    let maxSugar = 0;
    let maxFlour = 0;

    while (input.length > 0) {
        let sugar = Number(input.shift());
        let flour = Number(input.shift());

        totalSugar += sugar;
        totalFlour += flour;

        if (maxFlour < flour) {
            maxFlour = flour;
        }

        if (maxSugar < sugar) {
            maxSugar = sugar
        }

    }

    const sugarPacks = Math.ceil(totalSugar / 950);
    const flourPacks = Math.ceil(totalFlour / 750);

    console.log(`Sugar: ${sugarPacks}`);
    console.log(`Flour: ${flourPacks}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);
}
easterbake(["3", "400", "350", "250", "300", "450", "380"]);
easterbake(["4", "500", "350", "560", "430", "600", "345", "578", "543"]);
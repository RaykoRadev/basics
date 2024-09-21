function workout(input) {
    const target = Number(input.shift());
    const kmFirstDay = Number(input.shift());
    let percentage = 0;
    let kmDay = kmFirstDay;
    let totalKM = kmFirstDay;

    // percentage = Number(input.shift()) / 100;
    // totalKM += kmFirstDay * percentage;
    while (input.length > 0) {
        percentage = (Number(input.shift()) / 100) + 1;

        kmDay = kmDay * percentage;
        totalKM += kmDay;
    }
    if (1000 <= totalKM) {
        console.log(`You've done a great job running ${Math.ceil(totalKM - 1000)} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - totalKM)} more kilometers`);
    }

}
workout(["5", "30", "10", "15", "20", "5", "12"]);
workout(["4", "100", "30", "50", "60", "80"]);

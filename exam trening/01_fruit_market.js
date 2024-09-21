function fruitMarket(input) {
    const strawberriesPrice = Number(input[0]);

    const bannanasKg = Number(input[1]);
    const orangesKg = Number(input[2]);
    const raspberiesKg = Number(input[3]);
    const strawberiesKg = Number(input[4]);

    const raspberiesPrice = strawberriesPrice / 2;
    const orancesPrice = raspberiesPrice * 0.6;
    const bannanasPrice = raspberiesPrice * 0.2;

    const totalPrice = strawberiesKg * strawberriesPrice + bannanasKg * bannanasPrice + raspberiesKg * raspberiesPrice + orangesKg * orancesPrice;

    console.log(totalPrice.toFixed(2));


}
fruitMarket(['48', '10', '3.3', '6.5', '1.7']);
fruitMarket([]);
function sumer(input) {
    const temperature = Number(input[0]);
    const timeOfDay = input[1];

    let outfit = '';
    let shoe = '';

    if (timeOfDay === 'Morning') {
        if (temperature <= 18) {
            outfit = 'Sweatshirt';
            shoe = 'Sneakers';
        } else if (temperature <= 24) {
            outfit = 'Shirt';
            shoe = 'Moccasins';
        } else if (temperature >= 25) {
            outfit = 'T-Shirt';
            shoe = 'Sandals';
        }
    } else if (timeOfDay === 'Afternoon') {
        if (temperature <= 18) {
            outfit = 'Shirt';
            shoe = 'Moccasins';
        } else if (temperature <= 24) {
            outfit = 'T-Shirt';
            shoe = 'Sandals';
        } else if (temperature >= 25) {
            outfit = 'Swim Suit';
            shoe = 'Barefoot';
        }
    } else if (timeOfDay === 'Evening') {
        outfit = 'Shirt';
        shoe = 'Moccasins';
    }

    console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoe}.`);
}

sumer(["16", "Morning"]);
sumer(["22", "Afternoon"]);
sumer(["28", "Evening"]);
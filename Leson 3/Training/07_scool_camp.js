function schoolCamp(input) {
    const season = input[0];
    const gender = input[1];
    const studentsNumber = Number(input[2]);
    const nightsNumber = Number(input[3]);

    let pricePerNight = 0;
    let discount = 1;
    let sportType = "";

    if (gender === 'boys') {
        if (season === 'Winter') {
            pricePerNight = 9.6;
            sportType = 'Judo';
        } else if (season === 'Spring') {
            pricePerNight = 7.2;
            sportType = 'Tennis';
        } else if (season === 'Summer') {
            pricePerNight = 15;
            sportType = 'Football';
        }
    } else if (gender === 'girls') {
        if (season === 'Winter') {
            pricePerNight = 9.6;
            sportType = 'Gymnastics';
        } else if (season === 'Spring') {
            pricePerNight = 7.2;
            sportType = 'Athletics';
        } else if (season === 'Summer') {
            pricePerNight = 15;
            sportType = 'Volleyball';
        }
    } else {
        if (season === 'Winter') {
            pricePerNight = 10;
            sportType = 'Ski';
        } else if (season === 'Spring') {
            pricePerNight = 9.5;
            sportType = 'Cycling';
        } else if (season === 'Summer') {
            pricePerNight = 20;
            sportType = 'Swimming';
        }
    }

    if (studentsNumber >= 50) {
        discount = 0.5;

    } else if (studentsNumber >= 20) {
        discount = 0.85;

    } else if (studentsNumber >= 10) {
        discount = 0.95;
    }

    const price = nightsNumber * pricePerNight * studentsNumber * discount;

    console.log(`${sportType} ${price.toFixed(2)} lv.`);

}
schoolCamp(['Spring', 'girls', 20, 7]);
schoolCamp(['Winter', 'mixed', 9, 15]);
schoolCamp(['Summer', 'boys', 60, 7]);
schoolCamp(['Spring', 'mixed', 17, 14]);

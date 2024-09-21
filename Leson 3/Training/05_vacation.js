function vacation(input) {
    const budget = Number(input[0]);
    const season = input[1];

    let settelment = '';
    let percentige = 1;
    let location = '';

    if (budget <= 1000) {
        settelment = 'Camp';
        if (season === 'Summer') {
            percentige = 0.65;
        } else {
            percentige = 0.45;
        }
    } else if (budget <= 3000) {
        settelment = 'Hut';
        if (season === 'Summer') {
            percentige = 0.8;
        } else {
            percentige = 0.6;
        }

    } else if (budget > 3000) {
        settelment = 'Hotel';
        percentige = 0.9;

    }

    if (season === 'Summer') {
        location = 'Alaska';
    } else {
        location = 'Morocco';
    }


    console.log(`${location} - ${settelment} - ${(budget * percentige).toFixed(2)}`);
}

vacation([800, 'Summer']);
vacation([799.50, 'Winter']);
vacation([1100, 'Summer']);
vacation([2543.99, 'Winter']);
vacation([3460, 'Summer']);
vacation([5000, 'Winter']);
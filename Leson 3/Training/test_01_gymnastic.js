function gymnastic(input) {
    const country = input[0];
    const tool = input[1];

    let difficult = 0;
    let performance = 0;

    if (country === 'Russia') {
        if (tool === 'ribbon') {
            difficult = 9.100;
            performance = 9.400;

        } else if (tool === 'hoop') {
            difficult = 9.300;
            performance = 9.800;

        } else if (tool === 'rope') {
            difficult = 9.600;
            performance = 9.000;

        }
    } else if (country === 'Bulgaria') {
        if (tool === 'ribbon') {
            difficult = 9.600;
            performance = 9.400;

        } else if (tool === 'hoop') {
            difficult = 9.550;
            performance = 9.750;

        } else if (tool === 'rope') {
            difficult = 9.500;
            performance = 9.400;

        }
    } else if (country === 'Italy') {
        if (tool === 'ribbon') {
            difficult = 9.200;
            performance = 9.500;

        } else if (tool === 'hoop') {
            difficult = 9.450;
            performance = 9.350;

        } else if (tool === 'rope') {
            difficult = 9.700;
            performance = 9.150;

        }
    }

    const evaluation = (difficult + performance).toFixed(3);
    const percentige = (20 - evaluation) / 20 * 100;

    console.log(`The team of ${country} get ${evaluation} on ${tool}.`);
    console.log(`${percentige.toFixed(2)}%`);

}

gymnastic(["Bulgaria", "ribbon"]);
gymnastic(["Russia", "rope"]);
gymnastic(["Italy", "hoop"]);
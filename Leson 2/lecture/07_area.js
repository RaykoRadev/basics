function area(input) {
  const areaFigure = input[0];
  let area = 0;

  if (areaFigure == "square") {
    let sideA = Number(input[1]);
    area = sideA * sideA;
  } else if (areaFigure == "rectangle") {
    let sideA = Number(input[1]);
    let sideB = Number(input[2]);
    area = sideA * sideB;
  } else if (areaFigure == "circle") {
    let radius = Number(input[1]);
    area = Math.PI * radius * radius;
  } else if (areaFigure == "triangle") {
    let base = Number(input[1]);
    let height = Number(input[2]);
    area = (base * height) / 2;
  }
  console.log(area.toFixed(3));
}

area(["square", "5"]);
area(["rectangle", "7", "2.5"]);
area(["circle", "6"]);
area(["triangle", "4.5", "20"]);

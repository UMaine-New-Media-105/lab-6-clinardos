// Lab 6
// Caitlin Linardos

// defining variables
let monkeyX;
let monkeyY;
let foodX;
let foodY;
let monkeySpeedX;
let monkeySpeedY;

function setup() {
  createCanvas(400, 400);

  // initializing variables

  monkeyX = random(250);
  monkeyY = random(250);
  monkeyDiameter = 1;
  foodX = random(350);
  foodY = random(350);
  foodDiameter = 1;
  monkeySpeedX = 1;
  monkeySpeedY = 1;
  notEaten = true;

  distanceForCollison = monkeyDiameter;
}

function draw() {
  background(220);

  // Distance formula
  d = dist(monkeyX, monkeyY, foodX, foodY);

  //console.log ("The distance is " +d)

  if (d < 65) {
    addMonkey(monkeyX, monkeyY, 1);
    notEaten = false;
  }

  addMonkeyFood(foodX, foodY, foodDiameter);

  addMonkey(monkeyX, monkeyY, monkeyDiameter);
}

function addMonkey(x, y, size) {
  push();
  translate(x, y);
  scale(size);

  if (notEaten == false) {
    fill("gold");
  } else {
    fill("saddlebrown");
  }

  // This is the ear
  ellipse(15, 45, 40, 45);
  ellipse(85, 45, 40, 45);

  // inside of ear
  fill("tan");
  ellipse(15, 45, 30, 35);
  ellipse(85, 45, 30, 35);

  if (notEaten == false) {
    fill("gold");
  } else {
    fill("saddlebrown");
  }
  // This is head
  ellipse(50, 50, 80);

  fill("white");
  //eyes
  ellipse(35, 40, 25, 30);
  ellipse(65, 40, 25, 30);
  fill("black");
  ellipse(35, 40, 15, 18);

  // mouth
  ellipse(65, 40, 15, 18);

  fill("tan");
  ellipse(50, 70, 50, 30);
  fill("black");
  ellipse(50, 70, 40, 20);
  fill("red");
  ellipse(50, 75, 30, 10);

  pop();
}

function addMonkeyFood(x, y, size) {
  if (notEaten == true) {
    push();
    translate(x, y);
    scale(size);
    fill("gold");
    ellipse(10, 10, 20);

    pop();
  }
}

function keyPressed() {
  push();
  if (keyCode === LEFT_ARROW) {
    monkeyX = monkeyX - 10;
  }
  if (keyCode === RIGHT_ARROW) {
    monkeyX = monkeyX + 10;
  }
  if (keyCode === DOWN_ARROW) {
    monkeyY = monkeyY + 10;
  }
  if (keyCode === UP_ARROW) {
    monkeyY = monkeyY - 10;
    pop();
  }
}

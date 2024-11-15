function setup() {
  createCanvas(650, 800);
}
let mouthX = 300;
let mouthY = 400;
let s = 0.6;
let doughnutX = 370;
let doughnutY = 80;
let velocity = 0.1;
let acceleration = 0;
let gameState = "Win"; //hereeeeeeeeeeeeeeee

function startScreen() {
  background(255, 165, 111);
  textSize(65);
  text("Doughnutz", width / 2 - 200, 200);
  //how to play button
  push();
  fill(0);
  ellipse(width / 2 - 45, 390, 200, 60);
  textSize(30);
  fill(255);
  text("How to play", width / 2 - 125, 400);
  pop();
  //start button
  push();
  fill(0);
  ellipse(width / 2 - 45, 490, 200, 60);
  textSize(35);
  fill(255);
  text("START", width / 2 - 100, 500);
  pop();
}

function instructionsScreen() {
  background(255, 165, 111);
  fill(0);
  textSize(29);
  text("INSTRUCTIONS:", 200, 200);
  textSize(20.75);
  text(
    "You have to feed the mouth at the bottom of the page. In order to do that, you have to control the speed of the doughnut dropping downwards to the mouth. You can control the velocity of the drop by clicking the PgUp button or just the spacebar. Keep in mind, if the doughnut is too fast, they will choke and die! Good luck!",
    30,
    350,
    600
  );
  fill(0);
  ellipse(325, 600, 200, 60);
  fill(255);
  textSize(35);
  text("Start Now!", 245, 610);
}
function winScreen() {
  background(50, 205, 50);
  push();
  stroke(255);
  strokeWeight(2.5);
  textSize(60);
  fill(255);
  text("YOU WON!", 160, 200);
  pop();
  fill(0);
  ellipse(325, 500, 200, 60);
  ellipse(325, 600, 200, 60);
  fill(255);
  text("Play Again", 245, 510);
  textSize(35);
  text("Menu", 280, 610);
}

function lostScreen() {
  background(102, 0, 0);
  push();
  stroke(0, 0, 0);
  strokeWeight(2.5);
  textSize(60);
  fill(0);
  text("YOU'VE LOST!", 125, 200);
  pop();
  fill(0);
  ellipse(325, 500, 200, 60);
  ellipse(325, 600, 200, 60);
  fill(255);
  text("Play Again", 245, 510);
  textSize(35);
  text("Menu", 280, 610);
}

function doughnut(doughnutX, doughnutY) {
  //doughnut's outline/shape
  fill(222, 184, 135);
  ellipse(doughnutX, doughnutY, 150 * s);

  //doughnut's details
  beginShape();
  fill(255, 102, 178);
  vertex(doughnutX - 60 * s, doughnutY + 10 * s);
  bezierVertex(
    doughnutX - 40 * s,
    doughnutY + 0 * s,
    doughnutX - 20 * s,
    doughnutY + 40 * s,
    doughnutX - 30 * s,
    doughnutY + 50 * s
  );
  bezierVertex(
    doughnutX - 40 * s,
    doughnutY + 60 * s,
    doughnutX - 20 * s,
    doughnutY + 80 * s,
    doughnutX - 10 * s,
    doughnutY + 50 * s
  );
  bezierVertex(
    doughnutX - 5 * s,
    doughnutY + 45 * s,
    doughnutX + 5 * s,
    doughnutY + 45 * s,
    doughnutX + 5 * s,
    doughnutY + 55 * s
  );
  bezierVertex(
    doughnutX + 5 * s,
    doughnutY + 85 * s,
    doughnutX + 55 * s,
    doughnutY + 55 * s,
    doughnutX + 40 * s,
    doughnutY + 30 * s
  );
  bezierVertex(
    doughnutX + 35 * s,
    doughnutY + 20 * s,
    doughnutX + 45 * s,
    doughnutY - 20 * s,
    doughnutX + 60 * s,
    doughnutY - 15 * s
  );
  bezierVertex(
    doughnutX + 65 * s,
    doughnutY - 15 * s,
    doughnutX + 65 * s,
    doughnutY - 26 * s,
    doughnutX + 55 * s,
    doughnutY - 25 * s
  );
  bezierVertex(
    doughnutX + 45 * s,
    doughnutY - 30 * s,
    doughnutX + 35 * s,
    doughnutY - 45 * s,
    doughnutX + 40 * s,
    doughnutY - 50 * s
  );
  bezierVertex(
    doughnutX + 35 * s,
    doughnutY - 70 * s,
    doughnutX - 50 * s,
    doughnutY - 75 * s,
    doughnutX - 40 * s,
    doughnutY - 40 * s
  );
  bezierVertex(
    doughnutX - 30 * s,
    doughnutY - 30 * s,
    doughnutX - 40 * s,
    doughnutY - 5 * s,
    doughnutX - 60 * s,
    doughnutY - 5 * s
  );
  bezierVertex(
    doughnutX - 70 * s,
    doughnutY - 5 * s,
    doughnutX - 70 * s,
    doughnutY + 10 * s,
    doughnutX - 60 * s,
    doughnutY + 10 * s
  );
  endShape();

  //doughnut's inside ellipse
  fill(235, 220, 190);
  ellipse(doughnutX, doughnutY, 50 * s);

  //sprinkles
  //yellow splrinkles:
  push();
  noStroke();
  fill(255, 204, 0);
  ellipse(doughnutX + 10 * s, doughnutY - 40 * s, 15 * s, 3 * s);
  ellipse(doughnutX + 25 * s, doughnutY + 45 * s, 3 * s, 15 * s);
  ellipse(doughnutX - 50 * s, doughnutY + 0 * s, 15 * s, 3 * s);
  push();
  translate(doughnutX - 20 * s, doughnutY + 50 * s);
  rotate(0.4);
  ellipse(0 * s, 0 * s, 3, 20 * s);
  translate(doughnutX + 20 * s, doughnutY - 50 * s);
  pop();
  pop();

  //blue splrinkles:
  push();
  noStroke();
  fill(0, 204, 204);
  ellipse(doughnutX + 33 * s, doughnutY + 0 * s, 3 * s, 10 * s);
  ellipse(doughnutX + 0 * s, doughnutY + 36 * s, 10 * s, 4 * s);
  ellipse(doughnutX - 25 * s, doughnutY - 40 * s, 4 * s, 15 * s);
  push();
  translate(doughnutX - 28 * s, doughnutY + 20 * s);
  rotate(-0.6);
  ellipse(0 * s, 0 * s, 3 * s, 20 * s);
  translate(doughnutX + 28 * s, doughnutY - 20 * s);
  pop();
  pop();

  //red sprinkles:
  push();
  noStroke();
  fill(204, 51, 51);
  ellipse(doughnutX + 0 * s, doughnutY - 50 * s, 5 * s);
  ellipse(doughnutX + 30 * s, doughnutY - 25 * s, 5 * s);
  ellipse(doughnutX - 30 * s, doughnutY - 15 * s, 5 * s);
  ellipse(doughnutX + 25 * s, doughnutY + 25 * s, 5 * s);
  ellipse(doughnutX + 58 * s, doughnutY - 20 * s, 5 * s);
  pop();

  //string
  push();
  strokeWeight(1.5);
  fill(0);
  noFill();
  line(doughnutX, doughnutY - 15, doughnutX, doughnutY - 4500);
  beginShape();
  vertex(doughnutX, doughnutY - 45);
  bezierVertex(
    doughnutX - 40,
    doughnutY - 65,
    doughnutX,
    doughnutY - 65,
    doughnutX,
    doughnutY - 45
  );
  bezierVertex(
    doughnutX + 50,
    doughnutY - 75,
    doughnutX - 1,
    doughnutY - 70,
    doughnutX,
    doughnutY - 45
  );
  endShape();
  pop();
}
function mouth() {
  fill(239, 204, 159);
  beginShape();
  vertex(mouthX - 200, mouthY + 450);
  vertex(mouthX + 200, mouthY + 450);
  vertex(mouthX + 225, mouthY + 350);
  bezierVertex(
    mouthX + 275,
    mouthY + 300,
    mouthX + 180,
    mouthY + 270,
    mouthX + 180,
    mouthY + 300
  );
  bezierVertex(
    mouthX + 180,
    mouthY + 308,
    mouthX + 160,
    mouthY + 308,
    mouthX + 160,
    mouthY + 300
  );
  //fill(224, 142, 129);
  bezierVertex(
    mouthX + 180,
    mouthY + 280,
    mouthX + 160,
    mouthY + 260,
    mouthX + 140,
    mouthY + 280
  );
  bezierVertex(
    mouthX + 130,
    mouthY + 290,
    mouthX + 140,
    mouthY + 300,
    mouthX + 145,
    mouthY + 300
  );
  vertex(mouthX + 145, mouthY + 310);
  vertex(mouthX + 90, mouthY + 350);
  vertex(mouthX + 45, mouthY + 350);
  vertex(mouthX + 5, mouthY + 300);
  endShape();
  beginShape();
  vertex(mouthX - 200, mouthY + 450);
  vertex(mouthX - 225, mouthY + 350);
  vertex(mouthX - 95, mouthY + 240);
  bezierVertex(
    mouthX - 50,
    mouthY + 200,
    mouthX - 20,
    mouthY + 290,
    mouthX - 45,
    mouthY + 300
  );
  bezierVertex(
    mouthX - 40,
    mouthY + 310,
    mouthX - 20,
    mouthY + 290,
    mouthX - 10,
    mouthY + 280
  );
  bezierVertex(
    mouthX - 20,
    mouthY + 260,
    mouthX + 20,
    mouthY + 260,
    mouthX + 5,
    mouthY + 300
  );
  endShape();

  //teeth bottom
  push();
  fill(255);
  translate(mouthX + 130, mouthY + 300);
  rotate(-0.5);
  ellipse(0, 0, 15, 30);
  ellipse(-10, +2, 15, 30);
  ellipse(-20, +4, 15, 30);
  ellipse(-30, +6, 15, 30);
  ellipse(-40, +8, 15, 30);
  translate(mouthX - 128, mouthY - 295);
  pop();

  //teeth top
  push();
  fill(255);
  translate(mouthX + 16, mouthY + 295);
  rotate(0.4);
  ellipse(0, 0, 15, 30);
  ellipse(+10, +4, 15, 30);
  ellipse(+20, +8, 15, 30);
  ellipse(+30, +12, 15, 30);
  ellipse(+40, +16, 15, 30);
  pop();

  //upper cheek
  push();
  noStroke();
  quad(
    mouthX + 5,
    mouthY + 290,
    mouthX + 60,
    mouthY + 340,
    mouthX + 40,
    mouthY + 360,
    mouthX - 15,
    mouthY + 310
  );
  pop();

  //lower cheek
  push();
  noStroke();
  quad(
    mouthX + 145,
    mouthY + 300,
    mouthX + 70,
    mouthY + 340,
    mouthX + 80,
    mouthY + 360,
    mouthX + 155,
    mouthY + 310
  );
  pop();

  //stroke on the cheeks fix
  beginShape();
  fill(239, 204, 159);
  vertex(mouthX + 7, mouthY + 293);
  vertex(mouthX + 60, mouthY + 340);
  bezierVertex(
    mouthX + 60,
    mouthY + 345,
    mouthX + 70,
    mouthY + 345,
    mouthX + 70,
    mouthY + 340
  );
  vertex(mouthX + 145, mouthY + 300);
  vertex(mouthX + 145, mouthY + 360);
  vertex(mouthX + 30, mouthY + 360);
  vertex(mouthX + 7, mouthY + 293);
  endShape();
  push();
  beginShape();
  fill(239, 204, 159);
  noStroke();
  quad(
    mouthX + 6,
    mouthY + 293,
    mouthX + 70,
    mouthY + 355,
    mouthX + 70,
    mouthY + 370,
    mouthX + 10,
    mouthY + 370
  );
  quad(
    mouthX + 150,
    mouthY + 297,
    mouthX + 70,
    mouthY + 355,
    mouthX + 70,
    mouthY + 370,
    mouthX + 150,
    mouthY + 370
  );
  endShape();
  pop();

  //nose hole
  push();
  fill(50);
  noStroke();
  translate(mouthX - 55, mouthY + 265);
  rotate(-0.3);
  ellipse(0, 0, 18, 40);
  pop();
}

function draw() {
  clear();
  //different states
  if (gameState === "Start") {
    startScreen();
  } else if (gameState === "Game") {
    background(235, 220, 190);
    doughnut(doughnutX, doughnutY);
    mouth(mouthX, mouthY);
  } else if (gameState === "Instructions") {
    instructionsScreen();
  } else if (gameState === "Lost") {
    lostScreen();
  } else if (gameState === "Win") {
    winScreen();
  }

  //buttons functionality
  if (gameState === "Start") {
    if (mouseIsPressed) {
      if (mouseX > 190 && mouseX < 390 && mouseY < 520 && mouseY > 460) {
        gameState = "Game";
      } else if (mouseIsPressed) {
        if (mouseX > 190 && mouseX < 390 && mouseY > 360 && mouseY < 420) {
          gameState = "Instructions";
        }
      }
    }
  }

  if (gameState === "Instructions") {
    if (mouseIsPressed) {
      if (mouseX > 225 && mouseX < 425 && mouseY > 570 && mouseY < 630) {
        gameState = "Game";
      }
    }
  }

  //restarting mechanic after losing
  if (gameState === "Lost") {
    if (mouseIsPressed) {
      if (mouseX > 225 && mouseX < 425 && mouseY > 470 && mouseY < 530) {
        gameState = "Game";
      } else if (mouseX > 225 && mouseX < 425 && mouseY > 570 && mouseY < 630) {
        gameState = "Start";
      }
    }
  }
  if (gameState === "Win") {
    if (mouseIsPressed) {
      if (mouseX > 225 && mouseX < 425 && mouseY > 470 && mouseY < 530) {
        gameState = "Game";
      } else if (mouseX > 225 && mouseX < 425 && mouseY > 570 && mouseY < 630) {
        gameState = "Start";
      }
    }
  }
  //starting mechanic
  if (gameState === "Game") {
    /*     velocity += 2;
     */ acceleration += 0.01;

    doughnutY += velocity;
    velocity += acceleration;
  }

  /*   console.log(velocity);
   */ if (doughnutY > 800) {
    if (velocity > 25) {
      gameState = "Lost";
      doughnutY = 80;
      velocity = 0;
      acceleration = 0;
    } else if (velocity < 25) {
      gameState = "Win";
      doughnutY = 0;
      velocity = 0;
      acceleration = 0;
    }
  }

  if (keyIsDown(38) || keyIsDown(32)) {
    velocity -= 3;
  }
}

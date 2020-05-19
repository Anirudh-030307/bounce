var fixedRect, movingRect,rect1,rect2;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(600, 100,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1 = createSprite(600, 500, 50, 80);
  rect1.shapeColor = "orange";
  rect1.debug = true;

  rect2 = createSprite(400, 100, 50, 80);
  rect2.shapeColor = "yellow";
  rect2.debug = true;

  movingRect.velocityY = 5;
  rect1.velocityY = -5;
}

function draw() {
  background(0,0,0);  

  bounce (rect1,movingRect);

  drawSprites();
}

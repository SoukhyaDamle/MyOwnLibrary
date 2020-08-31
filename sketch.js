var fixedRect,movingRect;
var gameObject_1,gameObject_2,gameObject_3,gameObject_4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "magenta";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "magenta";

  movingRect.debug = true;
  fixedRect.debug = true;

  gameObject_1 = createSprite(100,100,50,50);
  gameObject_1.shapeColor = "green";
  gameObject_2 = createSprite(200,100,50,50);
  gameObject_2.shapeColor = "magenta";
  gameObject_3 = createSprite(300,100,50,50);
  gameObject_3.shapeColor = "magenta";
  gameObject_4 = createSprite(400,100,50,50);
  gameObject_4.shapeColor = "magenta";

  movingRect.velocityY = -2;
  fixedRect.velocityY = 2;
}

function draw() {
  background(0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject_2)) {
    gameObject_2.shapeColor = "skyblue";
    movingRect.shapeColor = "skyblue";
  } else {
    gameObject_2.shapeColor = "magenta";
    movingRect.shapeColor = "magenta";
  }

  bounceOff(movingRect,fixedRect);

  drawSprites();
}
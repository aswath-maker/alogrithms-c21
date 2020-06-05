var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  Box1 =createSprite(500,100,50,80);
  Box1.shapeColor = "Blue";
  Box1.velocityY = 2;
  Box1.velocityX = 2;

  Box2 =createSprite(600,100,50,80);
  Box2.shapeColor = "green";
  Box2.velocityY = -2;
  Box2.velocityX = -2;

}


function draw() {
  background(0,0,0);  

  Box1.x = World.mouseX;
  Box1.y = World.mouseY;

  if(isTouching(Box1,Box2)){
    bounceOff(Box1,Box2);  
    
  }
  else{
    Box1.shapeColor = "blue";
    Box2.shapeColor = "green";
  }

  bounceOff(movingRect,fixedRect);
  drawSprites();
}

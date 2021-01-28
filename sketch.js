var fixedRect, movingRect,car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  wall=createSprite(1000,150,60,90);
  wall.shapeColor="pink";
  
  
  car=createSprite(100,150,90,40)
  car.shapeColor="blue";
  car.velocityX=4;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  //calling the function
  if(touching(car,wall))
  {
    car.velocityX=0;
  }
  
  if(touching(movingRect,fixedRect))
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

   drawSprites();
}


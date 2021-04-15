var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car=createSprite(200,200,50,50)
  car.shapeColor = "pink";
  car.velocityX=3;

  wall=createSprite(1000,200,50,90)
  wall.shapeColor = "pink";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  //isTouching for movingRect and fixedrect
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "orange";
    fixedRect.shapeColor = "orange";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  //isTouching for car and wall
  if(isTouching(car,wall))
  {
    car.shapeColor = "blue";
    wall.shapeColor = "blue";
    car.velocityX=0;
  }
  else{
    car.shapeColor = "pink";
    wall.shapeColor = "pink";
  }

  drawSprites();
}
//user defined function  &  object1 and object2 are the function arguments
function isTouching(object1,object2)
{
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true;
}
else {
return false;
}
}
// revision
//1.We created user defined isTouching outside of the draw function
//2.we need to call the function inside the draw function
//3.chaning the color to be done when we are calling the function we have return statement in function
//4.we also created 2 more sprites and made the isTouching function to work all the objects











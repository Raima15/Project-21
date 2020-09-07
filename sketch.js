var car,wall;
var speed=2;
var weight;

function setup() {

  createCanvas(800,400);
  car = createSprite(40, 200, 50, 10);
  car.shapeColor="white";
  wall = createSprite(700,200,20,300);
  car.shapeColor="white";
  speed=random(50,60);
  car.velocityX=speed;

}

function draw() {
  background("black"); 
  drawSprites();
  if(wall.x-car.x<(car.width+wall.width)/2)
{

  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if (deformation>180)
  {
    car.shapeColor=color(255,0,0);
  }
  if(deformation<180 && deformation>100)
{
car.shapeColor=color(230,230,0);
}
if(deformation<100)
{
car.shapeColor=color(0,255,0);
}
}

if(car.x-wall.x<car.width/2+wall.width/2 && wall.x-car.x<wall.width/2+car.width/2 && car.y-wall.y<wall.height/2+car.height/2 && wall.y-car.y<wall.height/2+car.height/2){
    wall.shapeColor="red";
}
}

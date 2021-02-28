var bullet,wall,walli,wall2,i,damage;
var speed,weight,thickness;

function preload(){
  walli=loadAnimation("normal.jpg");
  wall2=loadAnimation("broke.jpg");
  i=loadImage("bullet.png");
}

function setup() {
  createCanvas(1100,400);
  
  wall = createSprite(900,200,thickness,height/2);
  wall.shapeColor="blue";
  wall.addAnimation("i",walli);
  wall.addAnimation("x",wall2);
  bullet = createSprite(50, 200, 40, 10);
  bullet.velocityX=70;
  bullet.shapeColor=color(255,223,0);
  thickness=round(random(22,83));
  speed=round(random(223,261));
  weight=round(random(30,52));
}

function draw() {
  background("black");  
   drawSprites();
   bullet.depth=wall.depth+1;
  if(isTouching(bullet,wall)){
    bullet.velocityX=0;
    damage=round(0.5*weight*speed*speed/(thickness*thickness*thickness));
    
    if(damage<10){
      wall.shapeColor="green";
      fill("green");
      textSize(20);
      text("PASSED",wall.x,100)
    } else if(damage>=10){
      wall.shapeColor="red";
      wall.changeAnimation("x",wall2);
      fill("red");
      textSize(20);
      text("REJECTED",wall.x,100)
  }

}

   fill("lightgreen");
   textSize(15);
   text("Speed: "+speed,100,50);
   text("Weight: "+weight,200,50);
   text("Wall's Thickness: "+ thickness,300,50);
   text("Damage: "+damage,450,50);

}

function isTouching(a,b){
  if(a.x-b.x < a.width/2+b.width/2 && b.x-a.x < a.width/2){
    return true;
  } else {
    return false;
  }
}
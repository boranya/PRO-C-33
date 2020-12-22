const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var bucket; 
var ground;

function setup() {
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);
}

ground = new Ground(0, 795, 480, 1); 

for(var k = 0; k<=width; k = k + 80){
  divisions.pudh(new Division(k, height-divisionHeight/2, 10, divisionHeight));
}

for (var i = 5; i<795; i=i+60){
  bucket=createSprite(x, y, 60, 5);
}  

for(var j = 40; j<=width; j=j+50)
{


  plinkos.push(new Plinko(j,75));
}
for (var k = 15; j<=width-10; j=j+50)
{

  plinkos.push(new Plinko(j, 175));
}
for (var j= 40; j<=width-10; j=j+50)
{

  plinkos.push(new Plinko(j,275));
}
for (var j=15; j<=width-10; j=j+50)
{

  plinkos.push(new Plinko(j, 375));
}

function draw() {
  background(255,255,255);  

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
  }

for (var j = 0; j<particles.length; j++){

  particles[j].display();
}
for (var k = 0; k<divisions.length; k++){

  divisions[k].display();
}
for (var j = 0; j<plinkos.length; j++){

  plinkos[j].display();
}

  drawSprites();
  bucket.display();
}
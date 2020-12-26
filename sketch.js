const Engine = Matter.Engine;  
const World= Matter.World;     
const Bodies = Matter.Bodies;  

var engine,world,ground,ball;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var gOptions = {isStatic:true};
  ground = Bodies.rectangle(200,375,400,50,gOptions);
  var bOptions = {restitution:0.7}
ball = Bodies.circle(200,200,20,bOptions);
  World.add(world,ground);
  World.add(world,ball);
  console.log(ground);
}

function draw() {
  background(0);  
  Engine.update(engine);
  ellipseMode(RADIUS);
  circle(ball.position.x,ball.position.y,20);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,50);   
                       
}
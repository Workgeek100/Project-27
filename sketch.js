const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var ball,platform,string;

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  ball = new Ball(mouseX,mouseY,50);
  platform = new Platform(600,200,500,50);
  string = new String(ball.body,platform.body);
}

function draw() {
  background(0);  
  Engine.update(engine);
 
  ball.display();
  platform.display();
  string.display();

}
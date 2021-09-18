const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var bridge
var stone
var jointLink,jointPoint,jointPoint2
var stones=[];


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  bridge= new Bridge(14,{x:320,y:500})
  jointPoint=new Base(1050,500,100,200)
  jointPoint2=new Base(320,500,100,200)
 
  Matter.Composite.add(bridge.body,jointPoint);

  jointLink = new Link(bridge,jointPoint);

  for(var i=0; i<=8; i++){
    var x=random(width/2-200,width/2+300);
    var y=random(-10,140);
    var stone=new Stone(x,y,80,80);
    stones.push(stone);}
  
}

function draw() {
  background(51); 
  Engine.update(engine);

  

  bridge.show();
  jointPoint.display();
  jointPoint2.display()
  
  for(var stone of stones){
    stone.show();
  }
}

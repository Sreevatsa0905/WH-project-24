
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1,bin2,bin3,paper,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bin1=new Dustbin(500,670,20,130);
	bin2=new Dustbin(550,690,100,20);
    bin3=new Dustbin(600,670,20,130);
    ground=new Ground(400,height,700,20);
	paper=new Paper(400,350);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
   bin1.display();
   bin2.display();
   bin3.display();
   paper.display();
}

function keyPressed()
{
    if(keyCode===UP_ARROW)
    Matter.body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
}


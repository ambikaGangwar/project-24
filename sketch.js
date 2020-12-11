const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
var dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.


	Engine.run(engine);
   ground1 = new Ground(400,480,800,20);
   paper1 = new Paper(150,400,40);
   dustbin1 = new Dustbin(600,450,170,20);
   dustbin1.shapeColor=color(25,25,112);
   dustbin2 = new Dustbin(510,420,15,90);
   dustbin2.shapeColor=color(25,25,112);
   dustbin3 = new Dustbin(690,420,15,90);
   dustbin3.shapecolor=color((25,25,112));
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  paper1.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
  drawSprites();
 
}
function keyPressed()  {

  if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	  
  }
  }




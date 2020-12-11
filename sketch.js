 const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
var dustbin;
 

function setup() {
	createCanvas(1700,700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.


	Engine.run(engine);
   ground1 = new Ground(width/2,670,width,20);
   paper1 = new Paper( 200,450,40);
   dustbin1 = new Dustbin(1200,650);
   
    
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  ground1.display();
  paper1.display();
dustbin1.display();

  
 
}
function keyPressed()  {

  if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	  
  }

  }




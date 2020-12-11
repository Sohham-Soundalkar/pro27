
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rope1, rope2, rope3, rope4, rope5;
var bob1, bob2, bob3, bob4, bob5;
var roof;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Roof(400,200,200,50);

	rope1=new Rope(bob1.body, roof.body,-bobDiameter*2, 0);
	rope2=new Rope(bob2.body, roof.body,-bobDiameter*2, 0);
	rope3=new Rope(bob3.body, roof.body,-bobDiameter*2, 0);
	rope4=new Rope(bob4.body, roof.body,-bobDiameter*2, 0);
	rope5=new Rope(bob5.body, roof.body,-bobDiameter*2, 0);

	bob1 = new Bob(450,400,50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  bob1.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x:40,y:-50});
	}
}




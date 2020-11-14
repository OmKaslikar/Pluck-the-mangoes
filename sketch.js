
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
 
var tree1;
 var ground1;
var stone1;
var boy,b;
var m6,m7,m8,m9,m10;
var c1;
var m1,m2,m3,m4,m5;
launchingForce=1000;
function preload(){
boy=loadImage("boy.png")
}
function setup() {
	createCanvas(1500, 780);
     

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
       tree1=new Tree(900,-10,600,900)
	   ground1=new Ground(900,800,25000,90);
		stone1=new Stone(550,650,50); 
		b=createSprite(600,700,50);
		b.addImage(boy);
		b.scale=0.1
		c1=new ConsT(stone1.body, {x:550,y:650});
		m1=new Mango(1200,300,53)
		m2=new Mango(1200,380,53)
		m3=new Mango(1000,380,53)
		m4=new Mango(1400,400,53)
		m5=new Mango(1050,450,53)
		m6=new Mango(1050,200,45)
		m7=new Mango(1030,350,60);
		 m8=new Mango(1200,200,80)
	Engine.run(engine);
  
}


function draw() {  
	background("white");
	fill("red")
	textSize(25);
	text("Press Space to get a second Chance to Play!!",50 ,50);
	Engine.update(engine);
	

 

  stone1.display();
  tree1.display();
  c1.display();
 ground1.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  detectollision(stone1,m1)
  detectollision(stone1,m2)
  detectollision(stone1,m3)
  detectollision(stone1,m4)
  detectollision(stone1,m5)
  detectollision(stone1,m6)
drawSprites();

 
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	
	c1.fly();
	Matter.Body.applyForce(stone1.body,stone1.body.position,{x:360,y:-280});
	
	
}
 
function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

  	if(distance<=lmango.r+lstone.r)
    {
    
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

  function keyPressed() {
    if(keyCode === 32){
	Matter.Body.setPosition(stone1.body,{x:550, y:650});
	c1.attach(stone1.body);
 
	 
   }
}


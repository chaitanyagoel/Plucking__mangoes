
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango3,mango5,mango7,mango9,mango11,mango13,rope;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(940,100,30);
	mango3=new mango(1090,100,30);
	mango5=new mango(1000,60,30);
	mango7=new mango(1090,280,30);
	mango9=new mango(990,220,30);
	mango11=new mango(940,180,30);
	mango13=new mango(1180,150,30);

treeObj=new tree(1050,600);
stoneObj=new Stone(150,200,40);
	groundObject=new ground(width/2,600,width,20);

	rope = new Rope(stoneObj.body,{x:245,y:445});

	
	Engine.run(engine);

}

function draw() {

  background(230);

 //Add code for displaying text here!
 image(boy ,200,370,200,300);
  
  
  


  treeObj.display();
  mango1.display();
mango3.display();
mango5.display();
mango7.display();
mango9.display();
mango11.display();
mango13.display();
  groundObject.display();
  rope.display();
  stoneObj.display();

 
}






function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    rope.fly();
}
function keyPressed(){
    if(keyCode===32){
       rope.attach(stoneObj.body)
    }
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img,polygon,polygon2,slinger
function preload(){
  polygon_img=loadImage("polygon.png");
}



function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  var polygon_options={
    isStatic:false,
    restitution:0.04
  }
  poly = Bodies.rectangle(50,300,50,50,polygon_options)
  World.add(world,poly)



  poly2=createSprite(50,300,50,50)
  poly2.addImage(polygon_img)
  poly2.scale=0.15
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);


//stand2/level one
block17 = new Block (645,180,30,40)
block18 = new Block (675,180,30,40)
block19 = new Block (705,180,30,40)
block20 = new Block (735,180,30,40)
block21 = new Block (735,180,30,40)
//stand2/level two
block22 = new Block (675,140,30,40)
block23 = new Block (705,140,30,40)
block24 = new Block (735,140,30,40)
// stand2/level three
block25 = new Block (705,100,30,40)
slinger = new Slingshot(poly,{x:150, y:300})

}




function draw() {
  
  background(56,44,44); 
  Engine.update(engine)
 poly2.x=poly.position.x
 poly2.y=poly.position.y

//console.log(poly.position.x)
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();

  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
 
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block25.display()
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  block22.display()
  block23.display()
  block24.display()
  fill("grey");
  block16.display();
  slinger.display()

 drawSprites()
 textSize(24)
 fill("orange")
 text("press Space for a second chance",100,20)

}
function mouseDragged(){
  Matter.Body.setPosition(poly,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slinger.fly()
}
function keyPressed(){
  if (keyCode === 32){
    Matter.Body.setPosition(poly,{x:150,y:300})
    slinger.attach(poly)
    
  }
}

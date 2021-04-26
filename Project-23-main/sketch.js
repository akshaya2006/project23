var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxLeft,BoxRight,boxBottom,boxLeftSprite,boxRightSprite,boxBottomSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-50, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 boxPosition=width/2-100
	 boxY=610;



	 boxleftSprite=createSprite(boxPosition, boxY, 20,80);
	 boxleftSprite.shapeColor=color(255,0,0);

	 boxleft = Bodies.rectangle(boxPosition+100, boxY, 20,80 , {isStatic:true} );
	 World.add(world, boxleft);

	 boxBottomSprite=createSprite(boxPosition+200, boxY, 20,80);
     boxBottomSprite.shapeColor=color(255,0,0);

	 boxBottom = Bodies.rectangle(boxPosition+100, boxY+45-20, 300,20 , {isStatic:true} );
	 World.add(world, boxBottom);

	 boxRightSprite=createSprite(boxPosition+100, boxY+45-20, 220,20);
	 boxRightSprite.shapeColor=color(255,0,0);

	 boxRight = Bodies.rectangle(boxPosition+200 , boxY, 20,100 , {isStatic:true} );
	 World.add(world, boxRight);
	 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
    
  }
}




var starImg,bgImg;
var star, starBody;
var fairy , fairyImg ;
var joySound ;
var edges ;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
    fairyImg = loadAnimation("fairyImage1.png" , "fairyImage2.png") ;
     joySound = loadSound("JoyMusic.mp3")
}

function setup() {
	createCanvas(800, 750);

	fairy = createSprite(100,500,20,20) ;
     fairy.addAnimation( "fairy",fairyImg)  ;
     fairy.scale = 0.2 ;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
   edges = createEdgeSprites() ;
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  
  fairy.collide(edges) ;
  
  //write code to stop star in the hand of fairy
 if (star.y > 470 && starBody.position.y > 470) {
	 Matter.Body.setStatic(starBody,true)
 }
  
  drawSprites();

}

function keyPressed() {

	if (keyCode === 68) {
		Matter.Body.setStatic(starBody,false); 
	}

	
	if(keyCode === 32 && fairy.x < 520){
		fairy.x = fairy.x+20
        joySound.play() ;
	}
	 
	
}
 
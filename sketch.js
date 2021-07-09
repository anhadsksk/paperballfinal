
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	leftBox = new Box1(800, 500, 20, 110);
	rightBox = new Box1(1000, 500, 20, 110);
	centreBox = new Box(900, 500, 180, 110);
	ball = new Ball(250, 300, 20);
	ground = new Ground(600, 550, 1200, 20);
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(135,206,235);

	drawSprites();
	ball.display();
	leftBox.display();
	rightBox.display();
	
	centreBox.display();
	
	ground.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position, {x : 50, y : -100})
	}
}



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
    createCanvas(800, 400);
    
    engine = Engine.create();
	world = engine.world;
    
    var diameter = 40;
	var posX = width / 2;
	var posY = height / 4 + 200;
    
    bob1 = new Bob(posX - diameter * 2, posY, diameter);
	bob2 = new Bob(posX - diameter, posY, diameter);
	bob3 = new Bob(posX, posY, diameter);
	bob4 = new Bob(posX + diameter, posY, diameter);
	bob5 = new Bob(posX + diameter * 2, posY, diameter);
    
    roof1 = new Roof(width / 2, height / 4, 250, 15);
    
    rope1 = new Rope(bob1.body, roof1.body, -diameter * 2, 0);
	rope2 = new Rope(bob2.body, roof1.body, -diameter * 1, 0);
	rope3 = new Rope(bob3.body, roof1.body, 0, 0);
	rope4 = new Rope(bob4.body, roof1.body, diameter * 1, 0);
	rope5 = new Rope(bob5.body, roof1.body, diameter * 2, 0);
    
    Engine.run(engine);
}

function draw() {
    rectMode(CENTER);
    background('#FFFFFF');
    
    bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	roof1.display();

	drawSprites();
}

function keyPressed() {
    if(keyCode === 38) {
        Matter.Body.applyForce(bob1.body, bob1.body.position, {
            x: -100,
            y: -100
        });
    }
}
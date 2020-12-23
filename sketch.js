const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImage;
var constraintObj;
var score=0;

function setup(){
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    platform = new Ground(400, 237, 200, 20);

    block8 = new Block(330, 235, 30, 40);
    block9 = new Block(360, 235, 30, 40);
    block10 = new Block(390, 235, 30, 40);
    block11 = new Block(420, 235, 30, 40);
    block12 = new Block(450, 235, 30, 40);
    block13 = new Block(360, 195, 30, 40);
    block14 = new Block(390, 195, 30, 40);
    block15 = new Block(420, 195, 30, 40);
    block16 = new Block(390, 155, 30, 40);

    polygon = new Polygon(100, 100, 70);

    sling = new Sling(polygon.body, {x: 100, y: 100})
}

function draw() {
    background("black");
    Engine.update(engine);
    
    platform.display();

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    polygon.display();

    sling.display();

    textSize(20);
    fill("white");
    text("score = " + score, 10, 50);
}

function mouseDragged() {
    Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
    sling.fly();
}

function keyPressed() {
    if(keyCode == 32) {
        sling.attach(polygon.body);
    }
}
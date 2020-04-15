const Engine =  Matter.Engine;
const World = Matter.World;
const Bodies = Matter.World;
const Constraint = Matter.Constraint;

var engine,world;
var circle, obstruction1;
var slingshot;

function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    circle = new circle(200,200,40);
    obsrtuction1 = new Obstruction(900,900,40,90);
    obsrtuction2 = new Obstruction(900,880,40,90);
    obsrtuction3 = new Obstruction(900,900,40,90);

    slingshot = new SlingShot(circle.body,{x:200 , y : 50})
}

function draw() {
    Engine.update(engine);
    obstruction1.display();
    obstruction2.display();
    obstruction3.display();
    circle.display();
    slingshot.display();
} 

function mouseDragged(){
    Matter.Body.setPosition(circle.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        slingshot.attach(bird.body);
    }
} 

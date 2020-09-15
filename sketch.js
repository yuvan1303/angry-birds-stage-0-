const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground;
var pig1;
var log1;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,330,70,70);
    box2 = new Box(870,330,70,70);
    pig1 = new Pig(785,330);
    log1 = new Log(785,285,240,PI/2);

    ground = new Ground(600,380,1200,20);
   
}


function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
}
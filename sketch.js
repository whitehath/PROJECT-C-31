const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var dropscount=100;
var drops=[];
var thunder, thunder1,thunder2,thunder3,thunder4;

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}

function setup(){
   createCanvas(400,600)
   engine = Engine.create();
   world = engine.world;
   if(frameCount % 100===0){
        for(var i=0;i<dropscount;i++){
            drops.push(new Drops(random(0,400),random(0,200)))
        }
    }
    umbrella= new Umbrella(300,450);
}

function draw(){
    Engine.update(engine);
    background(0); 
    for(var i = 0; i<dropscount; i++){
        drops[i].display();
        drops[i].update();
        
    }
    umbrella.display();

    var rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunder = createSprite(random(10,350), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.lifetime=12;
        thunder.scale=0.5;
    }
    drawSprites();
}   


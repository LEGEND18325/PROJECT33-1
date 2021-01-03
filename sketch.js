const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;


var Plinkos=[];

var Divisions1=[];

var divisionHeight=250;

var engine, world;
var ground;

var divisions;
var particle;
var plinkos;
var score=0;
var gameState="play";
var turn=0;
var line;


function setup() {
  createCanvas(735,700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,660,1200,20);
  
   
  
 for (var j = 40; j <=width; j=j+50){
  Plinkos.push( new Plinko(j,100));
  }
  
  for (var j = 15; j <=width; j=j+50){
    Plinkos.push( new Plinko(j,175));
    }
    for (var j = 40; j <=width; j=j+50){
      Plinkos.push( new Plinko(j,235));
      }

      for (var j = 15; j <=width; j=j+50){
        Plinkos.push( new Plinko(j,315));
        }
 
 line=createSprite(330,380,900,2)
 line.shapeColor="yellow";
    
}


function draw() {
  
  background(0); 
 textSize(30)
  fill("white")
  text("500",15,425)

  textSize(30)
  fill("white")
  text("500",90,425)

  textSize(30)
  fill("white")
  text("500",170,425)

  
  textSize(30)
  fill("white")
  text("100",250,425)

  textSize(30)
  fill("white")
  text("100",330,425)
  
  textSize(30)
  fill("white")
  text("100",410,425)

  textSize(30)
  fill("white")
  text("200",490,425)

  textSize(30)
  fill("white")
  text("200",570,425)

  textSize(30)
  fill("white")
  text("200",650,425)

  textSize(30)
  fill("red")
  text("score :"+score,15,50)

  
  
  
  Engine.update(engine); 
  ground.display(); 
  line.display(); 
 
 if(particle!=null)
 {
   particle.display();
   if(particle.body.position.y>380)
   {
     if (particle.body.position.x<210)
     {
            score=score+500;
            particle=null;
            if(count>=5)gameState="end"
     }
     if(particle.body.position.x<500)
     {

     }
   }
 }

 
height=660;
 for(var k = 0; k <=width;k = k + 80){
    Divisions1.push(divisions=new Divisions(k,height-(divisionHeight/2),10,divisionHeight));
    divisions.display();
 }

 

 

 


 
 //drawSprites();
 for(var j = 0; j <Plinkos.length;j++){
  Plinkos[j].display();
  }
 
}


function mousePressed(){
  
  if(gameState!=="end"){
    count++;
    particle=new Particles(mouseX,10,10,10)
  }
}


 


  
 
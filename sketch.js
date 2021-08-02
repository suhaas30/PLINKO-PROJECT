const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions = [];


var divisionHeight=300;
var score = 0;
var ground;
var count = 0;



var gameState="play";


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  
  


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);

  textSize(30);
  text("500", 13, 534);
  text("500", 98, 534);
  text("500", 176,534);
  text("500", 257,534);
  text("100", 337,534);
  text("100", 415,534);
  text("100", 495,534);
  text("200", 573,534);
  text("200", 653,534);
  text("200", 732,534)


  
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

 

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
   ground.display();
   if(particle){
    particle.display();

    if(particle.body.position.y>760)
    {
      if(particle.body.position.x < 300)
      {
        score = score+500;
        particle = null;
      }else if(particle.body.position.x>301 && particle.body.position.x<600)
      {
        score = score+100;
        particle = null;
      } else if(particle.body.position.x>601 && particle.body.position.x<900)
      {
        score = score+200;
        particle = null;
      }
    } 



    
   }
   
 if(count>5){
   gameState = "End"
  text("Game Over")
 }

   
}
function mousePressed(){
  if(gameState !== "end"){
    particle = new Particle(mouseX,10,10);
    count++
  }
}

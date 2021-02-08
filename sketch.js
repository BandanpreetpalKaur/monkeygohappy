
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas (600,600);

  monkey = createSprite(100,500,20,20)
  monkey.addAnimation("monkey_running", monkey_running);
  monkey.scale = 0.2;
  
 
  
  ground = createSprite(100,570,600,20);
  ground.x = ground.width /2;
   
  obstaclesGroup = createGroup();
  FoodGroup = createGroup();
  
  score = 0;
}


function draw() {
background ("lightgreen");
  
  if(ground.x<0){
    ground.x = ground.width /2;
  }
    
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
    
   monkey.collide(ground);
  
  
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
    score=score+1
  }
    
    
  monkey.velocityY=monkey.velocityY+0.8
    
  spawnobstacle();
    spawnbanana();
  
    
   
    
  
  drawSprites();
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time" + survivalTime, 100,50)
}




function spawnobstacle(){
  if(frameCount % 150===0){
    var obstacle = createSprite(500,530,20,20)
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-6;
    
    //generate random obstacles
    
    //add scale and lifetime to the obstacle
    obstacle.scale = 0.25;
    obstacle.lifetime=500;
    
    //add obstacle to the group
  obstaclesGroup.add(obstacle);
  }
   
  
  
  }

function spawnbanana(){
  if(frameCount % 160===0){
    banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(250,300));
    banana.addImage(bananaImage);
    banana.scale=0.2;
    banana.velocityX =-3;
    
    //add lifetime to the monkey
   banana.lifetime=500;
    
    //add banana to the group
   FoodGroup.add(banana);
    
  }
  
}




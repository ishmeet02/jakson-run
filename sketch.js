var Runner, Runner_running;
var pathImg;
var coinImg
var energyImg;

function preload() {
  //pre-load images
  Runner_running = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImg = loadImage("path.png");
  coinImg = loadImage("coin.png");
  energyImg = loadImage("energyDrink.png");
}

function setup() {
  createCanvas(400, 400);
  //create sprites here

  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.scale = 1;
  path.velocityY = 4;

  Runner = createSprite(200, 350, 5, 5);
  Runner.addAnimation("running", Runner_running);
  Runner.scale = 0.08;
  
  
  var boundary1 = createSprite(60,200,20,400);
  var boundary2 = createSprite(340,200,20,400);
 
}

function draw() {
  background(0);
 
  Runner.x = World.mouseX;

  console.log(frameCount);
  console.count("Draw count is : ");
  console.log(Runner);

  if (path.y > 400) {
    path.y = height / 2;
  }

  spawn_energyDrink();
  spawn_coins();
  drawSprites();
}

function spawn_coins(){
  if (frameCount % 90 === 0){

    coins = createSprite(100,20,20,20);
  coins.addImage(coinImg);
  coins.scale = 0.4;
    coins.y = Math.round(random(10,15));
    coins.velocityY = 3;
    
    
  }
  
}


function spawn_energyDrink(){
  if (frameCount % 70 === 0){

    energyDrink = createSprite(200,20,20,20);
    energyDrink.addImage(energyImg);
    energyDrink.scale = 0.1;
    energyDrink.y = Math.round(random(10,20));
    energyDrink.velocityY = 3;
    
    
  }
  
}
 



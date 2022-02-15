var streetImg, jakeImg, bombImg, coinImg, drinkImg, powerImg;
var street, jake, bomb, coin, energyDrink, power,leftBorder, rightBorder;

function preload(){
  //imagens pré-carregadas
  streetImg = loadImage("path.png");
  jakeImg = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
  bombImg = loadImage("bomb.png");
  coinImg = loadImage("coin.png");
  drinkImg = loadImage("energyDrink.png");
  powerImg = loadImage("power.png");
}

function setup(){
  createCanvas(400,400);
  leftBorder = createSprite(0,0,10,400);
  rightBorder = createSprite(390,0,10,400);
  street = createSprite(200,200);
  street.addImage(streetImg);
  street.velocityY = 10;
  street.scale = 1.2;
  jake = createSprite(200,300,50,20);
  jake.addAnimation("running",jakeImg);
  jake.scale =0.8;
  jake.y =300;
  grupoBomba=createGroup();
  grupoCoin=createGroup();
}

function draw() {
  background(0);
  jake.x = World.mouseX
  if(street.y > 500){
    street.y = height/2;
  }
  generateBombs();
  generateCoins();
  drawSprites();
}

function  generateBombs(){
  if(frameCount % 60 == 0){
    bomb = createSprite(0,0,50,50);
    bomb.x = Math.round(random(0,350));
    bomb.lifeTime =200;
    bomb.velocityY = 6;
    bomb.addImage(bombImg);
    bomb.scale = 0.1;
  }
}
function  generateCoins(){
  if(frameCount % 40 == 0){
    coin = createSprite(0,0,50,50);
    coin.x = Math.round(random(0,350));
    coin.lifeTime =200;
    coin.velocityY = 6;
    coin.addImage(coinImg);
    coin.scale = 0.5;
  }
}
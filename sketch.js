var mainHero, hero1, hero2, hero3, hero4;
var backImage, captAm, hulk, antMan, spidMan, thor;
var coinImg, rockImg, puddleImg, rockGroup, coinGroup, puddleGroup;
var x = 70;
var rand;

function preload() {

  backImage = loadImage("images/track.jpg");

  captAm = loadImage("images/captam.png");
  hulk = loadImage("images/hulk.png");
  antMan = loadImage("images/antman.png");
  spidMan = loadImage("images/spiderman.png");
  thor = loadImage("images/thor.png");

  rockImg = loadImage("images/rock.png");
  coinImg = loadImage("images/coin.png");
  puddleImg = loadImage("images/puddle.png");

}

function setup() {
  createCanvas(1500,500);
  
  track = createSprite(100,150);
  track.addImage(backImage);
  track.velocityX = -2;

  
  hero2 = createSprite(x,150,10,10);
  mainHero = createSprite(x,250,10,10);
  mainHero.shapeColor = 'blue';
  hero3 = createSprite(x,350,10,10);
  hero4 = createSprite(x,450,10,10);

  rockGroup = createGroup();
  puddleGroup = createGroup();
  coinGroup = createGroup();
}

function draw() {
  background(0,244,233);

  if(track.x < 0) {
    track.x = track.width/2;
  }

  if(keyIsDown(RIGHT_ARROW)) {
    mainHero.x = mainHero.x + 5;
  }

  if(keyIsDown(UP_ARROW)) {
    mainHero.y = mainHero.y - 5;
  }

  if(keyIsDown(DOWN_ARROW)) {
    mainHero.y = mainHero.y + 5;
  }

  rand = Math.random(1,3);
  if (rand === 1){
    spawnRocks();
  } else if (rand === 2){
    spawnCoins();
  } else {
    spawnPuddles();
  }

  var obj = Math.round(random(1,4));
  if (frameCount%150 === 0) {
    if (obj === 1) {
      object1();
    }
  }

  drawSprites();
}

function spawnRocks() {
  if(frameCount%100===0) {
    var rock = createSprite(1500,250,10,10);
    rock.addImage(rockImg);
    rock.scale = 0.02;
    rock.velocityX = -4;
    rock.lifetime = 375;
    rockGroup.add(rock);
  }
}

function spawnCoins() {
  if(frameCount%150===0) {
    var coin = createSprite(1500,250,10,10);
    coin.addImage(coinImg);
    coin.scale = 0.02;
    coin.velocityX = -4;
    coin.lifetime = 375;
    coinGroup.add(coin);
  }
}

function spawnPuddles() {
  if(frameCount%200===0) {
    var puddle = createSprite(1500,250,10,10);
    puddle.addImage(puddleImg);
    puddle.scale = 0.02;
    puddle.velocityX = -4;
    puddle.lifetime = 375;
    puddleGroup.add(puddle);
  }
}

function object1() {
  hero1 = createSprite(x,Math.round(random(50,150)),10,10);
  hero1.velocityX = 3;
}
var groundImagen_ship, ship;
 var groundImage_sea, ground, invisibleGround, running; 

function preload(){
  groundImage_ship = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  groundImage_sea= loadImage ("sea.png");
}

function setup(){
  createCanvas(400,400);
 
  ship = createSprite(350,350,100,100);
  ship.addAnimation(groundImagen_ship);
  ship.scale = 250;

  ground = createSprite(200,180,400,20);
 ground.addImage("ground",groundImage_sea);
 ground.x = ground.width /2;
 ground.velocityX = -4;

 invisibleGround= createSprite(200, 190, 400, 10)  
 invisibleGround.visible = false; 

}

function draw() {
  background("220");
  if (keyDown("space") && ship.y >= 160) {
    ship.velocityY = -10;
  
  }
  
  ship.velocityY = ship.velocityY + 0.8
  
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  
  ship.collide(invisibleGround);
  drawSprites();

  ship.depth = ground.depth
  ship.depth = ground.depth + 1;

}

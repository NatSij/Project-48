var knight_run, knight_death, knight_atck, main_img;
var bgimg,bg,ground
var box, ghost, lava, zombie;
var portal;
var spawnZombieGroup, spawn_zombie;

function preload(){
 main_img = loadAnimation("Images/KR1.gif","Images/KR2.gif","Images/KR3.gif","Images/KR4.gif","Images/KR5.gif","Images/KR6.gif","Images/KR7.gif","Images/KR8.gif","Images/KR9.gif","Images/KR10.gif")
 bgimg = loadAnimation("Images/BG_Real&New.jpg");
 box = loadImage("Images/Box.png");
 ghost = loadAnimation("Images/Ghost 1.gif", "Images/Ghost 2.gif", "Images/Ghost 3.gif", "Images/Ghost 4.gif", "Images/Ghost 5.gif", "Images/Ghost 6.gif");
 knight_death = loadAnimation("Images/KD1.gif", "Images/KD2.gif", "Images/KD3.gif", "Images/KD4.gif", "Images/KD5.gif");
 knight_atck = loadAnimation("Images/KnightA1.gif", "Images/KnightA2.gif", "Images/KnightA3.gif", "Images/KnightA4.gif", "Images/KnightA5.gif");
 lava = loadAnimation("Images/Lava 1.gif", "Images/Lava 2.gif", "Images/Lava 3.gif", "Images/Lava 4.gif", "Images/Lava 5.gif", "Images/Lava 6.gif");
 portal = loadImage("Images/Portal.png");
 zombie = loadAnimation("Images/Zombie 1.gif", "Images/Zombie 2.gif", "Images/Zombie 3.gif", "Images/Zombie 4.gif", "Images/Zombie 5.gif", "Images/Zombie 6.gif", "Images/Zombie 7.gif", "Images/Zombie 8.gif", "Images/Zombie 9.gif", "Images/Zombie 10.gif", "Images/Zombie 11.gif","Images/Zombie 12.gif",
 "Images/Zombie 13.gif", "Images/Zombie 14.gif");
}

function setup() {
  createCanvas(1350, 700);
 bg=createSprite(675, 400, 200, 300);
 bg.addAnimation("moving",bgimg);
 bg.scale=2.56;
 bg.velocityX=-5
 bg.x=bg.width/2
 knight_run = createSprite(200, 650, 10, 10);
 knight_run.addAnimation("walking", main_img);
knight_run.addAnimation("attacking",knight_atck)
  knight_run.scale = 0.3; 

   ground=createSprite(675, 700, 2700, 10);
    ground.visible = false;

    spawnZombieGroup= createGroup()
}
 
function draw(){
  background(0);  
  console.log(knight_run.y)
  if(bg.x<200){
    bg.x=bg.width/2;
  }

if(keyDown("space") && knight_run.y >= 567){
  knight_run.velocityY=-10;
  knight_run.changeAnimation("walking", main_img);
}
if(keyWentDown("right")){
  // knight_run.velocityY=-10;
   knight_run.changeAnimation("attacking",knight_atck);
 }
 if(keyWentUp("right")){
  // knight_run.velocityY=-10;
   knight_run.changeAnimation("walking", main_img);
 }
 
knight_run.velocityY=knight_run.velocityY+0.5
knight_run.collide(ground)

   spawnZombie();
   spawnBox();
   spawnGhost();
   oilSlick();
  drawSprites();
}

function spawnZombie() {
if(frameCount % 350 === 0){
spawn_zombie = createSprite(1000, 575, 10, 10);
spawn_zombie.addAnimation("moving", zombie);
spawn_zombie.scale = 0.4;
spawn_zombie.velocityX = -6;
spawn_zombie.lifetime = 300;
}
//spawnZombieGroup.add(spawn_zombie)
}

function spawnBox() {
if(frameCount % 200 === 0){
var spawn_box = createSprite(1000, 635, 10, 10);
spawn_box.addImage(box);
spawn_box.scale = 0.27;
spawn_box.velocityX = -6;
spawn_box.lifetime = 300;
}
}

function spawnGhost() {
  if(frameCount % 200 === 0){
  var spawn_ghost = createSprite(1000, 500, 10, 10);
  spawn_ghost.addAnimation("ghostmoving", ghost);
  spawn_ghost.scale = 0.27;
  spawn_ghost.velocityX = -6;
  spawn_ghost.lifetime = 300;
  }
  }

  function oilSlick() {
    if(frameCount % 200 === 0){
    var spawn_oil = createSprite(1000, 500, 10, 10);
    spawn_oil.addAnimation("lavamoving", lava);
    spawn_oil.scale = 0.27;
    spawn_oil.velocityX = -6;
    spawn_oil.lifetime = 300;
    }
    }

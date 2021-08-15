var bg, bgImg, bgImg1;
var angryMan,angrymanImg;
var tree, treeImg;

var gameState=0;
var gameLevel = 1;
var gameLevel = 2;
var gameLevel = 3;

var intro=0;
var intro1=1;
var level1=2;
var intro2=3;
var level2=4;
var intro3=5;
var level3=6;



function preload(){
  bgImg=loadImage("Images/background3.jpg");
  bgImg1=loadImage("Images/background2.jpg");
  angrymanImg=loadAnimation("Images/b1img.png");
  treeImg=loadImage("Images/tree.jpg")
}
function setup() {
  createCanvas(1400,700);

 
  angryMan=createSprite(400, 200, 50, 50);
  angryMan.addAnimation("climbing",angrymanImg);

  tree=createSprite(1200,500,50,50);
  tree.addImage(treeImg);
  tree.scale=0.5;
  
}

function draw() {
  //background(bgImg); 

  drawSprites();

  if(gameState===intro){
    intro1();
    angryMan.visible=false;
    tree.visible=false;
    if(keyDown("space")){
     gameState = level1
    }
     
  }

  if(gameLevel === 1){
    level1();
  }

  if(gameState===intro){
    intro2();
    angryMan.visible=false;
    tree.visible=false;
    if(keyDown("space")){
      gameState = level2
     }
       
  }

  if(gameLevel === 2){
    level2();
  }

  if(gameState===intro){
    intro3();
    angryMan.visible=false;
    tree.visible=false;
    if(keyDown("space")){
      gameState = level3
     }
      
  }

  if(gameLevel === 3){
    level3();
  }
}
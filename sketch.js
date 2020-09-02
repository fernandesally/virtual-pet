//Create variables here
var dog,happydog;
var database;
var foodS,foodStock;
var d1,d2
function preload()
{
  //load images here
  d1=loadImage("images/dogImg.png")
  d2=loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
	createCanvas(500, 500);
  dog=createSprite(200,200,60,15);
 dog.addImage("doggy",d1);
}
//function to read value from database DR
function readStock(data){
  foodS=data.val();
}
//function to write values in DR
function writeStock(x){
if(x<=0){
  x=0
}
else{
  x=x-1
}
  database.ref("/").update ({
  Food:x
  })
} 

function draw() { 
  background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage("doggy",d2)
}
  drawSprites();
  //add styles here
  textSize(30)
  text("press UP_ARROW key to feed pluto milk",120,100)
}




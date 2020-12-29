var dog, happyDog, database, foodS, foodStock;

function preload()
{
  dog=loadImage("dogImg.png");
   happyDog=loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,300,150,150)
  dog.addImage("dog1", dog);
  dog.scale = 0.15;
database = firebase.database();
foodstock = database.ref('Food');
foodstock.on("value", readStock);
textSize(20);
}



function draw() {  
 background(46, 139, 87);
 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(happyDog);
  
 }
  drawSprites();
text("Note: Press UP_ARROW to feed Joey Milk!")
text("food remaining: "+foodS, 170, 200);
textSize(13);
fill(255,255,274);
stroke(black);

//Function to read values from DB
function readStock(data){
  foodS = data.val();
}

//Function to write the values in DB
function writeStock(x){
  
  if(x<=0){
    x=0;
  }else{
    x=x-1
  }

  database.ref('/').update({
    Food:x
  })
}
}








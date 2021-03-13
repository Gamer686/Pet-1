var dog,sadDog,happyDog;
var foodObj;
var foodS, foodStock;
var fedTime, fed,feed,  addFood;
var readStock;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  database = firebase.database()
  createCanvas(1000,400);

  foodObj = new Food();
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)

  feeding = database.ref('FeedTime')
  feeding.on("value",function(data){
    fed = data.val();
  })


  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed = createButton("Feed the Dog")
  feed.position(700,95)
  feed.mousePressed(feedDog);

  addFood1 = createButton("Add food");
  addFood1.position(800,95);
  addFood1.mousePressed(addFood);

}

function draw() {
  background(46,139,87);

  foodObj.display();
  /*foodStock = database.ref('FeedTime')
 FeedTime.on("value",function(data){
    fed = data.val();
    console.log(fed)*/

  fill(255,255,254);
textSize(15);
if(fed>=12){
  text("last fed: 12AM",350,30)
  }
  else if(fed == 0){
    text("last fed: "+fed+"AM",350,30);
}
else{
  text("last fed:"+fed+"AM",350,30);
}
  drawSprites();

}

//function to read food Stock
function readStock(data){
  foodStock = data.val();
  console.log(foodStock)
  foodObj.updateFoodS(foodStock)
}

//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);
  foodObj.updateFoodS(foodObj.getStock()-1);
  database.ref('/').update({
    Food: foodObj.getStock(),
  FeedTime : hour()
  })
  }

//function to add food in stock
function addFood(){
  foodStock++;
  database.ref('/').update({
Food: foodStock
  })
}

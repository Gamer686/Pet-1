class Food{
    constructor(){
        this.foodS = 0;
        this.image = loadImage("images/Milk.png")
        this.fed;
    }
    updateFoodS(foodS){
        this.foodS = foodS
        console.log(this.foodS)
    }
    
getStock(){
    return this.foodS
}

display(){
    var x=30, y=100;
    imageMode(CENTER)
    image(this.image,720,220,70,70);

    if(this.fooodS !=0){
        for(var i=0; i<this.foodS; i++){
            if(i%10==0){
                x=80
                y=y+50;
            }
            image(this.image,x,y,50,50)
            x=x+30
        }
    }
}

}
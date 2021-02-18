class Umbrella{
    constructor(x,y){
        var options = {
            isStatic:true          
        }
        this.body=Bodies.circle(x,y,60,options);
        this.radius=7;
        this.image=loadImage("walking_1.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,300,300)
    }
}
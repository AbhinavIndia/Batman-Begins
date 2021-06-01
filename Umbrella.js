class Umbrella{
    constructor(x,y,width,height){
        this.image = loadImage("images/Walking Frame");
            var options = {
                'restitution' : 0.1,
                'friction' :0.1,
                'isStatic':true
            }
            this.x = x;
            this.y = y;
            this.r = 5;
            this.body = Bodies.circle(x,y,15,options);
            World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
};
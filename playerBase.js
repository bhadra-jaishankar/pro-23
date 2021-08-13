class PlayerBase{
    constructer(x,y,width,height){
        var option={
            isStatic:true
        }

        this.body=bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("./assets/base1.png");
        world.add(world,this.body)
    }

display(){
    var pos=this.body.position;
    var angle=this.body.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    ImageMode(CENTER);

    image(this.image,0,0,this.width,this.height)
}
}

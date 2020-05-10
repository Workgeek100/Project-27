class Platform{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            density:0.5
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("blue");
        rectMode(CENTER);
        rect(pos.x,pos.y,500,50);

    }
}
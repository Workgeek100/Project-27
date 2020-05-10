class Ball{
    constructor(x,y,radius,age){
        var options={
            density:1,
            restitution:0.8,
            friction:0.2
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.x=x;
        this.y=y;
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
       
       
        fill("red");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,50,50);
      
    }
}
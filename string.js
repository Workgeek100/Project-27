
class String{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stifness:0.04,
            length:200
        }
        this.string=Constraint.create(options);
     
        World.add(world,this.string);
    }
    display(){
        var pointA=this.string.bodyA.position;
        var pointB=this.string.bodyB.position;
        stroke("white");
        strokeWeight(10);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
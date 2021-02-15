class Rope{
    constructor(bodyA, p1){
        var options = {
            bodyA: bodyA,
            pointB: p1,
            stiffness: 0.06,
            length: 60
        }
        this.pointB = p1;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }


    fly(){
        this.rope.bodyA=null
    }
    attach(b1){
        this.rope.bodyA=b1
    }
    display(){
       
            if(this.rope.bodyA){
var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
            } 
} 
}
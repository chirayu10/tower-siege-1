class Slingshot{
    constructor(BodyA,pointB){
        var option = {
            bodyA : BodyA,
            pointB : pointB,
            length:5,
            stiffness:0.04
        }
        this.pointB=pointB
        this.sling = Constraint.create(option)
        World.add(world,this.sling)

    }
    display(){
        if(this.sling.bodyA){
        var body = this.sling.bodyA.position
        var point = this.pointB
        line(body.x,body.y,point.x,point.y)
        }
    }
    fly(){
        this.sling.bodyA=null
    }
    attach(bodyx){
        this.sling.bodyA=bodyx
       
    }
}
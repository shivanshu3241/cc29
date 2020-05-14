class Chain
{
    constructor(body1,body2)
    {
        var options = {
            bodyA : body1,
            bodyB : body2,
            stiffness : 0.5,
            length : 50
        }
        this.chain = Constraint.create(options)
        World.add(world,this.chain)
    }
    
     attach(body)
   {
      this.chain.bodyA = body;
   }
 
   fly()
   {
       this.chain.bodyA = null;
   }
    
    display()
    {
        if(this.chain.bodyA){
            var posA = this.chain.bodyA.position;
            var posB = this.chain.bodyB.position;
            strokeWeight(3);
            stroke("green");
            line(posA.x,posA.y,posB.x,posB.y);
            noStroke();
        }
    }
}
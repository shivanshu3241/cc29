class Knife 
{
    constructor(x, y) 
    {
      var options = 
      {
          'restitution':0.8,
          'friction':1.5,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50,50, options);
      this.width = 50;
      this.height = 50;
      this.image = loadImage("Images/Knife.PNG");

      World.add(world, this.body);
    }
    display()
    {
      var pos =this.body.position;
      //pos.x = mouseX;
      //pos.y = mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle)
      //fill("red");
      //strokeWeight(4);
      //stroke("black")
      image(this.image,0,0,this.width,this.height);
      pop();
    }
  };
   
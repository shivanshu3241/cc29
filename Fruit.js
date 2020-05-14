class Fruit 
{
  constructor(x, y, width, height) 
  {
    var options = 
    {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("Images/apple.PNG");
    this.visiblity = 255;
    
    World.add(world, this.body);
  }
  display()
  {
    if(this.body.speed < 3){
      console.log(this.body.speed);
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();
    }
    else{
      World.remove(world, this.body);
      this.visiblity = this.visiblity-5;
      push();
      tint(255,this.visiblity);     
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);  
      pop();  
    }
  }
};
 
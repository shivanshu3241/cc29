const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var fruit1,fruit2,fruit3,fruit4,fruit5,fruit6,fruit7,fruit8,fruit9,fruit10,fruit11,fruit12,fruit13,frui14,fruit15;
var fruit16,fruit17,fruit18,fruit19,fruit20,fruit21,fruit22,fruit23,fruit24,fruit25,fruit26,fruit27,fruit28,fruit29,fruit30;

//var fruit31,fruit32,fruit33,fruit34,fruit35,fruit36,fruit37,fruit38,fruit39,fruit40;
//var fruit41,fruit42,fruit43,fruit44,fruit45,fruit46,fruit47,fruit48,fruit49,fruit50;

var knife;
var shooter;
var ground1,ground2,ground3,ground4;

//var gameState = "onSling";

var backgroundImg;

function preload() 
{
    backgroundImg = loadImage("Images/fruitbackground.PNG");
}

function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    knife = new Knife(100,100);

    fruit1 = new Fruit(920,180,33,33);
    fruit2 = new Fruit(960,180,33,33);  
    fruit3 = new Fruit(1000,180,33,33);
    fruit4 = new Fruit(1040,180,33,33);
    fruit5 = new Fruit(1080,180,33,33);
    fruit6 = new Fruit(940,160,33,33);
    fruit7 = new Fruit(980,160,33,33);
    fruit8 = new Fruit(1020,160,33,33);
    fruit9 = new Fruit(1060,160,33,33);
    fruit10 = new Fruit(960,140,33,33);
    fruit11 = new Fruit(1000,140,33,33);
    fruit12 = new Fruit(1040,140,33,33);
    fruit13 = new Fruit(980,120,33,33);
    fruit14 = new Fruit(1020,120,33,33);
    fruit15 = new Fruit(1000,100,33,33);

    fruit16 = new Fruit(920,380,33,33);
    fruit17 = new Fruit(960,380,33,33);
    fruit18 = new Fruit(1000,380,33,33);
    fruit19 = new Fruit(1040,380,33,33);
    fruit20 = new Fruit(1080,380,33,33);
    fruit21 = new Fruit(940,360,33,33);
    fruit22 = new Fruit(980,360,33,33);
    fruit23 = new Fruit(1020,360,33,33);
    fruit24 = new Fruit(1060,360,33,33);
    fruit25 = new Fruit(960,340,33,33);
    fruit26 = new Fruit(1000,340,33,33);
    fruit27 = new Fruit(1040,340,33,33);
    fruit28 = new Fruit(980,320,33,33);
    fruit29 = new Fruit(1020,320,33,33);
    fruit30 = new Fruit(1000,300,33,33);

    //fruit31 = new Fruit(10,50,33,33);
    //fruit32 = new Fruit(10,50,33,33);
    //fruit33 = new Fruit();
    //fruit34 = new Fruit();
    //fruit35 = new Fruit();
    //fruit36 = new Fruit();
    //fruit37 = new Fruit();
    //fruit38 = new Fruit();
    //fruit39 = new Fruit();
    //fruit40 = new Fruit();
  
    ground1 = new Ground(600,height,1200,20);
    ground2 = new Log(1000,200,200,20);
    //ground3 = new Log(150,11,250,20);
    //ground4 = new Log(200,200,250,20);

    shooter = new Slingshot(600,200,30,30);

    chain1 = new Chain(knife.body,shooter.body);
    
      //var options = 
      //{
          //bodyA : knife.body,
        //  bodyB : Ground.body,
         // stiffness : 0.5,
         // length : 50
     // }
    //this.chain = Constraint.create(options)
    //World.add(world,this.chain)
    
   
}

function draw()
{
    background("white");
    Engine.update(engine);
    console.log(fruit1.body.position.x);
    console.log(fruit1.body.position.y);
    console.log(fruit1.body.angle); 

    fruit1.display();
    fruit2.display();
    fruit3.display();
    fruit4.display();
    fruit5.display();
    fruit6.display();
    fruit7.display();
    fruit8.display();
    fruit9.display();
    fruit10.display();
    fruit11.display();
    fruit12.display();
    fruit13.display();
    fruit14.display();
    fruit15.display();

    fruit16.display();
    fruit17.display();
    fruit18.display();
    fruit19.display();
    fruit20.display();
    fruit21.display();
    fruit22.display();
    fruit23.display();
    fruit24.display();
    fruit25.display();
    fruit26.display();
    fruit27.display();
    fruit28.display();
    fruit29.display();
    fruit30.display();

    //fruit31.display();
    //fruit32.display();
    ////fruit33.display();
    //fruit34.display();
    //fruit35.display();
    //fruit36.display();
    //fruit37.display();
    //fruit38.display();
    //fruit39.display();
    //fruit40.display();

    //fruit41.display();
    //fruit42.display();
    //fruit43.display();
    //fruit44.display();
    //fruit45.display();
    //fruit46.display();
    //fruit47.display();
    //fruit48.display();
    //fruit49.display();
    //fruit50.display();

    chain1.display();

    //chain2.display();
    //chain3.display();

    knife.display(); 
    shooter.display();

   ground1.display();
   ground2.display();

    
    //ground3.display();
    //ground4.display();
}

//function mouseDragged()
//{
    //if(gameState != "launched" )
    //{
      // Matter.Body.setPosition(knife.body, {x: mouseX , y: mouseY});
    //}
//}


//function mouseReleased()
//{
    //chain1.fly();
    //gameState = "launched"
//}

//function keyPressed()
//{
    //if(keyCode === 32){
        //chain1.attach(knife.body);
        //gameState = "onSling"
    //}

//} 
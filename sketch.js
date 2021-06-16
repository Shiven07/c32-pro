const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box, ground, slingshot, stand1, stand2, box1, box2, box3, box4, box5, box6;
var box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17;
var box18, box19, box20, box21, box22, box23, box24, box25, box26, box27, box28, box29, box30;
var polygon_IMG, ball, slingshot, score = 0;
function preload() {
polygon_IMG = loadImage("polygon.png");    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    stand1 = new Ground(550, 550, 280, 15);
    stand2 = new Ground(1000, 315, 280, 15)
    ground = new Ground(600,height,1200,20);

    
    box15 = new Box(440, 515, 50, 50);
    box2 = new Box(495, 515, 50, 50);
    box3 = new Box(550, 515, 50, 50);
    box4 = new Box(605, 515, 50, 50);
    box5 = new Box(660, 515, 50, 50);
    box6 = new Box(467, 465, 50, 50);
    box7 = new Box(522, 465, 50, 50);
    box8 = new Box(577, 465, 50, 50);
    box9 = new Box(632, 465, 50, 50);
    box10 = new Box(494, 415, 50, 50);
    box11 = new Box(549, 415, 50, 50);
    box12 = new Box(604, 415, 50, 50);
    box13 = new Box (521, 365, 50, 50);
    box14 = new Box(576, 365, 50, 50);
    box1 = new Box(548, 315, 50, 50);

    box30 = new Box(890, 280, 50 ,50);
    box17 = new Box(945, 280, 50, 50);
    box18 = new Box(1000, 280, 50, 50);
    box19 = new Box(1055, 280, 50, 50);
    box20 = new Box(1110, 280, 50, 50);
    box21 = new Box(917, 230, 50, 50);
    box22 = new Box(972, 230, 50, 50);
    box23 = new Box(1027, 230, 50, 50);
    box24 = new Box(1082, 230, 50, 50);
    box25 = new Box(944, 180, 50, 50);
    box26 = new Box(999, 180, 50, 50);
    box27 = new Box(1054, 180, 50, 50);
    box28 = new Box(971, 130, 50, 50);
    box29 = new Box(1026, 130, 50, 50);
    box16 = new Box(998, 80, 50, 50);
    
    ball = Bodies.circle(50, 200, 50);
    World.add(world, ball);
    slingshot = new SlingShot(this.ball, {x:200, y:200});
}

function draw(){
    background(255, 0, 0);
    Engine.update(engine);
    textSize(25);
    fill("white");
    text("Score:" + score, 750, 40);    
    image(polygon_IMG, ball.position.x, ball.position.y, 40, 40);
    textSize(15);
    fill("white")
    text("Hit the boxes with the object by dragging the object in the direction of the boxes to win!", 300, 100);
    ground.display();
    stand1.display();
    box15.display();
    fill("blue")
    box2.display();
    fill("blue")
    box3.display();
    fill("blue")
    box4.display();
    fill("blue")
    box5.display();
    fill("blue")
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    fill("blue")
    box11.display();
    fill("blue")
    box12.display();
    box13.display();
    box14.display();
    box1.display();

    stand2.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    slingshot.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();    
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    box26.score();
    box27.score();
    box28.score();
    box29.score();
    box30.score();
    text("Score:" + score, 750, 40);    
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
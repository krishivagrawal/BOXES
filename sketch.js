var canvas;
var music;
var box1;
var box2;
var box3;
var box4;
var striker;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
  box1(createSprite=200,100,50,10);
  box2(createSprite=150,100,50,10) ;
  box3(createsprite=100,100,50,10);
  box4(createSprite=50,100,50,10);
  striker(createSprite=100,30,330,10);
    //create box sprite and give velocity
    striker.velocityY=-5;

function draw() {
    background(rgb(169,169,169));
    create ;edgeSprite();

if(box1.istouching(box1)&&box1.bounceOff(surface1)){};

    //add condition to check if box touching surface and make it box
}
 
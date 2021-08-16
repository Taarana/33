const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow1Img,snow2Img,snow3Img;
var boy;

function preload(){
  snow1Img=loadImage("snow1.jpg");
  snow2Img=loadImage("snow2.jpg");
  snow3Img=loadImage("snow3.jpg");
}
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  boy=createSprite(400, 200, 50, 50);
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
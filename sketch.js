
var snow,snowImg;
var snow2,snow2Img;
var backgroundImg;

function preload(){
  backgroundImg = loadImage("snow2.jpg");
  snowImg=loadImage("snow4.webp");
  
}
function setup() {
createCanvas(1000,600);

}


function draw() {
  background(backgroundImg);  
  snow();
  drawSprites();
  
}

 function snow(){
   if(World.frameCount%80===0){
    var snow = createSprite(Math.round(random(50, 750),40, 10, 10));
    snow.addImage(snowImg);
    snow.scale=0.2;
    snow.velocityY=2;
    snow.setLifetime=200;
    
   }
 }
   
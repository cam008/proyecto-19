var fantasma, fantasmaImage
var bosque, bosqueImage
var obstaculo1, obstaculo1Image
var obstaculo2, obstaculo2Image
var obstaculo3, obstaculo3Image
var obstaculo4, obstaculo4Image
var obstaculo5, obstaculo5Image
var obstaculo6, obstaculo6Image
var obstaculo7, obstaculo7Image
var coin, coinImage

function preload(){
fantasmaImage= loadImage("ghost.png")
bosqueImage= loadImage("bosque1.png")

obstaculo1Image= loadImage("obstaculo.png")
obstaculo2Image= loadImage("obstaculo.png")
obstaculo3Image= loadImage("obstaculo.png")
obstaculo4Image= loadImage("obstaculo.png")
obstaculo5Image= loadImage("obstaculo.png")
obstaculo6Image= loadImage("obstaculo.png")
obstaculo7Image= loadImage("obstaculo.png")
coinImage= loadImage("coin.png")
}

function setup() {
 createCanvas(800,800)

 bosque= createSprite(800,400);
 bosque.addImage("bosque", bosqueImage);
 bosque.velocityX= 2

 fantasma= createSprite(100,380,50,50)
 fantasma.addImage("fantasma", fantasmaImage);
 fantasma.velocityX=1
 fantasma.scale =0.2
 fantasma.velocityY= 0

 obstaculo1= createSprite(100, 200)
 obstaculo1.addImage("obstaculo.png",obstaculo1Image);
 obstaculo1.scale = 0.05

 obstaculo2= createSprite(250, 350)
 obstaculo2.addImage("obstaculo.png",obstaculo2Image);
 obstaculo2.scale = 0.05

 obstaculo3= createSprite(100,470)
 obstaculo3.addImage("obstaculo.png",obstaculo3Image);
 obstaculo3.scale = 0.05

 obstaculo4= createSprite(400,600)
 obstaculo4.addImage("obstaculo.png",obstaculo4Image);
 obstaculo4.scale = 0.05

 obstaculo5= createSprite(300,500)
 obstaculo5.addImage("obstaculo.png",obstaculo5Image);
 obstaculo5.scale = 0.05

 obstaculo6= createSprite(500,420)
 obstaculo6.addImage("obstaculo.png",obstaculo6Image);
 obstaculo6.scale = 0.05

 obstaculo7= createSprite(500,135)
 obstaculo7.addImage("obstaculo.png",obstaculo7Image);
 obstaculo7.scale = 0.05

 coin= createSprite(700,400)
 coin.addImage("coin.png", coinImage)
 coin.scale = 1
}

function draw() {
    background("negro")
    drawSprites();
  
    textsize=40;
    text("Evita tocar los hoyos negros mientras intentas llegar a la moneda",50,50)

    if(bosque.x > 400){
        bosque.x = 300
      }

    if(fantasma.x> 700){
        fantasma.x= 10
    }

    if(keyDown("UP_ARROW")){
      fantasma.velocityY = -2
    }

    if(keyDown("DOWN_ARROW")){
      fantasma.velocityY = 2
    }

    if(keyDown("LEFT_ARROW")){
      fantasma.velocityX = -2
    }

    if(keyDown("RIGHT_ARROW")){
      fantasma.velocityX =2
    }

    if(fantasma.isTouching(obstaculo1)){
    bosque.velocityX = 0
    fantasma.velocityX = 0
    fantasma.velocityY = 0
    }
  
    if(fantasma.isTouching(obstaculo2)){
      bosque.velocityX = 0
      fantasma.velocityX = 0
      fantasma.velocityY = 0
    }

    if(fantasma.isTouching(obstaculo3)){
      bosque.velocityX = 0
      fantasma.velocityX = 0
      fantasma.velocityY = 0
      }

    if(fantasma.isTouching(obstaculo4)){
      bosque.velocityX = 0
      fantasma.velocityX = 0
      fantasma.velocityY = 0
    }

    if(fantasma.isTouching(obstaculo5)){
      bosque.velocityX = 0
      fantasma.velocityX = 0
      fantasma.velocityY = 0
    } 

    if(fantasma.isTouching(obstaculo6)){
      bosque.velocityX = 0
      fantasma.velocityX = 0
      fantasma.velocityY = 0
    }

    if(fantasma.isTouching(obstaculo7)){
      bosque.velocityX = 0
      fantasma.velocityX = 0
      fantasma.velocityY = 0
    }

    if(fantasma.isTouching(coin)){
      bosque.velocityX = 0
      fantasma.velocityX = 0
      fantasma.velocityY = 0

      textSize(100);
      text("WINNER", 400,400)
    }
    
    
  }

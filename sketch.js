function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight)
  ground = createSprite(windowWidth / 2, windowHeight / 2, 10, height * 2)
  ground.velocityX = 0
  ground.velocityY = 2

  alien = createSprite(width / 2, height - 150, 50, 80)
}

function draw() {
  background("blue")
  if (ground.y > height) {
    ground.y = ground.height / 2;
  }

  if (keyDown("left")){
  alien.velocityX = 3
  }    

  if (keyDown("right")){
    alien.velocityX = -3
  }

  drawSprites()
}


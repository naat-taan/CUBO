let rotationX = 0;
let rotationY = 0;
let velocityX = 0;
let velocityY = 0;
let isDragging = false;
let lastMouseX = 0;
let lastMouseY = 0;
let autoRotation = true;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  frameRate(60);
}

function draw() {
  background(40, 50, 50);
  
  rotationX += velocityX;
  rotationY += velocityY;
  
  velocityX *= 0.98;
  velocityY *= 0.98;
  
  if (autoRotation && !isDragging) {
    velocityX += 0.0005 ;
    velocityY += 0.0005;
  }

  pointLight(
    150 + sin(frameCount * 0.02) * 105,
    150 + sin(frameCount * 0.03) * 105,
    150 + sin(frameCount * 0.04) * 105,
    0, 0, 200
  );
  
  ambientLight(60);
  
  rotateX(rotationX);
  rotateY(rotationY);
  
  normalMaterial();
  
  box(300);
}

function mousePressed() {
  isDragging = true;
  lastMouseX = mouseX;
  lastMouseY = mouseY;
  autoRotation = false;
}

function mouseDragged() {
  let deltaX = mouseX - lastMouseX;
  let deltaY = mouseY - lastMouseY;
  
  velocityY += deltaX * 0.0005;
  velocityX += -deltaY * 0.0005;
  
  lastMouseX = mouseX;
  lastMouseY = mouseY;
}

function mouseReleased() {
  isDragging = false;
  autoRotation = true;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (key === ' ') {
    rotationX = 0;
    rotationY = 0;
    velocityX = 0.5;
    velocityY = 0.5;
    autoRotation = true;
  }
}
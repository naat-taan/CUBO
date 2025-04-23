// não sei comentar código, mas é isso ai
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
  frameRate(240); // CUBO 240hz METENDO FLICK EM NOOB
}

function draw() {
  background(40, 50, 50);
  
  rotationX += velocityX;
  rotationY += velocityY;
  
  velocityX *= 0.98; // ISSO FAZ O CUBO VOLTAR A GIRAR SOZINHO DEPOIS DE TU FAZER ELE GIRAR P KRL COM O MOUSE
  velocityY *= 0.98; // isso aqui tbm, obviamente
  
  if (autoRotation && !isDragging) { //CUBO GIRANDO P KRL SOZINHO :O
    velocityX += 0.0005;
    velocityY += 0.0005;
  }

  pointLight( // COR DA LUZ DO CUBO
    150 + sin(frameCount * 0.02) * 105,
    150 + sin(frameCount * 0.03) * 105,
    150 + sin(frameCount * 0.04) * 105,
    0, 0, 200
  );
  
  ambientLight(60);
  
  rotateX(rotationX);
  rotateY(rotationY);
  
  normalMaterial();
  
  box(300); // WOOW CUBO FODA
}

function mousePressed() { // CLICA NO CUBO E ARRANSTA PRA TU VER UM BGL FODA
  isDragging = true;
  lastMouseX = mouseX;
  lastMouseY = mouseY;
  autoRotation = false;
}

function mouseDragged() { // GIRA GIRA GIRA GIRA GIRA GIRA GIRA GIRA GIRA GIRA GIRA GIRA GIRA GIRA GIRA
  let deltaX = mouseX - lastMouseX;
  let deltaY = mouseY - lastMouseY;
  
  velocityY += deltaX * 0.0005;
  velocityX += -deltaY * 0.0005;
  
  lastMouseX = mouseX;
  lastMouseY = mouseY;
}

function mouseReleased() { // SOLTA O MOUSE PRA TU VER O CUBO VOLTANDO AO NORMAR
  isDragging = false;
  autoRotation = true;
}

function windowResized() { // po, isso aqui so deixa o canvas do tamanho da janela msm, nada demais
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() { // APERTA O ESPAÇO AI PRA TU VER
  if (key === ' ') {
    rotationX = 0;
    rotationY = 0;
    velocityX = 0.5;
    velocityY = 0.5;
    autoRotation = true;
  }
}
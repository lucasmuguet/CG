const radius1 = 200;
const radius2 = 100;
let n = 4;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);
  translate(width / 2, height / 2);
  let [mx, my] = relativeMouse();
  let v = createVector(1, 0);
  let u = createVector(mx, my);
  n = floor(map(u.mag(), 0, width / 2, 3,50));
  beginShape();
  for (let i = 0; i < (2*n); i++) {
    let angle = map(i, 0, 2* n, 0, TWO_PI);
    if (i % 2 == 0) {
      vertex(radius1 * cos(angle), radius1 * sin(angle));
    } else {
      vertex(radius2 * cos(angle), radius2 * sin(angle));
    }
  }
  endShape(CLOSE);
}

function relativeMouse() {
  let mx = mouseX;
  let my = mouseY;
  let matrix = drawingContext.getTransform()
  let pd = pixelDensity()
  let rp = matrix.inverse().transformPoint(new DOMPoint(mx * pd, my * pd));
  return [rp.x, rp.y];
}
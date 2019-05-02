function setup() {
  //function to create something
  createCanvas(400, 400)
  //code to create canvas and set size
  background(255)
  //adds background color
}

function draw() {
  //function to create a drawing
  fill(255, 130, 0)
  //sets the color that will fill shapes
  stroke(0)
  //sets the color you'll be drawing in and border color of shapes
  triangle(0, 30, 40, 0, 80, 30)
  //draws a triangle and specifies dimensions
  rect(5, 30, 70, 70)
  //draws a rectangle and specifies dimensions
}

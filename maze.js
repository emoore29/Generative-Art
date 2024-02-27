var canvas = document.getElementById("second");
var context = canvas.getContext("2d");

// Canvas is 320px with CSS styling
// setting canvas size with JS modifies the canvas internal pixel dimensions.
// It alters how the canvas renders internal content, allowing higher detail.
// But the CSS styling will still define the space on the screen.
var size = window.innerWidth;
var step = 60; // There will be size/step tiles along x and y axis, making a grid of tiles
var dpr = window.devicePixelRatio; // Ratio of physical pixels to CSS pixels
// tells browser how many of the screen's actual pixels should be used to draw a single CSS pixel

// Set width and height of canvas element. Even though it is "320px" in the CSS, this may not be 320 physical pixels depending on the DPR
canvas.width = size * dpr;
canvas.height = size * dpr;

// Scales the canvas by the DPR, ensuring that canvas uses the correct number of physical pixels
context.scale(dpr, dpr);

context.lineCap = "square";
context.lineWidth = 10;

function draw(x, y, width, height) {
  // randomise 50/50 on L/R angle of line
  var leftToRight = Math.random() >= 0.5;

  if (leftToRight) {
    context.moveTo(x, y);
    context.lineTo(x + width, y + height);
  } else {
    context.moveTo(x + width, y);
    context.lineTo(x, y + height);
  }

  context.stroke();
}

for (var x = 0; x < size; x += step) {
  for (var y = 0; y < size; y += step) {
    // draws top to bottom, left to right, since we loop through all the Ys before we increment X a step
    // stop once we hit the size of the canvas
    draw(x, y, step, step);
  }
}

console.log("size", size);

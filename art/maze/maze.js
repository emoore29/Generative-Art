var canvas = document.getElementById("maze");
var context = canvas.getContext("2d");

var size = window.innerWidth;
var step = 60;
var dpr = window.devicePixelRatio;

canvas.width = size * dpr;
canvas.height = size * dpr;

context.scale(dpr, dpr);

context.lineCap = "square";
context.lineWidth = 8;

function draw(x, y, width, height) {
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
    draw(x, y, step, step);
  }
}

console.log("dpr", dpr);
console.log("canvas width", size * dpr);
console.log("size", size);

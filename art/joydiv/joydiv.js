var canvas = document.getElementById("joydiv");
var context = canvas.getContext("2d");

var size = 320;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);
context.lineWidth = 2;

var step = 10;

var lines = [];
var startVariation = 50;

for (var i = step; i <= size - step; i += step) {
  var line = [];
  for (var j = step; j <= size - step; j += step) {
    // calculate distance from center of canvas
    var distanceToCenter = Math.abs(j - size / 2);

    // generate multiplier based on how far from center (smaller distance = greater multiplier)
    var multiplier = Math.max(size / 2 - startVariation - distanceToCenter, 0);

    // generate random value multiplied by multiplier to create variation that trends bigger closer to center
    var random = (Math.random() * multiplier) / 2;
    var point = { x: j, y: i - random };
    line.push(point);
  }

  lines.push(line);
}

console.log(lines);
// size/2 = center. 50 const. 0 means if first calc < 0, math.max chooses 0.
// e.g. [ {x: 10, y: 290} ... {x: 10, y: 268.2}, {x: 10, y: 283.5}, {x: 10, y: 240.23} ... {x: 10, y: 290} ]

// Draw lines, starting @ 5 to skip a few top lines
for (var i = 5; i < lines.length; i++) {
  context.beginPath();
  context.moveTo(lines[i][0].x, lines[i][0].y);

  for (var j = 0; j < lines[i].length - 2; j++) {
    var xc = (lines[i][j].x + lines[i][j + 1].x) / 2;
    var yc = (lines[i][j].y + lines[i][j + 1].y) / 2;
    context.quadraticCurveTo(lines[i][j].x, lines[i][j].y, xc, yc);
  }

  context.quadraticCurveTo(
    lines[i][j].x,
    lines[i][j].y,
    lines[i][j + 1].x,
    lines[i][j + 1].y
  );
  context.save();
  context.globalCompositeOperation = "destination-out";
  context.fill();
  context.restore();
  context.stroke();
}

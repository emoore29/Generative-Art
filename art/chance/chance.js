var canvas = document.getElementById("chance");
var context = canvas.getContext("2d");

var size = 320;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);
context.lineWidth = 1;

console.log("canvaswidth");

var step = 1;
var lines = [];

// Create the points
for (var i = step; i <= size - step; i += step) {
  var line = [];
  for (var j = step; j <= size - step; j += step) {
    var point = { x: j, y: i };
    line.push(point);
  }
  lines.push(line);
  console.log("points in line", line.length);
}

console.log("lines", lines.length);

// By default, no loss
var loss = false;

// Draw the points
for (var i = 0; i < lines.length; i++) {
  for (var j = 0; j < lines[i].length; j++) {
    if (!loss) {
      context.fillStyle = "rgb(160,137,202)";
    } else {
      context.fillStyle = "rgb(255,255,255)";
    }
    var point = lines[i][j];
    var chance = Math.random() <= 0.000008;
    if (!chance) {
      context.fillRect(point.x, point.y, 1, 1);
    } else {
      if (Math.random() <= 0.75) {
        // Survive is dark purple
        !loss ? (context.fillStyle = "rgb(0,0,0)") : null;
        context.fillRect(point.x, point.y, 1, 1);
      } else {
        // If there is a loss, set loss to true for the remainder of the loop.
        loss = true;
        context.fillStyle = "rgb(255,255,255)";
        context.fillRect(point.x, point.y, 1, 1);
      }
    }
  }
}

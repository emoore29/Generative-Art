var canvas = document.getElementById("loss");
var context = canvas.getContext("2d");

var size = 320;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);
context.lineWidth = 2;

var step = 10;
var lines = [];

// Create the lines
for (var i = step; i <= size - step; i += step) {
  var line = [];
  for (var j = step; j <= size - step; j += step) {
    var random = Math.random() * 10;
    var point = { x: j, y: i };

    line.push(point);
  }
  lines.push(line);
}

// Draw the points
for (var i = 0; i < lines.length; i++) {
  for (var j = 0; j < lines[i].length; j++) {
    context.fillStyle = "black";
    var point = lines[i][j];
    var chance = Math.random() <= 0.013;
    if (!chance) {
      context.fillRect(point.x, point.y, 2, 2);
    } else {
      if (Math.random() >= 0.64) {
        context.fillStyle = "rgb(215, 115, 255)";
        context.fillRect(point.x, point.y, 2, 2);
      } else {
        context.fillStyle = "white";
        context.fillRect(point.x, point.y, 2, 2);
      }
    }
  }
}

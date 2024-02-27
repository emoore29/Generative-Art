var canvas = document.getElementById("points");
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

console.log("lines", lines);

// Draw the points
for (var i = 0; i < lines.length; i++) {
  for (var j = 0; j < lines[i].length; j++) {
    var point = lines[i][j];
    context.fillRect(point.x, point.y, 2, 2);
  }
}

// // Draw the lines
// for (var i = 0; i < lines.length; i++) {
//   context.beginPath();
//   context.moveTo(lines[i][0].x, lines[i][0].y);

//   for (var j = 0; j < lines[i].length; j++) {
//     context.lineTo(lines[i][j].x, lines[i][j].y);
//   }

//   context.stroke();
// }

var canvasNames = ["maze", "chance", "joydiv"];

// Reference to the container div
var gallery = document.getElementById("gallery");

canvasNames.forEach((name) => {
  // Create frame div
  var div = document.createElement("div");
  div.className = "frame";

  // Create canvas with id = canvas name
  var canvas = document.createElement("canvas");
  canvas.id = name;

  // Append canvas to frame div
  div.appendChild(canvas);

  // Append frame to gallery
  gallery.appendChild(div);
});

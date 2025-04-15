

var width = 500,
    height = 500;

// CANVAS

function drawWireTriangle(context, x1, y1, x2, y2, x3, y3, color) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(x3, y3);
    context.closePath();
    context.strokeStyle = color;
    context.stroke();
}
function drawSolidTriangle(context, x1, y1, x2, y2, x3, y3, color) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(x3, y3);
    context.closePath();
    context.fillStyle = color;
    context.fill();
}

function main() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    // Draw a wire triangle
    drawWireTriangle(context, 50, 50, 150, 50, 100, 150, "black");

    // Draw a solid triangle
    drawSolidTriangle(context, 200, 50, 300, 50, 250, 150, "blue");
    // Draw a wire triangle with a different color
    drawWireTriangle(context, 200, 50, 300, 50, 250, 150, "red");
}
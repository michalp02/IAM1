


var width = 1500,
    height = 1500;
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    document.body.appendChild(canvas);
    var context = canvas.getContext("2d");
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
    

    // Draw a wire triangle
    drawWireTriangle(context, 50, 50, 150, 50, 100, 150, "black");

    // Draw a solid triangle
    drawSolidTriangle(context, 200, 50, 300, 50, 250, 150, "blue");
    // Draw a wire triangle with a different color
    drawWireTriangle(context, 200, 50, 300, 50, 250, 150, "red");
}

// main();


// 3. Rysowanie łuków

// context.fillStyle = "rgba(255, 0, 0, 0.5)";
// context.beginPath();
// context.arc(250, 250, 150, 0, Math.PI * 2, false);
// context.closePath();
// context.fill();

function drawArc(context, x, y, radius, startAngle, endAngle, color) {
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle);
    context.strokeStyle = color;
    context.stroke();
}
function drawSolidArc(context, x, y, radius, startAngle, endAngle, color) {
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle);
    context.fillStyle = color;
    context.fill();
}
function drawSolidArc(context, x, y, radius, startAngle, endAngle, color) {
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle);
    context.fillStyle = color;
    context.fill();
}

// wywołanie funkcji
// drawArc(context, 250, 250, 150, 0, Math.PI * 2, "black");
// drawSolidArc(context, 250, 250, 150, 0, Math.PI * 2, "blue");


// 4. Rysowanie prostokątów
function drawRect(context, x, y, width, height, color) {
    context.beginPath();
    context.rect(x, y, width, height);
    context.strokeStyle = color;
    context.stroke();
}
function drawSolidRect(context, x, y, width, height, color) {
    context.beginPath();
    context.rect(x, y, width, height);
    context.fillStyle = color;
    context.fill();
}

// wywołanie funkcji
// drawRect(context, 50, 50, 100, 50, "black");
// drawSolidRect(context, 50, 50, 100, 50, "blue");

// krzywe beziera
function drawBezierCurve(context, x1, y1, x2, y2, x3, y3, x4, y4, color) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.bezierCurveTo(x2, y2, x3, y3, x4, y4);
    context.strokeStyle = color;
    context.stroke();
}

function drawSolidBezierCurve(context, x1, y1, x2, y2, x3, y3, x4, y4, color) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.bezierCurveTo(x2, y2, x3, y3, x4, y4);
    context.fillStyle = color;
    context.fill();
}

// wywołanie funkcji
// drawBezierCurve(context, 50, 50, 100, 100, 200, 100, 250, 50, "black");
// drawSolidBezierCurve(context, 50, 50, 100, 100, 200, 100, 250, 50, "blue");


// Narysuj nachodzące na siebie krzywe
function drawOverlappingCurves(context, x1, y1, x2, y2, x3, y3, x4, y4, color) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.bezierCurveTo(x2, y2, x3, y3, x4, y4);
    context.strokeStyle = color;
    context.stroke();
}
function drawSolidOverlappingCurves(context, x1, y1, x2, y2, x3, y3, x4, y4, color) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.bezierCurveTo(x2, y2, x3, y3, x4, y4);
    context.fillStyle = color;
    context.fill();
}
// wywołanie funkcji
// drawOverlappingCurves(context, 50, 50, 100, 100, 200, 100, 250, 50, "black");
// drawSolidOverlappingCurves(context, 50, 50, 100, 100, 200, 100, 250, 50, "blue");

// // sześcienne krzywe beziera
// context.beginPath();
// context.moveTo(50, 200);
// context.bezierCurveTo(100, 150, 200, 150, 250, 200);
// context.bezierCurveTo(300, 250, 400, 250, 450, 200);
// context.strokeStyle = "black";
// context.stroke();
// context.fillStyle = "blue";
// context.fill();
// context.beginPath();
// context.moveTo(50, 200);
// context.bezierCurveTo(100, 250, 200, 250, 250, 200);
// context.bezierCurveTo(300, 150, 400, 150, 450, 200);
// context.strokeStyle = "black";
// context.stroke();
// context.fillStyle = "blue";
// context.fill();

// łączenie odcinków
// context.beginPath();
// context.linejoin = "round";
// context.moveTo(50, 50);
// context.lineTo(150, 50);
// context.lineTo(150, 150);
// context.lineTo(50, 150);
// context.closePath();
// context.strokeStyle = "black";
// context.stroke();
// context.fillStyle = "blue";
// context.fill();
// context.beginPath();
// context.linejoin = "bevel";
// context.moveTo(50, 50);
// context.lineTo(150, 50);
// context.lineTo(150, 150);
// context.lineTo(50, 150);
// context.closePath();
// context.strokeStyle = "orange";
// context.stroke();
// context.fillStyle = "red";
// context.fill();
// context.beginPath();
// context.linejoin = "miter";
// context.moveTo(50, 50);
// context.lineTo(150, 50);
// context.lineTo(150, 150);
// context.lineTo(50, 150);
// context.closePath();

// trójkąt z łączonych odcinków "round"
context.beginPath();
context.lineJoin = "round";
context.moveTo(50, 50);
context.lineTo(150, 50);
context.lineTo(100, 150);
context.closePath();
context.strokeStyle = "black";
context.strokeStyle
context.stroke();
context.fillStyle = "blue";
context.fill();

// wypełnianie gradientowe liniowe i kołowe
// gradient liniowy
var linearGradient = context.createLinearGradient(0, 0, 0, 150);
linearGradient.addColorStop(0, "red");
linearGradient.addColorStop(1, "blue");
context.fillStyle = linearGradient;
context.fillRect(0, 0, 150, 150);
// gradient kołowy
var radialGradient = context.createRadialGradient(75, 75, 0, 75, 75, 75);
radialGradient.addColorStop(0, "red");
radialGradient.addColorStop(1, "blue");
context.fillStyle = radialGradient;
context.fillRect(0, 0, 150, 150);
// gradient koncentryczny
var concentricGradient = context.createRadialGradient(75, 75, 0, 75, 75, 75);
concentricGradient.addColorStop(0, "red");
concentricGradient.addColorStop(1, "blue");
context.fillStyle = concentricGradient;
context.fillRect(0, 0, 150, 150);

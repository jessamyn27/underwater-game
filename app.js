console.log("underwater game with canvas");

// Get canvas element and define context
const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

// Sets canvas width
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Makes canvas width responsive
window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
// Listens for keydown
window.addEventListener("keydown", moveFloater, true);

//CLASSES
class Floater {
  constructor(name, x, y, dx, dy) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    // this.image = image;
  }
}

// need to make the mermaid object
const ariel = new Floater('ariel', 500, 500, 50, 50);

// need to make the shell object
const shell = new Floater('shell', 100, 100, 50, 50)

//  images showing up
const backgroundImage = new Image();
backgroundImage.src = 'images/background.jpg'

const shellImage = new Image();
shellImage.src = 'images/shell.png'

const arielImage = new Image();
arielImage.src = 'images/mermaid.png'

const fishingImage = new Image();
fishingImage.src = 'images/fishing.png'

// function to show & size my images on the screen
const animate = () => {
c.clearRect(0, 0, 1000, 1000);
requestAnimationFrame(animate);
c.drawImage(backgroundImage, 0, 0, 1000, 1000);
c.drawImage(shellImage, shell.x, shell.y, 100, 100);
c.drawImage(arielImage, ariel.x, ariel.y, 100, 100);
c.drawImage(fishingImage, 400, 10, 100, 100);
}
/// trying switch case for moving Mermaid
function moveFloater(e) {
    switch(e.keyCode) {
        case 90:
        shell.x -= shell.dx;
        console.log(ariel);
            // left key pressed
            break;
        case 67:
        shell.x += shell.dx;
            // right key pressed
            break;
        case 68:
        shell.y -= shell.dy;
            // up key pressed
            break;
        case 88:
        ariel.y += ariel.dy;
            // down key pressed
            break;
    }
}

function moveFloater(e) {
    switch(e.keyCode) {
        case 37:
        ariel.x -= ariel.dx;
        console.log(ariel);
            // left key pressed
            break;
        case 39:
        ariel.x += ariel.dx;
            // right key pressed
            break;
        case 38:
        ariel.y -= ariel.dy;
            // up key pressed
            break;
        case 40:
        ariel.y += ariel.dy;
            // down key pressed
            break;
    }
}
// move mermaid left, right, up, down
// function moveMermaid(e) {
//   if (e.keyCode == 39) { //r
//     ariel.x += 50;
//     console.log(ariel);
//   }
//   if (e.keyCode == 37) { //l
//     ariel.x -= 10;
//     console.log(ariel);
//   }
//   if (e.keyCode == 38) { //up
//     ariel.y -= 10;
//     console.log(ariel);
//   }
//   if (e.keyCode == 40) { //down
//     ariel.y += 10;
//     console.log(ariel);
//
//     canvas.width = canvas.width; //resets the canvas.
//     console.log(ariel);
//   }
// }
animate(ariel);
// document.onkeydown = moveMermaid;

// move hook randomly around the room





// need to make x amt of pink shells float around at random in the canvas

// const pinkShell =
// for (var i = 0; i < 400; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
// }


















// c.fillStyle = "rgba(255, 0, 0, 0.5)";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "rgba(0, 0, 255, 0.5)";
// c.fillRect(400, 400, 100, 100);
// c.fillStyle = "rgba(0, 255, 0, 0.5)";
// c.fillRect(300, 300, 100, 100);
//
// console.log(canvas);

// line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "lavender";
// c.stroke();

/////////////////////////////////// circles ////////

// arc or circle x, y, radius, startAngle endAngle draw counter clockwise
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();
// //
// for (var i = 0; i < 100; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();
// }
// var mouse = {
//   x: undefined,
//   y: undefined
// }
// var maxRadius = 40;
// // var minRadius = 2;
//
// var colorArray = [
//   'pink',
//   'lavender',
//   'beige',
//   'blue',
//   'green',
// ]
//
// window.addEventListener('mousemove',
// function (event) {
// mouse.x = event.x;
// mouse.y = event.y;
// })
//
// window.addEventListener('resize', function()
// {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//
//   // itit();
//
// });
//
// function Circle(x, y, dx, dy, radius) {
//   this.x = x;
//   this.y = y;
//   this.dx = dx;
//   this.dy = dy;
//   this.radius = radius;
//   this.minRadius = radius;
//   this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
//
//   this.draw = function() {
//     c.beginPath();
//     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false
//       );
//     c.strokeStyle = this.color;
//     c.stroke();
//     // c.fill():
//
//   }
//
//   this.update = function() {
//     if (this.x + this.radius > innerWidth ||
//       this.x - this.radius < 0) {
//       this.dx = -this.dx;
//     }
//     if (this.y + this.radius > innerHeight ||
//       this.y - this.radius < 0) {
//       this.dy = -this.dy;
//     }
//     this.x += this.dx;
//     this.y += this.dy;
//
// // this is interactivity with the mouse
//   if (mouse.x - this.x < 50 && mouse.x - this.x > -50
//     && mouse.y - this.y < 50 && mouse.y - this.y > -50)
//      {
//        if (this.radius < maxRadius) {
//          this.radius += 1;
//
//        }
//   } else if (this.radius > this.minRadius) {
//       this.radius -= 1;
//
//   }
//
//     this.draw();
//   }
// }
//
//
//
// var circleArray = [];
//
// // function init() {
//   for (var i = 0; i < 8000; i++) {
//   var radius = Math.random() * 3 + 1;
//   var x = Math.random() * (innerWidth - radius * 2) + radius;
//   var y = Math.random() * (innerHeight - radius * 2) + radius;
//   var dx = (Math.random() -0.5) * 2;
//   var dy = (Math.random() -0.5) * 2;
//   circleArray.push(new Circle(x, y, dx, dy, radius));
//   }
// // }
//
// function animate() {
//   requestAnimationFrame(animate);
//   c.clearRect(0, 0, innerWidth, innerHeight
//     );
//     for (var i = 0; i < circleArray.length; i++) {
//       circleArray[i].update();
//     }
// }
//   c.beginPath();
//   c.arc(x, y, radius, 0, Math.PI * 2, false
//     );
//   c.strokeStyle = 'blue';
//   c.stroke();
//
// itit();
//
// animate();

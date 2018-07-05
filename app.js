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
window.addEventListener("keydown", moveAriel, true);

//CLASSES
class Floater {
  constructor(name, x, y, dx, dy, image) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.image = image;
    this.hasBeenMoving = 0;
    // this.height = height;
    // this.width = wid
}
move(direction){
    console.log("MOVING")
      if(direction == "up" && this.y - this.dy > 0){
        // move up
        this.y -= this.dy;
      }else if(direction =="down" && this.y + this.dy < canvas.height ){
      // move down
        this.y += this.dy;
      }else if(direction == "right" && this.x + this.dx < canvas.width){
        // move right
        this.x += this.dx
      }else if(direction =="left" && this.x - this.dx > 0){
        // move left
          this.x -= this.dx
      }
    this.hasBeenMoving++;
    if(this.hasBeenMoving > 3){
        clearInterval(this.floatingAround)
        this.float()
    }

}

float(){
 console.log("floating around");
 let randomDirections = ["up", "down", "left", "right"]
 let randomDirection = randomDirections[Math.floor(Math.random() * randomDirections.length)];
   this.hasBeenMoving = 0;
   this.floatingAround = setInterval(()=>{
       this.move(randomDirection)}, 100)
}
}
// float
// need to make the mermaid object
const ariel = new Floater('ariel', 500, 500, 50, 50);
ariel.height = 100
ariel.width = 100

// need to make the shell object
const shell = new Floater('shell', 300, 300, 50, 50);
shell.float()
shell.height = 100
shell.width = 100

// need to make the anchor object
const anchor = new Floater('anchor', 200, 200, 50, 50);
//  images showing up
const backgroundImage = new Image();
backgroundImage.src = 'images/background.jpg'

const shellImage = new Image();
shellImage.src = 'images/shell.png'

const arielImage = new Image();
arielImage.src = 'images/mermaid.png'

const anchorImage = new Image();
anchorImage.src = 'images/fishing.png'

// function to show & size my images on the screen
const animate = () => {
c.clearRect(0, 0, 1000, 1000);
requestAnimationFrame(animate);
if (ariel.x < shell.x + shell.width &&
   ariel.x + ariel.width > shell.x &&
   ariel.y < shell.y + shell.height &&
   ariel.height + ariel.y > shell.y) {
console.log("collision!");
}
c.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
c.drawImage(shellImage, shell.x, shell.y, 100, 100);
c.drawImage(arielImage, ariel.x, ariel.y, 100, 100);
c.drawImage(anchorImage, anchor.x, anchor.y, 100, 100);

}

/// trying switch case for moving ARIEL
function moveAriel(e) {
    switch(e.which) {
        case 37:
        if(ariel.x - ariel.dx > 0){
        ariel.x -= ariel.dx;
      }
        console.log(ariel);
            break;
            // left key pressed
        case 39:
        if(ariel.x + ariel.dx < canvas.width) {
        ariel.x += ariel.dx;
      }
            break;
            // right key pressed
        case 38:
        if(ariel.y - ariel.dy > 0){
        ariel.y -= ariel.dy;
      }
            break;
            // move up
        case 40:
        if(ariel.y + ariel.dy < canvas.height){
        ariel.y += ariel.dy;
      }
            break;
            // down key pressed
    }
}



animate();


// axis-aligned bounding box to make objects collide:

// var rect1 = {x: 5, y: 5, width: 50, height: 50}
// var rect2 = {x: 20, y: 10, width: 10, height: 10}


//
// filling in the values =>
//
// if (5 < 30 &&
//     55 > 20 &&
//     5 < 20 &&
//     55 > 10) {
//     collision detected!
// }

document.onkeydown = moveAriel;
// document.onkeydown = moveAnchor;
// document.onkeydown = moveShell;

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

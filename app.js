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

var gameOver = false;
var points = 0;

//CLASSES
class Floater {
  constructor(name, x, y, dx, dy, image,) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.image = image;
    this.isVisible = true;
    this.hasBeenMoving = 0;
    // this.height = height;
    // this.width = wid
  }
  move(direction) {
    // console.log("MOVING")
    if (direction == "up" && this.y - this.dy > 0) {
      // move up
      this.y -= this.dy;
    } else if (direction == "down" && this.y + this.dy < canvas.height) {
      // move down
      this.y += this.dy;
    } else if (direction == "right" && this.x + this.dx < canvas.width) {
      // move right
      this.x += this.dx
    } else if (direction == "left" && this.x - this.dx > 0) {
      // move left
      this.x -= this.dx
    }
    this.hasBeenMoving++;
    if (this.hasBeenMoving > 10) {
      clearInterval(this.floatingAround)
      this.float()
    }
  }

  float() {
    // console.log("floating around");
    let randomDirections = ["up", "down", "left", "right"]
    let randomDirection = randomDirections[Math.floor(Math.random() * randomDirections.length)];
    this.hasBeenMoving = 0;
    this.floatingAround = setInterval(() => {
      this.move(randomDirection)
    }, 70)
  }
}
// float
// need to make the mermaid object
const ariel = new Floater('ariel', 50, 50, 50, 50);
ariel.height = 100
ariel.width = 100

// need to make the shell object
const shell = new Floater('shell', 400, 400, 100, 100);
shell.float()
shell.height = 100
shell.width = 100


// need to make the shell object
const clam = new Floater('clam', 500, 500, 200, 200);
clam.float()
clam.height = 100
clam.width = 100

// need to make the anchor object
const anchor = new Floater('anchor', 1000, 1000, 100, 100);
anchor.float()
anchor.height = 500
anchor.width = 500

// need to make the anchor object
const snail = new Floater('snail', 800, 800, 10, 10);
snail.float()
snail.height = 100
snail.width = 100

// need to make the anchor object
const danger = new Floater('danger', 400, 400, 10, 10);
// danger.float()
danger.height = 100
danger.width = 100

//  images showing up
const backgroundImage = new Image();
backgroundImage.src = 'images/background.jpg'

const shellImage = new Image();
shellImage.src = 'images/shell.png'

const arielImage = new Image();
arielImage.src = 'images/mermaid.png'

const anchorImage = new Image();
anchorImage.src = 'images/fishing.png'

const clamImage = new Image();
clamImage.src = 'images/clam.png'

const snailImage = new Image();
snailImage.src = 'images/sea-snail.png'

const dangerImage = new Image();
dangerImage.src = 'images/danger.png'

// const hide = () => {
//   shell.x = 200;
//   shell.y = 200;
// }
// function to show & size my images on the screen
const animate = () => {
  c.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);
  if (ariel.x < shell.x + shell.width &&
    ariel.x + ariel.width > shell.x &&
    ariel.y < shell.y + shell.height &&
    ariel.height + ariel.y > shell.y) {
    shell.isVisible = false;
    // alert(`${points} points`);
    console.log("collide with shell");
    points += 10;
    // gameOver = true;
    // ariel.style.display="none";
    // c.shell.remove();
    // shell.splice(i);
  }
  if (ariel.x < anchor.x + anchor.width &&
    ariel.x + ariel.width > anchor.x &&
    ariel.y < anchor.y + anchor.height &&
    ariel.height + ariel.y > anchor.y) {
    // alert(`game over: ${points} points`);
    gameOver = true;
    // console.log("hook!");
    // alert("argh! merbabe got hooked!")
  }
  if (ariel.x < clam.x + clam.width &&
    ariel.x + ariel.width > clam.x &&
    ariel.y < clam.y + clam.height &&
    ariel.height + ariel.y > clam.y) {
    clam.isVisible = false;
    // alert(`${points} points`);
    points += 20;
    console.log("clam");
  }
  if (ariel.x < snail.x + snail.width &&
    ariel.x + ariel.width > snail.x &&
    ariel.y < snail.y + snail.height &&
    ariel.height + ariel.y > snail.y) {
    snail.isVisible = false;
    // alert(`${points} points`);
    points += 5;
    console.log("snail");
    // console.log('snail overlapped');
    // snail.visible = false;
    // snail = null;
    // console.log("snail!");
  }
  c.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

  if (shell.isVisible)
    c.drawImage(shellImage, shell.x, shell.y, 800, 800);

  if (anchor.isVisible)
    c.drawImage(anchorImage, anchor.x, anchor.y, 400, 400);

  if (clam.isVisible)
    c.drawImage(clamImage, clam.x, clam.y, 500, 500);

  if (snail.isVisible)
    c.drawImage(snailImage, snail.x, snail.y, 700, 700);

    if (ariel.isVisible)
      c.drawImage(arielImage, ariel.x, ariel.y, 400, 400);
  // c.drawImage(dangerImage, danger.x, danger.y, 100, 100);

}

/// trying switch case for moving ARIEL
function moveAriel(e) {
  switch (e.which) {
    case 37:
      if (ariel.x - ariel.dx > 0) {
        ariel.x -= ariel.dx;
      }
      // console.log(ariel);
      break;
      // left key pressed
    case 39:
      if (ariel.x + ariel.dx < canvas.width) {
        ariel.x += ariel.dx;
      }
      break;
      // right key pressed
    case 38:
      if (ariel.y - ariel.dy > 0) {
        ariel.y -= ariel.dy;
      }
      break;
      // move up
    case 40:
      if (ariel.y + ariel.dy < canvas.height) {
        ariel.y += ariel.dy;
      }
      break;
      // down key pressed
  }
}

if (!gameOver);
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

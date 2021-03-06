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
// var points = 0;
$('#Ariel').on('click', (e) => {
console.log(ariel);
// startTimer() = true;
});

$('#shells').hide()

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "Hurry Merbabe! You only have " + ":" + seconds + " Seconds!";

        if (--timer < 0) {
          display.textContent = "Did you collect all your shells for your Merbabies?";
          anchor.isVisible = false;
          ariel.isVisible = false;
          danger.isVisible = false;
          alert('try again?');
        }
        // if (ariel.isVisible = false) {
        //   display.textContent = "you got hooked!"
        // }
    }, 1000);

        }

window.onload = function () {
    var halfMinute = 10 * 1,
        display = document.querySelector('#time');
    startTimer(halfMinute, display);
}

//CLASS
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
    if (this.hasBeenMoving > 3) {
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
    }, 50)
  }
}
// float
// need to make the mermaid object
const ariel = new Floater('ariel', 0, 0, 100, 100);
ariel.height = 200
ariel.width = 200
ariel.points = 0

// need to make the shell object
const shell = new Floater('shell', 800, 800, 100, 100);
shell.float()
shell.height = 200
shell.width = 200

// need to make the clam object
const clam = new Floater('clam', 800, 800, 100, 100);
clam.float()
clam.height = 200
clam.width = 200

// need to make the anchor object
const anchor = new Floater('anchor', 800, 800, 100, 100);
anchor.float()
anchor.height = 200
anchor.width = 200

// need to make the snail object
const snail = new Floater('snail', 800, 800, 100, 100);
snail.float()
snail.height = 200
snail.width = 200

// need to make the skull object
const danger = new Floater('danger', 400, 400, 100, 100);
danger.isVisible = false;
danger.float()
danger.height = 20
danger.width = 20

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
    $('shells').show();
    display = document.querySelector('#shells');
    // alert(`${points} points`);
    // console.log("collide with shell");
    // points += 10;
    // gameOver = true;
    // ariel.style.display="none";
    // c.shell.remove();
    // shell.splice(i);
  }
  if (ariel.x < anchor.x + anchor.width &&
    ariel.x + ariel.width > anchor.x &&
    ariel.y < anchor.y + anchor.height &&
    ariel.height + ariel.y > anchor.y) {
    // alert('merbabe got hooked!');
    // reset();
    ariel.isVisible = false;
    anchor.isVisible = false;
    danger.isVisible = true;
    shell.isVisible = false;
    snail.isVisible = false;
    clam.isVisible = false;
    checkEndGame();
    gameOver = true;
    clearTimer();

    // console.log("hook!");
    // alert("argh! merbabe got hooked!")
  }
  if (ariel.x < clam.x + clam.width &&
    ariel.x + ariel.width > clam.x &&
    ariel.y < clam.y + clam.height &&
    ariel.height + ariel.y > clam.y) {
    clam.isVisible = false;
    // alert(`${points} points`);
    // points += 20;
    // console.log("clam");
  }
  if (ariel.x < snail.x + snail.width &&
    ariel.x + ariel.width > snail.x &&
    ariel.y < snail.y + snail.height &&
    ariel.height + ariel.y > snail.y) {
    snail.isVisible = false;
    // alert(`${points} points`);
    // points += 5;
    // console.log("snail");
    // console.log('snail overlapped');
    // snail.visible = false;
    // snail = null;
    // console.log("snail!");
  }
  c.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

  if (shell.isVisible)
    c.drawImage(shellImage, shell.x, shell.y, 300, 300);

  if (anchor.isVisible)
    c.drawImage(anchorImage, anchor.x, anchor.y, 400, 400);

  if (clam.isVisible)
    c.drawImage(clamImage, clam.x, clam.y, 300, 300);

  if (snail.isVisible)
    c.drawImage(snailImage, snail.x, snail.y, 300, 300);

    if (ariel.isVisible)
      c.drawImage(arielImage, ariel.x, ariel.y, 300, 300);

      if (danger.isVisible)
  c.drawImage(dangerImage, danger.x, danger.y, 1000, 1000);
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
// checkEndGame() = {
// if (startTimer < 0)) {
//   console.log("game over");
// }
// //
// };
if (!gameOver);
  // alert("hooked!")
  animate();

document.onkeydown = moveAriel;

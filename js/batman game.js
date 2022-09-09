let box = document.querySelector(".container .main-box .body ");
let arm = document.querySelector(
  ".container .main-box .body .batman .arm-left"
);
let hand = document.querySelector(
  ".container .main-box .body .batman .arm-left .hand"
);
let leftleg = document.querySelector(".container .main-box .body .leg-left");
let rightleg = document.querySelector(".container .main-box .body .leg-right");
let modfires = 1;
let end = "100%";
window.addEventListener("load", function () {
  box.style.position = "absolute";
  box.style.left = "50%";
  box.style.top = "50%";
});

window.addEventListener("keydown", function (ev) {
  switch (ev.keyCode) {
    case 37:
      console.log("left");
      console.log(parseFloat(box.style.left));
      moveleg();
      moveleft();
      break;
    case 38:
      jumping();
      break;
    case 39:
      console.log(parseFloat(box.style.left));
      console.log("right");
      moveright();
      moveleg();
      break;

    case 32:
      fight();
      console.log("space");
  }
});

function moveleft() {
  let left = parseInt(window.getComputedStyle(box).getPropertyValue("left"));
  console.log(left);
  if (left > 30) {
    box.style.left = parseInt(box.style.left) - modfires + "%";
  }
  if (box.classList.contains("move")) {
    box.classList.remove("move");
  }
}
/* move leg*/
function moveleg() {
  leftleg.classList.add("legleftmove");
  rightleg.classList.add("legrightmove");
}
/* un move leg */
window.addEventListener("keyup", function (e) {
  switch (e.keyCode) {
    case 37:
      leftleg.classList.remove("legleftmove");
      rightleg.classList.remove("legrightmove");
      break
    case 39:
      leftleg.classList.remove("legleftmove");
      rightleg.classList.remove("legrightmove");
      break
  }
});
function moveright() {
  let right = parseInt(window.getComputedStyle(box).getPropertyValue("right"));
  console.log(right);
  if (right > -5) {
    box.style.left = parseInt(box.style.left) + modfires + "%";
  }
}

function jumping() {
  box.classList.add("jumping");
}

function fight() {
  arm.classList.add("arm-move");
  hand.classList.add("handmove");
}

window.addEventListener("keyup", function (e) {
  switch (e.keyCode) {
    case 38:
      let timer = this.setTimeout(function () {
        box.classList.remove("jumping");
      }, 1500);
      break;
    case 32:
      let timehand = this.setTimeout(function () {
        arm.classList.remove("arm-move");
        hand.classList.remove("handmove");
      }, 1000);
      
      break;
  }
});

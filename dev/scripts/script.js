// Write your JavaScript here...
const header = document.getElementById("header");
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

const play = document.getElementById("play");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-btn");

const handlePlay = () => {
  popup.style.visibility = "visible";
};

const handleClose = () => {
  popup.style.visibility = "hidden";
};

closeBtn.addEventListener("click", handleClose);
play.addEventListener("click", handlePlay);

const handleClick = (e) => {
  header.classList.toggle("show");
};
menuBtn.addEventListener("click", handleClick);

// Hidden mobile menu changing window size
const mql = window.matchMedia("(min-width: 660px)");

function removeTransition(e) {
  if (e.matches) {
    header.classList.remove("show");
  }
}

mql.addListener(removeTransition);

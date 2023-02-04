// Write your JavaScript here...
const header = document.getElementById("header");
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

const handleClick = (e) => {
  header.classList.toggle("show");
  console.log("clicked!");
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

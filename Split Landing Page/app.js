//1 CharGPT Method
const leftContainer = document.querySelector(".l-container");
const rightContainer = document.querySelector(".r-container");

function handleMouseOver() {
  this.classList.add("active");
}

function handleMouseLeave() {
  this.classList.remove("active");
}

// 1 My Method
// rightContainer.addEventListener("mouseover", handleMouseOver);
// leftContainer.addEventListener("mouseover", handleMouseOver);
// rightContainer.addEventListener("mouseleave", handleMouseLeave);
// leftContainer.addEventListener("mouseleave", handleMouseLeave);

// 2 My Method
const left = document.querySelector(".l-container");
const right = document.querySelector(".r-container");

right.addEventListener("mouseover", () => {
  right.classList.add("active");
});
left.addEventListener("mouseover", () => {
  left.classList.add("active");
});
right.addEventListener("mouseleave", () => {
  right.classList.remove("active");
});
left.addEventListener("mouseleave", () => {
  left.classList.remove("active");
});

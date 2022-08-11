let imageIndex = 0;
let position = 0;
const imageWidth = 270;
const btnPrevious = document.querySelector(".previous");
const btnNext = document.querySelector(".next");
const images = document.querySelector(".images");

function prev() {
  if (imageIndex > 0) {
    btnNext.removeAttribute("disabled");
    position += imageWidth;
    images.style.transform = `translateX(${position}px)`;
    imageIndex--;
  }
  if (imageIndex == 0) {
    btnPrevious.setAttribute("disabled", "true");
  }
}

function next() {
  if (imageIndex < 2) {
    btnPrevious.removeAttribute("disabled");
    position -= imageWidth;
    images.style.transform = `translateX(${position}px)`;
    imageIndex++;
  }
  if (imageIndex == 2) {
    btnNext.setAttribute("disabled", "true");
  }
}

function init() {
  btnPrevious.setAttribute("disabled", "true");
  btnPrevious.addEventListener("click", prev);
  btnNext.addEventListener("click", next);
}

init();

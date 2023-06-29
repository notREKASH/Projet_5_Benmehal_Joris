const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let slideIndex = 0;

const leftArrow = document.getElementById("left_arrow");
const rightArrow = document.getElementById("right_arrow");
const img = document.querySelector(".banner-img");
const tagLine = document.querySelector(".tag");
const dots = document.querySelectorAll(".dot");

function updateImage() {
  img.setAttribute("src", slides[slideIndex].image);
  tagLine.innerHTML = slides[slideIndex].tagLine;
  dots.forEach((dot) => dot.classList.remove("dot_selected"));
  dots[slideIndex].classList.add("dot_selected");
}

leftArrow.addEventListener("click", () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  updateImage();
});

rightArrow.addEventListener("click", () => {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  updateImage();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slideIndex = index;
    updateImage();
  });
});

updateImage();

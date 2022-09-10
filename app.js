const questionAnswer = document.querySelector(".section-faq-question-image");

const questionAnswer2 = document.querySelector(".section-faq-question-answer");

questionAnswer.addEventListener("click", (e) => {
  questionAnswer2.classList.toggle("active");
});

let comment = document.querySelectorAll(".section-third-commnet");

let dots = document.querySelectorAll(".dot");

window.addEventListener("resize", () => {
  if (window.innerWidth > 416) {
    for (let i = 0; i < comment.length; i++) {
      comment[i].style.display = "block";
    }
  } else {
    for (let i = 0; i < comment.length; i++) {
        comment[i].style.display = "none";
      }
  }
  if (window.innerWidth <= 415) {
    comment[0].style.display = "block";
  }
});

dots[0].classList.add("active-dot");

comment[0].style.display = "block";

dots.forEach((dot, index) => {
  dot.addEventListener("click", (e) => {
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active-dot");
    }
    dot.classList.add("active-dot");
    for (let i = 0; i < comment.length; i++) {
      comment[i].style.display = "none";
    }
    comment[index].style.display = "block";
  });
});

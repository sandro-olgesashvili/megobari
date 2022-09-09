const questionAnswer = document.querySelector('.section-faq-question-image')

const questionAnswer2 = document.querySelector('.section-faq-question-answer')

questionAnswer.addEventListener('click', (e) => {
    questionAnswer2.classList.toggle('active')
})
const rightBut = document.querySelector('.right')
const leftBut = document.querySelector('.left')
const slides = document.querySelector('.slides')
const dots = document.querySelectorAll('.dot')
const activeDot = document.querySelector('.active')

// Some Var(s) 
let right = 0
slides.style.right = 0
let currentSlide = 0;

activeDot.style.left = dots[currentSlide + 1].offsetLeft + 'px'

// Slide's Right Click
rightBut.addEventListener('click', (e) => {
    currentSlide++
    right += 80
    slides.style.right = `${right}vw`
    if (right === 320) {
        slides.style.right = 0
        right = 0
        currentSlide = 0
    }
    // Slide's Buttons
    activeDot.style.left = dots[currentSlide + 1].offsetLeft + 'px'
})
// Slide's Left Click
leftBut.addEventListener('click', () => {
    if (right === 0) {
        slides.style.right = 320
        right = 320
        currentSlide = 4
    }
    currentSlide--
    right -= 80
    slides.style.right = `${right}vw`
    // Slide's Buttons
    activeDot.style.left = dots[currentSlide + 1].offsetLeft + 'px'
})
const rightBut = document.querySelector('.right')
const leftBut = document.querySelector('.left')
const slides = document.querySelector('.slides')
const dots = document.querySelectorAll('.dot')
const activeDot = document.querySelector('.active')

// Some Var(s) 
let right = 0
let currentSlide = 0;


// Reset slides
slides.style.right = 0
activeDot.style.left = dots[currentSlide + 1].offsetLeft + 'px'

// Dot's Click Event
dots.forEach(dot => dot.addEventListener('click', () => {
    const index = dot.dataset.index
    right = 80 * index
    currentSlide = +index
    slides.style.right = `${right}vw`
    activeDot.style.left = dots[currentSlide + 1].offsetLeft + 'px'
}))

const swapRight = () => {
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
}
const swapLeft = () => {
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
}

// Add timer to change slide
setInterval(() => swapRight(), 2000);

// Button's Click Events
rightBut.addEventListener('click', () => swapRight())
leftBut.addEventListener('click', () => swapLeft())

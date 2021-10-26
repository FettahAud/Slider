const rightBut = document.querySelector('.right')
const leftBut = document.querySelector('.left')
const slides = document.querySelector('.slides')

console.log(rightBut)
let right = 0
slides.style.right = 0
rightBut.addEventListener('click', () => {
    right += 80
    slides.style.right = `${right}vw`
    if (right === 320) {
        slides.style.right = 0
        right = 0
    }
})
leftBut.addEventListener('click', () => {
    if (right === 0) {
        slides.style.right = 320
        right = 320
    }
    right -= 80
    slides.style.right = `${right}vw`
})
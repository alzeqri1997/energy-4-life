const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')

gsap.from(img1, {
  opacity: 0,
  x: 100,
  duration:1
} )
gsap.from(img2, {
  opacity: 0,
  x: -100,
  duration:1
} )
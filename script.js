const select = (item) => document.querySelector(item);

const activeButton = select('.active');
const onButton = select('.on');
const offButton = select('.off');
const navMobile = select('.nav');
const header = select('.header');
const menuIcon = select('.menu-btn');
const closeIcon = select('.close-icon');
const menuBtn = select('.menu-btn');



function menuClick () {
  menuBtn.addEventListener("click", () => {
    header.classList.add('fixed-position')
    navMobile.classList.add('fixed-position')
    header.classList.toggle("shown");
    console.log(select('.menu-icon').dataset.isMenuOpen)
  })
}

menuClick()


function turnMusic(value) {
  if (value === 1) {
    activeButton.style.transform = 'translateX(-100px)' 
    onButton.style.color = '#fff'
    offButton.style.color = '#423F44'
  } else {
    activeButton.style.transform = 'none'
    onButton.style.color = '#423F44'
    offButton.style.color = '#fff'
  }
}

// Swiper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    bulletActiveClass: "swiper-active",
    bulletClass: 'swiper-pagination-dots',
    horizontalClass:"swiper-pagination-dots-horizontal"
  },
});

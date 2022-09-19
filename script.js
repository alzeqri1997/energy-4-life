const activeButton = document.querySelector('.active');
const onButton = document.querySelector('.on');
const offButton = document.querySelector('.off');


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
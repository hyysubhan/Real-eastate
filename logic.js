// mobile header
let icon = document.querySelector('.mobileheadr');
let menu = document.querySelector('.pages');
let menuopen = false;

icon.addEventListener('click', () => {
    if (!menuopen) {
        menu.style.display = "block";
        menuopen = true;
    } else {
        menu.style.display = "none";
        menuopen = false;
    }
});
// for slide herosection
let currentslide = 0;
let slides = document.querySelectorAll('.imgs .slide');
const totalslides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    changeslide(currentslide + 1);
    console.log("next is clicked");
});

document.querySelector('.prev').addEventListener('click', () => {
    changeslide(currentslide - 1);
    console.log("prev is clicked");
});

function changeslide(index) {
    slides[currentslide].classList.remove('active');
    currentslide = (index + totalslides) % totalslides; // loop back
    slides[currentslide].classList.add('active');
}
setInterval( () =>{
      changeslide(currentslide + 1);
}, 5000);
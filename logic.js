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

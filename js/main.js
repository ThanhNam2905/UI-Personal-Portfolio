
let menuBarBtn = document.querySelector("#menu-bar");
let headerEle = document.querySelector(".header");
let themeTogglerBtn = document.querySelector("#theme-toggler");
let scrollToTopBtn =document.querySelector("#scroll-top");

// Menu bars 
menuBarBtn.onclick = () => {
    menuBarBtn.classList.toggle("fa-times");
    headerEle.classList.toggle("active");
}

// Theme Change Color
themeTogglerBtn.onclick = () => {
    themeTogglerBtn.classList.toggle("fa-sun");
    if(themeTogglerBtn.classList.contains("fa-sun")) {
        document.body.classList.add("active");
    }
    else {
        document.body.classList.remove("active");
    }
}

// Scroll to top
scrollToTopBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
window.onscroll = () => {
    if(scrollY > 200) {
        scrollToTopBtn.classList.add("active");
    }
    else {
        scrollToTopBtn.classList.remove("active");
    }
}
// Loading Page
function loading() {
    document.querySelector("#loading-page").classList.add('active');
}
function fadeOut() {
    setInterval(loading, 3500);
}
window.onload = fadeOut();
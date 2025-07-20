// Initialize Swiper only once
const swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove: false,
    grabCursor: false,
    mousewheel: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    }
});

// Optional: custom handler (not built-in in Swiper)
swiper.on('slideChange', () => {
    console.log('Current slide index:', swiper.activeIndex);
});

// Optimized Navigate function
const navLinks = document.querySelectorAll(".Links li");

function Navigate(index) {
    navLinks.forEach(link => link.classList.remove("activeLink"));
    if (navLinks[index]) {
        navLinks[index].classList.add("activeLink");
        swiper.slideTo(index, 1000);
    }
}

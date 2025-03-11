document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".swiper-slide");
    let index = 0;

    function showSlide() {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? "1" : "0";
        });
        index = (index + 1) % slides.length;
    }

    showSlide();
    setInterval(showSlide, 3000);
});

var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    slidesPerView: 1
});
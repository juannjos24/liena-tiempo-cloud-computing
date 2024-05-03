var timelineSwiper = new Swiper(".timeline .swiper-container", {
    direction: "vertical",
    loop: false,
    speed: 1600,
    pagination: {
        el: ".swiper-pagination",
        clickable: true, // Permite hacer clic en los puntos de paginación para ir a una fecha específica
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            direction: "horizontal"
        }
    }
});

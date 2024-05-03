document.getElementById("start-button").onclick = function () {
    document.getElementById("start-container").style.display = "none"; // Ocultar el contenedor de inicio
    document.querySelector(".container").style.filter = "none"; // Quitar el desenfoque
};

var timelineSwiper = new Swiper(".timeline .swiper-container", {
    direction: "vertical",
    loop: false,
    speed: 1600,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            direction: "horizontal",
        },
    },
});
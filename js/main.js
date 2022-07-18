// Owl Carousel

$(document).ready(function() {
    $(".owl-carousel").owlCarousel();
});

var owl = $('.owl-carousel');

owl.owlCarousel({
    center: true,
    loop: true,
    margin: 20,
    items: 1,
    responsive: {
        540: {
            items: 3,
        },
        1200: {
            items: 3,
            margin: 30,
        },
    }
});

$('.slider__btn--prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})

$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})

// Nav Icon

const navBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');

navBtn.onclick = function() {
    menuIcon.classList.toggle('menu-icon-active');
    nav.classList.toggle('nav--mobile');
    document.body.classList.toggle('no-scroll');
}
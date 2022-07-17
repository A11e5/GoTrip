// Owl Carousel

$(document).ready(function() {
    $(".owl-carousel").owlCarousel();
});

var owl = $('.owl-carousel');

owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    items: 3,
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

navBtn.onclick = function() {
    menuIcon.classList.toggle('menu-icon-active');
}
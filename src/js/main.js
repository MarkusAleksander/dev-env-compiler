import safeLoop from "./../modules/safeLoop.js";

if (!$.fn.andSelf) {
    $.fn.andSelf = function() {
        return this.addBack.apply(this, arguments);
    };
}
const carousels = document.querySelectorAll(".carousel.owl-carousel");

const owlOptions = {
    items: 2,
    nav: true,
    dots: true,
    loop: true,
    touchDrag: true,
    mouseDrag: true,
    responsive: {
        768: {
            items: 4,
            nav: false,
            dots: false,
            loop: false,
            touchDrag: false,
            mouseDrag: false,
        },
    },
};

safeLoop(carousels, (idx, carousel) => {
    $(carousel).owlCarousel(owlOptions);
});

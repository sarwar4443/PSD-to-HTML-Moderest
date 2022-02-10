/* OwlCarousel */
$(document).ready(function(){
    $(".header_area__main2nd").owlCarousel({
        items: 1,
        smartSpeed: 800,
        nav: true,
        navText: ["<img src='img/arleftt.png'>","<img src='img/arright.png'>"],
        loop: true,
    });
})
$(document).ready(function(){
    $(".header_area__main2ndforphone").owlCarousel({
        items: 1,
        smartSpeed: 800,
    });
})
/* Slicknav */
$(document).ready(function(){
    $(".header_area__right").slicknav({
        "prependTo": '.header_area__right',
    });
})
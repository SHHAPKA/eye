$('.menu__burger').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu__burger__active');
    $('.menu__burger__nav').toggleClass('menu__burger__nav__active');
});

$('.icon__search').on('click', function(e) {
    e.preventDefault;
    $('.search__input').toggleClass('search__input__active');
    $('.icon__search').toggleClass('icon__search__active');
    $('.icon__cross').toggleClass('icon__cross__active');
});

$('.icon__cross').on('click', function(e) {
    e.preventDefault;
    $('.search__input').toggleClass('search__input__active');
    $('.icon__search').toggleClass('icon__search__active');
    $('.icon__cross').toggleClass('icon__cross__active');
});

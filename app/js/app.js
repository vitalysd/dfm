
//BURGER-MENU

const burgerTab = document.querySelector('.burger');
const closeTab = document.querySelector('.close');

const menu = document.querySelector('.header-nav__menu');
const navLink = document.querySelectorAll('.header-nav__link');

burgerTab.addEventListener('click', () => {
    menu.classList.toggle('open');
});

closeTab.addEventListener('click', () => {
    menu.classList.toggle('open');
});

function linkAction() {
    menu.classList.remove('open');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

//SWIPER
import { Swiper, Mousewheel, Navigation, Thumbs, EffectFade, EffectFlip, } from 'swiper';

Swiper.use([ Mousewheel, Navigation, Thumbs, EffectFade, EffectFlip, ]);

const navSlider = new Swiper('.production-slider__nav', {
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: true,
    speed: 1500,
});

const introSlider = new Swiper('.production-slider__wrapper', {
    
    speed: 1500,
    mousewheel: {
        invert: false,
    },
    
    navigation: {
        nextEl: '.production-slider__btn-next',
        prevEl: '.production-slider__btn-prev'
    },
    thumbs: {
        swiper: navSlider,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});


const printSlider = new Swiper('.printing-slider', {
    spaceBetween: 5,
    speed: 1500,
    loop: true,
    effect: 'flip',

    navigation: {
        nextEl: '.printing-slider__btn-next',
        prevEl: '.printing-slider__btn-prev'
    },
});

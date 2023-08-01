const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open')
});

const swiperOne = new Swiper('.feedback__slider', {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
  
    pagination: {
      el: '.swiper-pagination',
    },      
});

const swiperTwo = new Swiper('.certificates__slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },  
    pagination: {
      el: '.swiper-pagination',
    },  
    breakpoints: {
        360: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
    },  
});
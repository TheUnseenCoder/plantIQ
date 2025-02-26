var swiper = new Swiper(".slide-content",{
    slidesPerView: 8,
    spaceBetween: 10,
    loop: true,
    centeredSlides: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2000,
      },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 7,
        },
    },
  });
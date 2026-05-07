const swiper = new Swiper('.swiper', {
  slidesPerView: 1.265,
  spaceBetween: 20,
  slidesOffsetBefore: 10,
  loop: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
//   },
  pagination: {
    el: ".swiper-pagination",
  }
});
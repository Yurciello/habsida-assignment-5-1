// const elements = document.querySelectorAll(".hidden-on-tablets");

//     elements.forEach(element => {
//         element.style.setProperty("display", "none", "important");
//     });

const button = document.getElementById('moreButton');
button.addEventListener('click', () => {
  
  const elements = document.querySelectorAll('.hidden-on-tablets');
    document.getElementById('moreButtonLabel').textContent = 'Показать меньше';
    
    elements.forEach(element => {
      element.style.setProperty
      ("display", "flex", "important");
    });
  const img = document.getElementById('moreButtonIcon');
  img.src = "icons/less-button.svg";
});

// const button = document.getElementById("moreButton");
// const content = document.querySelectorAll(".hidden-on-tablets");

// button.addEventListener("click", () => {
//   content.classList.toggle("hidden-on-tablets");

//   if (content.classList.toggle("hidden-on-tablets")) {
//     button.textContent = "Показать ещё";
//   } else {
//     button.textContent = "Скрыть";
//   }
// });

// создаём переменную для свайпера с пустым значением
let swiper = null;

// создаём функцию
function initSwiper() {
// условие если размер окна менее 768 пикселей
  if (window.innerWidth < 768 && !swiper) {

    // обычный скрипт для свайпера
    swiper = new Swiper('.swiper', {
      slidesPerView: 1.265,
      spaceBetween: 20,
      slidesOffsetBefore: 10,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      }
    });

    // условие если размер окна больше или равно 768 пикселей и свайпер уже существует/создан
  } else if (window.innerWidth >= 768 && swiper) {
    // уничтожить свайпер
    swiper.destroy(true, true);
    // вернуть переменную swiper к исходному значению
    swiper = null;
  }
}

// Запуск при загрузке
initSwiper();

// Запуск при изменении размера
window.addEventListener('resize', initSwiper);


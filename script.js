
function initTabletWindow () {
if (
  window.innerWidth >= 768 &&
  window.innerWidth <= 1119
) {
  const button = document.getElementById("moreButtonTablet");

  button.addEventListener("click", () => {
    const moreButtonTabletLabel = document.getElementById("moreButtonTabletLabel");
    const elements = document.querySelectorAll(".hidden-on-tablets");
    const img = document.getElementById("moreButtonTabletIcon");

    console.log(moreButtonTabletLabel);

    if (moreButtonTabletLabel.textContent == "Показать ещё") {
      moreButtonTabletLabel.textContent = "Скрыть";
      img.src = "icons/less-button.svg";

      elements.forEach((element) => {
        element.style.setProperty("display", "flex", "important");
      });
    } else {
      moreButtonTabletLabel.textContent = "Показать ещё";
      img.src = "icons/more-button.svg";

      elements.forEach((element) => {
        element.style.setProperty("display", "none", "important");
      });
    }
  });
}
}


if (
  window.innerWidth >= 768 && window.innerWidth <=1119
) {
  initTabletWindow ();
}

window.addEventListener("resize", initTabletWindow);



function initPCWindow () {

if (window.innerWidth >= 1120) {
  const button = document.getElementById("moreButtonPC");

  button.addEventListener("click", () => {
    const moreButtonPCLabel = document.getElementById("moreButtonPCLabel");
    const elements = document.querySelectorAll(".hidden-on-pc");
    const img = document.getElementById("moreButtonPCIcon");

    console.log(moreButtonPCLabel);

    if (moreButtonPCLabel.textContent == "Показать ещё") {
      moreButtonPCLabel.textContent = "Скрыть";
      img.src = "icons/less-button.svg";

      elements.forEach((element) => {
        element.style.setProperty("display", "flex", "important");
      });
    } else {
      moreButtonPCLabel.textContent = "Показать ещё";
      img.src = "icons/more-button.svg";

      elements.forEach((element) => {
        element.style.setProperty("display", "none", "important");
      });
    }
  });
}
}

if (window.innerWidth >= 1120) {
  initPCWindow ();
}

window.addEventListener("resize", initPCWindow);



console.log(window.innerWidth);

// создаём переменную для свайпера с пустым значением
let swiper = null;

// создаём функцию
function initSwiper() {
  // условие если размер окна менее 768 пикселей
  if (window.innerWidth < 768 && !swiper) {
    // обычный скрипт для свайпера
    swiper = new Swiper(".swiper", {
      slidesPerView: 1.265,
      spaceBetween: 20,
      slidesOffsetBefore: 10,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
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
if (window.innerWidth < 768 && !swiper) {
initSwiper();
}

// Запуск при изменении размера
window.addEventListener("resize", initSwiper);
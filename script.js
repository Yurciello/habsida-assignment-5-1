
// Функции для кнопки созданы по образу и подобию свайпера (см. ниже).
let tabletWindow = null;

function initTabletWindow() {
  if (window.innerWidth >= 768 && window.innerWidth <= 1119 && !tabletWindow) {
    const button = document.getElementById("moreButton");
    button.addEventListener("click", () => {
      const moreButtonLabel = document.getElementById(
        "moreButtonLabel",
      );
      const elements1 = document.querySelectorAll(".hidden-on-tablets");
      const img = document.getElementById("moreButtonIcon");

      console.log(moreButtonLabel);

      if (moreButtonLabel.textContent == "Показать ещё") {
        moreButtonLabel.textContent = "Скрыть";
        img.src = "icons/less-button.svg";

        elements1.forEach((element) => {
          element.style.setProperty("display", "flex", "important");
        });
        } else {
        moreButtonLabel.textContent = "Показать ещё";
        img.src = "icons/more-button.svg";

        elements1.forEach((element) => {
          element.style.setProperty("display", "none", "important");
        });
      }
    });

  } else if (window.innerWidth < 768 && window.innerWidth > 1119 && tabletWindow) {
    tabletWindow.destroy(true, true);
    tabletWindow = null;
  }
}


let PCWindow = null;

function initPCWindow() {
  if (window.innerWidth >= 1120 && !PCWindow) {
    const button = document.getElementById("moreButton");
    button.addEventListener("click", () => {
      const moreButtonLabel = document.getElementById("moreButtonLabel");
      const elements2 = document.querySelectorAll(".hidden-on-pc");
      const img = document.getElementById("moreButtonIcon");

      console.log(moreButtonLabel);

      if (moreButtonLabel.textContent == "Показать ещё") {
        moreButtonLabel.textContent = "Скрыть";
        img.src = "icons/less-button.svg";

        elements2.forEach((element) => {
          element.style.setProperty("display", "flex", "important");
        });
      } else {
        moreButtonLabel.textContent = "Показать ещё";
        img.src = "icons/more-button.svg";

        elements2.forEach((element) => {
          element.style.setProperty("display", "none", "important");
        });
      }
    });
  } else if (window.innerWidth < 1119 && PCWindow) {
    PCWindow.destroy(true, true);
    PCWindow = null;
  }
}



console.log(window.innerWidth);

// создаём переменную для свайпера с пустым значением
let swiper = null;

// создаём функцию
function initSwiper() {
  // условие если размер окна менее 768 пикселей
  if (window.innerWidth < 768 && !swiper) {
    // обычный скрипт для свайпера
    swiper = new Swiper(".swiper", {
      slidesPerView: "auto",
      spaceBetween: 20,
      slidesOffsetBefore: 10,
      loop: true,
      watchSlidesProgress: true,
      watchOverflow: false,
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true
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
window.addEventListener("resize", () => {
  initSwiper();
  initTabletWindow();
  initPCWindow();
});


//Решил применить небольшой трюк: Страница делает перезагрухку каждый раз, когда размер окна пересекает заданные размеры окна. Кажется так оно работает немного более стабильно

  function getScreenType() {
    const width = window.innerWidth;

    if (width < 768) {
      return 'mobile';
    } else if (width < 1120) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }

  let currentType = getScreenType();

  window.addEventListener('resize', () => {
    const newType = getScreenType();

    if (newType !== currentType) {
      location.reload();
    }

    currentType = newType;
  });
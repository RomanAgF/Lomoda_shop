const headerCityButton = document.querySelector(".header__city-button");

headerCityButton.addEventListener("click", () => {
  //навешиваем событие при клике
  const city = prompt("Укажите ваш город");
  headerCityButton.textContent = city; // перезаписываем текст
  localStorage.setItem("lomoda-location", city); //сохраняем в локалсторадж ключ-значение в локал сторадж попадет выбранный город и охранится
});

//блокировка скролл страницы
const disableScroll = () => {
  const widthScroll = window.innerWidth - document.body.offsetWidth; // innerwidth весь документ от левая края до правого а offsewdth от левого края до правго без скролла = scroll
  document.body.dbScrollY = window.scrollY; // убираем скролл при открытии корзины
  document.body.style.cssText = `
  position: fixed;
  top: ${-window.scrollY}px;
  left:0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding-right: ${widthScroll}px;
  `;
};

const enableScroll = () => {
  document.body.style.cssText = "";
  window.scroll({
    top: document.body.dbScrollY, // убираем скролл после закрытия
  });
};

//получаем элемент с страницы - модальное окно, работа с классами в css

const subheaderCart = document.querySelector(".subheader__cart");
const cartOverlay = document.querySelector(".cart-overlay");

const cartModalOpen = () => {
  cartOverlay.classList.add("cart-overlay-open");
  disableScroll();
};
const cartModalCLose = () => {
  cartOverlay.classList.remove("cart-overlay-open");
  enableScroll();
};
subheaderCart.addEventListener("click", cartModalOpen);

cartOverlay.addEventListener("click", (event) => {
  // логика закрытия корзины при нажатии крестика
  const target = event.target;
  if (target.matches(".cart__btn-close") || target.matches(".cart-overlay")) {
    cartModalCLose();
  }
}); // пишем тут event так как нужно определить к каому обьекту обращаемся

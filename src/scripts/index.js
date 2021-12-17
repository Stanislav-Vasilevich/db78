const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const point = document.querySelector('.menu__close');
const iconCart = document.querySelector('.icon__cart');

// открыть мобильное меню
hamburger.addEventListener('click', () => {
  menu.classList.add('menu_active');
});

// закрыть мобильное меню
point.addEventListener('click', () => {
  menu.classList.remove('menu_active');
});

// меняю иконку корзины по нажатию
iconCart.addEventListener('click', () => {
  // получаю src иконки
  const icon = iconCart.querySelector('img');

  if(!icon.classList.contains('cart')) {
    icon.setAttribute('src', './../img/icons/cart-full.png');
    icon.classList.add('cart');
  } else {
    icon.classList.remove('cart');
    icon.setAttribute('src', './../img/icons/cart.png');
  }
});
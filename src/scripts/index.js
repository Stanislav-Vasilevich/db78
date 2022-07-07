const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu__item');
const hamburger = document.querySelector('.header__hamburger');
const menuClose = document.querySelector('.menu__close');
const iconCart = document.querySelector('.icon__cart');
const numIconCart = iconCart.querySelector('span');
const iconWhatsApp = document.querySelector('.icon__whatsapp');
const whatsAppText = iconWhatsApp.querySelector('.icon__whatsapp-link');
const points = document.querySelectorAll('.points__item');
const goodsNames = document.querySelectorAll('.goods__name');
const first = document.querySelector('.first');
const goods = document.querySelector('.goods');

// открыть мобильное меню
hamburger.addEventListener('click', () => {
  menu.classList.add('menu_active');
});

// закрыть мобильное меню
menuClose.addEventListener('click', () => {
  menu.classList.remove('menu_active');
});

// закрыть мобильное меню
menuItem.forEach(i => {
  i.addEventListener('click', () => {
    menu.classList.remove('menu_active');
  });
});

// меняю иконку корзины по нажатию
iconCart.addEventListener('click', () => {
  // получаю src иконки
  const icon = iconCart.querySelector('img');

  // корзина полная с цифрой или пустая
  if (!icon.classList.contains('cart')) {
    icon.setAttribute('src', './../img/icons/cart-full.png');
    icon.classList.add('cart');
    iconCart.classList.add('icon__cart_active');
    numIconCart.style.display = 'block';
  } else {
    icon.classList.remove('cart');
    icon.setAttribute('src', './../img/icons/cart.png');
    iconCart.classList.remove('icon__cart_active');
    numIconCart.style.display = 'none';
  }
});

// открыть WhatsApp
iconWhatsApp.addEventListener('click', () => {
  whatsAppText.classList.toggle('icon__whatsapp-link_active');
})

// поставить point
points.forEach((i) => {
  i.addEventListener('click', () => {
    points.forEach(p => p.classList.remove('active'));
    i.classList.add('active');
  });
});

// поставить активный класс при клике на доборный элемент во второй секции на главной
goodsNames.forEach((i) => {
  i.addEventListener('click', () => {
    goodsNames.forEach(p => p.classList.remove('goods__name_active'));
    i.classList.add('goods__name_active');
  });
});

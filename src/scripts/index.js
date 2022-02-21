const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const point = document.querySelector('.menu__close');
const iconCart = document.querySelector('.icon__cart');
const numIconCart = iconCart.querySelector('span');
const iconWhatsApp = document.querySelector('.icon__whatsapp');
const whatsAppText = iconWhatsApp.querySelector('.whatsapp');
const points = document.querySelectorAll('.point');
const goodsNames = document.querySelectorAll('.goods__name');
const first = document.querySelector('.first');
const goods = document.querySelector('.goods');

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
  whatsAppText.classList.toggle('whatsapp_active');
})

// поставить point
points.forEach((i) => {
  i.addEventListener('click', () => {
    points.forEach(p => p.classList.remove('active'));
    i.classList.add('active');
  })
});

// поставить goodsNames
goodsNames.forEach((i) => {
  i.addEventListener('click', () => {
    goodsNames.forEach(p => p.classList.remove('goods__name_active'));
    i.classList.add('goods__name_active');
  })
});

// скролл сайта и изменение points
window.addEventListener('scroll', () => {
  if(window.scrollY > 790)
  console.log('hello');
})
// установить динамически аттрибут href для первой секции
buttonTop.setAttribute('href', `#${idFirstSection}`);

// отслеживать scroll для кнопки наверх
document.addEventListener('scroll', trackScroll);

function trackScroll() {
  let scrolled = window.pageYOffset;
  let coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    buttonTop.classList.remove('top_hidden');
  }
  if (scrolled < coords) {
    buttonTop.classList.add('top_hidden');
  }
}

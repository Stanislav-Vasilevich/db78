const galvanization = document.querySelector('#galvanization');
const buttonTop = document.querySelector('.top');

const options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
}
const callback = function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      buttonTop.classList.toggle('top_hidden');
    }
  })
};
const observer = new IntersectionObserver(callback, options);
observer.observe(galvanization);

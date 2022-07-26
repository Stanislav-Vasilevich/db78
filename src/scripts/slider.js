const sliderOne = document.querySelector('.slider_one');
const sliderTwo = document.querySelector('.slider_two');
const itemSlideOne = document.querySelector('.goods__item-1');
const itemSlideTwo = document.querySelector('.goods__item-2');
const sliderImages = [
  '<img src="./img/goods/goods-1.jpg" alt="">',
  '<img src="./img/goods/goods-2.jpg" alt="">',
  '<img src="./img/goods/goods-3.jpg" alt="">',
  '<img src="./img/goods/goods-4.jpg" alt="">',
  '<img src="./img/goods/goods-5.jpg" alt="">',
  '<img src="./img/goods/goods-6.jpg" alt="">',
];
const sliderImages2 = [
  '<img src="./img/goods/goods-4.jpg" alt="">',
  '<img src="./img/goods/goods-5.jpg" alt="">',
  '<img src="./img/goods/goods-1.jpg" alt="">',
  '<img src="./img/goods/goods-3.jpg" alt="">',
];

// подставляю данные в слайдер
sliderOne.innerHTML = sliderImages.join(' ');
sliderTwo.innerHTML = sliderImages2.join(' ');

let start = 1;
let start2 = 1;
const count = 430;

const nextVerticalSlide = (start, slider) => {
  if(start === 1) {
    slider.style.transform = `translateY(0px)`;
  } else if(start === 2) {
    slider.style.transform = `translateY(-${count}px)`;
  } else if(start === 3) {
    slider.style.transform = `translateY(-${count * 2}px)`;
  } else if(start === 4) {
    slider.style.transform = `translateY(-${count * 3}px)`;
  } else if(start === 5) {
    slider.style.transform = `translateY(-${count * 4}px)`;
  } else if(start === 6) {
    slider.style.transform = `translateY(-${count * 5}px)`;
  } else {
    slider.style.transform = `translateY(0px)`;
  }
}

const randomStart = (arrImg) => {
  // случайное число 0 или 1
  function randomTrueOrFalse(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  // меняем число
  if(start === 1) {
    ++start;
  } else if(start === arrImg.length) {
    --start;
  } else {
    const trueOrFalse = randomTrueOrFalse(0, 1);
    if(trueOrFalse === 0) {
      --start;
    } else {
      ++start;
    }
  }

  return start;
}

// console.log('randomNumber: ', randomNumber);

// setInterval(() => {
//   let randomNumber = randomStart(start, sliderImages)
//   console.log(randomStart(start, sliderImages));
//   nextVerticalSlide(randomNumber, sliderOne);
//   nextVerticalSlide(randomNumber, sliderTwo);
// }, 3000);

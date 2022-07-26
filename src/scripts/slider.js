const sliderOne = document.querySelector('.slider_one');
const sliderTwo = document.querySelector('.slider_two');
const sliderThree = document.querySelector('.slider_three');
const sliderFour = document.querySelector('.slider_four');
const sliderFive = document.querySelector('.slider_five');
const sliderSix = document.querySelector('.slider_six');
const itemSlideOne = document.querySelector('.goods__item-1');
const itemSlideTwo = document.querySelector('.goods__item-2');
const sliderImages = [
  '<img src="./img/goods/1.jpg" alt="">',
  '<img src="./img/goods/2.jpg" alt="">',
  '<img src="./img/goods/3.jpg" alt="">',
  '<img src="./img/goods/4.jpg" alt="">',
  '<img src="./img/goods/5.jpg" alt="">',
  '<img src="./img/goods/6.jpg" alt="">',
];
const sliderImages2 = [
  '<img src="./img/goods/7.jpg" alt="">',
  '<img src="./img/goods/8.jpg" alt="">',
  '<img src="./img/goods/9.jpg" alt="">',
  '<img src="./img/goods/10.jpg" alt="">',
  '<img src="./img/goods/11.jpg" alt="">',
  '<img src="./img/goods/12.jpg" alt="">',
];
const sliderImages3 = [
  '<img src="./img/goods/13.jpg" alt="">',
  '<img src="./img/goods/14.jpg" alt="">',
  '<img src="./img/goods/15.jpg" alt="">',
  '<img src="./img/goods/16.jpg" alt="">',
  '<img src="./img/goods/17.jpg" alt="">',
  '<img src="./img/goods/18.jpg" alt="">',
];
const sliderImages4 = [
  '<img src="./img/goods/19.jpg" alt="">',
  '<img src="./img/goods/20.jpg" alt="">',
  '<img src="./img/goods/21.jpg" alt="">',
  '<img src="./img/goods/22.jpg" alt="">',
  '<img src="./img/goods/23.jpg" alt="">',
  '<img src="./img/goods/24.jpg" alt="">',
];
const sliderImages5 = [
  '<img src="./img/goods/25.jpg" alt="">',
  '<img src="./img/goods/26.jpg" alt="">',
  '<img src="./img/goods/27.jpg" alt="">',
  '<img src="./img/goods/28.jpg" alt="">',
  '<img src="./img/goods/29.jpg" alt="">',
  '<img src="./img/goods/30.jpg" alt="">',
];
const sliderImages6 = [
  '<img src="./img/goods/31.jpg" alt="">',
  '<img src="./img/goods/32.jpg" alt="">',
  '<img src="./img/goods/33.jpg" alt="">',
  '<img src="./img/goods/34.jpg" alt="">',
  '<img src="./img/goods/35.jpg" alt="">',
  '<img src="./img/goods/36.jpg" alt="">',
];


// подставляю данные в слайдер
sliderOne.innerHTML = sliderImages.join(' ');
sliderTwo.innerHTML = sliderImages2.join(' ');
sliderThree.innerHTML = sliderImages3.join(' ');
sliderFour.innerHTML = sliderImages4.join(' ');
sliderFive.innerHTML = sliderImages5.join(' ');
sliderSix.innerHTML = sliderImages6.join(' ');

let start = 1;
let start2 = 1;
let start3 = 1;
let start4 = 1;
let start5 = 1;
let start6 = 1;
const count = 430;

const nextVerticalSlide = (number, slider) => {
  if(number === 1) {
    slider.style.transform = `translateY(0px)`;
  } else if(number === 2) {
    slider.style.transform = `translateY(-${count}px)`;
  } else if(number === 3) {
    slider.style.transform = `translateY(-${count * 2}px)`;
  } else if(number === 4) {
    slider.style.transform = `translateY(-${count * 3}px)`;
  } else if(number === 5) {
    slider.style.transform = `translateY(-${count * 4}px)`;
  } else if(number === 6) {
    slider.style.transform = `translateY(-${count * 5}px)`;
  } else {
    slider.style.transform = `translateY(0px)`;
  }
}

// случайное число 0 или 1
function randomTrueOrFalse(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const changeSlideItem = (num, arrImg) => {
  // меняем число
  if(num === 1) {
    ++num;
  } else if(num === arrImg.length) {
    --num;
  } else {
    const trueOrFalse = randomTrueOrFalse(0, 1);
    if(trueOrFalse === 0) {
      --num;
    } else {
      ++num;
    }
  }
  return num;
}

setInterval(() => {
  let randomNumber = changeSlideItem(start, sliderImages);
  start = randomNumber;
  nextVerticalSlide(randomNumber, sliderOne);
}, 3000);

setInterval(() => {
  let randomNumber2 = changeSlideItem(start2, sliderImages2);
  start2 = randomNumber2;
  nextVerticalSlide(randomNumber2, sliderTwo);
}, 4000);

setInterval(() => {
  let randomNumber3 = changeSlideItem(start3, sliderImages3);
  start3 = randomNumber3;
  nextVerticalSlide(randomNumber3, sliderThree);
}, 5000);

setInterval(() => {
  let randomNumber4 = changeSlideItem(start4, sliderImages4);
  start4 = randomNumber4;
  nextVerticalSlide(randomNumber4, sliderFour);
}, 6000);

setInterval(() => {
  let randomNumber5 = changeSlideItem(start5, sliderImages5);
  start5 = randomNumber5;
  nextVerticalSlide(randomNumber5, sliderFive);
}, 7000);

setInterval(() => {
  let randomNumber6 = changeSlideItem(start6, sliderImages6);
  start6 = randomNumber6;
  nextVerticalSlide(randomNumber6, sliderSix);
}, 8000);

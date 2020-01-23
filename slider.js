/*1)находим две кнопки по классу (управляющие элементы)*/
var showPrevBtn = document.querySelector('.show-prev-btn');
var showNextBtn = document.querySelector('.show-next-btn');

/*6) находим изображение по идентификатору*/
var slideImage = document.getElementById('slide-img');

/*3)привязыаем два обработчика события(листенера) к этим кнопкам*/
/*как бы говорим - "кнопка, добавь себе слушателя"*/
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

/*4)создаем массив с данными, сейчас это url изображений*/
  var imagesUrls = [
    'https://img.drive.ru/i/0/5b7fd52eec05c4804a000068.jpg',
    'https://a.d-cd.net/7888e72s-960.jpg',
    'https://s0.rbk.ru/v6_top_pics/media/img/3/21/754788650333213.jpeg',
    'https://kolesa-uploads.ru/-/7485ec1c-c268-4ef7-9eb7-2a13e3571167/a189696-large.jpg'
 ];

// попытка сделать массив из объектов (изображения не выводятся) 15/01/2020
// var imagesUrls = [
//   {
//    image1: 'https://img.drive.ru/i/0/5b7fd52eec05c4804a000068.jpg',
//    image2: 'https://a.d-cd.net/7888e72s-960.jpg',
//    image3: 'https://s0.rbk.ru/v6_top_pics/media/img/3/21/754788650333213.jpeg',
//  },
//  {
//    image4: 'https://kolesa-uploads.ru/-/7485ec1c-c268-4ef7-9eb7-2a13e3571167/a189696-large.jpg'
//  },
//
//  {
//    image4: 'https://kolesa-uploads.ru/-/7485ec1c-c268-4ef7-9eb7-2a13e3571167/a189696-large.jpg'
//  }
//
// ]

var currentImageIndex = 0; /*8) ввели переменную для присвоения ей индекса текущей картинки*/

/*7) берем изображение, с которого стартует слайдер и при этом кнопка влево д.б. не активна*/
slideImage.src = imagesUrls[currentImageIndex];
showPrevBtn.disabled = true;


/*5)убираем картинку из html добавляем в тег img id*/

/*2)после нахождения упр. элементов
нужно привязать к ним обработч. события(листенеры, подписчики, слушатели),
а для этого создать функцию */

function onShowPrevBtnClick () {
  currentImageIndex--;
  slideImage.src = imagesUrls[currentImageIndex];
  showNextBtn.disabled = false;
  if (currentImageIndex === 0) {
    showPrevBtn.disabled = true;
  }
}

function onShowNextBtnClick () {
  currentImageIndex++;
  slideImage.src = imagesUrls[currentImageIndex];
  showPrevBtn.disabled = false;
  if (currentImageIndex === (imagesUrls.length - 1)) {
    showNextBtn.disabled = true;
  }
}

// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
input: document.querySelector('input'),
buttonCreate: document.querySelector('button[data-create]'),
buttonDestroy: document.querySelector('button[data-destroy]'),
divColection: document.querySelector('#boxes')
}

refs.buttonCreate.addEventListener('click', onCollectionCreate)
refs.buttonDestroy.addEventListener('click', onCollectionDestroy)

// створюється колекція елементів
function onCollectionCreate() {
  createBoxes(refs.input.value); 
}

// колекція елементів очищається
function onCollectionDestroy() {
  destroyBoxes();
  refs.input.value = '';
}

// цикл створення колекції
function createBoxes(amount) {
  let sizeBox = 30;

  for (let i = 0; i < amount; i += 1) {
    let newBox = document.createElement('div')
    sizeBox = sizeBox + i * 10;
    newBox.style.cssText = `width: ${sizeBox}px; height: ${sizeBox}px; background-color: ${getRandomHexColor()};`
   
    refs.divColection.append(newBox)
  }
}

// ф-я очичення div#boxes
function destroyBoxes() {
  refs.divColection.innerHTML = '';
}
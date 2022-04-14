// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль 
// по кліку на button.change - color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body')
const span = document.querySelector('.color')
const button = document.querySelector('.change-color')

button.addEventListener('click', onBodyColorChange)

function onBodyColorChange(event) {
const randomHexColor = getRandomHexColor();

  body.style.backgroundColor = randomHexColor;
  span.textContent = randomHexColor;
}
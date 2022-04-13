// Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
// проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const input = document.querySelector('input');

const correctLengthInput = Number(input.dataset.length);

input.addEventListener('blur', onInputValue);

function onInputValue(event) {
  
  if (event.currentTarget.value.length === correctLengthInput) {
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
  }

  if (event.currentTarget.value.length !== correctLengthInput) {
    input.classList.add('invalid');
  } else {
    input.classList.remove('invalid');
  }
 };

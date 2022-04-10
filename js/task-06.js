// Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
// проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const input = document.querySelector('input');
console.log(input);




input.addEventListener("focus", () => {
  input.value = "This input has focus";
});

// console.log(input.getAttribute('data-length'));
input.addEventListener("blur", () => {
    
    // console.log(input.value);
});
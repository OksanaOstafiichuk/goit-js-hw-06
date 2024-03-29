// Счетчик состоит из спана и кнопок, которые, при клике,
// должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться
// текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай
// или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const decButtonRef = document.querySelector('[data-action="decrement"]');
const incButtonRef = document.querySelector('[data-action="increment"]');
const counterValueRef = document.querySelector('#value');

let counterValue = 0;

    const decrementClick = () => {
        counterValue -= 1;
        counterValueRef.textContent = counterValue;
    }
    const incrementClick = () => {
        counterValue += 1;
        counterValueRef.textContent = counterValue;
    }
    
decButtonRef.addEventListener('click', decrementClick);
incButtonRef.addEventListener('click', incrementClick);
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. 
// Обязательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredientsRef = document.querySelector('#ingredients');

const makeIngredientsList = ingredients => {
  return ingredients.map(ingredient => {
  const list = document.createElement('li');
  list.classList.add('.item');
  list.textContent = ingredient;
  return list;
});
}

const ingredientsList = makeIngredientsList(ingredients);
ingredientsRef.append(...ingredientsList);
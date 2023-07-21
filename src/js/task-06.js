//Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
//Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
//Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
//Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputText = document.querySelector('#validation-input')

inputText.addEventListener('blur', event => {
const value = event.target.value;
    if (value.length < Number(inputText.dataset.length) ||
        value.length > Number(inputText.dataset.length)) {
        event.target.classList.remove('valid');
        event.target.classList.add('invalid');
  } else {
        event.target.classList.remove('invalid');
        event.target.classList.add('valid');
    }
})
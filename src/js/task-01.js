//Напиши скрипт, який:

//Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
//Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

const categoryIdList = document.querySelector('#categories');
const categoryItems = categoryIdList.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(item => {
const categoryTitle = item.querySelector('h2').textContent;
const categoryElements = item.querySelectorAll('li').length;
console.log(`Category: ${categoryTitle}\n Elements: ${categoryElements}`);
})
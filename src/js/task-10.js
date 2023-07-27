//Напиши скрипт створення і очищення колекції елементів. 
//Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. 
//Натисненням на кнопку Очистити, колекція елементів очищається.
//Створи функцію createBoxes(amount), яка приймає один параметр - число. 
//Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
//Розміри найпершого <div> - 30px на 30px.
//Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
//Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
const divBox = document.createElement('div');
document.body.append(divBox);

function createBoxes(amount) {
  let boxSize = 30;
  const elementsArray = [];
  for (let i = 0; i < Number(amount); i += 1) {
    const elementDiv = document.createElement('div');
    elementDiv.style.backgroundColor = getRandomHexColor();

    elementDiv.style.width = `${boxSize}px`;
    elementDiv.style.height = `${boxSize}px`;
    boxSize += 10;

    elementsArray.push(elementDiv);
  }
  divBox.append(...elementsArray);
}

function handleCreate() {
  if (input.value === '') return;
  createBoxes(input.value);
  input.value = '';
}

function destroyBoxes() {
  divBox.innerHTML = '';
}

createBtn.addEventListener('click', handleCreate);
destroyBtn.addEventListener('click', destroyBoxes);

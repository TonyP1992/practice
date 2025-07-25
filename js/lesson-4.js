// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список

const bodyEl = document.querySelector("body");
console.log(bodyEl);
const titleEl = document.querySelector("#title");
// console.log(titleEl);
const listEl = document.querySelector(".list");
console.log(listEl);
const dataTopicEls = document.querySelectorAll("data-topic");
// console.log(dataTopicEls);
firstTopicEl = dataTopicEls[0];
// console.log(firstTopicEl);
lastTopicEl = dataTopicEls[dataTopicEls.length - 1];
// console.log(lastTopicEl);
H1Sibling = titleEl.nextElementSibling;
const allh3Els = document.querySelectorAll("h3");
// console.log(allh3Els);
allh3Els.forEach((el) => {
  el.classList.add("active");
});

const navTopicEl = document.querySelector('li[data-topic="navigation"]');
console.log(navTopicEl);
navTopicEl.style.background = "yellow";
const navTopicText = navTopicEl.querySelector("p");
navTopicText.textContent = "Я змінив тут текст!";
const currentTopic = "manipulation";
const topicEl = document.querySelector(`[data-topic="${currentTopic}"]`);
topicEl.style.backgroundColor = "blue";
const titleCompleted = document.querySelector(".completed");
console.log(titleCompleted);

if (titleCompleted) {
  const parentLi = titleCompleted.closest("li");
  if (parentLi) {
    parentLi.remove();
  }
}

const paragraph = document.createElement("p");
paragraph.textContent = "Об'єктна модель документа (Document Object Model)";
titleEl.insertAdjacentElement("afterend", paragraph);
// _________________________________________________
const list = document.querySelector("ul");

// const newLi = document.createElement("li");

// const h3 = document.createElement("h3");
// h3.textContent = "Властивість innerHTML";

// const p = document.createElement("p");
// p.textContent =
//   "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";

// newLi.append(h3, p);

// list.appendChild(newLi);

// ______________________________________________

const newItemHTML = `
  <li>
    <h3>Властивість innerHTML</h3>
    <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
  </li>
`;

list.insertAdjacentHTML('beforeend', newItemHTML);

// _______________________________________________

list.innerHTML = '';

// _________________________________________________

const formEl = document.querySelector(".js-contact-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  //   const inputValue = event.target.elements.userName.value.trim();
  //   const isCheck = event.target.elements.accept.checked;
  const { userName, accept } = event.target.elements;
  const inputValue = userName.value.trim();
  const isCheck = accept.checked;

  if (inputValue === "" || !isCheck) {
    alert("Fill all fields")
return;
  }

  console.log({ userName: inputValue });
  formEl.reset();
}
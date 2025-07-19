// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5]

// const arr =[1, 2, 3, 4, 5];
// const getDoubleNumbers = (arr) =>{
//     return arr.map(el=> {
//         return el**2;
//     })
// }
// console.log(getDoubleNumbers(arr));
// --------------------------------------------------------

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

// const newData = data.flatMap(el => el.values);
// console.log(newData);

// const result = (arr) => {
//     return arr.flatMap(el => el.values);

// }
// console.log(result(data));
// ---------------------------------------------------------------

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const result = people.some(el => el.age < 20);
// console.log(result);

// const findPeople = (arr) =>arr.some(el=>el.age<20);
// console.log(findPeople(people));

// ---------------------------------------------------------------

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const result = numbers.every(el => el % 2 === 0);
// console.log(result);

// const checkNumber = (arr) => arr.every(el => el % 2 === 0);
// console.log(checkNumber(numbers));

//  ---------------------------------------------------------------

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];
// const result = numbers.find(el => el % 2 !== 0);
// console.log(result);

// const findNumber = (arr) => arr.find(el => el % 2 !==0);
// console.log(findNumber(numbers));

// / ---------------------------------------------------------------

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 10, 3];
// const newNumbers = numbersArray.toSorted((a, b) => a - b);
// console.log(newNumbers);

// const result = (arr) => arr.toSorted(((a, b) => a - b));
// console.log(result(numbersArray));

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'Orange', 'apple', 'pear'];

// const result = stringArray.toSorted(((a, b) => a.localeCompare(b)));
// console.log(result);

// const sortedStringArray = (arr) => arr.toSorted((a, b) => a.localeCompare(b));
// console.log(sortedStringArray(stringArray));

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]

// const newUser = user.filter(el => el.age > 20);
// console.log(newUser);

// const result = (arr) => arr.filter(el => el.age > 20);
// console.log(result(user));

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum);

// const sumNumbers = (arr) => arr.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sumNumbers(numbers));

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const sortUsers = users.toSorted((a, b) => a.age - b.age);
// console.log(sortUsers);

// class Calculator {
//   constructor() {
//     this.total = 0;
//   }
//   number(value) {
//     this.total = value;
//     return this;
//   }
//   getResult() {
//     return this.total;
//   }
//   add(value) {
//     this.total += value;
//     return this;
//   }
//   substruct(value) {
//     this.total -= value;
//     return this;
//   }
//   divide(value) {
//     if (value !== 0) {
//       total /= value;
//     } else {
//       console.error("divide on 0 imposibble");
//     }
//     return this;
//   }
//   multiply(value) {
// this.total *= value;
// return this;
//   }
// }

// const calc = new Calculator();
// const result = calc
//   .number(10)   // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24


//   console.log(result); // 24


// Завдання 12:
 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email

 class Client {
  #login;
  #email;

  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }

  // Геттер для login
  get login() {
    return this.#login;
  }

  // Сеттер для login
  set login(newLogin) {
    this.#login = newLogin;
  }

  // Геттер для email
  get email() {
    return this.#email;
  }

  // Сеттер для email
  set email(newEmail) {
    this.#email = newEmail;
  }
}

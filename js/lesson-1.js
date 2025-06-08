// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// const number = Number(prompt("Enter number"));

// if(number === 10) {
//     alert("right");
// } else {
//     alert("wrong");
// }

// number === 10 ? alert("right"): alert("wrong");
// alert(number === 10 ? "right": "wrong");
// ------------------------------------------------

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// if (min >= 0 && min <= 15) {

// alert("число входить у першу чверть");

// } else if(min > 15 && min <= 30) {
//     alert("число входить у другу чверть");

// } else if (min > 30 && min <= 45) {

//     alert("число входить у третю чверть");

// } else {
//     alert("число входить у четверту чверть");
// }

// console.log(min);
// -----------------------------

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// let num = prompt("Enter number 1, 2, 3 or 4");

// let result;

// switch (num) {
//   case "1":
//     result = "Winter";
//     break;
//   case "2":
//     result = "Spring";
//     break;
//   case "3":
//     result = "Summer";
//     break;
//   case "4":
//     result = "Fall";
//     break;
//   default:
//     result = "Sorry, enter nember from 1 to 4";
// }
// console.log(result);

// ___________________________________________________

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const input = prompt("Введіть кількість хвилин:");
// const totalMinutes = Number(input);

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;

// const formattedHours = String(hours).padStart(2, "0");
// const formattedMinutes = String(minutes).padStart(2, "0");

// console.log(`${formattedHours}:${formattedMinutes}`);

// _______________________________________________________

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.


// function getNumbers(min, max) {
//   let total = 0;

//   for (let i = max; i >= min; i--) {
//     console.log(i);

//     if (i % 2 === 0) {
//       total += i;
//     }
//   }
//   return total;
// }

// console.log(getNumbers(1, 20));

// _______________________________________________________


// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.


// function min(a, b) {
    
//     if( typeof a !== "number" || typeof b !== "number") {
//         return("Not a number!");

//     } if (a > b) {
//         return b;
//     } else {
//         return a;
//     }
// }

// console.log(min(4, "8"));
// console.log(min(10, 3));
// console.log(min(20, 5));

// _______________________________________________________

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true, 
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm 
// і повертає його результат (true/false).


// function isAdult(age) {

//     // if(age >= 18) {

//     //     return true;
//     // }
//     //     return confirm("Your age 18?");
    
// return age >= 18 || confirm("are your age = 18?");


// }
// console.log(isAdult(3));


// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.


function fizzBuzz(num) {

    for (let i = 1; i <= num; i++) {

    

    if(num % 3 === 0) {
        console.log('fizz');
        
    } else if(num % 5 === 0) {

        console.log('buzz');
        
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
        
    }

}
}
console.log(fizzBuzz(50));
console.log(fizzBuzz(68));
console.log(fizzBuzz(5));


 
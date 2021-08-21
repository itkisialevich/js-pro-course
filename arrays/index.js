/* 1) Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат. Например: [1,2,3] -> [1,4,9].*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let squaredNumbers = numbers.map((x) => x * x);


// 2) Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let result = numbers.reduce((sum, current) => sum + current, 0);


/* 3) Напишите код, который добавит символ двоеточие(':') между нечетными числами. Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5*/

function insertColon (num) {
  let str = num.toString();
  let result = [str[0]];
  for(let i=1; i<str.length; i++) {
      if((str[i-1]%2 !== 0)&&(str[i]%2 !== 0)) {
        result.push(':', str[i]);
       }
      else {
        result.push(str[i]);
      }
  }
  return result.join('');  
}


/* 4) Создайте 2 массива с разной длинной. Необходимо написать код,который создаёт массив элементов представляющих собой разность соответствующих элементов заданных массивов*/

let a = [1, 2, 3];
let b = [4, 1, 7, 2, 5];

let c = [];
let count;

if (a.length > b.length) {
  count = a.length;
} else {
  count = b.length;
}
for (let i = 0; i < count; i++) {
  if (a[i] === undefined) {
    a.push(0);
  } else {
    if (b[i] === undefined) {
      b.push(0);
    }
  }
  c.push(a[i] - b[i]);
}


/* 5) Создайте 2 массива с разной длинной. Необходимо написать код,который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов. */

let a = [1, 2, 3];
let b = [4, 1, 7, 2, 5];

let c = [];
let count;

if (a.length > b.length) {
  count = a.length;
} else {
  count = b.length;
}
for (let i = 0; i < count; i++) {
  if (a[i] === undefined) {
    a.push(0);
  } else {
    if (b[i] === undefined) {
      b.push(0);
    }
  }
  c.push(a[i] + b[i]);
}


/* 6) Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную. Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1] */

let a = [1, 2, 3, 4, 5];
let b = a.reverse();


/* 7) Фильтр юзеров. Создать массив объектов для юзеров. Пример:

[{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}, {...}, ...]

Написать скрипт, который будет на выходе отдавать два массива. Первый с совершеннолетними пользователями, второй с несовершеннолетними. */

let users = [
{name: 'Kate', age: 5},
{name: 'Jane', age: 19},
{name: 'Michael', age: 30},
{name: 'John', age: 11},
{name: 'Elise', age: 25},
{name: 'Nick', age: 17},
];

let adultUsers = [];
let underageUsers = [];

function sortUsers(user) {
    for (let person of user) {
        if (person.age >= 18) {
          adultUsers.push(person);
        } else  {
          underageUsers.push(person);
        }
    }
    return  [adultUsers, underageUsers];
}


/* 8) Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения. Напишите код, который уберет эти дубликаты из созданного массива. */

let array = [1, false, 'aplle', 5, undefined, 8, true, null, 'aplle', 5, false, 'Kate', undefined, null, 15];

function getUniqueValue(arr) {
    let result = [];
  
    for (let i of arr) {
      if (!result.includes(i)) {
        result.push(i);
      }
    }
    return result;
}


/* 9) Напишите код, который проверит является строка полиндромом (слово, которое с обеих сторон читается одинаково, например РЕПЕР, ШАЛАШ) */

function isPalindrome(word) {
    let len = Math.floor(word.length / 2);
    for (let i = 0; i < len; i++)
      if (word[i] !== word[word.length - i - 1]) {
          return false;
      } else {
          return true;
      }
}


/* 11) Написать функцию search, которая принимает первым аргументом массив имен:

[ ‘Ivan’, ‘Petr’, ‘Sidor’, ...]
и любую произвольную строку. Функция должна отфильтровать массив в зависимости от строки (в независимости от регистра). Например:

search([‘Ivan’, ‘Petr’, ‘Sidor’], 'si') -> ['Sidor']
search([‘Ivan’, ‘Petr’, ‘Sidor’], 'i') -> [‘Ivan’,'Sidor']
search([‘Ivan’, ‘Petr’, ‘Sidor’, 'Petric'], 'eTr') -> [‘Petr’,'Petric']
search([‘Ivan’, ‘Petr’, ‘Sidor’, 'Petric'], 'eTrooo') -> [] */


let array = ['Евгений', 'Никита', 'Татьяна', 'Валентина', 'Алексей', 'Александр', 'Эдуард'];

function seachLetters(arr, str) {
    return arr.filter(item => item.toLowerCase().includes(str.toLowerCase()))
}


/* 12) Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того, одинаковые у них элементы или нет. Пример:

checkIsEqaul([1,2,3], [1,2,3]) -> true
checkIsEqaul([1,2,3], [1,2,3,4]) -> false
checkIsEqaul([1,2,3], [1,'2',3]) -> false */

function checkIdentityArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

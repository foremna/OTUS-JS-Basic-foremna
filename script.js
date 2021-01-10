"use strict";

// Lesson 2. Homework 4.
// Создайте объект user, содержащий поле name со значением ‘John’.
// Запросить у пользователя ввод числа. Записать
// введенное значение в поле age объекта user.

let user = {
    name: "John"
}

let answerAge = +prompt("Enter your age, please: ");
user.age = answerAge;
console.log(user);

// Lesson 2. Homework 5.
// Создать копию объекта user с именем admin.
// Добавить новому объекту поле role со значением ‘admin’.

var admin = Object.assign({}, user, {role: "admin"});
console.log(user);
console.log(admin);

// Lesson 2. Homework 6.
// Создайте массив целых чисел из 10 элементов.
// 1.Выведите в консоль сумму всех элементов массива.

let arrNumber = [11, 22, 33, 44, 55, 66, 77, 88, 99, 111];

function arraySum(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}

const sumAllElemArray = arraySum(arrNumber);

console.log("Сумма всех элементов массива " + sumAllElemArray);

// Lesson 2. Homework 7.
// 2.Создайте новый массив на основе исходного, в
// котором каждый элемент будет вдвое больше
// элемента исходного массива с таким же индексом.
// (a[1] = 3, b[1] = 6, где a — исходный массив, b — новый
// массив).

const newArrNumber = arrNumber.map(function (array) {
    return array + array;
});

console.log(newArrNumber);

// Lesson 2. Homework 8.
// 1.Напишите функцию diff, которая получает в качестве
// параметров 2 числа и возвращает разницу между
// наибольшим и наименьшим.

function diff (a, b) {
    return a - b;
};

console.log(diff(5, 3));

// Lesson 2. Homework 9.
// 2.Напишите функцию isWord, которая принимает на
// вход текстовую строку. Функция возвращает true, если
// строка состоит из одного слова и false, если из
// нескольких.

function isWord (str) {
    let sumWord = str.split(" ");
    console.log(sumWord);

    if (sumWord.length < 2) {
        console.log(true);
    } else {
        console.log(false);
    }
};

isWord("This is a cat");

// \* Напишите функцию pow(a, x), которая вернёт
// значение числа a, возведённого в степень x.

function pow (a, x) {
    return a ** x;
}

console.log(pow(7, 3));
"use strict";

// Lesson 1. Homework 1.
// 1.В переменных a и b хранятся числа. Написать
// программу, которая выводит в консоль произведение
// и сумму этих чисел

function sumNumbers () {
    let a = 5;
    let b = 20;

    console.log(a * b);
    console.log(a + b);
}

sumNumbers();

// 2.В двух переменных хранятся строки символов.
// Написать программу, которая выведет в консоль
// суммарное количество символов в обоих строках.

function concatStr () {
    let str1 = "Hel";
    let str2 = "lo";

    console.log(str1 + str2);
}

concatStr();


// Lesson 1. Homework 2.
// 1.В переменных a и b хранятся числа. Вывести в
// консоль наибольшее из них.

function maxNumber () {
    let a = 20;
    let b = 77;

    console.log(Math.max(a, b));
}

maxNumber();

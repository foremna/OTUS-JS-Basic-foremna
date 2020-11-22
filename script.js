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

// 2.Запросить у пользователя ввод числа от 1 до 12.
// Вывести в консоль название месяца, соответствующее
// этому числу (1 — январь, 2 — февраль и т.д.).

function showMonth () {
    let numberMonth = +prompt("Введите номер месяца и программа покажет какой месяц соответствует введенной цифре");

    switch (numberMonth) {
        case 1:
            console.log("Январь");
            break;
        case 2:
            console.log("Февраль");
            break;
        case 3:
            console.log("Март");
            break;
        case 4:
            console.log("Апрель");
            break;
        case 5:
            console.log("Май");
            break;
        case 6:
            console.log("Июнь");
            break;
        case 7:
            console.log("Июль");
            break;
        case 8:
            console.log("Август");
            break;
        case 9:
            console.log("Сентябрь");
            break;
        case 10:
            console.log("Октябрь");
            break;
        case 11:
            console.log("Ноябрь");
            break;
        case 12:
            console.log("Декабрь");
            break;
        default:
            console.log("Такого месяца пока что не существует");
    }
}

showMonth();
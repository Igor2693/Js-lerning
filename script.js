'use strict';

let rollback = 10;

const showTypeOf = function(variable) {
  console.log(variable, typeof variable)
}


const titleProject = prompt('Как называется ваш проект?');

const screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');

const screenPrice = +prompt('Сколько будет стоить данная работа?', 12000);

const adaptive = confirm('Нужен ли адаптив на сайте?'); 
  console.log(adaptive)

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

const getRollbackMessage = function() {
  if (fullPrice > 30000) {
    return 'Даем скидку в 10%'
  } else if (30000 >= fullPrice && fullPrice > 15000) {
    return 'Даем скидку в 5%'
  } else if (15000 >= fullPrice && fullPrice >= 0) {
    return 'Скидка не предусмотрена'
  } else {
    return 'Что то пошло не так'
  }  
}

// Задание 1
const getAllServicePrices = function(price1, price2) {
  return price1 + price2
}
const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

// Задание 2
function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices
  }
const fullPrice = getFullPrice(screenPrice, allServicePrices);

// Задание 3
const getTitle = function() {
  return  titleProject.trim()[0].toUpperCase() + titleProject.trim().slice(1).toLocaleLowerCase();
}
const title = getTitle();

// Задание 4
const getServicePercentPrices = function() {
  return fullPrice - fullPrice * rollback / 100
}
const servicePercentPrice = getServicePercentPrices()

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.clear()

showTypeOf(title)
showTypeOf(fullPrice)
showTypeOf(adaptive)

console.log(screens.length);

console.log(getRollbackMessage())
console.log(getServicePercentPrices())
'use strict';

let rollback = 10;
let screenPrice
let service1 
let service2 

const titleProject = prompt('Как называется ваш проект?');
const screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
const adaptive = confirm('Нужен ли адаптив на сайте?'); 

do {
  screenPrice = +prompt('Сколько будет стоить данная работа?');
} while (screenPrice <= 0 || isNaN(screenPrice) || screenPrice === "" || screenPrice === null)

// Задание 1
const getAllServicePrices = function() {
  let sum = 0
  for (let i = 0; i < 2; i++) {

    if (i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?');
    } else if (i === 1) {
      service2 = prompt('Какой дополнительный тип услуги нужен?');
    }
    
    sum += +prompt('Сколько это будет стоить?')
  }
  return sum
}

const showTypeOf = function(variable) {
  console.log(variable, typeof variable)
}

function getFullPrice() {
    return screenPrice + allServicePrices
  }

const getServicePercentPrices = function() {
  return fullPrice - (fullPrice * (rollback / 100))
}

const getTitle = function() {
  return  titleProject.trim()[0].toUpperCase() + titleProject.trim().slice(1).toLocaleLowerCase();
}

const getRollbackMessage = function(price) {
  if (price >= 30000) {
    return 'Даем скидку в 10%'
  } else if (30000 >= fullPrice && fullPrice > 15000) {
    return 'Даем скидку в 5%'
  } else if (15000 >= fullPrice && fullPrice >= 0) {
    return 'Скидка не предусмотрена'
  } else {
    return 'Что то пошло не так'
  }  
}

const allServicePrices = getAllServicePrices()
const fullPrice = getFullPrice();
const servicePercentPrice = getServicePercentPrices()
const title = getTitle();

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

// console.clear()

showTypeOf(title)
showTypeOf(fullPrice)
showTypeOf(adaptive)

console.log(screens.length);

console.log(getRollbackMessage())
console.log(getServicePercentPrices())
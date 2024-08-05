'use strict';

let title = 'Первый урок';
let screens = 1;
let screenPrice = 2;
let rollback = 3;
let fullPrice = 4;
let adaptive = 5;


title = prompt('Как называется ваш проект?');
console.log(title);

screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
console.log(screens);

screenPrice = +prompt('Сколько будет стоить данная работа?', 12000);
console.log(screenPrice);

adaptive = prompt('Нужен ли адаптив на сайте?', 'Да/Нет'); 
  if (adaptive == 'Да') {
    console.log(true);
  } else if (adaptive == 'Нет') {
    console.log(false);
  }

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

fullPrice = (screenPrice + servicePrice1 + servicePrice2);
console.log(fullPrice);

let servicePercentPrice =fullPrice - fullPrice * rollback / 100;
console.log(Math.ceil(servicePercentPrice));


switch (fullPrice) {
  case fullPrice > 30000:
    console.log('Даем скидку в 10%')
    break
  case 30000 >= fullPrice && fullPrice > 15000:
     console.log('Даем скидку в 5%')
     break     
  case 15000 >= fullPrice && fullPrice >= 0:
    console.log('Скидка не предусмотрена')
    break
  case fullPrice < 0:
    console.log('Что то пошло не так')
    break
}



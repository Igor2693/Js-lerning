const title = 'js lerning';
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 60;
let rollback = 10;
let fullPrice = 60000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log('Стоимость верстки экранов  ' + screenPrice + ' рублей/ долларов/гривен/юани');
console.log('Стоимость разработки сайти  ' + fullPrice + ' рублей/ долларов/гривен/юани');

console.log(screens.toLowerCase().split());

console.log('Процент отката посреднику за работу ' + fullPrice * (rollback / 100) + ' рублей');
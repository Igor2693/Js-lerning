'use strict';

const appData = {
  rollback: 10,
  screenPrice: 0,
  service1: '', 
  service2: '',
  titleProject: '',
  screens: '',
  adaptive: true,
  fullPrice: 0,
  allServicePrices: 0,
  servicePercentPrice: 0,
  
  start: function () {
    appData.asking()
    appData.allServicePrices = appData.getAllServicePrices()
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrices()
    appData.title = appData.getTitle();

    appData.logger()
  },

  asking: function () {
    appData.titleProject = prompt('Как называется ваш проект?')
    appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные')
    appData.adaptive = confirm('Нужен ли адаптив на сайте?')

    do {
      appData.screenPrice = +prompt('Сколько будет стоить данная работа?')
    } while (appData.screenPrice <= 0 || isNaN(appData.screenPrice) || appData.screenPrice === "" || appData.screenPrice === null)
  },

  getAllServicePrices: function() {
    let sum = 0
    for (let i = 0; i < 2; i++) {
  
      if (i === 0) {
        appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
      } else if (i === 1) {
        appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
      }
      
      sum += +prompt('Сколько это будет стоить?')
    }
    return sum
  },

  getFullPrice: function() {
    return +appData.screenPrice + appData.allServicePrices
  },

  getServicePercentPrices: function() {
    return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
  },

  getTitle: function() {
    return  appData.titleProject.trim()[0].toUpperCase() + appData.titleProject.trim().slice(1).toLocaleLowerCase();
  },

  getRollbackMessage: function() {
    if (appData.fullPrice >= 30000) {
      return 'Даем скидку в 10%'
    } else if (30000 >= appData.fullPrice && appData.fullPrice > 15000) {
      return 'Даем скидку в 5%'
    } else if (15000 >= appData.fullPrice && appData.fullPrice >= 0) {
      return 'Скидка не предусмотрена'
    } else {
      return 'Что то пошло не так'
    }  
  },

  logger: function () {
    for (let key in appData) {
      console.log('Ключ:' + key + ' ' + 'Значение:' +  appData[key])
    }
  },
  
}

appData.start()
'use strict';

const newTitle = document.getElementsByTagName('h1');
const startBtn = document.getElementsByClassName('handler_btn')[0]
const restBtn = document.getElementsByClassName('handler_btn')[1]
const buttonPlus = document.querySelector('.screen-btn')
const otherItemsPercent = document.querySelectorAll('.other-items.percent')
const otherItemsNumber = document.querySelectorAll('.other-items.number')
const inputRange = document.querySelector('.rollback input')
const spanRange = document.querySelector('.rollback .range-value')
const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const totalFullCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]

let screens = document.querySelectorAll('.screen')

const appData = {
  rollback: 0,
  screenPrice: 0,
  servicesPercent: {}, 
  servicesNumber: {}, 
  titleProject: '',
  screens: [],
  adaptive: true,
  fullPrice: 0,
  countInputs: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  servicePercentPrice: 0,
  isError: false,
  init: function () {
    appData.addTitle()
    startBtn.addEventListener('click', appData.start)
    buttonPlus.addEventListener('click', appData.addScreenBlock)
    appData.inputBlock()
  },
  addTitle: function () {
    document.title = title.textContent
  },
  start: function () {
    if (!appData.isError) {
      appData.addScreens()
      appData.addServices()
      appData.addPrices()
      // appData.getServicePercentPrices()
      appData.inputBlock()
      // appData.getServicePercentPrices()

      // appData.logger()
      appData.showResult()
    }
    
  },
  inputBlock: function () {
    spanRange.textContent = inputRange.value
    inputRange.addEventListener('input', appData.inputBlock)
    inputRange.addEventListener('range', appData.inputBlock)
    appData.rollback = spanRange.textContent
  },
  rollbackRes: function () {
    appData.rollback = +spanRange.textContent
  
  },
  showResult: function () {
    total.value = appData.screenPrice
    totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
    totalFullCount.value = appData.fullPrice
    totalCountRollback.value = appData.servicePercentPrice
    totalCount.value = appData.countInputs
    console.log(appData.servicePercentPrice)
  },
  addScreens: function () {
    appData.isError = false;
    screens = document.querySelectorAll('.screen')
    screens.forEach(function(screen, index) {
      const select = screen.querySelector('select')
      const input = screen.querySelector('input')
      const selectName = select.options[select.selectedIndex].textContent
      appData.screens.push({ id: index,
        name: selectName, 
        price: +input.value * +select.value, 
        countInput: +input.value
      })

      console.log(input.value)

      for (let i = 0; i < screens.length; i++) {
        if (select.value === '' || input.value === '') {
          appData.isError = true;
        }
      }
      console.log(appData.isError)
    })
    console.log(appData.screens)
  },
  addServices: function () {
    otherItemsPercent.forEach(function(item){
      const check = item.querySelector('input[type=checkbox]')
      const label = item.querySelector('label')
      const input = item.querySelector('input[type=text]')
      
      if(check.checked) {
        appData.servicesPercent[label.textContent] = +input.value
      }
    })
    otherItemsNumber.forEach(function(item){
      const check = item.querySelector('input[type=checkbox]')
      const label = item.querySelector('label')
      const input = item.querySelector('input[type=text]')
      
      if(check.checked) {
        appData.servicesNumber[label.textContent] = +input.value
      }
    })
  },
  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true)
    screens[screens.length -1 ].after(cloneScreen)
  },
  
  addPrices: function() {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price
      appData.countInputs += screen.countInput
    }

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key]
    }
    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
    }

    appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent

    appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
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

  // rollBack: function () {
  
  // },


  logger: function () {
    for (let key in appData) {
      console.log('Ключ:' + key + ' ' + 'Значение:' +  appData[key])
    }
    console.log(appData.screens);
  },
  
}

appData.init()

  // console.log(newTitle[0]);
  // console.log(buttons);
  // console.log(buttonX);
  // console.log(items1);
  // console.log(items2);
  // console.log(inputScreens);
  console.log(spanRange);
  console.log(inputRange);
  console.log(appData.rollback)
  // console.log(screens);

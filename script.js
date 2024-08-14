'use strict';
const bookContainer = document.querySelectorAll('.books')
const bookItem = document.querySelectorAll('.book')
const bookTitle = document.querySelectorAll('a')

bookItem[5].classList.add('item5')
bookItem[2].classList.add('item6')

const bookItemFive = document.querySelector('.item5')
const bookItemSix = document.querySelector('.item6')



// Задание 1
bookItem[1].after(bookItem[0])
bookItem[4].after(bookItem[3])
bookContainer[0].append(bookItem[2])

// Задание 2
document.querySelector('body').style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

// Задание 3
bookTitle[4].textContent = 'Книга 3. this и Прототипы Объектов'

// Задание 4
const addBlock = document.querySelector('.adv')
addBlock.remove()

// Задание 5
const bookList = bookItemFive.querySelectorAll('li')
bookList[2].before(bookList[9])
bookList[6].before(bookList[2])
bookList[7].after(bookList[5])

// Задание 6
const bookUlSix = bookItemSix.querySelectorAll('ul')
const newElem = document.createElement('li')
newElem.textContent = 'Глава 8: За пределами ES6'
bookUlSix[0].append(newElem)
const bookListSix = bookItemSix.querySelectorAll('li')
bookListSix[10].after(bookListSix[9])




console.log(bookItem)
console.log(bookContainer)
console.log(bookTitle)
console.log(bookList)
console.log(newElem)
console.log(bookListSix)
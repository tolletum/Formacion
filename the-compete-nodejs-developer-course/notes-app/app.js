// const add = require('./utils.js')
// const sum = add(4, -2)
// console.log(sum)

const message = require('./notes.js');
const validator = require('validator');

console.log(message());

console.log(validator.isEmail('alberto.barrajon@bbva.com'))
console.log(validator.isEmail('alberto.barrajon'))
console.log(validator.isURL('https://mead.io'))
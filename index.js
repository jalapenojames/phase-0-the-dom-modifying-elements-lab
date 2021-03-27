// Write your code here!

document.getElementById("main").remove();

// let body = document.querySelector('body');
// body.append('h1');
// document.querySelector('h1').id = 'victory';

// let newHeader = document.querySelector('h1');

const element = document.createElement('h1');
let newHeader = document.body.appendChild(element);
document.querySelector('h1').id = 'victory';

document.querySelector('h1').innerHTML = 'James is the champion';
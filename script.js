'use strict'

// Prompt User for Data
let name = prompt("Как Вас зовут?");

// Output Data into the Page
document.getElementById("nameSpan").innerHTML = (name === '' || name === null) ? 'Гость' : name;
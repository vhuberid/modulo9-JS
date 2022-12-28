/*
Selecionando Elementos do HTML para o JavaScript:

1: getElementById() trás apenas um elemento (element)
2: getElementByClassName() trás diversos elementos - HTML Collection
3: getElementByTagName() trás diversos elementos - HTML Collection
4: querySelector() trás apenas um elemento, o primeiro que encontrar (element)
5: querySelectorAll() trás todos os elementos que encontrar - nodelist
6: getElementByName() trás os elementos selecionados - nodelist
*/

const element = document.getElementById("main-text")
console.log(element)

const element2 = document.getElementsByClassName("paragraph")
console.log(element2)

const element3 = document.getElementsByTagName("p")
console.log(element3)

const element4 = document.querySelector("p")
console.log(element4)

const element5 = document.querySelectorAll("p")
console.log(element5)

const element6 = document.getElementsByName("my-input")
console.log(element6)


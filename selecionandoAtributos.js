const element = document.querySelector("input")
console.log(element.attributes) //ou element.value

const element2 = document.querySelector("h1")
element2.innerText = "Qualquer coisa" 
//altera o texto selecionado

const element3 = document.querySelector("h1")
element3.innerHTML = "Outra coisa <p>Mais um parágrafo</p>"
//altera o texto e permite que adicione mais elementos HTML

const element4 = document.querySelector("h1")
element4.style.color = "purple"

const element5 = document.querySelector("body")
element5.style.backgroundColor = "yellow"
//forma de trocar estilos além do CSS, mas dentro do JS

const myFunction = () => {
    alert ("Também fui clicado")
}
//também pode chamar o evento diretamente no JS sem inserir no HTML:

const element6 = document.querySelector("input")
element6.onclick = () => {
    alert ("Fui clicado")
}

const input = document.querySelector("input")
const button = document.querySelector("button")
input.addEventListener("focus", () => {
    console.log("Dei foco")
})

button.addEventListener("click", () => {
    alert("o botao foi clicado")
})
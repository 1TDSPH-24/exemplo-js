// console.log("Olá mundo!")
// document.getElementById("botao")

// console.log(document.getElementById("botao").innerHTML)

// Recuperando o botão do HTML e colocando em uma constante.
const btnElemento = document.getElementById("botao");
// Atrelar ao botão um evento de click.
btnElemento.addEventListener("click",function(){
    console.log("Botão clicado")
});
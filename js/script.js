
// console.log("Olá Mundo!");

//console.log(document.getElementById("botao").innerText);

//Recuperando o botão do HTML e colocando em uma constante.
const btnElemento = document.getElementById("botao");
//Atrelar ao botão um evento de click.
btnElemento.addEventListener("click",function() {
    console.log("Botão clicado!");
});

// console.log("Hello world!")

// console.log(document.getElementById("botao").innerText);

//Recuperando o botao do html e colocando em uma constante.
const btnElemento = document.getElementById("botao");
//atrelar ao botao um evento de click.
btnElemento.addEventListener("click",function() {
    console.log("Botão clicado!");
});

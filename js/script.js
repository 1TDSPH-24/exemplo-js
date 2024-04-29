//console.log("Olá mundo, ");
//console.log(document.getElementById("botao").innerHTML);

//Recuperando o botão do HTML e colocando em uma constante.
// const btnElemento = document.getElementById("botao");
// //Atrelar ao botão um evento de click.
// btnElemento.addEventListener("click",function () {
//     console.log("Botão clicado!");
// });

//Hoisting
var nome = "Cleiton";
 console.log(nome);
 
 if(true){
    var nome = "José";
 }

 console.log(nome);
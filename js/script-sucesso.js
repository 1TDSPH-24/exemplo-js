

//Recuperando o objeto atraves do localStorage
let usuario = JSON.parse(localStorage.getItem("usuario-validado"));

console.log(usuario.nomeCompleto);

const msgWelcome = document.querySelector("#bem-vindo");
msgWelcome.innerText = usuario.nomeCompleto;
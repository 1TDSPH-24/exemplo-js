

//Recuperando o objeto enviado atrav'es do localStorage.
let usuario = JSON.parse(localStorage.getItem("usuario-logado"));

console.log(usuario.nomeCompleto);

const msgWelcome = document.querySelector("#bem-vindo");
msgWelcome.innerText = usuario.nomeCompleto;
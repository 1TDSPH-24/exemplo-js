
//Recuperando o objeto enviado atraves do LocalStorage
let usuario = JSON.parse(localStorage.getItem("usuario-valido"))

console.log(usuario.nomeCompleto);

const msgWelcome = document.querySelector("#bem-vindo");
msgWelcome.iinerText = usuario.nomeCompleto;
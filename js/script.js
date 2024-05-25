
let listaUsuario = [
  {
    nomeCompleto: "Jose da Silva",
    emailUsuario: "jo@email.com",
    senhaUsuario: "123456",
  },
  {
    nomeCompleto: "Joao Antonio",
    emailUsuario: "an@email.com",
    senhaUsuario: "123456",
  },
  {
    nomeCompleto: "Marco Antonio",
    emailUsuario: "ma@email.com",
    senhaUsuario: "123456",
  },
  {
    nomeCompleto: "Carlos Silva",
    emailUsuario: "ca@email.com",
    senhaUsuario: "123456",
  },
  {
    nomeCompleto: "Luis Claudio",
    emailUsuario: "lc@email.com",
    senhaUsuario: "123456",
  },
];

function validar(inputEmail, inputSenha) {

//Recuperar elemento de msgStatus
let msgStatus = document.querySelector(".valida");

for (let x = 0; x < listaUsuario.length; x++) {
    
    if ((inputEmail.value == listaUsuario[x].emailUsuario) && (inputSenha.value == listaUsuario[x].senhaUsuario)) {
      //Redirect
        msgStatus.setAttribute("class","sucesso");
        msgStatus.innerText = "Login realizado com sucesso!";

        //Guardando o objeto validado no localStorage:
        localStorage.setItem("usuario-logado", JSON.stringify(listaUsuario[x]));
        
        setTimeout(function(){
            msgStatus.setAttribute("class","valida");
            msgStatus.innerText = "";
            window.location.href = "../sucesso.html";
        }, 3000);
        return false;
    }
}
    msgStatus.setAttribute("class","erro");
    msgStatus.innerText = "Login ou senha invalidos!";
    setTimeout(function(){
        msgStatus.setAttribute("class","valida");
        msgStatus.innerText = "";
        window.location.href = "../erro.html";
    }, 3000);
    return false;
}

let inputCpf = document.querySelector("#idCpf");
inputCpf.addEventListener("input", ()=>{
    let cpf = inputCpf.value;

    //Removendo os caractéres indesejados com regex:
    cpf = cpf.replace(/\D/g, "");
    //Aplicando a mascara ao CPF e adicionando pontos e traço nos lugares corretos.
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    inputCpf.value = cpf;
});


//Recuperando o botao login:
const botaoLogin = document.querySelector("#btnLogin");
//Recuperando o elemento dialog:
const modal = document.querySelector("dialog");
//Atrelando um evento de click ao botao login:
botaoLogin.addEventListener("click", (e)=>{
  modal.show();
})
const botaoClose = document.querySelector("#btnClose");
botaoClose.addEventListener("click", (e)=>{
  modal.close();
})
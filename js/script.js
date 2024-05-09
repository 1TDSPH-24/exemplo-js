
// console.log("Olá Mundo!");

// console.log(document.getElementById("botao").innerHTML);

//Recuperando o botão do HTML e colocando em uma constante.
// const btnElemento = document.getElementById("botao");
// //Atrelar ao botão um evento de click.
// btnElemento.addEventListener("click",function () {
//     console.log("Botão clicado!");
// });

//Hoisting - significa elevação
// var nome = "Cleiton";
//  console.log(nome);
 
//  if(true){
//     let nome = "José";
//  }

//  console.log(nome);

// Declaração de variáveis (var, let, const):
// // Usando var
// var x = 10;
// console.log(x);

// // Usando let
// let y = 20;
// console.log(y);
// y = "teste";
// console.log(y);
// // Usando const (constante, valor não pode ser alterado)
// const z = 30;
// console.log(z);
// // z = 20;

// Tipos de dados em JavaScript:
// Number
// let num = 10;
// let num2 = 10.34;
// console.log(num);
// console.log(num2);

// num = "10";
// console.log(num);

// String
// let str = "Olá, mundo!";
// console.log(str.charAt(0));
// console.log(str.indexOf("mundo"));
// let str2 = str.slice(str.indexOf("mundo"),(str.indexOf("mundo")+"mundo".length))
// console.log(str2);
// str = str.replace("mundo", "Gatos e Gatas");
// console.log(str);
// // Boolean
// let bool = true;
// console.log(bool);

// const elTexto = document.getElementById("texto");

// console.log(elTexto.innerText);
// console.log(elTexto.innerText.indexOf("ipsum"));
// console.log(elTexto.innerText.lastIndexOf("ipsum"));

// Array numérico
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6,7,8,9,10];
// console.log(arr1);
// console.table(arr1);
// // Mesclar Arrays com concat()
// let arr3 = arr1.concat(arr2);
// console.log(arr3);
// // Mesclar Arrays com operador SPREAD ( ... )
// let arr4 = [...arr1, ...arr2];
// console.log(arr4);

// // Array de strings
// let arr5 = ["João", "Maria", "José"];
// console.log(arr5);
// console.table(arr5);

//Recuperar elemento ul através de QuerySelector.
// const ulElemento = document.querySelector(".menu");

// let ulElementoArray = [...ulElemento.childNodes];

// console.log(ulElementoArray);

// // Array de objetos li
// ulElementoArray.forEach((li)=>{
//     li.innerHTML = "<p>Novo Texto</p>";
// });

// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1);
//Lendo o array através de um loop for.
// for (let i = 0; i < arr1.length; i++) {
//   console.log(`Indice = ${i} - Valor = ${arr1[i]}` );
// }

//Imprindo o array com forOf 
// for (const valor of arr1) {
//   console.log(valor);
// }

//Imprindo o array com forEach
// arr1.forEach(function (valor, indice, array) {
//   console.log(`Indice = ${indice} - Valor = ${valor}`);
//   console.log(array);
// });

// Object
// let obj = { nome: "João", idade: 25, devedor: true};
// console.log(obj);
// console.table(obj);
// console.log(obj.nome);
// console.log(obj.idade);
// console.log(obj.devedor);
// console.log(obj["nome"]);
// //Quero carregar um atributo do objeto utilizando uma variável
// let atributo = "idade";
// console.log("ATRIBUTO VARIADO : " + obj[atributo]);
// //Adicionando um nova propriedade ao objeto OBJ e utilizando o operador SPREAD para preencher
// obj = {...obj, cidade: "São Paulo", estado: "SP"};
// console.log(obj);

// //DESTRUCTURING
// const pessoa = {nome2 : 'Maria', idade2: 34, cidade: 'Florianópolis'};

// const {nome2, idade2, cidade} = pessoa;
// console.log(nome2);
// console.log(idade2);
// console.log(cidade);
// //Adicionando um novo atributo ao objeto pessoa
// pessoa.estado = "SC";
// console.log(pessoa);

//INICIAR UM SISTEMA DE VALIDAÇÃO

//Recuperando o botão de submit do Formulário
// const botaoSubmit = document.querySelector("#btnSubmit");

// //Adicionar um evento ao botão quando ocorrer.
// botaoSubmit.addEventListener("click", function(e){
//     //Recuperando os campos do formulário para validação!
//     e.preventDefault();  //Evita que o formulário seja enviado
//     const inputEmail = document.querySelector("#idEmail");
//     const inputSenha = document.querySelector("#idSenha");
//     console.log(inputEmail.value)
//     console.log(inputSenha.value)
// })

//Pegando o elemento Input
// Pessoa pessoa = new Pessoa();

let listaUsuario = [
    {
      nomeCompleto: "Mauricio Silva", 
      emailUsuario: "ma@email.com", 
      senhaUsuario: "123456",
    },
    {
        nomeCompleto: "Joao Antonio", 
        emailUsuario: "jo@email.com", 
        senhaUsuario: "123456",
    },
    {
        nomeCompleto: "Julio Cesar",
        emailUsuario: "jc@email.com", 
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
 
  
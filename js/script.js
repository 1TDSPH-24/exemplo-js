
// console.log("Olá Mundo!");

// console.log(document.getElementById("botao").innerHTML);

//Recuperando o botão do HTML e colocando em uma constante.
// const btnElemento = document.getElementById("botao");
// //Atrelar ao botão um evento de click.
// btnElemento.addEventListener("click",function () {
//     console.log("Botão clicado!");
// });

//Hoisting
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
/*
const botaoSubmit = document.querySelector("#btnSubmit");

//Adicionar um evento ao botão quando ocorrer.
botaoSubmit.addEventListener("click", function(e){
    //Recuperando os campos do formulário para validação!
    e.preventDefault();  //Evita que o formulário seja enviado
    const inputEmail = document.querySelector("#idEmail");
    const inputSenha = document.querySelector("#idSenha");
    console.log(inputEmail.value)
    console.log(inputSenha.value)
})
*/

function validar() {
/*
    if((a+b) > 10) {
        return false
    }else {
        return true
    }
*/

    const inputEmail = document.getElementById("idEmail").value;
    const inputSenha = document.getElementById("idSenha").value;

    if (inputEmail == "andre.luismesquita@hotmail.com" & inputSenha == "1234") {
        window.location.href = "../sucesso.html"
    } else {
        window.location.href = "../erro.html"
    }

    return false

}

/*
const inputEmail = document.getElementById("idEmail")
const inputLabel = document.querySelector("label[for=idEmail]")
*/
/*let numero = document.querySelector("h1");
let button = document.querySelector("button");
let contagem = 0;

function adicionarUm() {
    contagem++
    numero.innerHTML = contagem;
}

button.addEventListener("click", adicionarUm) */

/*let numero = document.querySelector("h1");

let botao = document.querySelector("button");

let contagem = 0;
 

botao.addEventListener("click", function(){

  contagem = contagem + 1;

  numero.innerText = contagem;

}); //função anônima */

let numero = document.querySelector("h1");

let botao = document.querySelector("button");

let contagem = 0;

 

botao.addEventListener("click", () => {

  contagem = contagem + 1;

  numero.innerText = contagem;

}); //arrow function
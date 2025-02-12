//AULA DE INNERTEXT E INNERHTML
/*let elementoH1 = document.querySelector("h1");

console.log(elementoH1);
console.log(elementoH1.innerText);

let elementoMain = document.querySelector("main");

console.log(elementoMain);
console.log(elementoMain.innerHTML);
console.log(elementoMain.innerText);

//alterando elementos do DOM e no HTMLCollection

elementoH1.innerText = "Novo título com JS";

elementoMain.innerHTML = `
<h2>Novo subtítulo</h2>
<ul>
	<li>Elemento da lista JS 01</li>
	<li>Elemento da lista JS 02</li>
	<li>Elemento da lista JS 03</li>
</ul>
` */

//TEMPLATE STRINGS
/*let nome = "Rafael";
let sobrenome = "Pereira";

let nomeCompleto = "Meu nome é " + nome + " " + sobrenome
console.log(nomeCompleto)

let templateString = `Meu nome é ${nome} ${sobrenome}`
console.log(templateString)

let newTemplateString = `Meu nome é ${nome},
e meu sobrenome é ${sobrenome}`
console.log(newTemplateString)

let numA = 5;
let numB = 9;
let soma = `A soma de ${numA} e ${numB} é ${numA + numB}`
console.log(soma);*/

let elementoJavaScript = document.createElement("li");
elementoJavaScript.innerText = "Javascript"
elementoJavaScript.id = "ling-js"
console.log(elementoJavaScript);

let listaLinguagens = document.querySelector(".lista-linguagens");
listaLinguagens.appendChild(elementoJavaScript);

/////////////////////

const postagemJavaScript = document.createElement("div");

postagemJavaScript.innerHTML =
`<h2 class="post-titulo">JavaScript</h2>
<p class="post-texto">
  JavaScript é uma linguagem de programação
</p>`

//podemos adicionar váriaveis com conteúdos aqui usando
//o ${}

const postagens = document.querySelector(".postagens");
postagens.appendChild(postagemJavaScript);
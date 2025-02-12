let div = document.querySelector("div");
let incluiClasse = div.classList.contains("borda-azul"); //não é necessário um ponto, diferente do querySelector
console.log(incluiClasse);

div.classList.add("texto-novo");
div.classList.remove("borda-azul");
console.log(incluiClasse); //this is intersting...

div.classList.toggle("borda-azul");
div.classList.toggle("borda-azul");
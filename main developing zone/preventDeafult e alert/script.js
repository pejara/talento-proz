let linkProz = document.getElementById("link-proz")
let btnSubmit = document.querySelector("button[type=submit]") //esse [type] deve ser onde colocamos atributos

linkProz.addEventListener("click", (e)=> {
    e.preventDefault();
    alert("Não foi possível clilcar no link");
})

btnSubmit.addEventListener("click", (e)=> {
    alert("Não foi possível enviar")
    e.preventDefault();
})
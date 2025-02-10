let elementoH1 = document.getElementById("título");
elementoH1.innerText = "Título de teste"

let elementoA = document.querySelector("a");
elementoA.innerText = "Site da Proz"

let elementoUl = document.querySelector("ul");
elementoUl.innerHTML = `
    <li>Não ordenado 1</li>
    <li>Não ordenado 2</li>
    <li>Não ordenado 3</li>
`

let elementoOl = document.getElementById("lista-ordenada");
elementoOl.innerHTML = `
    <li>Lista ordenada 1</li>
    <li>Lista ordenada 2</li>
    <li>Lista ordenada 3</li>
`
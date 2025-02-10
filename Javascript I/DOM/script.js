let elementoBody = document.querySelector("body");

let tituloJs = document.createElement("h1");
let divJs = document.createElement("div");
tituloJs.innerText = "Mangueira sem fio"
tituloJs.id = "titulo"

divJs.innerHTML =
`
    <h2>Uma mangueira sem fio, tecnologia ultrapassada de Sorocaba!</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque, nihil ea deleniti minus, laborum mollitia dolorum provident architecto accusamus unde minima voluptatum perspiciatis laudantium voluptatem similique. Voluptates quasi quia nobis? Ratione assumenda veritatis nam quo provident distinctio delectus sint, quidem magni neque excepturi rerum eligendi aperiam illo beatae quis eaque, quaerat quae? Inventore ea culpa blanditiis nulla esse eveniet debitis corrupti quam. Nulla cumque tempora et temporibus, eos vero rerum culpa nobis corrupti repellendus magnam illum?</p>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-G3pvGuXz9xTsQgE4BdXWX11wEWy66HgvCQ&s"></img><br>
    <a href="https://theonion.com/home-depot-releases-new-bluetooth-cordless-hose-1819592894/">Reportagem sobre o produto</a>
    <h6>Genial,kkkkkkkkkkk</h6>
`

elementoBody.appendChild(tituloJs);
elementoBody.appendChild(divJs);
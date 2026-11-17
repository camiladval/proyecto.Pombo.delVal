let formulario = document.querySelector(".forms");
let buscador = document.querySelector(".formsinput");
let mensaje = document.querySelector(".obligatorio_errorheader");
let listaCategorias = document.querySelector("#lista-categorias");
let opcionesCategoria = "";
let titulobusqueda = document.querySelector("#titulobusqueda");
let resultados = document.querySelector("#resultados");
let textoResultados = "";

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get("q");

titulobusqueda.innerText = `Resultados de búsqueda para: ${busqueda}`;

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    if (buscador.value == "") {
        mensaje.innerText = "La búsqueda no debe estar vacía";
    } else if (buscador.value.length < 3) {
        mensaje.innerText = "La búsqueda debe tener al menos 3 caracteres";
    } else {
        this.submit();
    }
});

fetch('https://dummyjson.com/products/categories')
.then(function(response){
    return response.json();
})
.then(function(data){
    for (let i = 0; i < data.length; i++) {
        opcionesCategoria += `<li><a href="./category.html?category=${data[i].slug}">${data[i].name}</a></li>`;
    }
    listaCategorias.innerHTML = opcionesCategoria;
})
.catch(function(error){
    console.log(error);
})

fetch(`https://dummyjson.com/products/search?q=${busqueda}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    if (data.products.length == 0) {
        resultados.innerHTML = `<p>No hay resultados para el término: ${busqueda}</p>`;
    } else {
        for (let i = 0; i < data.products.length; i++) {
            textoResultados += `
            <article class="busqueda">
                <img src="${data.products[i].images[0]}" alt="${data.products[i].title}" class="imagenes">
                <h3>${data.products[i].title}</h3>
                <p>${data.products[i].description}</p>
                <p>$${data.products[i].price}</p>
                <a href="./product.html?id=${data.products[i].id}" class="boton">Ver detalle</a>
            </article>`;
        }
        resultados.innerHTML = textoResultados;
    }
})
.catch(function(error){
    console.log(error);
});
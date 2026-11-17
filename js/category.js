let formulario = document.querySelector(".forms");
let buscador = document.querySelector(".formsinput");
let listaCategorias= document.querySelector("#lista-categorias");
let opcionesCategoria= "";
let producto_por_categoria = document.querySelector("#productos_por_categoria");
let producto_especifico = "";

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id= queryStringObj.get("category");

let tituloCategoria = document.querySelector(".titulocategoria");
let mensaje = document.querySelector(".obligatorio_errorheader");

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

        if (data[i].slug == id) {
            tituloCategoria.innerText = `Categoría: ${data[i].name}`;
        }
    }
    listaCategorias.innerHTML = opcionesCategoria;
})

.catch(function(error){
    console.log(error);
})

fetch(`https://dummyjson.com/products/category/${id}`)
.then(function(response){
    return response.json();
})

.then(function(data){
    for (let i = 0; i < data.products.length; i++) {
        producto_especifico += `
        <article class="productos">
            <img src="${data.products[i].images[0]}" alt="${data.products[i].title}" class="imagenes">
            <h3>${data.products[i].title}</h3>
            <p>${data.products[i].description}</p>
            <a href="./product.html?id=${data.products[i].id}" class="boton">Ver detalle</a>
        </article>
        `;
    }
    producto_por_categoria.innerHTML = producto_especifico;
})

.catch(function(error){
    console.log(error);
})

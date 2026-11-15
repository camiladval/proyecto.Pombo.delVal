let formulario = document.querySelector(".forms");
let buscador = document.querySelector(".formsinput");
let listaCategorias = document.querySelector("#lista-categorias");
let opcionesCategoria = "";
let titulo = document.querySelector(".titulolampara");
let imagen = document.querySelector(".imagenfija");
let marca = document.querySelector(".marca");
let descripcion = document.querySelector(".descripcion");
let precio = document.querySelector(".precio");
let categoria = document.querySelector(".categoria");
let stock = document.querySelector(".stock");
let tags = document.querySelector(".tags");
let opiniones = document.querySelector(".opiniones");
let textoTags = "";
let textoOpiniones = "";

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

formulario.addEventListener("submit", function(e) {

    if (buscador.value == "") {
        e.preventDefault();
        alert("El buscador no puede estar vacío");
    } else if (buscador.value.length < 3) {
        e.preventDefault();
        alert("La búsqueda debe tener al menos 3 caracteres");
    }

});

fetch('https://dummyjson.com/products/categories')
.then(function(response){
    return response.json();
})

.then(function(data){
    console.log(data);

for (let i = 0; i < data.length; i++) {
    opcionesCategoria += `<li><a href="./category.html?category=${data[i].name}">${data[i].name}</a></li>`;
}
listaCategorias.innerHTML = opcionesCategoria;
})

.catch(function(error){
    console.log(error);
})

fetch(`https://dummyjson.com/products/${id}`)

.then(function(response){
    return response.json();
})

.then(function(data){
    console.log(data);

    let cantidadTags = data.tags.length;

    titulo.innerText = data.title;
    imagen.src = data.images[0];
    imagen.alt = data.title;
    descripcion.innerText = data.description;
    precio.innerText = data.price;
    stock.innerText = data.stock;

    if (data.brand == undefined) {
        marca.innerText = "Sin marca";
    } else {
        marca.innerText = data.brand;
    }

    categoria.innerText = data.category;
    categoria.href = `./category.html?category=${data.category}`;


    if (cantidadTags > 3) {
        cantidadTags = 3;
    }

    for (let i = 0; i < cantidadTags; i++) {
        textoTags += `${data.tags[i]} `;
    }

    tags.innerText = textoTags;

    for (let i = 0; i < data.reviews.length; i++) {
        textoOpiniones += `
        <div class="opinion">
            <p><strong>${data.reviews[i].reviewerName}</strong></p>
            <p>Rating: ${data.reviews[i].rating}</p>
            <p>Fecha: ${data.reviews[i].date}</p>
            <p>${data.reviews[i].comment}</p>
        </div>`;
    }

    opiniones.innerHTML = textoOpiniones;
})

.catch(function(error){
    console.log(error);
});

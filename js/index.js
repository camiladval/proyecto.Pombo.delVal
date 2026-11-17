let formulario = document.querySelector(".forms");
let buscador = document.querySelector(".formsinput");
let listaCategorias= document.querySelector("#lista-categorias");
let opcionesCategoria= "";
let seccion1 = document.querySelector("#seccion1");
let seccion2 = document.querySelector("#seccion2");
let productos1 = "";
let productos2 = "";
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
    console.log(data);

for (let i = 0; i < data.length; i++) {
    opcionesCategoria += `<li><a href="./category.html?category=${data[i].slug}">${data[i].name}</a></li>`;
}
listaCategorias.innerHTML = opcionesCategoria;
})

.catch(function(error){
    console.log(error);
})

fetch('https://dummyjson.com/products/category/kitchen-accessories')
.then(function(response){
    return response.json();
})

.then(function(data){
    for (let i = 0; i < data.products.length && i < 10; i++) {
        productos1 += `
        <article class="productos">
            <img src="${data.products[i].images[0]}" alt="${data.products[i].title}" class="imagenes">
            <h3>${data.products[i].title}</h3>
            <p>${data.products[i].description}</p>
            <p class="precio">$${data.products[i].price}</p>
            <a href="./product.html?id=${data.products[i].id}" class="boton">Ver detalle</a>
        </article>`;
    }
    seccion1.innerHTML = productos1;
})

.catch(function(error){
    console.log(error);
});

fetch('https://dummyjson.com/products/category/groceries')
.then(function(response){
    return response.json();
})

.then(function(data){
    for (let i = 0; i < data.products.length && i < 10; i++) {
        productos2 += `
        <article class="productos">
            <img src="${data.products[i].images[0]}" alt="${data.products[i].title}" class="imagenes">
            <h3>${data.products[i].title}</h3>
            <p>${data.products[i].description}</p>
            <p class="precio">$${data.products[i].price}</p>
            <a href="./product.html?id=${data.products[i].id}" class="boton">Ver detalle</a>
        </article>`;
    }
    seccion2.innerHTML = productos2;
})

.catch(function(error){
    console.log(error);
});
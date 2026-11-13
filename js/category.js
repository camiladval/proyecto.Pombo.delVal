let formulario = document.querySelector(".forms");
let buscador = document.querySelector(".formsinput");
let listaCategorias= document.querySelector("#lista-categorias");
let opcionesCategoria= "";


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

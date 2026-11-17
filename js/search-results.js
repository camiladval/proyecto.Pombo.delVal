let formulario = document.querySelector(".forms");
let buscador = document.querySelector(".formsinput");
let listaCategorias= document.querySelector("#lista-categorias");
let opcionesCategoria= "";
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

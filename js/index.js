let formulario = document.querySelector(".forms");
let buscador = document.querySelector(".formsinput");

formulario.addEventListener("submit", function(e) {

    if (buscador.value == "") {
        e.preventDefault();
        alert("El buscador no puede estar vacío");
    } else if (buscador.value.length < 3) {
        e.preventDefault();
        alert("La búsqueda debe tener al menos 3 caracteres");
    }

});

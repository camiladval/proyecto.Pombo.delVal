let formulario = document.querySelector(".forms");
let buscador = document.querySelector(".formsinput");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    if (buscador.value == "") {
         alert("El buscador no puede estar vacío");
    } else if (buscador.value.length < 3) {
       
        alert("La búsqueda debe tener al menos 3 caracteres");
        this.submit();
    }

});

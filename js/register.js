let formulario = document.querySelector(".forms");
let buscador = document.querySelector(".formsinput");
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

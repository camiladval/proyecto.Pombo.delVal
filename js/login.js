let formulario = document.querySelector(".forms");
let buscador = document.querySelector(".formsinput");
let formulariologin = document.querySelector(".formlogin");
let email = document.querySelector("#email");
let password = document.querySelector("#pass");
let erroremail= document.querySelector(".obligatorio_erroremail");
let errorpass= document.querySelector(".obligatorio_errorpass");


formulario.addEventListener("submit", function(e) {
 e.preventDefault();
    if (buscador.value == "") {
        alert("El buscador no puede estar vacío");
    } else if (buscador.value.length < 3) {
        alert("La búsqueda debe tener al menos 3 caracteres");
        this.submit();
    }

});
formulariologin.addEventListener("submit", function(e) {
 e.preventDefault();
    if (email.value == "") {
        erroremail.innerText = "El email es obligatorio";
    }
    else if (password.value == "") {
        errorpass.innerText = "La contraseña es obligatoria";
    }
    else if (password.value.length < 6) {
        errorpass.innerText = "La contraseña debe tener al menos 6 caracteres";
    }
    else{

        localStorage.setItem("email", email.value);
        this.submit();
    }

});
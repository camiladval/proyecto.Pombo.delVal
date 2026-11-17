let formulario = document.querySelector(".forms");
let buscador = document.querySelector(".formsinput");
let mensaje = document.querySelector(".obligatorio_errorheader");
let formularioRegistro= document.querySelector(".formregistro");
let email_registro= document.querySelector("#email");
let contra_registro= document.querySelector("#contraseña");
let repetir_contra= document.querySelector("#repetir");
let error_registro= document.querySelector(".errorregistro");



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


formularioRegistro.addEventListener("submit", function(e) {
    e.preventDefault();

    if(email_registro.value == ""){
        error_registro.innerText = "El email es obligatorio";
    } 
    else if (contra_registro.value == ""){
        error_registro.innerText = "La contraseña es obligatoria";
    }
    else if (contra_registro.value.length < 6){
        error_registro.innerText = "La contraseña debe tener al menos 6 caracteres";
    }
    else if (contra_registro.value !== repetir_contra.value){
        error_registro.innerText = "Las contraseñas no coinciden";
    } else{
        this.submit();
    }
});

let menu = document.querySelector(".navarriba");
let emailUsuario = localStorage.getItem("email");

if (emailUsuario != null) {
    menu.innerHTML = `
    <li class="listahome"><a class="barra" href="./index.html">Home</a></li>
    <li class="listahome bienvenido">Bienvenido: ${emailUsuario}</li>
    <li class="listahome"><a class="barra" href="./login.html" id="logoutButton">Log out</a></li>`;
}


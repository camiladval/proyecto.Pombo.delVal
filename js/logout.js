let logout = document.querySelector("#logoutButton");

if (logout != null) {
    logout.addEventListener("click", function() {
        localStorage.removeItem("email");
    });
}

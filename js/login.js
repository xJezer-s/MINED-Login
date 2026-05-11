function adminLogin() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let alertBox = document.getElementById('loginError');
    alertBox.style.display = 'none';
    alertBox.classList.remove('alert-success');
    alertBox.classList.remove('alert-danger');
    switch (email) {
        case "admin":
            if (password === "123456789") {
                document.getElementById('message').textContent = "Inicio de sesión exitoso. Redirigiendo...";
                alertBox.classList.add('alert-success');
                alertBox.style.display = 'block';
                break;

            } else {
                document.getElementById('message').textContent = "Contraseña incorrecta. Inténtalo de nuevo.";
                alertBox.classList.add('alert-danger');
                alertBox.style.display = 'block';
                break;
            }
        default:
            document.getElementById('message').textContent = "Estas credenciales no coinciden con nuestros registros.";
            alertBox.classList.add('alert-danger');
            alertBox.style.display = 'block';
            break;
    }
}
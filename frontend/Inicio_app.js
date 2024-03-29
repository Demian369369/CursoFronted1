document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("iniciar-sesion").addEventListener("click", function () {
        const usuario = prompt("Ingrese su nombre de usuario:");
        const contrasena = prompt("Ingrese su contraseña:");
        fetch('/iniciar-sesion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ usuario, contrasena }),
        })
        .then(response => {
            if (response.status === 200) {
                alert("Inicio de sesión exitoso");
            } else if (response.status === 401) {
                alert("Credenciales incorrectas");
            } else {
                alert("Error en el servidor");
            }
        })
        .catch(error => {
            console.error("Error al iniciar sesión:", error);
        });
    });
    document.getElementById("Registro").addEventListener("click", function () {
         window.location.href = "Registro.html";
        alert("Redirigiendo a la página de registro...");
    });
});
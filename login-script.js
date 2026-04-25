document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // 1. Obtener lo que el usuario escribió en el login
        const userIngresado = document.querySelector('.input2').value;
        const passIngresada = document.querySelector('.input3').value;

        // 2. Traer los datos que guardamos en la página de registro
        const datosGuardados = JSON.parse(localStorage.getItem('usuarioRegistrado'));

        // 3. VALIDACIÓN
        if (datosGuardados) {
            // Comparamos usuario Y contraseña
            if (userIngresado === datosGuardados.usuario && passIngresada === datosGuardados.clave) {
                alert(`¡Bienvenido de nuevo, ${datosGuardados.nombre}!`);
                window.location.href = "index.html"; // ENTRAR
            } else {
                alert("❌ Usuario o contraseña incorrectos.");
            }
        } else {
            alert("❌ No hay ninguna cuenta registrada en este navegador.");
        }
    });
});
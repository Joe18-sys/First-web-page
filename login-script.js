document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        
        const userIngresado = document.querySelector('.input2').value;
        const passIngresada = document.querySelector('.input3').value;

        
        const datosGuardados = JSON.parse(localStorage.getItem('usuarioRegistrado'));

        
        if (datosGuardados) {
           
            if (userIngresado === datosGuardados.usuario && passIngresada === datosGuardados.clave) {
                alert(`¡Bienvenido de nuevo, ${datosGuardados.nombre}!`);
                window.location.href = "index.html"; 
            } else {
                alert("❌ Usuario o contraseña incorrectos.");
            }
        } else {
            alert("❌ No hay ninguna cuenta registrada en este navegador.");
        }
    });
});

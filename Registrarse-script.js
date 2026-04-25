document.addEventListener('DOMContentLoaded', () => {
    const registroForm = document.querySelector('form');
    
    registroForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputs = registroForm.querySelectorAll('input');
        
        const nombre = inputs[0].value;
        const email = inputs[1].value;
        const user = inputs[2].value;
        const pass = inputs[3].value;
        const confirmPass = inputs[4].value;

        if (pass !== confirmPass) {
            alert("⚠️ Las contraseñas no coinciden.");
            return;
        }

       
        const datosUsuario = {
            usuario: user,
            clave: pass,
            nombre: nombre
        };

        
        localStorage.setItem('usuarioRegistrado', JSON.stringify(datosUsuario));

        alert("¡Cuenta creada! Ahora inicia sesión.");
        window.location.href = "login.html"; 
    });
});

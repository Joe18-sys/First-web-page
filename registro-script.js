document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.reserva-form');
    if (!form) return; 

    const fechaInput = form.querySelector('input[type="date"]');
    const hoy = new Date().toISOString().split('T')[0];
    if (fechaInput) fechaInput.setAttribute('min', hoy);

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const nombre = form.querySelector('input[type="text"]').value;
        const destino = form.querySelector('select').options[form.querySelector('select').selectedIndex].text;
        const fecha = fechaInput.value;

        
        const btn = form.querySelector('.btn-modern');
        const originalText = btn.textContent;
        
        btn.disabled = true;
        btn.style.opacity = "0.7";
        btn.textContent = 'Verificando disponibilidad...';

        
        setTimeout(() => {
            alert(`¡Disponibilidad confirmada para ${destino}!\n\nPresiona OK para proceder al pago seguro y finalizar tu reserva.`);
            
            window.location.href = "Pay-metod.html"; 

            
        }, 1500);
    });
});

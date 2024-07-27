// Redirigir a una nueva pestaña
document.querySelectorAll('.icons a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const url = this.href;
        setTimeout(() => {
            window.open(url, '_blank');
        }, 500); // Tiempo en milisegundos para esperar antes de redirigir
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.tab__ button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            window.location.href = url;
        });
    });
});


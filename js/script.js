

// Redirigir a una nueva pestaña
document.querySelectorAll('.icons a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const url = this.href;
        setTimeout(() => {
            window.open(url, '_blank');
        }, 300); // Tiempo en milisegundos para esperar antes de redirigir
    });
});

//Desplegar menú de navegación
document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.querySelector('.toggle___btn');
    const toggleBtnIcon = document.querySelector('.toggle___btn i');
    const dropDownMenu = document.querySelector('.dropdown___menu');

    toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');

        toggleBtn.classList.toggle('open');

        if (isOpen) {
            toggleBtnIcon.className = 'fa-solid fa-xmark';
        } else {
            toggleBtnIcon.className = 'fa-solid fa-bars';
        }
    };
});



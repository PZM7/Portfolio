// Navegación móvil
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('nav-menu_visible');
    });
}

// Función para obtener el nombre del archivo actual
function filename() {
    return window.location.pathname.split('/').pop();
}

// Funcionalidad del modal (solo para studies.html)
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('desarrollador-modal');
    const clickableCard = document.querySelector('.clickable-card');
    const closeBtn = document.querySelector('.modal-close');
    const footer = document.querySelector('footer');
    
    // Solo ejecutar si estamos en studies.html y existe el modal
    if (modal && clickableCard) {
        // Abrir modal al hacer clic en la tarjeta
        clickableCard.addEventListener('click', function() {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            if (footer) {
                footer.style.display = 'none';
            }
        });
        
        // Cerrar modal con el botón X
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
                if (footer) {
                    footer.style.display = 'block';
                }
            });
        }
        
        // Cerrar modal al hacer clic fuera del contenido
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
                if (footer) {
                    footer.style.display = 'block';
                }
            }
        });
        
        // Cerrar modal con la tecla Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
                if (footer) {
                    footer.style.display = 'block';
                }
            }
        });
    }
});


/**
 * Phone Popup Module
 * Crea y gestiona el popup del teléfono de forma reutilizable
 */

class PhonePopup {
    constructor() {
        this.popup = null;
        this.isInitialized = false;
        this.phoneNumber = '+34600000000';
        this.whatsappNumber = '34600000000';
        this.defaultMessage = 'Hola Pedro, me gustaría contactar contigo sobre oportunidades profesionales.';
    }

    // Crear el HTML del popup
    createPopupHTML() {
        return `
            <div id="phone-popup" class="phone-popup">
                <div class="phone-popup-content">
                    <div class="phone-popup-header">
                        <h3>Contactar por teléfono</h3>
                        <button class="phone-popup-close">&times;</button>
                    </div>
                    <div class="phone-popup-body">
                        <p class="phone-number">+34 600 000 000</p>
                        <div class="phone-options">
                            <button class="phone-option copy-btn">
                                <i class="fas fa-copy"></i>
                                <span>Copiar número</span>
                            </button>
                            <button class="phone-option whatsapp-btn">
                                <i class="fab fa-whatsapp"></i>
                                <span>Enviar WhatsApp</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Crear el popup si no existe
    createPopup() {
        if (document.getElementById('phone-popup')) {
            return;
        }
        
        const popupHTML = this.createPopupHTML();
        document.body.insertAdjacentHTML('beforeend', popupHTML);
        this.popup = document.getElementById('phone-popup');
    }

    // Abrir el popup
    openPopup() {
        if (!this.popup) {
            this.createPopup();
        }
        this.popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Cerrar el popup
    closePopup() {
        if (this.popup) {
            this.popup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // Copiar número al portapapeles
    copyPhoneNumber() {
        navigator.clipboard.writeText(this.phoneNumber).then(() => {
            const copyBtn = document.querySelector('.copy-btn');
            if (copyBtn) {
                const originalText = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i class="fas fa-check"></i><span>¡Copiado!</span>';
                copyBtn.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
                
                setTimeout(() => {
                    copyBtn.innerHTML = originalText;
                    copyBtn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                }, 2000);
            }
        }).catch(err => {
            console.error('Error al copiar: ', err);
            alert('Error al copiar el número de teléfono');
        });
    }

    // Abrir WhatsApp
    openWhatsApp() {
        const message = encodeURIComponent(this.defaultMessage);
        const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    }

    // Configurar eventos
    setupEvents() {
        if (this.isInitialized) return;
        
        const phoneLink = document.querySelector('.phone-link');
        const closeBtn = document.querySelector('.phone-popup-close');
        const copyBtn = document.querySelector('.copy-btn');
        const whatsappBtn = document.querySelector('.whatsapp-btn');

        // Evento para abrir popup
        if (phoneLink) {
            phoneLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.openPopup();
            });
        }

        // Evento para cerrar con botón X
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.closePopup();
            });
        }

        // Evento para cerrar haciendo clic fuera
        if (this.popup) {
            this.popup.addEventListener('click', (e) => {
                if (e.target === this.popup) {
                    this.closePopup();
                }
            });
        }

        // Evento para cerrar con Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.popup && this.popup.style.display === 'block') {
                this.closePopup();
            }
        });

        // Evento para copiar número
        if (copyBtn) {
            copyBtn.addEventListener('click', () => {
                this.copyPhoneNumber();
            });
        }

        // Evento para WhatsApp
        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', () => {
                this.openWhatsApp();
            });
        }

        this.isInitialized = true;
    }

    // Inicializar el popup
    init() {
        this.createPopup();
        this.setupEvents();
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    const phonePopup = new PhonePopup();
    phonePopup.init();
}); 
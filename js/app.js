// Selecciona todos los botones con la clase 'btn' dentro del contenedor 'buttons'
const buttons = document.querySelectorAll('.buttons .btn'),
    // Selecciona el contenedor de notificaciones
    notification = document.querySelector('.notifications');

// Objeto que contiene los detalles para los diferentes tipos de toasts
const toastDetails = {
    timer: 5000, // Tiempo en milisegundos antes de que el toast desaparezca
    success: { // Detalles del toast de éxito
        icon: 'fa-circle-check', // Ícono para el toast de éxito
        text: 'Success: This is a success toast.', // Texto para el toast de éxito
    },
    error: { // Detalles del toast de error
        icon: 'fa-circle-xmark', // Ícono para el toast de error
        text: 'Error: This is an error toast.', // Texto para el toast de error
    },
    warning: { // Detalles del toast de advertencia
        icon: 'fa-triangle-exclamation', // Ícono para el toast de advertencia
        text: 'Warning: This is a warning toast.', // Texto para el toast de advertencia
    },
    info: { // Detalles del toast de información
        icon: 'fa-circle-info', // Ícono para el toast de información
        text: 'Info: This is an information toast.', // Texto para el toast de información
    }
};

// Función para crear un toast
const createToast = (id) => {
    // Obtiene el ícono y el texto del tipo de toast especificado por el id
    const { icon, text } = toastDetails[id];
    // Crea un nuevo elemento 'li' para el toast
    const toast = document.createElement('li');
    // Asigna clases al toast para su estilo y animación
    toast.className = `toast ${id}`;

    // Define el HTML interno del toast, incluyendo el ícono y el texto
    toast.innerHTML = `
        <div class="column">
           <i class="fa-solid ${icon}"></i>
            <span>${text}</span>
        </div>
        <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;

    // Añade el toast al contenedor de notificaciones
    notification.appendChild(toast);
    // Establece un temporizador para eliminar el toast después del tiempo definido
    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
};

// Función para eliminar un toast
const removeToast = (toast) => {
    // Añade la clase 'hide' para iniciar la animación de desaparición
    toast.classList.add('hide');
    // Limpia el temporizador si existe para evitar que se ejecute después de la eliminación
    if (toast.timeoutId) clearTimeout(toast.timeoutId)
    // Establece un temporizador para eliminar el elemento del DOM después de la animación
    setTimeout(() => toast.remove(), 500);
};

// Convierte la NodeList de botones a un array y asigna un evento 'click' a cada botón
[...buttons].map(button =>
    button.addEventListener('click', () => createToast(button.id))
);

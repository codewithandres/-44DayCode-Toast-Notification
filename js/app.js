
const buttons = document.querySelectorAll('.buttons .btn'),
    notification = document.querySelector('.notifications');

const toastDetails = {
    timer: 5000,
    success: {
        icon: 'fa-circle-check',
        text: 'Success: This is a success toast.',
    },
    error: {
        icon: 'fa-circle-xmark',
        text: 'Error: This is an error toast.',
    },
    warning: {
        icon: 'fa-triangle-exclamation',
        text: 'Warning: This is a warning toast.',
    },
    info: {
        icon: 'fa-circle-info',
        text: 'Info: This is an information toast.',
    }
}

const createToast = (id) => {
    const { icon, text } = toastDetails[id];
    const toast = document.createElement('li');
    toast.className = `toast ${id}`;

    toast.innerHTML = `
        <div class="column">
           <i class="fa-solid ${icon}"></i>
            <span>${text}</span>
        </div>
        <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>
     `;

    notification.appendChild(toast);
};

[...buttons].map(button =>
    button.addEventListener('click', () => createToast(button.id))
);
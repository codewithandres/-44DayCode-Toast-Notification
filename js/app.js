
const buttons = document.querySelectorAll('.buttons .btn'),
    notification = document.querySelector('.notifications');

const createToast = (id) => {
    const toast = document.createElement('li');
    toast.className = `toast ${id}`;

    toast.innerHTML = `
        <div class="column">
          <i class="fa-solid "></i>
          <span></span>
        </div>
        <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>
    `;

    notification.appendChild(toast);
};

[...buttons].map(button =>
    button.addEventListener('click', () => createToast(button.id))
);
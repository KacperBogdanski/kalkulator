const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('operator')) {
            display.value += ` ${button.textContent} `;
        } else if (button.classList.contains('equal')) {
            display.value = eval(display.value.replace(/x/g, '*'));
        } else if (button.classList.contains('clear')) {
            display.value = '';
        } else {
            display.value += button.textContent;
        }
    });
});

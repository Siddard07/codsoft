
const input = document.querySelector('input[name="calc"]');
const buttons = document.querySelectorAll('.button');

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.classList.contains('number') || button.classList.contains('operator')) {
            if (value === '=') {
                try {
                    currentInput = eval(currentInput).toString();
                } catch (e) {
                    currentInput = "Error";
                }
            } else {
                currentInput += value;
            }
        } 
        if (button.classList.contains('clear')) {
            currentInput = "";
        }
        if (button.classList.contains('backspace')) {
            currentInput = currentInput.slice(0, -2);
        }

        input.value = currentInput;
    });
});

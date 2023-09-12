let currentInput = '';

        function appendToDisplay(value) {
            const display = document.getElementById('display-content');
            if (currentInput === '0' && value !== '.') {
                currentInput = '';
            }
            if (['+', '-', '*', '/'].includes(value)) {
                const lastChar = currentInput[currentInput.length - 1];
                if (['+', '-', '*', '/'].includes(lastChar)) {
                    return;
                }
            }

            currentInput += value;
            display.textContent = currentInput;
        }

        function backspace() {
            const display = document.getElementById('display-content');
            if (currentInput.length > 1) {
                currentInput = currentInput.slice(0, -1);
            } else {
                currentInput = '0';
            }
            display.textContent = currentInput;
        }

        function calculate() {
            const display = document.getElementById('display-content');
            try {
                const result = eval(currentInput);
                display.textContent = result;
                currentInput = result.toString();
            } catch (error) {
                display.textContent = 'Error';
                currentInput = '';
            }
        }

        function toggleSign() {
            const display = document.getElementById('display-content');
            if (currentInput.startsWith('-')) {
                currentInput = currentInput.substring(1);
            } else {
                currentInput = '-' + currentInput;
            }
            display.textContent = currentInput;
        }

        function clearDisplay() {
            const display = document.getElementById('display-content');
            display.textContent = '0';
            currentInput = '';
        }
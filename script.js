// Get references to elements
const display = document.querySelector('.screen input[name="display"]');
const numberButtons = document.querySelectorAll('.button input[type="button"]:not(.equal)');
const operatorButtons = document.querySelectorAll('.button input[type="button"]:not(.equal)');



numberButtons.forEach(button => {
    button.addEventListener('click', function() {
        console.log("Button clicked:", button.value);
        if (display.value === '0' || display.value === 'display' || display.value === 'Error') {
            display.value = button.value;
        } else {
            display.value += button.value;
        }
        console.log("Display value:", display.value);
    });
});

// Attach click event listeners to number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (display.value === '0' || display.value === 'display' || display.value === 'Error') {
            display.value = button.value;
        } else {
            display.value += button.value;
        }
    });
});

// Attach click event listeners to operator buttons
operatorButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (display.value !== 'display' && display.value !== 'Error') {
            display.value += button.value;
        }
    });
});

// Attach click event listener to equal button
document.querySelector('.equal').addEventListener('click', function() {
    if (display.value !== 'display' && display.value !== 'Error') {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    }
});

// Clear the display when AC button is clicked
document.querySelector('input[value="AC"]').addEventListener('click', function() {
    display.value = '0';
});

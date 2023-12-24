//your JS code here. If required.
function convertToUpperCase() {
        // Get the input field
        var inputField = document.getElementById("fname");

        // Get the value and convert to uppercase
        var inputValue = inputField.value.toUpperCase();

        // Set the uppercase value back to the input field
        inputField.value = inputValue;
    }

    // Add event listener to the input field for the "blur" event
    document.getElementById("fname").addEventListener("blur", convertToUpperCase);
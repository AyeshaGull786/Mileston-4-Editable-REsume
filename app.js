// Function to make each input field editable and allow saving for each field
function makeEditable() {
    var inputFields = document.querySelectorAll('.editable-input');
    inputFields.forEach(function (input) {
        // Allow the field to be edited when clicked (focus)
        input.addEventListener('focus', function () {
            input.removeAttribute('readonly');
        });
        // Automatically save the content when focus is lost (blur event)
        input.addEventListener('blur', function () {
            input.setAttribute('readonly', 'true'); // Lock the input after editing
        });
    });
}
// Function to save a specific field's data when the save button is clicked
function saveChanges(fieldId) {
    var field = document.getElementById(fieldId);
    if (field) {
        console.log("".concat(fieldId, ": ").concat(field.value)); // Log the updated value of the field
        alert("".concat(fieldId, " has been updated!")); // Optionally, show an alert for confirmation
    }
}
// Initialize editable functionality and event listeners
window.onload = function () {
    makeEditable();
    // Add event listeners to each save button
    var saveButtons = document.querySelectorAll('.save-btn');
    saveButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            var fieldId = event.target.getAttribute('data-field');
            if (fieldId) {
                saveChanges(fieldId);
            }
        });
    });
};

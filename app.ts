// Function to make each input field editable and allow saving for each field
function makeEditable() {
    const inputFields = document.querySelectorAll('.editable-input') as NodeListOf<HTMLInputElement>;
  
    inputFields.forEach(input => {
      // Allow the field to be edited when clicked (focus)
      input.addEventListener('focus', () => {
        input.removeAttribute('readonly');
      });
  
      // Automatically save the content when focus is lost (blur event)
      input.addEventListener('blur', () => {
        input.setAttribute('readonly', 'true');  // Lock the input after editing
      });
    });
  }
  
  // Function to save a specific field's data when the save button is clicked
  function saveChanges(fieldId: string) {
    const field = document.getElementById(fieldId) as HTMLInputElement;
    
    if (field) {
      console.log(`${fieldId}: ${field.value}`); // Log the updated value of the field
      alert(`${fieldId} has been updated!`); // Optionally, show an alert for confirmation
    }
  }
  
  // Initialize editable functionality and event listeners
  window.onload = () => {
    makeEditable();
  
    // Add event listeners to each save button
    const saveButtons = document.querySelectorAll('.save-btn') as NodeListOf<HTMLButtonElement>;
  
    saveButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        const fieldId = (event.target as HTMLElement).getAttribute('data-field');
        if (fieldId) {
          saveChanges(fieldId);
        }
      });
    });
  };
  
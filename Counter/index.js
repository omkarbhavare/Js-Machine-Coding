document.addEventListener("DOMContentLoaded", () => {
  // ======= DOM References =======
  const incrementBtn = document.getElementById("incrementBtn");
  const decrementBtn = document.getElementById("decrementBtn");
  const resetBtn = document.getElementById("resetBtn");
  const customInput = document.getElementById("customInput");
  const counterValue = document.getElementById("counterValue");

  // ======= Constants =======
  const MAX_LIMIT = 50;
  const MIN_LIMIT = 0;

  // ======= State =======
  let counter = 0;
  let step = parseInt(customInput.value) || 1;

  // ======= Utilities =======

  // Clamp input to valid range and update step
  function validateAndSetStep() {
    let value = parseInt(customInput.value);
    if (isNaN(value) || value <= 0 || value > MAX_LIMIT) {
      step = 1;
      customInput.value = 1;
    } else {
      step = value;
    }
  }

  // Update counter display
  function updateDisplay() {
    counterValue.textContent = counter;
  }

  // Enable/Disable buttons based on current counter
  function toggleButtonStates() {
    incrementBtn.disabled = counter + step > MAX_LIMIT;
    decrementBtn.disabled = counter - step < MIN_LIMIT;
  }

  // ======= Event Listeners =======

  // On input change
  customInput.addEventListener("change", () => {
    validateAndSetStep();
    toggleButtonStates();
  });

  // Increment handler
  incrementBtn.addEventListener("click", () => {
    if (counter + step <= MAX_LIMIT) {
      counter += step;
      updateDisplay();
      toggleButtonStates();
    }
  });

  // Decrement handler
  decrementBtn.addEventListener("click", () => {
    if (counter - step >= MIN_LIMIT) {
      counter -= step;
      updateDisplay();
      toggleButtonStates();
    }
  });

  // Reset handler
  resetBtn.addEventListener("click", () => {
    counter = 0;
    validateAndSetStep();
    updateDisplay();
    toggleButtonStates();
  });

  // ======= Initial Setup =======
  validateAndSetStep();
  updateDisplay();
  toggleButtonStates();
});

document.addEventListener("DOMContentLoaded", () => {
  const displayPanel = document.querySelector(".display");
  const inputNumber = document.querySelector("#numberInput");
  const incrementBtn = document.querySelector(".increment");
  const decrementBtn = document.querySelector(".decrement");
  const resetBtn = document.querySelector(".reset");

  // initial safe defaults
  let number = parseInt(inputNumber.value, 10) || 1;
  let count = 0;

  const MAX = 50;
  const MIN = 0;

  function updateButtons() {
    // disable increment if the next increment would push > MAX
    incrementBtn.disabled = count + number > MAX;
    // disable decrement if the next decrement would go below MIN
    decrementBtn.disabled = count - number < MIN;
  }

  function display(n) {
    displayPanel.innerText = `Display Number : ${n}`;
  }

  // validate and apply input changes
  inputNumber.addEventListener("change", () => {
    const parsed = parseInt(inputNumber.value, 10);

    // allow only valid integers between 1 and 10
    if (!Number.isNaN(parsed) && parsed > 0 && parsed < 11) {
      number = parsed;
    } else {
      // invalid: revert input to current valid number and optionally show message
      inputNumber.value = number;
      // optionally: alert("Enter a number between 1 and 10");
    }

    // After changing step-size, re-evaluate buttons (because count+number may cross MAX)
    updateButtons();
  });

  incrementBtn.addEventListener("click", () => {
    // check BEFORE mutating
    if (count + number <= MAX) {
      count += number;
      display(count);
    }
    updateButtons();
  });

  decrementBtn.addEventListener("click", () => {
    if (count - number >= MIN) {
      count -= number;
      display(count);
    }
    updateButtons();
  });

  resetBtn.addEventListener("click", () => {
    count = 0;
    number = 1;
    inputNumber.value = number; // keep UI and state consistent
    display(count);
    updateButtons();
  });

  // initial UI sync
  display(count);
  updateButtons();
});

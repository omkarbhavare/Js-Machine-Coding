document.addEventListener("DOMContentLoaded", () => {
  const inputValue = document.getElementById("input-value");
  const output = document.getElementById("output");
  const incrementBtn = document.getElementById("increment-btn");
  const decrementBtn = document.getElementById("decrement-btn");
  const resetBtn = document.getElementById("reset-btn");
  let number = parseInt(inputValue.value);
  let finaloutput = 0;

  inputValue.addEventListener("change", () => {
    number = parseInt(inputValue.value);
  });

  incrementBtn.addEventListener("click", () => {
    finaloutput = finaloutput + number;
    output.innerText = finaloutput;
  });

  decrementBtn.addEventListener("click", () => {
    finaloutput = finaloutput - number;
    output.innerText = finaloutput;
  });

  resetBtn.addEventListener("click", () => {
    finaloutput = 0;
    output.innerText = finaloutput;
  });
});

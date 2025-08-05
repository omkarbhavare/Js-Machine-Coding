document.addEventListener("DOMContentLoaded", () => {
  const openFormBtn = document.querySelector("#openFormBtn");
  const overlay = document.querySelector("#overlay");
  const closeBtn = document.querySelector("#closeBtn");
  const form = document.querySelector("#regForm");

  const fullName = document.querySelector("#fullName");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const confirmPwd = document.querySelector("#confirmPwd");

  const passwordInput = document.getElementById("password");
  const togglePasswordIcon = document.getElementById("togglePasswordIcon");

  function openModal() {
    overlay.style.display = "flex";
  }

  function closeModal() {
    overlay.style.display = "none";
  }

  openFormBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });

  //======== Validation Helper ===========
  function showSuccess(input) {
    const formControl = input.parentElement;
    console.log(formControl);
    formControl.className = "formControl success";
    formControl.querySelector("small").innerText = "";
  }

  function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "formControl error";
    formControl.querySelector("small").innerText = message;
  }

  // ========== REGREX PATTERNS ==================

  const patterns = {
    regrexFullName: /^[A-Za-z ]{3,}$/,
    regrexEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    regrexPassword:
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
  };

  fullName.addEventListener("blur", () => {
    patterns.regrexFullName.test(fullName.value.trim())
      ? showSuccess(fullName)
      : showError(fullName, "Full Name must be 3+ letters only");
  });

  email.addEventListener("blur", () => {
    patterns.regrexEmail.test(email.value.trim())
      ? showSuccess(email)
      : showError(email, "Enter a valid email.");
  });

  password.addEventListener("blur", () => {
    patterns.regrexPassword.test(password.value)
      ? showSuccess(password)
      : showError(password, "Min 6 chars, 1 letter & 1 number.");
  });

  confirmPwd.addEventListener("blur", () => {
    confirmPwd.value === password.value && confirmPwd.value !== ""
      ? showSuccess(confirmPwd)
      : showError(confirmPwd, "Passwords do not match.");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const allValid = [...form.querySelectorAll(".form-control")].every((c) =>
      c.classList.contains("success")
    );

    if (allValid) {
      alert("Registration Successful!"); // Show success message
      form.reset(); // Clear all inputs
      [...form.querySelectorAll(".form-control")].forEach(
        (c) => (c.className = "form-control") // Remove success/error styles
      );
      closeModal(); // Close the modal popup
    }
  });
});

# 📝 JavaScript Modal Registration Form

A user-friendly, accessible modal popup registration form built using **HTML**, **CSS**, and **Vanilla JavaScript**, featuring client-side validation with regex and interactive UI behaviors.

## 📌 Project Objective / Question

Build a modal popup form with real-time input validation using blur events and regex. The modal should include a registration form with the following fields:

- Full Name
- Email
- Password
- Confirm Password

**Features required:**

- Open/close modal popup
- Blur-based validation with clear success/error messages
- Password confirmation check
- Form submission validation

## 🧠 Functional Requirements

| ✅ Feature       | 💡 Description                                                  |
| ---------------- | --------------------------------------------------------------- |
| Open Modal       | Open registration form in modal on button click                 |
| Close Modal      | Close modal via ❌ button or clicking outside                   |
| Blur Validation  | Validate each input field as user leaves (on blur)              |
| Regex Checks     | Full Name (3+ letters), valid email, strong password            |
| Password Match   | Confirm Password must match Password                            |
| Success Handling | Show green border and clear error message if valid              |
| Error Handling   | Show red border and display appropriate error message           |
| Submit Handler   | Only submit if all inputs are valid, then reset and close modal |

## 🚀 Approach & How It Works

### 💻 HTML:

- Clean and semantic structure with unique `id`s
- Accessible modal using proper role-based interactions
- Organized form controls with error placeholders

### 🎨 CSS:

- Styled modal overlay with central alignment
- Success and error states with color-coded feedback
- Responsive layout with modern UI

### 🧠 JavaScript:

- `addEventListener("DOMContentLoaded", …)` to initialize everything
- Modular event handling for opening, closing, and validating form
- Regex validation patterns for Full Name, Email, and Password
- Blur event listeners trigger field-specific validation
- Form submission only succeeds if all fields pass validation
- Success message on valid registration, followed by form reset

## 📘 What We Learned

### ✅ JavaScript Concepts:

- DOM manipulation (`getElementById`, `querySelector`, etc.)
- Event handling (`click`, `blur`, `submit`)
- Regex patterns for input validation
- Modal control logic
- Clean UX handling for error/success feedback

### ✅ HTML/CSS:

- Structuring forms inside modals
- Creating responsive and centered modal layout
- Success/error styling using class manipulation
- Using `small` elements for error display below inputs

## 🧑‍💻 How to Run the Project

1. Clone or download this repository
2. Open `index.html` in your browser
3. Click **"Open Form"** to launch the modal
4. Fill in the form fields and interact to test validations
5. Submit the form after all fields are valid

## 🔧 Future Improvements (Optional)

Here are some advanced enhancements you can implement:

- [ ] Add **Show/Hide password** toggle icon
- [ ] Implement **real-time (on input)** validation instead of just on blur
- [ ] Store user data using **localStorage** or **backend integration**
- [ ] Add **form field animations** and **micro-interactions**
- [ ] Introduce a **success animation** after registration
- [ ] Add dark/light theme toggle

## 🙌 Credits

Made with ❤️ by **Omkar Bhavare**
Built as part of learning and mastering **JavaScript DOM, form validation, and modal UI patterns**.

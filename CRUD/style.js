document.addEventListener("DOMContentLoaded", function () {
  // Select important DOM elements
  const todoForm = document.querySelector(".todo-form");
  const todoInput = document.querySelector(".todo-input");
  const todoSubmitBtn = document.querySelector(".todo-submitBtn");
  const todoTask = document.querySelector(".todo-task");

  // Variable to keep track of the task being edited (null means we're adding new task)
  let currentEditId = null;

  // Predefined task list
  const taskList = [
    { id: 1, text: "Buy groceries", isEdit: true, isDelete: false },
    { id: 2, text: "Clean the house", isEdit: false, isDelete: true },
    // ...more tasks
  ];

  // Utility to generate a random ID for each new task
  function generateID() {
    const characters = "A~B`C!D@E#$G%H^IJK&LM*NOP(QR)STWXYZ";
    return (
      Math.random() +
      characters.charAt(Math.floor(Math.random() * characters.length)) +
      Math.random() +
      characters.charAt(Math.floor(Math.random() * characters.length))
    );
  }

  // Handles both Add and Save logic based on whether currentEditId is set
  function handleTaskSubmit(text) {
    if (currentEditId) {
      // Update existing task (Save)
      const task = taskList.find((t) => t.id == currentEditId);
      if (task) {
        task.text = text;
      }
      currentEditId = null; // Reset edit mode
      todoSubmitBtn.textContent = "Add"; // Change button text back
    } else {
      // Add new task
      taskList.push({
        id: generateID(),
        text,
        isEdit: true,
        isDelete: false,
      });
    }

    todoInput.value = ""; // Clear input box
    render(); // Refresh UI
  }

  // Removes task from list based on ID
  function removeTask(id) {
    const index = taskList.findIndex((task) => task.id == id);
    if (index !== -1) {
      taskList.splice(index, 1);
      render(); // Refresh UI
    }
  }

  // Puts the selected task's text into the input box for editing
  function editTask(id) {
    const task = taskList.find((t) => t.id == id);
    if (task) {
      todoInput.value = task.text; // Pre-fill input box
      todoInput.focus(); // Focus on input
      currentEditId = task.id; // Set current edit ID
      todoSubmitBtn.textContent = "Save"; // Change button label
    }
  }

  // Renders the full task list dynamically
  function render() {
    todoTask.innerHTML = ""; // Clear existing list

    // Create and append each task
    taskList.forEach((task) => {
      const li = document.createElement("li");

      // Show task text
      const span = document.createElement("span");
      span.textContent = task.text;

      // Edit button
      const editBtn = document.createElement("button");
      editBtn.textContent = "✏️";
      editBtn.addEventListener("click", function () {
        editTask(task.id);
      });

      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "❌";
      deleteBtn.addEventListener("click", function () {
        removeTask(task.id);
      });

      // Append all elements to list item and then to task list
      li.append(span, editBtn, deleteBtn);
      todoTask.appendChild(li);
    });
  }

  // Handles click on submit button (Add or Save)
  todoSubmitBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form reload

    const text = todoInput.value.trim(); // Clean up input
    if (text) {
      handleTaskSubmit(text); // Add or Save task
    }
  });

  // Initial render of predefined tasks
  render();
});

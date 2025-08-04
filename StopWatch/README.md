# ⏱️ JavaScript Stopwatch App

A fully functional, accessible stopwatch built using HTML, CSS, and Vanilla JavaScript.

---

## 📌 Project Objective / Question

**Build a stopwatch** that performs the following actions:

- Start the timer
- Pause the timer
- Resume from pause
- Reset the timer to `00:00:00`
- Record lap times
- Clear all laps

---

## 🧠 Functional Requirements

| Feature      | Description                                        |
| ------------ | -------------------------------------------------- |
| ✅ Start     | Begin counting time from 0                         |
| ✅ Pause     | Temporarily stop the timer                         |
| ✅ Resume    | Continue counting from where it was paused         |
| ✅ Reset     | Reset timer and time display to `00 H: 00 M: 00 S` |
| ✅ Lap       | Save the current time in a list                    |
| ✅ Clear All | Remove all recorded laps (optional for user)       |

---

## 🚀 Approach & How It Works

### HTML:

- Clean and semantic structure
- Unique `id`s for buttons and display areas
- ARIA roles added for accessibility

### JavaScript:

- `setInterval()` used to start the timer and update every second
- `clearInterval()` used to pause or reset the timer
- `totalSeconds` keeps track of time
- `formatTime()` converts seconds to readable HH:MM:SS
- `pad()` ensures time parts always show two digits
- `innerText`, `createElement`, and `appendChild` used to add lap entries

---

## 📘 What We Learned

### ✅ JavaScript Concepts:

- DOM Manipulation (`getElementById`, `addEventListener`, etc.)
- Event Handling
- `setInterval()` and `clearInterval()` usage
- Functions and scope
- Accessibility with `role="list"` and `role="listitem"`
- Time formatting and zero-padding logic
- Updating UI dynamically in real-time

### ✅ HTML/CSS:

- Semantic elements
- Structuring buttons and display areas
- ARIA roles for screen reader support
- Responsive and readable layout

---

## 🧑‍💻 How to Run the Project

1. Clone or download the repository
2. Open `index.html` in your browser
3. Click **Start** to begin the stopwatch
4. Use **Pause**, **Reset**, and **Lap** as needed

---

## 🔧 Future Improvements (Optional)

- Add Milliseconds
- Save laps in `localStorage`
- Dark/Light Mode toggle
- Sound alerts or animations
- Export lap history as `.txt` or `.csv`

---

## 🙌 Credits

Made with ❤️ by Omkar Bhavare  
Built as part of learning and practicing **JavaScript DOM and timer logic**

---

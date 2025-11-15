# JS Quick-Revision — Approach for the Counter Widget

Quick, interview-ready checklist and mental model to revise the JavaScript for this widget. Read top → bottom, memorize the small list, and you can explain & implement it in minutes.

---

## 1) Mental model (1-sentence)

Maintain two pieces of state — `count` (current value) and `step` (user input). Keep UI and state in sync and guard every action with validators for `MIN` and `MAX`.

---

## 2) Key constants & state

- `const MAX = 50`, `const MIN = 0`
- `let count = 0` — current counter shown
- `let step = 1` — parsed from `<input>` (fallback to safe default)

---

## 3) Core DOM references (what to memorize)

- `displayPanel = document.querySelector(".display")`
- `inputNumber = document.querySelector("#numberInput")`
- `incrementBtn = document.querySelector(".increment")`
- `decrementBtn = document.querySelector(".decrement")`
- `resetBtn = document.querySelector(".reset")`

---

## 4) Small helper functions (single-line responsibilities)

- `display(n)` → update the display text.
- `parseStep()` → parse `input.value` safely (`parseInt` + NaN check + bounds clamp).
- `updateButtons()` → `incrementBtn.disabled = count + step > MAX; decrementBtn.disabled = count - step < MIN;`
- `syncInput()` → set `input.value = step` when you change `step` in code.

---

## 5) Event handlers (order to explain in interview)

- `DOMContentLoaded` → initial `display(count)` + `updateButtons()`.
- `inputNumber.change` → `step = parseStep()`; if invalid revert UI; then `updateButtons()`.
- `incrementBtn.click` → if `count + step <= MAX` then `count += step`; `display(count)`; `updateButtons()`.
- `decrementBtn.click` → if `count - step >= MIN` then `count -= step`; `display(count)`; `updateButtons()`.
- `resetBtn.click` → `count = MIN; step = 1; syncInput(); display(count); updateButtons()`.

---

## 6) Validation rules (say them clearly)

- Step allowed: `1 <= step <= 10` (if you follow your input constraints)
- Count always: `MIN <= count <= MAX`
- Always validate before mutating state (check pre-conditions), and always call `updateButtons()` after any change.

---

## 7) Edge cases to mention

- Input empty or non-numeric → fallback to last valid step or default `1`.
- Step larger than remaining distance to MAX should disable increment (no partial increments).
- Rapid clicks: buttons disabled proactively so extra clicks do nothing.
- Negative or decimal inputs — normalize to integer and clamp.

---

## 8) Complexity & safety (one line)

All operations are O(1). No async, no external deps — deterministic UI state.

---

## 9) Quick checklist before you run/demo

- [ ] Input shows `1` initially
- [ ] Display shows `0` initially
- [ ] Increment disabled when `count + step > 50`
- [ ] Decrement disabled when `count - step < 0`
- [ ] Reset sets both UI and state to default

---

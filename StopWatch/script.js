document.addEventListener("DOMContentLoaded", () => {
  const timeDisplay = document.getElementById("timeDisplay");
  const startBtn = document.getElementById("startBtn");
  const pauseBtn = document.getElementById("pauseBtn");
  const resetBtn = document.getElementById("resetBtn");
  const lapBtn = document.getElementById("lapBtn");
  const clearAllBtn = document.getElementById("clearAllBtn");
  const lapDisplay = document.getElementById("lapDisplay");

  let isRunning = false;
  let intervalId = null;
  let totalSeconds = 0;

  function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${pad(hours)} H : ${pad(minutes)} M: ${pad(seconds)} S`;
  }

  function pad(num) {
    return num.toString().padStart(2, "0");
  }

  function updateDisplay() {
    timeDisplay.textContent = formatTime(totalSeconds);
  }

  function startTimer() {
    if (!isRunning) {
      isRunning = true;

      intervalId = setInterval(() => {
        totalSeconds++;
        updateDisplay();
      }, 1000);
    }
  }

  function pauseTimer() {
    clearInterval(intervalId);
    isRunning = false;
  }

  function resetTimer() {
    pauseTimer();
    totalSeconds = 0;
    updateDisplay();
  }

  function addLap() {
    if (isRunning) {
      const lapTime = formatTime(totalSeconds);
      const lapItem = document.createElement("div");
      lapItem.setAttribute("role", "list-item");
      lapItem.className = "lapItem";
      lapItem.innerText = lapTime;
      lapDisplay.appendChild(lapItem);
    }
  }

  function clearLaps() {
    lapDisplay.innerHTML = "";
  }
  // Event Listeners
  startBtn.addEventListener("click", startTimer);
  pauseBtn.addEventListener("click", pauseTimer);
  resetBtn.addEventListener("click", resetTimer);
  lapBtn.addEventListener("click", addLap);
  clearAllBtn.addEventListener("click", clearLaps);

  // Initial time
});

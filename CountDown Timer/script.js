document.addEventListener("DOMContentLoaded", function () {
  const endDate = document.querySelector(".endDate").textContent;
  const remainingDays = document.querySelector(".remainingDays");
  const remainingHour = document.querySelector(".remainingHour");
  const remainingMinutes = document.querySelector(".remainingMinutes");
  const remainingSeconds = document.querySelector(".remainingSeconds");

  function updateCountdown() {
    const end = new Date(endDate).getTime();
    const now = new Date().getTime();
    const timeDifference = end - now;

    if (timeDifference <= 0) {
      remainingDays.textContent = 0;
      remainingHour.textContent = 0;
      remainingMinutes.textContent = 0;
      remainingSeconds.textContent = 0;
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    remainingDays.textContent = days;
    remainingHour.textContent = hours;
    remainingMinutes.textContent = minutes;
    remainingSeconds.textContent = seconds;
  }

  // Update the countdown every second
  setInterval(updateCountdown, 1000);
});

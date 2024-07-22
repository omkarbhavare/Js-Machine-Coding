document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".star");
  const ratingOutput = document.querySelector(".rating");

  stars.forEach((star) => {
    star.addEventListener("click", () => {
      const rating = star.getAttribute("data-value");
      ratingOutput.textContent = `Rating: ${rating}`;

      stars.forEach((star) => star.classList.remove("selected"));

      for (let i = 0; i < rating; i++) {
        stars[i].classList.add("selected");
      }
    });

    star.addEventListener("mouseover", () => {
      const rating = star.getAttribute("data-value");

      stars.forEach((star) => star.classList.remove("hover"));

      for (let i = 0; i < rating; i++) {
        stars[i].classList.add("hover");
      }
    });

    star.addEventListener("mouseout", () => {
      stars.forEach((star) => star.classList.remove("hover"));
    });
  });
});

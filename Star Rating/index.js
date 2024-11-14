document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".star");
  const ratingOutput = document.querySelector(".rating");

  function updateStars(rating) {
    stars.forEach((star, index) => {
      star.classList.toggle("selected", index < rating);
    });
    ratingOutput.textContent = `Rating: ${rating}`;
  }

  stars.forEach((star) => {
    // Click event: Set the rating
    star.addEventListener("click", () => {
      const rating = Number(star.getAttribute("data-value"));
      updateStars(rating);
    });

    // Mouseover event: Highlight stars temporarily
    star.addEventListener("mouseover", () => {
      const rating = Number(star.getAttribute("data-value"));
      updateStars(rating);
    });

    // Mouseout event: Reset hover effect
    star.addEventListener("mouseout", () => {
      const selectedRating = document.querySelectorAll(".star.selected").length;
      updateStars(selectedRating);
    });
  });
});

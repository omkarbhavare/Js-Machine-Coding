document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".star");
  const rating = document.querySelector(".rating");

  let finalRating = 0;

  function displayStars(finalRating) {
    stars.forEach((star, index) => {
      star.classList.toggle("selected", index < finalRating);
    });
    rating.textContent = `Rating: ${finalRating}`;
  }

  stars.forEach((star) => {
    star.addEventListener("click", () => {
      finalRating = Number(star.getAttribute("data-value"));
      displayStars(finalRating);
    });

    star.addEventListener("mouseover", () => {
      const tempRating = Number(star.getAttribute("data-value"));
      displayStars(tempRating);
    });

    star.addEventListener("mouseout", () => {
      displayStars(finalRating);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.getElementsByClassName("open-modal-btn")[0];
  const closeModalBtn = document.getElementById("close-modal");
  const modalContainer = document.getElementsByClassName("modal-container")[0];

  openModalBtn.addEventListener("click", () => {
    modalContainer.classList.add("show");
    openModalBtn.style.display = "none";
  });

  closeModalBtn.addEventListener("click", () => {
    modalContainer.classList.remove("show");
    openModalBtn.style.display = "flex";
  });
});

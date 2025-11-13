document.addEventListener("DOMContentLoaded", () => {
  const data = [
    {
      title: "HTML Basics",
      content: "HTML defines the structure of web pages.",
    },
    {
      title: "CSS Styling",
      content: "CSS controls colors, layout, fonts.",
    },
    {
      title: "JavaScript",
      content: "JS adds interactivity to websites.",
    },
  ];

  const accordion = document.getElementById("accordion");

  // Generate HTML dynamically
  const html = data
    .map(
      (item, index) => `
      <div class="item" data-index="${index}">
        
        <button 
          class="header"
          aria-expanded="false"
          aria-controls="content-${index}"
          id="header-${index}">
            ${item.title}
        </button>

        <div 
          class="content"
          id="content-${index}"
          role="region"
          aria-labelledby="header-${index}"
          aria-hidden="true">
          <div class="content-inner">${item.content}</div>
        </div>

      </div>`
    )
    .join("");

  accordion.innerHTML = html;

  // Click event using event delegation
  accordion.addEventListener("click", (e) => {
    const header = e.target.closest(".header");
    if (!header) return;

    const item = header.parentElement;
    toggleItem(item);
  });

  // Keyboard support (Enter / Space)
  accordion.addEventListener("keydown", (e) => {
    const header = e.target.closest(".header");
    if (!header) return;

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleItem(header.parentElement);
    }
  });

  function toggleItem(item) {
    const isOpen = item.classList.contains("active");

    // Close all items (single open mode)
    document.querySelectorAll(".item").forEach((i) => {
      i.classList.remove("active");

      const header = i.querySelector(".header");
      const content = i.querySelector(".content");

      header.setAttribute("aria-expanded", "false");
      content.setAttribute("aria-hidden", "true");
      content.style.maxHeight = null; // collapse
    });

    // If it was closed, open it
    if (!isOpen) {
      item.classList.add("active");

      const header = item.querySelector(".header");
      const content = item.querySelector(".content");

      header.setAttribute("aria-expanded", "true");
      content.setAttribute("aria-hidden", "false");

      // Smooth expand using scrollHeight
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
});

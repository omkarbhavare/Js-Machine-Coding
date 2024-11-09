document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab-link");
    const contents = document.querySelectorAll(".tab-content");
    const tab1 = document.querySelector(".tab-content");
    tab1.classList.add("active");
    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            // Remove 'active' class from all tabs and contents
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            // Add 'active' class to the clicked tab and corresponding content
            tab.classList.add("active");
            const target = document.getElementById(tab.getAttribute("data-tab"));
            target.classList.add("active");
        });
    });
    
        
});


(
    function(){
        
    }
)

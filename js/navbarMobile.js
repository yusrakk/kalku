document.addEventListener("DOMContentLoaded", function() {
    const navbarToggle = document.getElementById("navbarToggle");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navbarToggle.addEventListener("click", function() {
        const isCollapsed = navbarCollapse.classList.contains("show");
    
        if (isCollapsed) {
            navbarCollapse.classList.remove("show");
        } else {
            navbarCollapse.classList.add("show");
        }
    });

    const navbarItems = document.querySelectorAll(".navbar-nav li");
    navbarItems.forEach(function(item) {
        item.addEventListener("click", function() {
            navbarCollapse.classList.remove("show");
        });
    });
});
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

    let lastScrollTop = 0;
    const navbar = document.querySelector('.custom-navbar');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 50) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }

        lastScrollTop = scrollTop;
    });
});

let lastScrollTop = 0;
const navbar = document.querySelector('.custom-navbar');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
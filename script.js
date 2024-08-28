document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");

    window.onscroll = function() {
        if (window.scrollY > 100) {
            navbar.classList.add("nav-scrolled");
        } else {
            navbar.classList.remove("nav-scrolled");
        }
    };

    const links = document.querySelectorAll("nav ul li a");
    for (const link of links) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").substring(1);
        const targetPosition = document.getElementById(targetId).offsetTop;
        window.scrollTo({
            top: targetPosition - navbar.offsetHeight,
            behavior: "smooth"
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
       
        window.location.href = 'thank-you.html';
    });
});
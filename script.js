// Add animation class to social links
document.addEventListener("DOMContentLoaded", function() {
    var socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(function(link) {
        link.classList.add('animate-border');
    });
});

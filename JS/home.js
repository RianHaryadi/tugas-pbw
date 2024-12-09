document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.scroll-fade');
    
    window.addEventListener('scroll', () => {
        fadeElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                element.classList.add('opacity-100');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const fadeInImages = document.querySelectorAll('.fade-in-image');
    
    function checkVisibility() {
        fadeInImages.forEach(image => {
            const rect = image.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                image.classList.add('opacity-100');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility when the page is loaded
});

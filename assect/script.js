
// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu close on click
const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarNav');
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});


// Custom smooth scale carousel effect
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('#scaleCarousel');
    const carouselInner = carousel.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    
    // Initialize all items
    items.forEach((item, index) => {
        if (!item.classList.contains('active')) {
            item.style.opacity = '0';
            item.style.transform = 'scale(1.1)';
        }
    });
    
    // Handle slide events
    carousel.addEventListener('slide.bs.carousel', function(e) {
        const currentItem = items[e.from];
        const nextItem = items[e.to];
        
        // Start transition out for current item
        currentItem.style.opacity = '0';
        currentItem.style.transform = 'scale(1.1)';
        
        // Prepare next item
        nextItem.style.opacity = '1';
        nextItem.style.transform = 'scale(1)';
    });
});

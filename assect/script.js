
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


// Testimonals section
document.addEventListener('DOMContentLoaded', function() {
    // Initialize slider with auto-rotation
    var feedbackSlider = new bootstrap.Carousel(document.getElementById('clientFeedbackSlider'), {
        interval: 5000,
        wrap: true,
    });
    
    // Add smooth transitions
    // document.querySelectorAll('.feedback-item').forEach(item => {
    //     item.style.transition = 'all 0.4s ease';
    // });
});


// This is the number counter section
    document.addEventListener('DOMContentLoaded', function() {
        const counterSection = document.querySelector('.counter-section');
        const counterItems = document.querySelectorAll('.counter-item');
        const counterNumbers = document.querySelectorAll('.counter-number');
        const speed = 200; // The lower the faster
        
        // Function to animate a single counter
        function animateCounter(counter, target) {
            let count = +counter.innerText;
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(() => animateCounter(counter, target), 1);
            } else {
                counter.innerText = target;
            }
        }
        
        // Function to handle intersection
        function handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Make counter items visible with staggered delay
                    counterItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                            
                            // Start counter animation after item becomes visible
                            setTimeout(() => {
                                const target = +item.querySelector('.counter-number').getAttribute('data-count');
                                animateCounter(item.querySelector('.counter-number'), target);
                            }, 300);
                            
                        }, index * 200); // 200ms delay between each item
                    });
                    
                    observer.unobserve(entry.target);
                }
            });
        }
        
        // Create intersection observer
        const observer = new IntersectionObserver(handleIntersection, { 
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px' // Trigger when 100px from bottom of viewport
        });
        
        // Observe the counter section
        observer.observe(counterSection);
    });

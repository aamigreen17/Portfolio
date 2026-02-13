// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('.nav-link, .mobile-link, a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Only prevent default for hash links
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Active Navigation Link Based on Scroll Position
const sections = document.querySelectorAll('.section');
const desktopNavLinks = document.querySelectorAll('.nav-link');

function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            desktopNavLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
            
            mobileLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);
updateActiveNavLink(); // Call on load

// Scroll Animations with Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in classes
const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
animatedElements.forEach(el => observer.observe(el));

// Animate skill bars when they come into view
const skillBars = document.querySelectorAll('.skill-bar-fill');
const skillBarObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fill = entry.target;
            const width = fill.style.width;
            fill.style.width = '0%';
            setTimeout(() => {
                fill.style.width = width;
            }, 100);
            skillBarObserver.unobserve(fill);
        }
    });
}, observerOptions);

skillBars.forEach(bar => skillBarObserver.observe(bar));

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Show success message (in a real app, this would send to a server)
        alert('Thanks for reaching out! This is a demo portfolio, so your message wasn\'t actually sent. In a real implementation, this would be connected to a backend service.');
        
        // Reset form
        contactForm.reset();
    });
}

// Add hover effect to project cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '';
    });
});

// Add click handlers for icon buttons (GitHub and External links)
const iconButtons = document.querySelectorAll('.icon-btn');

iconButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const isGithub = btn.querySelector('path[d*="19c"]'); // Simple check for GitHub icon
        if (isGithub) {
            alert('This would open the GitHub repository. Add your GitHub repo URL here!');
        } else {
            alert('This would open the live demo. Add your demo URL here!');
        }
    });
});

// Navbar background on scroll
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '';
    }
    
    lastScrollTop = scrollTop;
});

// Parallax effect for floating blobs
window.addEventListener('scroll', () => {
    const blobs = document.querySelectorAll('.floating-blob');
    const scrolled = window.pageYOffset;
    
    blobs.forEach((blob, index) => {
        const speed = 0.1 + (index * 0.05);
        blob.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add ripple effect to buttons
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple CSS dynamically
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Lazy load images
const images = document.querySelectorAll('img');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => {
    imageObserver.observe(img);
});

// Console message for developers
console.log('%c👋 Hi there!', 'font-size: 20px; font-weight: bold; color: #3b82f6;');
console.log('%cInterested in how this portfolio was built?', 'font-size: 14px; color: #22c55e;');
console.log('%cCheck out the source code on GitHub!', 'font-size: 14px; color: #f97316;');
console.log('%c🚀 Built with vanilla HTML, CSS, and JavaScript', 'font-size: 12px; color: #9ca3af;');

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedUpdateNav = debounce(updateActiveNavLink, 100);
window.removeEventListener('scroll', updateActiveNavLink);
window.addEventListener('scroll', debouncedUpdateNav);

// Preload critical images
function preloadImage(url) {
    const img = new Image();
    img.src = url;
}

// Add any critical images here
const criticalImages = [
    // Add your critical image URLs here
];

criticalImages.forEach(preloadImage);

// Easter egg: Konami code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

window.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiPattern.join('')) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);

function copyEmail() {
    navigator.clipboard.writeText('aamigreen17@gmail.com').then(() => {
        // Create toast
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = 'Email copied to clipboard!';
        document.body.appendChild(toast);
        
        // Trigger animation
        setTimeout(() => toast.classList.add('show'), 10);
        
        // Remove after delay
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 2000);
    });
}

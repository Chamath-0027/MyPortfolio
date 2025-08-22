// Always show all skill progress bars fully animated on page load
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.progress-fill').forEach(function(fill) {
        var width = fill.getAttribute('data-width') || '75';
        fill.style.width = width + '%';
    });
});
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Typewriter effect for hero title
const heroTitle = document.querySelector('.gradient-text');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typewriter effect after a delay
    setTimeout(typeWriter, 1000);
}

// Animated counters for stats
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
};

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            
            // Animate skill items with stagger
            if (entry.target.classList.contains('skill-category')) {
                const skillItems = entry.target.querySelectorAll('.skill-item');
                skillItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.animation = 'fadeIn 0.6s ease-out forwards';
                    }, index * 100);
                });
            }
            
            // Animate progress bars
            if (entry.target.classList.contains('progress-fill')) {
                entry.target.style.width = entry.target.dataset.width || '75%';
            }
        }
    });
}, observerOptions);

// Observe all sections and skill categories
document.querySelectorAll('section, .skill-category, .education-card, .project-card').forEach(el => {
    observer.observe(el);
});

// Parallax effect for floating shapes
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrollY * speed);
        shape.style.transform = `translateY(${yPos}px) rotate(${scrollY * 0.1}deg)`;
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Add loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            // Create success message
            const successMessage = document.createElement('div');
            successMessage.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                color: white;
                padding: 20px 30px;
                border-radius: 12px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                z-index: 10000;
                text-align: center;
                font-weight: 600;
            `;
            successMessage.innerHTML = `
                <i class="fas fa-check-circle" style="font-size: 2rem; margin-bottom: 10px; display: block;"></i>
                Thank you for your message!<br>
                <small style="opacity: 0.9;">I'll get back to you soon.</small>
            `;
            
            document.body.appendChild(successMessage);
            
            // Reset form
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Remove success message after 3 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 3000);
        }, 2000);
    });
}

// Add glowing effect to buttons on hover
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.classList.add('glow');
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.classList.remove('glow');
    });
});

// Skill items hover effect
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const icon = item.querySelector('i');
        icon.style.transform = 'scale(1.2) rotate(360deg)';
        icon.style.transition = 'transform 0.6s ease';
    });
    
    item.addEventListener('mouseleave', () => {
        const icon = item.querySelector('i');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Add dynamic particles
function createParticle() {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: rgba(0, 212, 255, 0.6);
        border-radius: 50%;
        pointer-events: none;
        z-index: -1;
        animation: particle-float 3s linear forwards;
    `;
    
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 3000);
}

// Add particle animation CSS
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particle-float {
        to {
            transform: translateY(-${window.innerHeight + 100}px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Create particles periodically
setInterval(createParticle, 2000);

// Update copyright year
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Add scroll progress indicator
const scrollProgress = document.createElement('div');
scrollProgress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
    z-index: 10000;
    transition: width 0.1s ease;
`;
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

// Add loading animation to page
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0a0a0a;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        transition: opacity 0.5s ease;
    `;
    
    loader.innerHTML = `
        <div style="width: 50px; height: 50px; border: 3px solid rgba(0, 212, 255, 0.3); border-top: 3px solid #00d4ff; border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 20px;"></div>
        <div style="color: #00d4ff; font-size: 1.2rem; font-weight: 600;">Loading Portfolio...</div>
    `;
    
    // Add spin animation
    const spinStyle = document.createElement('style');
    spinStyle.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(spinStyle);
    
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 1500);
});

// Enhanced scroll animations
const scrollElements = document.querySelectorAll('.education-card, .project-card, .skill-category');
const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
};

const displayScrollElement = (element) => {
    element.classList.add('fade-in');
};

const hideScrollElement = (element) => {
    element.classList.remove('fade-in');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        }
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// Initialize scroll animations
handleScrollAnimation();
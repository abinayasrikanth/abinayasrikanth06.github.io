// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    }

    lastScroll = currentScroll;
});

// Expandable Project Cards
const expandButtons = document.querySelectorAll('.btn-expand');

expandButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const projectDetails = document.getElementById(targetId);

        // Toggle active class
        button.classList.toggle('active');
        projectDetails.classList.toggle('active');

        // Update button text
        const expandText = button.querySelector('.expand-text');
        if (button.classList.contains('active')) {
            expandText.textContent = 'Details';
        } else {
            expandText.textContent = 'View Details';
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.querySelectorAll('.project-card, .skill-category, .highlight-card, .contact-card, .education-card, .publication-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function updateActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Add active state styles dynamically
const style = document.createElement('style');
style.innerHTML = `
    .nav-link.active {
        color: var(--accent-light);
        position: relative;
    }
    .nav-link.active::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        right: 0;
        height: 2px;
        background: var(--accent-light);
    }
    .hamburger.active .bar:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    .hamburger.active .bar:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(style);

// Add copy email functionality
const emailCard = document.querySelector('a[href^="mailto:abinaya.srikanth@utdallas.edu"]');
if (emailCard) {
    emailCard.addEventListener('click', (e) => {
        const email = 'abinaya.srikanth@utdallas.edu';

        // Try to copy to clipboard
        if (navigator.clipboard && navigator.clipboard.writeText) {
            e.preventDefault();
            navigator.clipboard.writeText(email).then(() => {
                const originalText = emailCard.querySelector('p').textContent;
                emailCard.querySelector('p').textContent = 'Email copied!';
                setTimeout(() => {
                    emailCard.querySelector('p').textContent = originalText;
                }, 2000);
            }).catch(() => {
                // If clipboard fails, just open email client (default behavior)
            });
        }
        // If clipboard API not available, let default mailto: behavior happen
    });
}

// Handle resume download link
const resumeLinks = document.querySelectorAll('a[href="./resume.pdf"]');
resumeLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Check if resume.pdf exists, if not, show a message
        fetch('./resume.pdf', { method: 'HEAD' })
            .then(response => {
                if (!response.ok) {
                    e.preventDefault();
                    alert('Resume PDF is not yet available. Please contact me directly for my resume.');
                }
            })
            .catch(() => {
                e.preventDefault();
                alert('Resume PDF is not yet available. Please contact me directly for my resume.');
            });
    });
});

console.log('Portfolio website loaded successfully!');
console.log('Built for Abinaya Srikanth - MS Mechanical Engineering, UT Dallas');

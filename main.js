import './style.css';

// Smooth scroll behavior for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.setAttribute('aria-label', 'Toggle menu');
    menuToggle.innerHTML = '<span></span><span></span><span></span>';

    const nav = document.querySelector('nav');
    const headerContent = document.querySelector('.header-content');

    if (headerContent && nav) {
        headerContent.appendChild(menuToggle);

        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });

        // Close menu when clicking a link
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
                nav.classList.remove('active');
            }
        });
    }

    // Back to top button
    const backToTop = document.createElement('a');
    backToTop.href = '#';
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '↑';
    backToTop.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTop);

    // Show/hide back to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Smooth scroll to top
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Sticky CTA Bar
    const stickyCTA = document.createElement('div');
    stickyCTA.className = 'sticky-cta';
    stickyCTA.innerHTML = `
        <div class="sticky-cta-content">
            <span class="sticky-cta-text">Make a difference today — Support our mission!</span>
            <a href="/support.html" class="sticky-cta-btn">Partner With Us</a>
        </div>
        <button class="sticky-cta-close" aria-label="Close">×</button>
    `;
    document.body.appendChild(stickyCTA);

    // Show sticky CTA after scrolling
    let ctaDismissed = sessionStorage.getItem('ctaDismissed');

    window.addEventListener('scroll', function() {
        if (!ctaDismissed && window.pageYOffset > 500) {
            stickyCTA.classList.add('visible');
        }
    });

    // Close sticky CTA
    const closeCTA = stickyCTA.querySelector('.sticky-cta-close');
    closeCTA.addEventListener('click', function() {
        stickyCTA.classList.remove('visible');
        sessionStorage.setItem('ctaDismissed', 'true');
    });

    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add id to main if it doesn't exist
    const mainElement = document.querySelector('main');
    if (mainElement && !mainElement.id) {
        mainElement.id = 'main';
    }

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('nav a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active state to navigation items on scroll
    const sections = document.querySelectorAll('section[id]');

    function highlightNavigation() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.style.color = 'var(--secondary-color)';
                } else {
                    navLink.style.color = '';
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // Animate cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards
    const cards = document.querySelectorAll('.value-card, .project-card, .support-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

/**
 * Portfolio Script - CMSC 207
 * Handles interactivity: fun facts, smooth scrolling, animations
 */

// ====================================================
// Configuration
// ====================================================

const FUN_FACTS = [
    "I'm a job hopper with work experiences at Accenture, Oracle, and Origin.",
    "My social battery drains faster than my phone.",
    "My favorite programming language is Java because of its widespread use in real-world applications.",
    "I've debugged code for 6 hours straight and didn't even realize it!",
    "I believe the best code is code that other people can understand.",
    "My first 'Hello World' program took me 30 minutes to get working!",
    "I believe continuous learning is key to staying ahead in tech.",
];

const TYPEWRITER_SPEED = 30; // milliseconds per character

// ====================================================
// DOM Element References
// ====================================================

let funFactBtn = null;
let funFactDisplay = null;
let currentFactIndex = -1;

// ====================================================
// Initialization
// ====================================================

document.addEventListener('DOMContentLoaded', function() {
    initializeDOMElements();
    setupFunFactButton();
    setupNavigation();
    observeElements();
});

/**
 * Initialize all required DOM element references
 */
function initializeDOMElements() {
    funFactBtn = document.getElementById('fun-fact-btn');
    funFactDisplay = document.getElementById('fun-fact-display');
    
    if (!funFactBtn || !funFactDisplay) {
        console.warn('Fun fact elements not found in DOM');
    }
}

// ====================================================
// Fun Fact Button Handler
// ====================================================

/**
 * Setup fun fact button click handler and animations
 */
function setupFunFactButton() {
    if (!funFactBtn) return;

    funFactBtn.addEventListener('click', function() {
        displayRandomFunFact();
        applyPulseAnimation(funFactBtn);
    });
}

/**
 * Display a random fun fact with typewriter effect
 */
function displayRandomFunFact() {
    // Get a random fact (avoid repeating the same one)
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * FUN_FACTS.length);
    } while (randomIndex === currentFactIndex && FUN_FACTS.length > 1);

    currentFactIndex = randomIndex;
    const selectedFact = FUN_FACTS[randomIndex];

    // Display with typewriter effect
    if (funFactDisplay) {
        typewriterEffect(funFactDisplay, selectedFact);
    }
}

/**
 * Typewriter effect for displaying text character by character
 * @param {HTMLElement} element - Element to display text in
 * @param {string} text - Text to display
 */
function typewriterEffect(element, text) {
    let index = 0;
    element.textContent = '';

    const type = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, TYPEWRITER_SPEED);
        }
    };

    type();
}

/**
 * Apply pulse animation to an element
 * @param {HTMLElement} element - Element to animate
 */
function applyPulseAnimation(element) {
    element.style.animation = 'none';
    setTimeout(() => {
        element.style.animation = 'pulse 0.6s ease-out';
    }, 10);
}

// ====================================================
// Navigation Setup
// ====================================================

/**
 * Setup navigation smooth scroll and active link highlighting
 */
function setupNavigation() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const sections = document.querySelectorAll('section[id]');

    // Smooth scroll behavior
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's not a valid section link
            if (href === '#') return;
            
            e.preventDefault();
            const targetSection = document.querySelector(href);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Highlight active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href').slice(1);
            if (href === current) {
                link.classList.add('active');
            }
        });
    });
}

// ====================================================
// Scroll Animations
// ====================================================

/**
 * Setup intersection observer for fade-in animations on scroll
 */
function observeElements() {
    const cards = document.querySelectorAll('.hobby-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// ====================================================
// Utilities & Helpers
// ====================================================

/**
 * Inject custom CSS animations into the document
 */
function injectCustomStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
        }
    `;
    document.head.appendChild(style);
}

// ====================================================
// Logging
// ====================================================

// Inject styles and log initialization
injectCustomStyles();

if (document.readyState !== 'loading') {
    console.log('✅ Portfolio Script Loaded Successfully');
    console.log('📌 This portfolio was created for CMSC 207 - Web Development');
    console.log('💡 Tip: Try clicking the "Fun Fact" button and hovering over elements!');
}

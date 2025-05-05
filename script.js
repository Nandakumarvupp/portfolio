// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Smooth scrolling for blog links
document.querySelectorAll('.blog-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Dark mode toggle functionality
const modeToggle = document.getElementById('modeToggle');
const body = document.body;

// Check for saved mode preference in localStorage
const savedMode = localStorage.getItem('theme');
if (savedMode === 'dark') {
    body.classList.add('dark-mode');
    modeToggle.textContent = 'Toggle Light Mode';
}

// Toggle dark mode on button click
modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Update button text and save preference
    if (body.classList.contains('dark-mode')) {
        modeToggle.textContent = 'Toggle Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        modeToggle.textContent = 'Toggle Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});

// Back to Top button functionality
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

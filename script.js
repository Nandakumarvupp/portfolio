// Smooth scrolling for blog links
document.querySelectorAll('.blog-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Toggle resume preview visibility
const togglePreview = document.getElementById('togglePreview');
const previewContent = document.getElementById('previewContent');

togglePreview.addEventListener('click', () => {
    if (previewContent.style.display === 'none') {
        previewContent.style.display = 'block';
        togglePreview.textContent = '[Hide]';
    } else {
        previewContent.style.display = 'none';
        togglePreview.textContent = '[Show]';
    }
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

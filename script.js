const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check if user previously selected dark mode
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
}

toggleBtn.addEventListener('click', () => {
    // Check if we are currently in dark mode
    const isDark = body.getAttribute('data-theme') === 'dark';

    if (isDark) {
        // Switch to Light
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        // Switch to Dark
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});
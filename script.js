document.addEventListener('DOMContentLoaded', () => {
    // Header Text Animation
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const jobTitle = document.getElementById('job-title');

    // Staggered animation
    setTimeout(() => firstName.classList.add('animate-in'), 200);
    setTimeout(() => lastName.classList.add('animate-in'), 400);
    setTimeout(() => jobTitle.classList.add('animate-in'), 600);


    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const socialLinks = document.querySelector('.social-links'); 
    const body = document.body;

    // Function to apply theme
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    };

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // Optional: Check system preference if no saved theme
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            applyTheme('dark');
        } else {
            applyTheme('light'); // Default to light
        }
    }
    

    // themeToggle.addEventListener('click', () => {
    //     if (body.classList.contains('dark-mode')) {
    //         applyTheme('light');
    //         localStorage.setItem('theme', 'light');
    //     } else {
    //         applyTheme('dark');
    //         localStorage.setItem('theme', 'dark');
    //     }
    // });

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode'); // Optional: Toggle dark mode class on the body
        themeIcon.classList.toggle('invert'); // Toggle the invert class on the SVG
        socialLinks.classList.toggle('invert');
    });

    // Optional: Listen for system theme changes if no preference is set
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) { // Only if no user preference
            if (e.matches) {
                applyTheme('dark');
            } else {
                applyTheme('light');
            }
        }
    });

});
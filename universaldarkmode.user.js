// ==UserScript==
// @name        Universal Dark Mode Toggle
// @namespace   Violentmonkey Scripts
// @run-at      document-end
// @match       *://*/*
// @version     1.0
// ==/UserScript==

(function() {
    'use strict';

    // Storage key for persisting dark mode state per domain
    const storageKey = `darkMode_${window.location.hostname}`;

    // Create style element for dark mode
    const style = document.createElement('style');
    style.id = 'universal-dark-mode-style';
    style.innerHTML = `
        html.dark-mode-enabled {
            filter: invert(1) hue-rotate(180deg);
        }
        html.dark-mode-enabled img,
        html.dark-mode-enabled video,
        html.dark-mode-enabled picture,
        html.dark-mode-enabled [style*="background-image"] {
            filter: invert(1) hue-rotate(180deg);
        }
    `;
    document.head.appendChild(style);

    // Function to toggle dark mode
    function toggleDarkMode() {
        const html = document.documentElement;
        const isDarkMode = html.classList.toggle('dark-mode-enabled');
        
        // Save state to localStorage
        try {
            localStorage.setItem(storageKey, isDarkMode ? '1' : '0');
        } catch (e) {
            // Handle localStorage errors silently
        }
    }

    // Function to restore dark mode state
    function restoreDarkMode() {
        try {
            const savedState = localStorage.getItem(storageKey);
            if (savedState === '1') {
                document.documentElement.classList.add('dark-mode-enabled');
            }
        } catch (e) {
            // Handle localStorage errors silently
        }
    }

    // Restore saved state on page load
    restoreDarkMode();

    // Listen for backtick key (`)
    document.addEventListener('keydown', function(e) {
        // Check for backtick key
        if (e.key === '`') {
            // Prevent default behavior
            e.preventDefault();
            toggleDarkMode();
        }
    });
})();

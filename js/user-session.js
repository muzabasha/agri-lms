// ========================================
// USER SESSION HANDLER
// Displays user info and handles logout
// ========================================

(function () {
    'use strict';

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function () {
        initUserSession();
    });

    function initUserSession() {
        // Get current user
        const userJson = sessionStorage.getItem('agri_lms_current_user');

        if (!userJson) {
            // Should never happen due to auth protection, but redirect just in case
            window.location.href = 'login.html';
            return;
        }

        const user = JSON.parse(userJson);

        // Display user name in header
        const userNameElement = document.getElementById('userName');
        if (userNameElement) {
            userNameElement.textContent = user.name;
            userNameElement.title = `SRN: ${user.srn}\nBatch: ${user.batch}\nFaculty: ${user.faculty}`;
        }

        // Setup logout button
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', handleLogout);
        }

        // Log session info for debugging
        console.log('[USER SESSION] Logged in as:', user.name);
        console.log('[USER SESSION] SRN:', user.srn);
    }

    function handleLogout() {
        // Confirm logout
        const confirmed = confirm('Are you sure you want to logout?');

        if (!confirmed) {
            return;
        }

        // Clear session
        sessionStorage.removeItem('agri_lms_current_user');
        localStorage.removeItem('agri_lms_logged_in');

        // Show logout message
        console.log('[USER SESSION] Logging out...');

        // Redirect to login page
        window.location.href = 'login.html';
    }

    // Export functions for external use if needed
    window.UserSession = {
        getCurrentUser: function () {
            const userJson = sessionStorage.getItem('agri_lms_current_user');
            return userJson ? JSON.parse(userJson) : null;
        },

        logout: handleLogout
    };

})();

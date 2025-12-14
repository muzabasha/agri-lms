// ========================================
// AUTHENTICATION SYSTEM
// Handles Sign-In, Sign-Up, and Session Management
// ========================================

class AuthSystem {
    constructor() {
        this.init();
    }

    init() {
        // Get form elements
        this.loginForm = document.getElementById('loginForm');
        this.registerForm = document.getElementById('registerForm');
        this.signInDiv = document.getElementById('signInForm');
        this.signUpDiv = document.getElementById('signUpForm');
        this.successDiv = document.getElementById('successMessage');

        // Get toggle links
        this.showSignUpLink = document.getElementById('showSignUp');
        this.showSignInLink = document.getElementById('showSignIn');

        // Setup event listeners
        this.setupEventListeners();

        // Check if already logged in
        this.checkExistingSession();
    }

    setupEventListeners() {
        // Form submissions
        this.loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        this.registerForm.addEventListener('submit', (e) => this.handleRegister(e));

        // Toggle forms
        this.showSignUpLink.addEventListener('click', (e) => {
            e.preventDefault();
            this.showSignUp();
        });

        this.showSignInLink.addEventListener('click', (e) => {
            e.preventDefault();
            this.showSignIn();
        });
    }

    showSignUp() {
        this.signInDiv.classList.remove('active');
        this.signUpDiv.classList.add('active');
    }

    showSignIn() {
        this.signUpDiv.classList.remove('active');
        this.signInDiv.classList.add('active');
    }

    handleLogin(e) {
        e.preventDefault();

        const srn = document.getElementById('loginSRN').value.trim();

        if (!srn) {
            this.showError('loginSRN', 'Please enter your SRN');
            return;
        }

        // Get registered users from localStorage
        const users = this.getUsers();
        const user = users.find(u => u.srn.toLowerCase() === srn.toLowerCase());

        if (!user) {
            this.showError('loginSRN', 'SRN not found. Please sign up first.');
            return;
        }

        // Set loading state
        const submitBtn = this.loginForm.querySelector('button[type="submit"]');
        this.setLoading(submitBtn, true);

        // Simulate authentication delay
        setTimeout(() => {
            this.setLoading(submitBtn, false);
            this.loginSuccess(user);
        }, 1000);
    }

    handleRegister(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('studentName').value.trim();
        const srn = document.getElementById('studentSRN').value.trim();
        const batch = document.getElementById('batchNumber').value.trim();
        const faculty = document.getElementById('facultyName').value.trim();

        // Validate
        if (!this.validateRegistration(name, srn, batch, faculty)) {
            return;
        }

        // Check if SRN already exists
        const users = this.getUsers();
        if (users.find(u => u.srn.toLowerCase() === srn.toLowerCase())) {
            this.showError('studentSRN', 'This SRN is already registered');
            return;
        }

        // Set loading state
        const submitBtn = this.registerForm.querySelector('button[type="submit"]');
        this.setLoading(submitBtn, true);

        // Create user object
        const user = {
            name: name,
            srn: srn,
            batch: batch,
            faculty: faculty,
            registeredDate: new Date().toISOString(),
            progress: {}
        };

        // Save user
        setTimeout(() => {
            users.push(user);
            localStorage.setItem('agri_lms_users', JSON.stringify(users));
            this.setLoading(submitBtn, false);
            this.registrationSuccess(user);
        }, 1500);
    }

    validateRegistration(name, srn, batch, faculty) {
        let isValid = true;

        if (!name || name.length < 2) {
            this.showError('studentName', 'Please enter a valid name');
            isValid = false;
        }

        if (!srn || srn.length < 3) {
            this.showError('studentSRN', 'Please enter a valid SRN');
            isValid = false;
        }

        if (!batch) {
            this.showError('batchNumber', 'Please enter your batch number');
            isValid = false;
        }

        if (!faculty || faculty.length < 2) {
            this.showError('facultyName', 'Please enter your faculty name');
            isValid = false;
        }

        return isValid;
    }

    showError(inputId, message) {
        const input = document.getElementById(inputId);
        input.classList.add('error');

        // Remove existing error message if any
        const existingError = input.parentElement.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        // Add error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
        input.parentElement.appendChild(errorDiv);

        // Remove error on input
        input.addEventListener('input', function removeError() {
            input.classList.remove('error');
            const errorMsg = input.parentElement.querySelector('.error-message');
            if (errorMsg) errorMsg.remove();
            input.removeEventListener('input', removeError);
        });
    }

    setLoading(button, isLoading) {
        if (isLoading) {
            button.classList.add('loading');
            button.disabled = true;
        } else {
            button.classList.remove('loading');
            button.disabled = false;
        }
    }

    loginSuccess(user) {
        // Save current user session
        sessionStorage.setItem('agri_lms_current_user', JSON.stringify(user));
        localStorage.setItem('agri_lms_logged_in', 'true');

        // Show success and redirect
        this.showSuccessAndRedirect();
    }

    registrationSuccess(user) {
        // Show success animation
        this.signUpDiv.style.display = 'none';
        this.successDiv.style.display = 'block';

        // Auto login after registration
        setTimeout(() => {
            this.loginSuccess(user);
        }, 2000);
    }

    showSuccessAndRedirect() {
        // Redirect to main application
        window.location.href = 'index.html';
    }

    getUsers() {
        const usersJson = localStorage.getItem('agri_lms_users');
        return usersJson ? JSON.parse(usersJson) : [];
    }

    checkExistingSession() {
        const isLoggedIn = localStorage.getItem('agri_lms_logged_in');
        const currentUser = sessionStorage.getItem('agri_lms_current_user');

        if (isLoggedIn === 'true' && currentUser) {
            // Already logged in, redirect to main app
            window.location.href = 'index.html';
        }
    }
}

// Static method to check authentication status (called from main app)
AuthSystem.isAuthenticated = function () {
    const isLoggedIn = localStorage.getItem('agri_lms_logged_in');
    const currentUser = sessionStorage.getItem('agri_lms_current_user');
    return isLoggedIn === 'true' && currentUser !== null;
};

// Static method to get current user
AuthSystem.getCurrentUser = function () {
    const userJson = sessionStorage.getItem('agri_lms_current_user');
    return userJson ? JSON.parse(userJson) : null;
};

// Static method to logout
AuthSystem.logout = function () {
    sessionStorage.removeItem('agri_lms_current_user');
    localStorage.removeItem('agri_lms_logged_in');
    window.location.href = 'login.html';
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    new AuthSystem();
});

// Export for use in main app
if (typeof window !== 'undefined') {
    window.AuthSystem = AuthSystem;
}

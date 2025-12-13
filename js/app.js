// App.js - Main application initialization

class App {
    constructor() {
        this.init();
    }

    init() {
        // Build sidebar navigation
        this.buildNavigation();

        // Setup theme toggle
        this.setupThemeToggle();

        // Setup tab switching
        this.setupTabs();

        // Initialize progress UI
        progressTracker.updateUI();

        // Log initialization
        console.log('🌾 Agri-LMS initialized successfully!');
    }

    buildNavigation() {
        const navContainer = document.getElementById('courseNav');

        // Use comprehensive structure if available, otherwise fallback
        const structure = (typeof comprehensiveCourseStructure !== 'undefined')
            ? comprehensiveCourseStructure
            : courseContent;

        try {
            structure.modules.forEach(module => {
                const moduleDiv = document.createElement('div');
                moduleDiv.className = 'module-item';

                const moduleHeader = document.createElement('div');
                moduleHeader.className = 'module-header clickable-module';
                moduleHeader.innerHTML = `
                <div class="header-content">
                    <i class="fas ${module.icon || 'fa-book'}"></i>
                    <span>${module.title}</span>
                </div>
                <i class="fas fa-chevron-down toggle-icon"></i>
            `;

                const topicList = document.createElement('ul');
                topicList.className = 'topic-list';
                topicList.id = `module-list-${module.id}`;
                topicList.style.display = 'none'; // Hidden by default

                // Add click event for module overview and toggle
                moduleHeader.onclick = () => {
                    // Navigate to overview
                    window.location.hash = `#module-${module.id}`;

                    // Toggle Dropdown
                    const isHidden = topicList.style.display === 'none';

                    // Optional: Close others? For now, we allow multiple open
                    // toggle
                    topicList.style.display = isHidden ? 'block' : 'none';

                    // Rotate icon
                    const icon = moduleHeader.querySelector('.toggle-icon');
                    if (isHidden) {
                        icon.classList.add('rotate');
                    } else {
                        icon.classList.remove('rotate');
                    }
                };

                module.topics.forEach((topic, index) => {
                    const topicItem = document.createElement('li');
                    topicItem.className = 'topic-item';

                    const topicLink = document.createElement('a');
                    topicLink.href = `#${topic.id}`;
                    topicLink.className = 'topic-link';
                    topicLink.setAttribute('data-topic', topic.id);
                    // Use explicit number if available, else generate 1.1 style
                    const topicNum = topic.number || `${module.id}.${index + 1}`;
                    topicLink.textContent = `${topicNum} - ${topic.title}`;

                    topicItem.appendChild(topicLink);
                    topicList.appendChild(topicItem);
                });

                moduleDiv.appendChild(moduleHeader);
                moduleDiv.appendChild(topicList);
                navContainer.appendChild(moduleDiv);
            });

        } catch (e) {
            console.error("Error building module navigation:", e);
        }

        // Add Final Assessment Link (Always ensure this runs)
        try {
            console.log("Adding Final Assessment Link...");
            const finalDiv = document.createElement('div');
            finalDiv.className = 'module-item final-assessment';
            finalDiv.innerHTML = `
                <div class="module-header clickable-module" onclick="window.location.hash='#final-exam'">
                    <i class="fas fa-graduation-cap"></i>
                    <span>Final Assessment</span>
                </div>
            `;
            navContainer.appendChild(finalDiv);
        } catch (e) {
            console.error("Error adding Final Assessment link:", e);
        }
    }

    setupThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        const savedTheme = localStorage.getItem('theme') || 'light';

        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');

            themeToggle.innerHTML = isDark ?
                '<i class="fas fa-sun"></i>' :
                '<i class="fas fa-moon"></i>';

            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    setupTabs() {
        const tabBtns = document.querySelectorAll('.tab-btn');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active from all
                tabBtns.forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

                // Add active to clicked
                btn.classList.add('active');
                const tabId = btn.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }

    // Global UI Helpers
    static showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;

        // Icon map
        const icons = {
            success: 'fa-check-circle',
            info: 'fa-info-circle',
            warning: 'fa-exclamation-triangle',
            error: 'fa-times-circle'
        };

        toast.innerHTML = `
            <i class="fas ${icons[type] || 'fa-info-circle'}"></i>
            <span>${message}</span>
        `;

        container.appendChild(toast);

        // Auto remove
        setTimeout(() => {
            toast.classList.add('hide');
            toast.addEventListener('animationend', () => toast.remove());
        }, 3000);
    }

    static celebrateCompletion() {
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    }
}

// Expose globals
window.showToast = App.showToast;
window.celebrateCompletion = App.celebrateCompletion;

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();

    // FORCE ADD Final Assessment Link (Fix for missing sidebar link)
    setTimeout(() => {
        const navContainer = document.getElementById('courseNav');
        console.log("Forcing append of Final Assessment link. NavContainer:", navContainer);

        if (navContainer && !navContainer.querySelector('.final-assessment')) {
            const finalDiv = document.createElement('div');
            finalDiv.className = 'module-item final-assessment';
            finalDiv.innerHTML = `
                <div class="module-header clickable-module" onclick="window.location.hash='#final-exam'">
                    <i class="fas fa-graduation-cap"></i>
                    <span>Final Assessment</span>
                </div>
            `;
            navContainer.appendChild(finalDiv);
            console.log("Final Assessment link appended successfully.");
        }
    }, 500); // Small delay to ensure buildNavigation is done
});

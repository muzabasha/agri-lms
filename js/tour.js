/**
 * Agri-LMS Tour System
 * Guides students through the application features.
 */

class TourSystem {
    constructor() {
        this.steps = [];
        this.currentStep = 0;
        this.isActive = false;

        // UI Elements
        this.overlay = null;
        this.tooltip = null;
        this.highlightedElement = null;

        // Bind methods
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.endTour = this.endTour.bind(this);
        this.handleResize = this.handleResize.bind(this);

        this.init();
    }

    init() {
        this.createTourUI();
        window.addEventListener('resize', this.handleResize);

        // Define Intro Steps
        const introSteps = [
            {
                title: "Welcome to Agri-LMS!",
                message: "This interactive platform helps you master AI & ML concepts in Agriculture. Let's take a tour of the modules.",
                target: null,
                placement: "center"
            },
            {
                title: "Navigation & Progress",
                message: "Use the sidebar to explore Modules. Your progress is tracked automatically.",
                target: ".sidebar",
                placement: "right"
            }
        ];

        // Define Module Steps
        const moduleSteps = [];
        const modules = [
            { id: 1, title: "Module 1: Fundamentals", topicId: "m1-t1", desc: "Start with Python & AI basics." },
            { id: 2, title: "Module 2: Data Science", topicId: "m2-t1", desc: "Learn data handling with Pandas." },
            { id: 3, title: "Module 3: Deep Learning", topicId: "m3-t1", desc: "Explore Neural Networks & Vision." },
            { id: 4, title: "Module 4: Projects", topicId: "m4-t1", desc: "End-to-end Machine Learning projects." },
            { id: 5, title: "Module 5: Portfolio", topicId: "m5-t1", desc: "Build your professional portfolio." }
        ];

        modules.forEach(mod => {
            // Step 1: Navigate to Topic
            moduleSteps.push({
                title: mod.title,
                message: `Navigating to <b>${mod.title}</b>. ${mod.desc}`,
                target: ".content-area",
                placement: "left",
                onShow: () => {
                    window.location.hash = mod.topicId;
                    // Expand module in sidebar if needed (optional implementation)
                    // Wait for load
                    return new Promise(resolve => setTimeout(resolve, 1000));
                }
            });

            // Step 2: Highlight a specific component of this module
            moduleSteps.push({
                title: `${mod.title} Content`,
                message: "Each topic contains Handouts, Slides, Labs, and Activities. Click the tabs to switch views.",
                target: ".content-tabs",
                placement: "bottom"
            });
        });

        // Define Outro Steps
        const outroSteps = [
            {
                title: "You're Ready!",
                message: "You've seen the highlights of all modules. Start your journey with Module 1 now!",
                target: null,
                placement: "center",
                onShow: () => {
                    window.location.hash = 'm1-t1'; // Return to start
                    return new Promise(resolve => setTimeout(resolve, 500));
                }
            }
        ];

        this.steps = [...introSteps, ...moduleSteps, ...outroSteps];
    }

    createTourUI() {
        // Overlay
        this.overlay = document.createElement('div');
        this.overlay.className = 'tour-overlay';
        document.body.appendChild(this.overlay);

        // Tooltip
        this.tooltip = document.createElement('div');
        this.tooltip.className = 'tour-tooltip';
        this.tooltip.innerHTML = `
            <div class="tour-header">
                <h3 id="tour-title">Title</h3>
                <button class="tour-close" onclick="tourSystem.endTour()">×</button>
            </div>
            <div class="tour-body">
                <p id="tour-message">Message</p>
            </div>
            <div class="tour-footer">
                <span class="tour-steps-count" id="tour-count">1 / 5</span>
                <div class="tour-controls">
                    <button class="tour-btn tour-btn-back" id="tour-back">Back</button>
                    <button class="tour-btn tour-btn-next" id="tour-next">Next</button>
                </div>
            </div>
        `;
        document.body.appendChild(this.tooltip);

        // Event Listeners
        document.getElementById('tour-next').addEventListener('click', this.nextStep);
        document.getElementById('tour-back').addEventListener('click', this.prevStep);
    }

    async startTour() {
        this.isActive = true;
        this.currentStep = 0;
        this.overlay.classList.add('active');
        await this.showStep(this.currentStep);
    }

    async showStep(index) {
        if (index < 0 || index >= this.steps.length) {
            this.endTour();
            return;
        }

        const step = this.steps[index];

        // Execute onShow action if exists
        if (step.onShow) {
            // Show loading state or temporary pause?
            this.tooltip.style.opacity = '0';
            await step.onShow();
        }

        // Find Target
        let targetEl = null;
        if (step.target) {
            targetEl = document.querySelector(step.target);
            // If target not found (e.g. dynamic content failed), fallback to center
            if (!targetEl) {
                console.warn(`Tour target ${step.target} not found.`);
            }
        }

        // Highlight
        this.highlightElement(targetEl);

        // Update Content
        document.getElementById('tour-title').innerText = step.title;
        document.getElementById('tour-message').innerHTML = step.message;
        document.getElementById('tour-count').innerText = `${index + 1} / ${this.steps.length}`;

        // Button State
        document.getElementById('tour-back').style.display = index === 0 ? 'none' : 'block';
        document.getElementById('tour-next').innerText = index === this.steps.length - 1 ? 'Finish' : 'Next';

        // Position Tooltip
        this.positionTooltip(targetEl, step.placement);

        this.tooltip.classList.add('active');
    }

    highlightElement(el) {
        // Remove previous highlight
        if (this.highlightedElement) {
            this.highlightedElement.classList.remove('tour-highlight');
            this.highlightedElement.style.position = '';
            this.highlightedElement.style.zIndex = '';
        }

        if (el) {
            this.highlightedElement = el;
            el.classList.add('tour-highlight');
            // We rely on CSS box-shadow for the dimming effect, 
            // but we need to ensure z-index is high.
            // Note: If element has 'position: static', z-index won't apply.
            const computedStyle = window.getComputedStyle(el);
            if (computedStyle.position === 'static') {
                el.style.position = 'relative';
            }
            // Temporarily boost z-index.
            // Note: This can break some layouts (stacking contexts). 
            // A safer partial approach is used in simple tours.
        } else {
            this.highlightedElement = null;
        }
    }

    positionTooltip(targetEl, placement) {
        const tooltip = this.tooltip;
        const spacing = 15;

        if (!targetEl) {
            // Center
            tooltip.style.top = '50%';
            tooltip.style.left = '50%';
            tooltip.style.transform = 'translate(-50%, -50%)';
            return;
        }

        const rect = targetEl.getBoundingClientRect();
        const tRect = tooltip.getBoundingClientRect(); // Dimensions might be wrong if hidden, but we set width fixed in CSS

        let top, left;

        // Reset transform
        tooltip.style.transform = 'none';

        switch (placement) {
            case 'top':
                top = rect.top - tRect.height - spacing;
                left = rect.left + (rect.width - tRect.width) / 2;
                break;
            case 'bottom':
                top = rect.bottom + spacing;
                left = rect.left + (rect.width - tRect.width) / 2;
                break;
            case 'left':
                top = rect.top + (rect.height - tRect.height) / 2;
                left = rect.left - tRect.width - spacing;
                break;
            case 'right':
                top = rect.top + (rect.height - tRect.height) / 2;
                left = rect.right + spacing;
                break;
            default: // center
                top = window.innerHeight / 2 - tRect.height / 2;
                left = window.innerWidth / 2 - tRect.width / 2;
        }

        // Boundary checks (Keep on screen)
        if (left < 10) left = 10;
        if (top < 10) top = 10;
        if (left + tRect.width > window.innerWidth) left = window.innerWidth - tRect.width - 10;
        if (top + tRect.height > window.innerHeight) top = window.innerHeight - tRect.height - 10;

        tooltip.style.top = `${top}px`;
        tooltip.style.left = `${left}px`;
    }

    nextStep() {
        this.currentStep++;
        this.showStep(this.currentStep);
    }

    prevStep() {
        this.currentStep--;
        this.showStep(this.currentStep);
    }

    endTour() {
        this.isActive = false;
        this.overlay.classList.remove('active');
        this.tooltip.classList.remove('active');
        if (this.highlightedElement) {
            this.highlightedElement.classList.remove('tour-highlight');
            this.highlightedElement.style.position = '';
            this.highlightedElement = null;
        }
        // Optional: Go back to home
        // window.location.hash = '';
    }

    handleResize() {
        if (this.isActive && this.steps[this.currentStep].target) {
            const target = document.querySelector(this.steps[this.currentStep].target);
            this.positionTooltip(target, this.steps[this.currentStep].placement);
        }
    }
}

// Initialize on load
const tourSystem = new TourSystem();

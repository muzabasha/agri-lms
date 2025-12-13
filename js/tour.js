/**
 * Agri-LMS Tour System
 * Guides students through the application features.
 * Features: Auto-play, Text-to-Speech Narration, Dynamic Navigation.
 */

class TourSystem {
    constructor() {
        this.steps = [];
        this.currentStep = 0;
        this.isActive = false;

        // Auto-play / Narration settings
        this.isAutoMode = true;
        this.speechSynth = window.speechSynthesis;
        this.currentUtterance = null;
        this.autoTimeout = null;

        // UI Elements
        this.overlay = null;
        this.tooltip = null;
        this.highlightedElement = null;

        // Bind methods
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.endTour = this.endTour.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.togglePlayPause = this.togglePlayPause.bind(this);

        this.init();
    }

    init() {
        this.createTourUI();
        window.addEventListener('resize', this.handleResize);

        // Define Intro Steps
        const introSteps = [
            {
                title: "Welcome to Agri-LMS!",
                message: "This interactive platform helps you master AI & ML concepts in Agriculture. Sit back while I give you a tour.",
                target: null,
                placement: "center"
            },
            {
                title: "Navigation & Progress",
                message: "Use the sidebar to explore Modules. Your progress is tracked automatically as you learn.",
                target: ".sidebar",
                placement: "right"
            }
        ];

        // Define Module Steps
        const moduleSteps = [];
        const modules = [
            { id: 1, title: "Module 1: Fundamentals", topicId: "m1-t1", desc: "Start with Python & AI basics here." },
            { id: 2, title: "Module 2: Data Science", topicId: "m2-t1", desc: "Learn data handling with Pandas." },
            { id: 3, title: "Module 3: Deep Learning", topicId: "m3-t1", desc: "Explore Neural Networks & Computer Vision." },
            { id: 4, title: "Module 4: Projects", topicId: "m4-t1", desc: "Work on end-to-end Machine Learning projects." },
            { id: 5, title: "Module 5: Portfolio", topicId: "m5-t1", desc: "Build your professional portfolio." }
        ];

        modules.forEach(mod => {
            // Step 1: Navigate and explain
            moduleSteps.push({
                title: mod.title,
                message: `We are now navigating to <b>${mod.title}</b>. ${mod.desc}`,
                target: ".content-area",
                placement: "left",
                onShow: () => {
                    window.location.hash = mod.topicId;
                    return new Promise(resolve => setTimeout(resolve, 1500)); // Allow time for route & render
                }
            });

            // Step 2: Highlight specific components (alternating)
            moduleSteps.push({
                title: `${mod.title} Features`,
                message: "Here you will find handouts, labs, and interactive quizzes. Use the tabs below to switch modes.",
                target: ".content-tabs",
                placement: "bottom"
            });
        });

        // Define Outro Steps
        const outroSteps = [
            {
                title: "You're Ready!",
                message: "You've seen the highlights. It's time to start your journey with Module 1. Happy Learning!",
                target: null,
                placement: "center",
                onShow: () => {
                    window.location.hash = 'm1-t1';
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
                <div class="tour-progress-bar">
                    <div id="tour-progress-fill" style="width: 0%; height: 4px; background: #E67E22; transition: width 0.3s;"></div>
                </div>
                <div class="tour-controls">
                    <span id="tour-status" style="font-size: 12px; color: #666; margin-right: 10px;">Auto-playing...</span>
                    <!-- Hidden manually output controls for auto mode -->
                    <button class="tour-btn tour-btn-back" id="tour-back" style="display:none">Back</button>
                    <button class="tour-btn tour-btn-next" id="tour-next">Next</button>
                </div>
            </div>
        `;
        document.body.appendChild(this.tooltip);

        // Event Listeners
        document.getElementById('tour-next').addEventListener('click', () => {
            // If manual click, cancel auto-wait and go next
            this.cancelAuto();
            this.nextStep();
        });
        document.getElementById('tour-back').addEventListener('click', () => {
            this.cancelAuto();
            this.prevStep();
        });
    }

    async startTour() {
        this.isActive = true;
        this.isAutoMode = true; // Default to auto
        this.currentStep = 0;

        this.overlay.classList.add('active');
        // Ensure overlay blocks interaction
        this.overlay.style.pointerEvents = 'auto';

        await this.showStep(this.currentStep);
    }

    async showStep(index) {
        if (!this.isActive) return;

        if (index < 0 || index >= this.steps.length) {
            this.endTour();
            return;
        }

        const step = this.steps[index];

        // cleanup previous
        this.cancelAuto();

        // Prepare UI (fade out briefly or keep?)
        // this.tooltip.style.opacity = '0.7';

        // Execute onShow action
        if (step.onShow) {
            await step.onShow();
        }

        if (!this.isActive) return; // In case closed during await

        // Find Target
        let targetEl = null;
        if (step.target) {
            targetEl = document.querySelector(step.target);
            if (!targetEl) console.warn(`Tour target ${step.target} not found.`);
        }

        // Highlight
        this.highlightElement(targetEl);

        // Update Content
        document.getElementById('tour-title').innerText = step.title;
        document.getElementById('tour-message').innerHTML = step.message;

        // Update Progress
        const progress = ((index + 1) / this.steps.length) * 100;
        document.getElementById('tour-progress-fill').style.width = `${progress}%`;

        // Button State
        const backBtn = document.getElementById('tour-next');
        backBtn.innerText = index === this.steps.length - 1 ? 'Finish' : (this.isAutoMode ? 'Skip' : 'Next');

        // Position Tooltip
        this.positionTooltip(targetEl, step.placement);
        this.tooltip.classList.add('active');
        this.tooltip.style.opacity = '1';

        // Speak & Auto Advance
        if (this.isAutoMode) {
            this.speakAndAdvance(step.message);
        }
    }

    speakAndAdvance(text) {
        if (!this.speechSynth) return;

        this.cancelAuto(); // Safety

        const plainText = text.replace(/<[^>]*>/g, '');
        const utterance = new SpeechSynthesisUtterance(plainText);
        utterance.rate = 1.0;
        utterance.pitch = 1.0;

        utterance.onend = () => {
            if (this.isActive && this.isAutoMode) {
                // Pause briefly then next
                this.autoTimeout = setTimeout(() => {
                    this.nextStep();
                }, 1500);
            }
        };

        this.currentUtterance = utterance;
        this.speechSynth.speak(utterance);
    }

    cancelAuto() {
        if (this.speechSynth) {
            this.speechSynth.cancel();
        }
        if (this.autoTimeout) {
            clearTimeout(this.autoTimeout);
            this.autoTimeout = null;
        }
    }

    togglePlayPause() {
        this.isAutoMode = !this.isAutoMode;
        if (!this.isAutoMode) {
            this.cancelAuto();
            document.getElementById('tour-status').innerText = "Paused";
            document.getElementById('tour-next').innerText = "Next";
        } else {
            document.getElementById('tour-status').innerText = "Auto-playing...";
            this.showStep(this.currentStep); // Restart step logic
        }
    }

    highlightElement(el) {
        if (this.highlightedElement) {
            this.highlightedElement.classList.remove('tour-highlight');
            this.highlightedElement.style.position = '';
            // Restore zIndex if we touched it (complex to track, assume CSS handles most)
        }

        if (el) {
            this.highlightedElement = el;
            el.classList.add('tour-highlight');

            // Ensure visibility above overlay
            const computedStyle = window.getComputedStyle(el);
            if (computedStyle.position === 'static') {
                el.style.position = 'relative';
            }
            // Z-index handled by CSS .tour-highlight often, 
            // but sometimes inline needed for stacking contexts
        } else {
            this.highlightedElement = null;
        }
    }

    positionTooltip(targetEl, placement) {
        const tooltip = this.tooltip;
        const spacing = 15;

        // Reset
        tooltip.style.top = '';
        tooltip.style.left = '';
        tooltip.style.transform = 'translate(0, 0)';

        if (!targetEl) {
            // Center
            tooltip.style.top = '50%';
            tooltip.style.left = '50%';
            tooltip.style.transform = 'translate(-50%, -50%)';
            return;
        }

        const rect = targetEl.getBoundingClientRect();
        // Since tooltip might be hidden/invisible, getBoundingClientRect might be 0? 
        // We assume it has dimensions from CSS width: 320px
        const tWidth = 320;
        const tHeight = tooltip.offsetHeight || 150; // Estimate if 0

        let top, left;

        switch (placement) {
            case 'top':
                top = rect.top - tHeight - spacing;
                left = rect.left + (rect.width - tWidth) / 2;
                break;
            case 'bottom':
                top = rect.bottom + spacing;
                left = rect.left + (rect.width - tWidth) / 2;
                break;
            case 'left':
                top = rect.top + (rect.height - tHeight) / 2;
                left = rect.left - tWidth - spacing;
                break;
            case 'right':
                top = rect.top + (rect.height - tHeight) / 2;
                left = rect.right + spacing;
                break;
            default: // center
                top = window.innerHeight / 2 - tHeight / 2;
                left = window.innerWidth / 2 - tWidth / 2;
        }

        // Boundary checks
        if (left < 10) left = 10;
        if (top < 10) top = 10;
        if (left + tWidth > window.innerWidth) left = window.innerWidth - tWidth - 10;
        if (top + tHeight > window.innerHeight) top = window.innerHeight - tHeight - 10;

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
        this.cancelAuto();

        this.overlay.classList.remove('active');
        this.tooltip.classList.remove('active');

        if (this.highlightedElement) {
            this.highlightedElement.classList.remove('tour-highlight');
            this.highlightedElement.style.position = '';
            this.highlightedElement = null;
        }

        // Reset overlay pointer events
        this.overlay.style.pointerEvents = 'none';
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

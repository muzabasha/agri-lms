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

        this.steps = [
            // 1. Welcome
            {
                title: "Welcome to Agri-LMS",
                message: "This platform is your gateway to mastering AI in Agriculture. Let's take a live tour of the learning experience.",
                target: ".logo",
                placement: "bottom"
            },

            // 2. Sidebar / Modules
            {
                title: "Course Navigation",
                message: "Your journey begins here. The sidebar organizes all 5 Modules. Let's look at Module 1.",
                target: ".sidebar",
                placement: "right",
                onShow: () => {
                    // Ensure sidebar is open on mobile
                    const sidebar = document.querySelector('.sidebar');
                    if (sidebar && window.innerWidth <= 768) sidebar.classList.add('active');

                    // Simulate looking at the first module
                    const firstModule = document.querySelector('.module-header');
                    if (firstModule) firstModule.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    return new Promise(r => setTimeout(r, 1500));
                }
            },

            // 3. Module Overview (Trigger Click)
            {
                title: "Module Overview",
                message: "Clicking a module shows its roadmap. Here we see the <b>Objectives</b> and <b>Outcomes</b>.",
                target: "#moduleOverview",
                placement: "center",
                onShow: () => {
                    // Find and click the first module header to trigger overview
                    const firstModule = document.querySelector('.module-header');
                    if (firstModule) firstModule.click();
                    return new Promise(r => setTimeout(r, 2000)); // Wait for view switch
                }
            },

            // 4. Objectives (Highlight)
            {
                title: "Learning Objectives",
                message: "Every module defines clear goals. You'll know exactly what you're aiming to achieve.",
                target: ".module-card.objectives",
                placement: "right",
                onShow: () => {
                    document.querySelector('.module-card.objectives')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    return new Promise(r => setTimeout(r, 1000));
                }
            },

            // 5. Outcomes (Highlight)
            {
                title: "Skills & Outcomes",
                message: "And here are the tangible skills you will gain by the end of the module.",
                target: ".module-card.outcomes",
                placement: "left",
                onShow: () => {
                    document.querySelector('.module-card.outcomes')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    return new Promise(r => setTimeout(r, 1000));
                }
            },

            // 6. Enter Topic
            {
                title: "Interactive Topics",
                message: "Now, let's step into a real lesson: <b>Introduction to AI</b>.",
                target: ".topic-content",
                placement: "center",
                onShow: () => {
                    // Click the first topic link
                    const firstTopic = document.querySelector('.topic-link');
                    if (firstTopic) firstTopic.click();
                    // Fallback if click fails or navigation logic differs
                    else window.location.hash = 'm1-t1';

                    return new Promise(r => setTimeout(r, 2000));
                }
            },

            // 7. Handout Tab
            {
                title: "The Handout",
                message: "This is your textbook. Detailed explanations, analogies, and examples live here.",
                target: "button[data-tab='handout']",
                placement: "bottom",
                onShow: () => {
                    document.querySelector('button[data-tab="handout"]')?.click();
                    return new Promise(r => setTimeout(r, 1000));
                }
            },

            // 8. Slides Tab
            {
                title: "Presentation Slides",
                message: "Prefer visuals? The Slides tab offers a quick, graphical summary of the topic.",
                target: "button[data-tab='presentation']",
                placement: "bottom",
                onShow: () => {
                    document.querySelector('button[data-tab="presentation"]')?.click();
                    return new Promise(r => setTimeout(r, 1000));
                }
            },

            // 9. Lab Tab
            {
                title: "Hands-on Lab",
                message: "Theory to Practice! Run real Python code right in the browser to solve agricultural problems.",
                target: "button[data-tab='code']",
                placement: "bottom",
                onShow: () => {
                    document.querySelector('button[data-tab="code"]')?.click();
                    return new Promise(r => setTimeout(r, 1000));
                }
            },

            // 10. Activity Tab
            {
                title: "Field Activity",
                message: "Learning by doing. These physical activities connect AI concepts to farming reality.",
                target: "button[data-tab='activity']",
                placement: "bottom",
                onShow: () => {
                    document.querySelector('button[data-tab="activity"]')?.click();
                    return new Promise(r => setTimeout(r, 1000));
                }
            },

            // 11. Quiz Tab
            {
                title: "Knowledge Check",
                message: "Finally, test your understanding. Instant feedback helps you master the concepts.",
                target: "button[data-tab='quiz']",
                placement: "bottom",
                onShow: () => {
                    document.querySelector('button[data-tab="quiz"]')?.click();
                    return new Promise(r => setTimeout(r, 1000));
                }
            },

            // 12. Conclusion
            {
                title: "Ready to Start?",
                message: "To finish a topic, click 'Mark as Complete'. Good luck on your learning journey!",
                target: "#markCompleteBtn",
                placement: "top",
                onShow: () => {
                    document.querySelector('#markCompleteBtn')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    return new Promise(r => setTimeout(r, 1000));
                }
            }
        ];
    }

    createTourUI() {
        // Overlay (Optional: remove if user wants full interactability, but keeping for focus)
        this.overlay = document.createElement('div');
        this.overlay.className = 'tour-overlay';
        document.body.appendChild(this.overlay);

        // Tooltip -> Now a fixed "Audio Controller"
        this.tooltip = document.createElement('div');
        this.tooltip.className = 'tour-audio-controller';
        this.tooltip.style.display = 'none';

        // Inline styles for the fixed controller
        this.tooltip.style.position = 'fixed';
        this.tooltip.style.bottom = '20px';
        this.tooltip.style.right = '20px';
        this.tooltip.style.width = '300px';
        this.tooltip.style.background = 'white';
        this.tooltip.style.padding = '15px';
        this.tooltip.style.borderRadius = '12px';
        this.tooltip.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
        this.tooltip.style.zIndex = '10001';
        this.tooltip.style.display = 'none';
        this.tooltip.style.flexDirection = 'column';
        this.tooltip.style.gap = '10px';

        this.tooltip.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #eee; padding-bottom: 8px;">
                <div style="font-weight: bold; color: #27ae60;"><i class="fas fa-volume-up"></i> Tour Narration</div>
                <button id="tour-close-btn" style="background:none; border:none; cursor:pointer; font-size: 1.2rem; color: #666;"><i class="fas fa-times"></i></button>
            </div>
            
            <div style="font-size: 0.9rem; color: #333; font-style: italic;">
                <span id="tour-title">Loading...</span>
            </div>

            <!-- Hidden message container (Text removed as per request) -->
            <div id="tour-message" style="display: none;"></div>

            <div style="display: flex; gap: 10px; margin-top: 5px;">
                <button id="tour-stop" style="flex: 1; padding: 8px; background: #e74c3c; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
                    Stop Narration
                </button>
                <button id="tour-next" style="flex: 1; padding: 8px; background: #27ae60; color: white; border: none; border-radius: 6px; cursor: pointer;">
                    Next
                </button>
            </div>
        `;
        document.body.appendChild(this.tooltip);

        // Event Listeners
        document.getElementById('tour-next').addEventListener('click', () => {
            this.cancelAuto();
            this.nextStep();
        });

        document.getElementById('tour-stop').addEventListener('click', () => {
            this.endTour();
        });

        document.getElementById('tour-close-btn').addEventListener('click', () => {
            this.endTour();
        });
    }

    async startTour() {
        // Close Chat if open
        if (window.agriBot && window.agriBot.isOpen) {
            window.agriBot.toggle();
        }

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
        const titleEl = document.getElementById('tour-title');
        if (titleEl) titleEl.innerText = step.title;

        const msgEl = document.getElementById('tour-message');
        if (msgEl) msgEl.innerHTML = step.message;

        // Button State
        const nextBtn = document.getElementById('tour-next');
        if (nextBtn) {
            nextBtn.innerText = index === this.steps.length - 1 ? 'Finish' : 'Next';
        }

        // Position Tooltip (Disabled for Fixed UI)
        // this.positionTooltip(targetEl, step.placement);

        // Show tooltip
        this.tooltip.style.display = 'flex'; // Flex for layout
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

        // Voice Settings for "Beautiful Female Voice"
        const voices = this.speechSynth.getVoices();

        // Priority list for female-sounding voices
        const preferredVoices = [
            'Google US English',       // Chrome typical female
            'Microsoft Zira',          // Windows typical female
            'Samantha',                 // macOS typical female
            'Google UK English Female'
        ];

        let selectedVoice = null;
        for (const name of preferredVoices) {
            selectedVoice = voices.find(v => v.name.includes(name));
            if (selectedVoice) break;
        }

        // Fallback to any English voice if specific ones fail
        if (!selectedVoice) {
            selectedVoice = voices.find(v => v.lang.startsWith('en'));
        }

        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }

        utterance.rate = 0.95; // Slightly slower for better narration
        utterance.pitch = 1.1; // Slightly higher pitch for female tone
        utterance.volume = 1.0;

        utterance.onend = () => {
            if (this.isActive && this.isAutoMode) {
                // Pause briefly then next
                this.autoTimeout = setTimeout(() => {
                    this.nextStep();
                }, 2000); // 2s pause for absorption
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
        const statusEl = document.getElementById('tour-status');

        if (!this.isAutoMode) {
            this.cancelAuto();
            if (statusEl) statusEl.innerText = "Paused";
        } else {
            if (statusEl) statusEl.innerText = "Auto-playing...";
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
        // Disabled for Fixed UI
        // We now use a fixed bottom-right controller
        return;
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

        // Wait for transition then hide
        setTimeout(() => {
            this.tooltip.style.display = 'none';
        }, 500);

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

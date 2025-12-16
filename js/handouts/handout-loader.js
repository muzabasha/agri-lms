// Handout Loader - Integrates all module handouts
// This file combines all handout parts and provides them to the lecture system

const HandoutLoader = {
    // All handouts combined from multiple files
    handouts: {},
    initialized: false,

    // Initialize - call this after all handout files are loaded
    init: function () {
        // Always try to load/merge handlers to ensure we catch lazily loaded scripts
        // if (this.initialized) return; <--- REMOVED strict check to allow updates

        console.log('[HandoutLoader] Initializing...');

        // Combine Module 1 handouts
        if (typeof module1Handouts !== 'undefined') {
            Object.assign(this.handouts, module1Handouts);
            console.log('[HandoutLoader] Loaded module1Handouts');
        }
        if (typeof module1HandoutsPart2 !== 'undefined') {
            Object.assign(this.handouts, module1HandoutsPart2);
            console.log('[HandoutLoader] Loaded module1HandoutsPart2');
        }
        if (typeof module1HandoutsPart3 !== 'undefined') {
            Object.assign(this.handouts, module1HandoutsPart3);
            console.log('[HandoutLoader] Loaded module1HandoutsPart3');
        }

        // Combine Module 2 handouts
        if (typeof module2Handouts !== 'undefined') {
            Object.assign(this.handouts, module2Handouts);
            console.log('[HandoutLoader] Loaded module2Handouts');
        }
        if (typeof module2HandoutsPart2 !== 'undefined') {
            Object.assign(this.handouts, module2HandoutsPart2);
            console.log('[HandoutLoader] Loaded module2HandoutsPart2');
        }
        if (typeof module2HandoutsPart3 !== 'undefined') {
            Object.assign(this.handouts, module2HandoutsPart3);
            console.log('[HandoutLoader] Loaded module2HandoutsPart3');
        }

        // Combine Module 3 handouts
        if (typeof module3Handouts !== 'undefined') {
            Object.assign(this.handouts, module3Handouts);
            console.log('[HandoutLoader] Loaded module3Handouts');
        }
        if (typeof module3HandoutsPart2 !== 'undefined') {
            Object.assign(this.handouts, module3HandoutsPart2);
            console.log('[HandoutLoader] Loaded module3HandoutsPart2');
        }
        if (typeof module3HandoutsPart3 !== 'undefined') {
            Object.assign(this.handouts, module3HandoutsPart3);
            console.log('[HandoutLoader] Loaded module3HandoutsPart3');
        }

        // Combine Module 4 handouts
        if (typeof module4Handouts !== 'undefined') {
            Object.assign(this.handouts, module4Handouts);
            console.log('[HandoutLoader] Loaded module4Handouts');
        }
        if (typeof module4HandoutsPart2 !== 'undefined') {
            Object.assign(this.handouts, module4HandoutsPart2);
            console.log('[HandoutLoader] Loaded module4HandoutsPart2');
        }

        // Combine Module 5 handouts
        if (typeof module5Handouts !== 'undefined') {
            Object.assign(this.handouts, module5Handouts);
            console.log('[HandoutLoader] Loaded module5Handouts');
        }

        // Combine Activities
        if (typeof activitiesHandouts !== 'undefined') {
            Object.assign(this.handouts, activitiesHandouts);
            console.log('[HandoutLoader] Loaded activitiesHandouts');
        }

        // Combine Extended Modules
        if (typeof module3HandoutsPart4 !== 'undefined') {
            Object.assign(this.handouts, module3HandoutsPart4);
            console.log('[HandoutLoader] Loaded module3HandoutsPart4');
        }
        if (typeof module4HandoutsPart3 !== 'undefined') {
            Object.assign(this.handouts, module4HandoutsPart3);
            console.log('[HandoutLoader] Loaded module4HandoutsPart3');
        }

        this.initialized = true;
        console.log(`📚 HandoutLoader: Loaded ${Object.keys(this.handouts).length} handouts`);
        console.log('[HandoutLoader] Available:', Object.keys(this.handouts).slice(0, 10), '...');
    },

    // Get handout by topic ID - auto-init if needed
    getHandout: function (topicId) {
        if (!this.initialized) this.init();
        const handout = this.handouts[topicId];
        if (handout) {
            console.log(`[HandoutLoader] Found handout for ${topicId}`);
            return handout;
        }
        console.log(`[HandoutLoader] No handout for ${topicId}, using placeholder`);
        return null; // Return null so fallback systems can be used
    },

    // Generate placeholder for missing handouts
    generatePlaceholder: function (topicId) {
        return `
            <div class="handout-premium">
                <div class="topic-header">
                    <h1>🌾 ${topicId.toUpperCase()}</h1>
                    <p class="duration">⏱️ Content being prepared</p>
                </div>
                <div class="learning-objectives">
                    <h2>📌 Coming Soon</h2>
                    <p>Comprehensive handout for this topic is being developed.</p>
                    <p>Check back soon for:</p>
                    <ul>
                        <li>🚜 Farming Analogy</li>
                        <li>📖 Core Concepts</li>
                        <li>💻 Python Code</li>
                        <li>🎯 Student Activity</li>
                        <li>📝 Quiz with Feedback</li>
                    </ul>
                </div>
            </div>
        `;
    },

    // Check if handout exists - auto-init if needed
    hasHandout: function (topicId) {
        if (!this.initialized) this.init();
        const has = topicId in this.handouts;
        console.log(`[HandoutLoader] hasHandout(${topicId}): ${has}`);
        return has;
    },

    // Get list of available handout IDs
    getAvailableHandouts: function () {
        if (!this.initialized) this.init();
        return Object.keys(this.handouts);
    },

    // Get handout count by module
    getModuleStats: function () {
        if (!this.initialized) this.init();
        const stats = { m1: 0, m2: 0, m3: 0, m4: 0, m5: 0 };
        for (const id of Object.keys(this.handouts)) {
            const module = id.substring(0, 2);
            if (stats[module] !== undefined) {
                stats[module]++;
            }
        }
        return stats;
    }
};

// Initialize immediately when script loads
HandoutLoader.init();

// Also run on DOMContentLoaded as backup  
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function () {
        HandoutLoader.init();
    });
}

// Export for use
if (typeof window !== 'undefined') {
    window.HandoutLoader = HandoutLoader;
}


// Handout Loader - Integrates all module handouts
// This file combines all handout parts and provides them to the lecture system

const HandoutLoader = {
    // All handouts combined from multiple files
    handouts: {},

    // Initialize - call this after all handout files are loaded
    init: function () {
        // Combine Module 1 handouts
        if (typeof module1Handouts !== 'undefined') {
            Object.assign(this.handouts, module1Handouts);
        }
        if (typeof module1HandoutsPart2 !== 'undefined') {
            Object.assign(this.handouts, module1HandoutsPart2);
        }
        if (typeof module1HandoutsPart3 !== 'undefined') {
            Object.assign(this.handouts, module1HandoutsPart3);
        }

        // Combine Module 2 handouts
        if (typeof module2Handouts !== 'undefined') {
            Object.assign(this.handouts, module2Handouts);
        }
        if (typeof module2HandoutsPart2 !== 'undefined') {
            Object.assign(this.handouts, module2HandoutsPart2);
        }

        // Combine Module 3 handouts
        if (typeof module3Handouts !== 'undefined') {
            Object.assign(this.handouts, module3Handouts);
        }

        // Combine Module 4 handouts
        if (typeof module4Handouts !== 'undefined') {
            Object.assign(this.handouts, module4Handouts);
        }

        // Combine Module 5 handouts
        if (typeof module5Handouts !== 'undefined') {
            Object.assign(this.handouts, module5Handouts);
        }

        console.log(`📚 HandoutLoader: Loaded ${Object.keys(this.handouts).length} handouts`);
    },

    // Get handout by topic ID
    getHandout: function (topicId) {
        return this.handouts[topicId] || this.generatePlaceholder(topicId);
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

    // Check if handout exists
    hasHandout: function (topicId) {
        return topicId in this.handouts;
    },

    // Get list of available handout IDs
    getAvailableHandouts: function () {
        return Object.keys(this.handouts);
    },

    // Get handout count by module
    getModuleStats: function () {
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

// Auto-initialize when DOM is ready
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function () {
        HandoutLoader.init();
    });
}

// Export for use
if (typeof window !== 'undefined') {
    window.HandoutLoader = HandoutLoader;
}

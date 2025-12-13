const indiaAgriData = [
    { state: "Uttar Pradesh", stat: "Top Producer of Food Grains (Wheat, Sugarcane) 🌾" },
    { state: "Punjab", stat: "The Breadbasket of India (High Yields) 🚜" },
    { state: "Madhya Pradesh", stat: "Leading Producer of Pulses & Soybeans 🌱" },
    { state: "West Bengal", stat: "Largest Rice Producer in India 🍚" },
    { state: "Maharashtra", stat: "Major Producer of Cotton & Onions 🧅" },
    { state: "Gujarat", stat: "Leader in Groundnut & Cotton 🥜" },
    { state: "Rajasthan", stat: "Top Producer of Mustard & Bajra 🐪" },
    { state: "Andhra Pradesh", stat: "Rice Bowl of South India 🌶️" },
    { state: "Karnataka", stat: "Coffee Capital (70% Production) ☕" },
    { state: "Kerala", stat: "Land of Spices (Cardamom, Pepper) 🍛" },
    { state: "Tamil Nadu", stat: "Leader in Bananas & Tapioca 🍌" },
    { state: "Telangana", stat: "Seed Bowl of India 🌽" },
    { state: "Assam", stat: "World's Largest Tea Growing Region 🍵" },
    { state: "Bihar", stat: "Major Litchi & Vegetable Producer 🥬" },
    { state: "Haryana", stat: "Highest Yield/Hectare for Wheat 🌾" },
    { state: "Himachal Pradesh", stat: "Apple State of India 🍎" },
    { state: "Jammu & Kashmir", stat: "Saffron Capital of the World 🌸" },
    { state: "Odisha", stat: "Major Contributor to Rice Production 🌾" },
    { state: "Chhattisgarh", stat: "Rice Bowl of Central India 🍚" }
];

class StateStatsRotator {
    constructor(containerId, data) {
        this.container = document.getElementById(containerId);
        this.data = data;
        this.currentIndex = 0;
        this.interval = null;
    }

    init() {
        if (!this.container) return;
        this.renderCurrent();
        this.startRotation();
    }

    renderCurrent() {
        if (this.data.length === 0) return;
        const item = this.data[this.currentIndex];

        // Fade out
        this.container.classList.add('fading');

        setTimeout(() => {
            // Update content
            this.container.innerHTML = `
                <div class="growth-item active">
                    <div class="growth-title">${item.state}</div>
                    <div class="growth-stat">${item.stat}</div>
                </div>
            `;
            // Fade in
            this.container.classList.remove('fading');
        }, 500); // Wait for fade out
    }

    startRotation() {
        // Change every 4 seconds
        this.interval = setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.data.length;
            this.renderCurrent();
        }, 4000);
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    // Only init if the container exists
    if (document.getElementById('stateStatsBoard')) {
        const rotator = new StateStatsRotator('stateStatsBoard', indiaAgriData);
        rotator.init();
    }
});

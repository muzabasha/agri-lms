// Module 3 Comprehensive Handouts - Part 3
// Advanced Models, Robotics, Weather & Market Analysis

const module3HandoutsPart3 = {
    // === Vision & Pre-trained Models ===
    'm3-t10': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Image Classification with Pre-trained Models</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>
            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand Transfer Learning</li>
                    <li>Use ResNet, MobileNet, and VGG</li>
                </ul>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Transfer Learning = Hiring an Experienced Farm Manager</strong></p>
                    <p>Instead of training a new worker (model) from scratch, you hire someone who already knows farming (ImageNet knowledge) and just teach them your specific crops.</p>
                </div>
            </div>
            <div class="code-section">
                <h2>💻 MobileNetV2 Example</h2>
                <pre><code class="language-python">
from tensorflow.keras.applications import MobileNetV2
base_model = MobileNetV2(weights='imagenet', include_top=False)
base_model.trainable = False # Freeze base
                </code></pre>
            </div>
        </div>
    `,
    'm3-t11': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>PlantVillage Dataset & Preprocessing</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="summary">
                <h2>📋 Key Info</h2>
                <p>The standard dataset for crop disease classification. Contains ~54k images of 38 crop-disease pairs.</p>
            </div>
        </div>
    `,
    'm3-t12': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Pest and Weed Detection (YOLO)</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Object Detection = The Scout</strong></p>
                    <p>Classification says "This image contains a weed." Detection says "Here is the weed, here is the crop, and here is a bug." It draws boxes around them.</p>
                </div>
            </div>
        </div>
    `,
    'm3-t13': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Soil Health Classification</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
             <div class="core-concepts">
                <h2>📖 Soil Types</h2>
                <ul><li>Clay</li><li>Silty</li><li>Sandy</li><li>Loam (Best!)</li></ul>
            </div>
        </div>
    `,
    'm3-t14': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Soil Property Prediction</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="summary">
                <h2>📋 Goal</h2>
                <p>Predicting continuous values like pH and NPK levels using regression models on spectral data.</p>
            </div>
        </div>
    `,
    // === Robotics ===
    'm3-t15': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Precision Agriculture Robots</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Agri-Robots = The 24/7 Farmhand</strong></p>
                    <p>Robots don't get backaches and don't sleep. They enable precision tasks (like picking one berry) at scale.</p>
                </div>
            </div>
        </div>
    `,
    'm3-t16': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Drone Technology</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
             <div class="core-concepts">
                <h2>📖 Uses</h2>
                <ul><li>Mapping (Photogrammetry)</li><li>Spraying (Spot application)</li><li>Monitoring (Multispectral)</li></ul>
            </div>
        </div>
    `,
    'm3-t17': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Precision Irrigation Systems</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Smart Irrigation = Drinking When Thirsty</strong></p>
                    <p>Old irrigation is like drinking 8 glasses of water at 8am regardless. Smart irrigation drinks sips exactly when the body (plant) needs it.</p>
                </div>
            </div>
        </div>
    `,
    'm3-t18': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Water Requirement Prediction</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="summary">
                <h2>📋 Evapotranspiration (ET)</h2>
                <p>Calculating how much water a crop loses to the air (Evaporation) and breathing (Transpiration) to know how much to replace.</p>
            </div>
        </div>
    `,
    // === Time Series & Market (t19 is in Base) ===
    'm3-t20': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>ARIMA Models for Weather</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>
            <div class="core-concepts">
                <h2>📖 Components</h2>
                <ul><li><strong>AR:</strong> AutoRegressive (Past values)</li><li><strong>I:</strong> Integrated (Differencing for stationarity)</li><li><strong>MA:</strong> Moving Average (Past errors)</li></ul>
            </div>
        </div>
    `
};

// Fill remaining market/weather topics
const marketTopics = ['m3-t21', 'm3-t22', 'm3-t23', 'm3-t24'];
marketTopics.forEach((id, index) => {
    const titles = [
        "Weather Pattern Recognition", "Crop Price Forecasting",
        "Demand Prediction Models", "Agricultural Market Insights"
    ];
    module3HandoutsPart3[id] = `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>${titles[index]}</h1>
                <p class="duration">⏱️ Market & Weather Analysis</p>
            </div>
            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Apply time-series analysis to real world data</li>
                    <li>Understand seasonality and trends</li>
                    <li>Make data-driven decisions</li>
                </ul>
            </div>
             <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Forecasting = Looking at the horizon</strong></p>
                    <p>Predicting prices or storms allows the farmer to harvest early or hold stock. It converts uncertainty into calculated risk.</p>
                </div>
            </div>
        </div>
    `;
});

if (typeof window !== 'undefined') {
    window.module3HandoutsPart3 = module3HandoutsPart3;
}

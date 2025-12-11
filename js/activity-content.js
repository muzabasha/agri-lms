// Activity-Content.js - Student Activity and Knowledge Transfer Instructions

class ActivitySystem {
    constructor() {
        this.structure = (typeof comprehensiveCourseStructure !== 'undefined') ? comprehensiveCourseStructure : null;
    }

    getActivity(topicId) {
        // 1. Check for specific activity
        if (this.specificActivities[topicId]) {
            return this.specificActivities[topicId];
        }

        // 2. Generate dynamic activity
        return this.generateDynamicActivity(topicId);
    }

    generateDynamicActivity(topicId) {
        // Parse metadata
        let title = "Topic Activity";
        let subtopics = [];

        if (this.structure) {
            for (const module of this.structure.modules) {
                const topic = module.topics.find(t => t.id === topicId);
                if (topic) {
                    title = topic.title;
                    subtopics = topic.subtopics || [];
                    break;
                }
            }
        }

        // Create Generic Task if no specific one exists
        return `
            <div class="activity-container">
                <div class="activity-header">
                    <h3><i class="fas fa-bolt"></i> Activity: ${title} Knowledge Check</h3>
                    <p>Standard synthesis task for this topic.</p>
                </div>
                <div class="activity-step">
                    <span class="step-number">1</span>
                    <div class="step-content">
                        <h4>Concept Definition</h4>
                        <p>Explain the core concept of <strong>${title}</strong> in your own words.</p>
                    </div>
                </div>
                <div class="activity-step">
                    <span class="step-number">2</span>
                    <div class="step-content">
                        <h4>Practical Application</h4>
                        <p>Describe one way you would use this to solve a problem on a real farm.</p>
                    </div>
                </div>
            </div>
        `;
    }

    get specificActivities() {
        // Helper for generating consistent QA checklists for projects
        const getActTemplate = (title, icon, rules) => `
            <div class="activity-container">
                <div class="activity-header">
                    <h3><i class="fas \${icon}"></i> QA: \${title}</h3>
                    <p>Verify system functionality with these test cases.</p>
                </div>
                <div class="activity-step">
                    <span class="step-number">1</span>
                    <div class="step-content">
                        <h4>Mandatory Test Cases</h4>
                        <ul class="checklist">
                            \${rules.map((r, i) => `< li > <input type="checkbox"> <strong>TC-\${(i + 1).toString().padStart(2, '0')}:</strong> \${r}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="activity-step">
                    <span class="step-number">2</span>
                    <div class="step-content">
                        <h4>Test Log</h4>
                        <textarea placeholder="Paste results here..." style="width:100%; height:80px; padding:10px; border:1px solid #ddd; border-radius:4px;"></textarea>
                    </div>
                </div>
            </div>`;

        const projectSpecs = {
            'm5-t2': { t: "Smart Irrigation", i: "fa-water", r: ["Low Moisture = Pump ON", "High Moisture = Pump OFF", "Sensor Disconnect = Error Alert"] },
            'm5-t3': { t: "Crop Disease API", i: "fa-server", r: ["Valid Image = JSON Resp", "Invalid File = 400 Error", "Response time < 200ms"] },
            'm5-t4': { t: "Market Dashboard", i: "fa-chart-line", r: ["CSV Loads 100% rows", "Date Filter Works", "Price Chart Renders"] },
            'm5-t5': { t: "Soil Nutrient Pred", i: "fa-table", r: ["Model MSE < 0.2", "Input Out-of-bounds Handling", "Feature Importance Plot Loads"] },
            'm5-t6': { t: "Weed Detection", i: "fa-eye", r: ["Weed Bounding Box present", "Confidence > 0.5", "Video Stream FPS > 15"] },
            'm5-t7': { t: "Maturity Grading", i: "fa-apple-alt", r: ["Red Apple = Ripe", "Green Apple = Raw", "Bad Lighting Handling"] },
            'm5-t8': { t: "Greenhouse Control", i: "fa-thermometer-half", r: ["Temp < Setpoint = Heater ON", "Temp > Setpoint = Fan ON", "PID Adjustment Stable"] },
            'm5-t9': { t: "Fruit Picker Arm", i: "fa-robot", r: ["Inverse Kinematics Valid", "Target Reached within 1cm", "Gripper Force Safe"] },
            'm5-t10': { t: "Drone Path Plan", i: "fa-plane", r: ["No Obstacle Collision", "Path Found < 1sec wait", "Battery suffiecient calculated"] },
            'm5-t11': { t: "Livestock Health", i: "fa-heartbeat", r: ["Anomaly Detected for High HR", "Normal Activity = Safe", "False Positive Rate < 5%"] },
            'm5-t12': { t: "Weather App", i: "fa-cloud-sun", r: ["API Key Loaded Securely", "Forecast displays 7 days", "Rain Alert triggers Notification"] },
            'm5-t13': { t: "Rotation Rec", i: "fa-sync", r: ["Wheat -> Legume Rule Valid", "Display Nitrogen Benefit", "UI clear for farmers"] },
            'm5-t14': { t: "Farmer Chatbot", i: "fa-comments", r: ["Greeting Response Valid", "Agri-Context maintained", "No hallucinations for chemical dosage"] },
            'm5-t15': { t: "Satellite Yield", i: "fa-satellite", r: ["Load TIF image success", "NDVI Map Generated", "Yield Estimate within specific range"] },
            'm5-t16': { t: "Supply Chain Opt", i: "fa-truck", r: ["Transport Cost Minimized", "Constraint Satisfied (Capacity)", "Route Map Displayed"] },
            'm5-t17': { t: "Hydroponics Monitor", i: "fa-fill-drip", r: ["pH < 5.5 = Add Base Alert", "EC stable", "Twin Visual matches Data"] },
            'm5-t18': { t: "Pest Counting", i: "fa-bug", r: ["Count Accuracy +/- 2", "Density map colored", "Threshold alert email"] },
            'm5-t19': { t: "Water Quality Index", i: "fa-tint", r: ["WQI Formula Calculation correct", "Report PDF Generated", "Standard range verification"] },
            'm5-t20': { t: "Crop Sched Genetic", i: "fa-dna", r: ["Fitness Score Improves over Gen", "Schedule Constraint valid", "Timeline Visualization"] },
            'm5-t21': { t: "Equip Maintenance", i: "fa-cogs", r: ["High Variation = Anomaly", "Dashboard Status Update", "Log File Analysis"] }
        };

        const projectActivities = {};
        Object.keys(projectSpecs).forEach(key => {
            projectActivities[key] = getActTemplate(projectSpecs[key].t, projectSpecs[key].i, projectSpecs[key].r);
        });

        return {
            // --- MODULE 1: Fundamentals Activities ---
            'm1-activity1': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-tools"></i> Activity: Google Colab Setup</h3>
                        <p>Get your cloud environment ready for AI development.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Create Account</h4>
                            <p>Go to <a href="https://colab.research.google.com" target="_blank">colab.research.google.com</a> and sign in with your Google account.</p>
                        </div>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">2</span>
                        <div class="step-content">
                            <h4>Hello World</h4>
                            <p>Create a new notebook and run: <code>print("Hello AI Agriculture")</code></p>
                        </div>
                    </div>
                </div>`,
            'm1-activity2': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-code"></i> Activity: Python Exercises</h3>
                        <p>Practice basic syntax and logic.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Crop Calculator</h4>
                            <p>Write a function that accepts 'acres' and 'yield_per_acre' and returns total production.</p>
                        </div>
                    </div>
                </div>`,
            'm1-activity3': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-tractor"></i> Activity: Agri Data Project</h3>
                        <p>Analyze mock farm data.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Data Entry</h4>
                            <p>Create a list of dictionaries representing 5 different farms with keys: Name, Size, Crop.</p>
                        </div>
                    </div>
                </div>`,
            'm1-activity4': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-chart-bar"></i> Activity: Matplotlib Viz</h3>
                        <p>Visualize farm metrics.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Yield Chart</h4>
                            <p>Plot a bar chart comparing the yields of Wheat, Rice, and Maize.</p>
                        </div>
                    </div>
                </div>`,

            // --- MODULE 2: Data Science Activities ---
            'm2-activity1': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-table"></i> Activity: NumPy Soil Analysis</h3>
                        <p>Matrix operations on soil sensor data.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>pH Matrix</h4>
                            <p>Create a 3x3 matrix representing pH levels in a grid field. Calculate the mean pH.</p>
                        </div>
                    </div>
                </div>`,
            'm2-activity2': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-chart-line"></i> Activity: Linear Regression</h3>
                        <p>Predicting futures.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Rainfall vs Yield</h4>
                            <p>Use Scikit-Learn to fit a line between Rainfall (X) and Yield (y) data points.</p>
                        </div>
                    </div>
                </div>`,
            'm2-activity3': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-vial"></i> Activity: Crop Classification</h3>
                        <p>Binary classification logic.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Logistic Regression</h4>
                            <p>Train a model to classify "Healthy" vs "Diseased" based on leaf spot percentage.</p>
                        </div>
                    </div>
                </div>`,
            'm2-activity4': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-balance-scale"></i> Activity: Model Eval</h3>
                        <p>Testing your accuracy.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Confusion Matrix</h4>
                            <p>Generate a confusion matrix for your classification model from the previous activity.</p>
                        </div>
                    </div>
                </div>`,

            // --- MODULE 3: Advanced Activities ---
            'm3-activity1': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-seedling"></i> Activity: Yield Pred System</h3>
                        <p>Integrated RF Model.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Complex Features</h4>
                            <p>Train a Random Forest using Rainfall, Temp, and Soil Quality to predict yield.</p>
                        </div>
                    </div>
                </div>`,
            'm3-activity2': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-camera"></i> Activity: Disease CNN</h3>
                        <p>Deep Learning Vision.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Architecture Design</h4>
                            <p>Sketch (and code) a CNN with 2 Conv2D layers and 1 Dense layer.</p>
                        </div>
                    </div>
                </div>`,
            'm3-activity3': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-flask"></i> Activity: Soil Health Analysis</h3>
                        <p>Clustering soil types.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>K-Means Clustering</h4>
                            <p>Use K-Means to group 100 soil samples into 3 distinct nutrient profiles.</p>
                        </div>
                    </div>
                </div>`,
            'm3-activity4': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-cloud-sun"></i> Activity: Weather Config</h3>
                        <p>Forecasting basics.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>ARIMA Setup</h4>
                            <p>Prepare a time-series dataset of daily temperatures for ARIMA input.</p>
                        </div>
                    </div>
                </div>`,

            // --- Capstone Activities ---
            'm4-activity1': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-project-diagram"></i> Activity: Capstone Planning</h3>
                        <p>Define your roadmap.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Problem Statement</h4>
                            <p>Write a clear 1-sentence problem statement for your final project.</p>
                        </div>
                    </div>
                </div>`,
            'm4-activity2': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-laptop-code"></i> Activity: Development Level 1</h3>
                        <p>Core prototype.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>MVP Check</h4>
                            <p>Verify that your main algorithm runs on a small sample dataset.</p>
                        </div>
                    </div>
                </div>`,
            'm4-activity3': `
                <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-chalkboard-teacher"></i> Activity: Final Presentation</h3>
                        <p>Showcase your work.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Slide Draft</h4>
                            <p>Create the 'Methodology' slide explaining your algorithm choice.</p>
                        </div>
                    </div>
                </div>`,
            'm5-t1': `
                 <div class="activity-container">
                    <div class="activity-header">
                        <h3><i class="fas fa-upload"></i> Deployment Verification</h3>
                        <p>Ensure your project is ready for the world.</p>
                    </div>
                    <div class="activity-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <h4>Pre-Flight Checklist</h4>
                            <ul class="checklist">
                                <li><input type="checkbox"> Requirements.txt created?</li>
                                <li><input type="checkbox"> README.md explains usage?</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            ...projectActivities
        };
    }
}

const activitySystem = new ActivitySystem();

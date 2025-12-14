// Module 5 Comprehensive Handouts - Complete Projects
// "Ready-to-Run" Google Colab Compatible Projects

// === PYTHON TEMPLATES for Rapid Project Generation ===
const codeTemplates = {
    vision: (datasetName, classes) => `
# 📸 Computer Vision Project: ${datasetName}
# ---------------------------------------------------------
# Run this in Google Colab to build a classification model.

import tensorflow as tf
from tensorflow.keras import layers, models
import matplotlib.pyplot as plt
import numpy as np
import os

print("Installing dependencies...")
# !pip install -q opencv-python matplotlib

# 1. Dataset Simulation (Since we can't upload files here)
# We create dummy images for demonstration. In real life, use:
# !wget https://example.com/${datasetName}.zip
# !unzip ${datasetName}.zip

img_height, img_width = 180, 180
batch_size = 32
num_classes = ${classes.length}
class_names = [${classes.map(c => `'${c}'`).join(', ')}]

print("Creating dummy dataset structure...")
import cv2
os.makedirs('dataset/train', exist_ok=True)
for cls in class_names:
    os.makedirs(f'dataset/train/{cls}', exist_ok=True)
    # Create valid dummy image
    img = np.random.randint(0, 255, (img_height, img_width, 3), dtype=np.uint8) 
    cv2.imwrite(f'dataset/train/{cls}/dummy.jpg', img)

# 2. Load Data
train_ds = tf.keras.utils.image_dataset_from_directory(
    'dataset/train',
    validation_split=0.2,
    subset="training",
    seed=123,
    image_size=(img_height, img_width),
    batch_size=batch_size
)

# 3. Build Model (CNN)
model = models.Sequential([
    layers.Rescaling(1./255, input_shape=(img_height, img_width, 3)),
    layers.Conv2D(16, 3, padding='same', activation='relu'),
    layers.MaxPooling2D(),
    layers.Conv2D(32, 3, padding='same', activation='relu'),
    layers.MaxPooling2D(),
    layers.Flatten(),
    layers.Dense(128, activation='relu'),
    layers.Dense(num_classes)
])

model.compile(optimizer='adam',
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])

model.summary()
print("Model ready for training! (call model.fit)")
`,

    iot: (projectName, sensors) => `
# 📡 IoT Data Analysis: ${projectName}
# ---------------------------------------------------------
# Analyzes sensor data to make automated decisions.

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# 1. Simulate Sensor Data
np.random.seed(42)
n_samples = 1000
dates = pd.date_range(start='2024-01-01', periods=n_samples, freq='H')

data = pd.DataFrame(index=dates)
${sensors.map(s => `data['${s}'] = np.random.normal(50, 15, n_samples)`).join('\n')}

# Add some noise/anomalies
data.iloc[100:105] = data.iloc[100:105] * 2

print("--- Simulated Sensor Data Header ---")
print(data.head())

# 2. Anomaly Detection (Simple Rule-based)
def check_status(row):
    # Example logic: customized for project
    if row.mean() > 80:
        return 'CRITICAL'
    elif row.mean() > 60:
        return 'WARNING'
    else:
        return 'NORMAL'

data['status'] = data.apply(check_status, axis=1)

# 3. Visualization
plt.figure(figsize=(12, 6))
${sensors.map(s => `plt.plot(data.index, data['${s}'], label='${s}', alpha=0.7)`).join('\n')}
plt.title('${projectName} - Sensor Streams')
plt.legend()
plt.show()

print(f"Critical Events Found: {len(data[data['status'] == 'CRITICAL'])}")
`,

    regression: (targetName, features) => `
# 📈 Predictive Modeling: ${targetName} Prediction
# ---------------------------------------------------------

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error, r2_score
import matplotlib.pyplot as plt

# 1. Generate Dummy Data
n = 500
df = pd.DataFrame()
${features.map(f => `df['${f}'] = np.random.rand(n) * 100`).join('\n')}

# Target variable (synthetic relationship)
df['${targetName}'] = df.sum(axis=1) * 0.5 + np.random.normal(0, 5, n)

# 2. Train/Test Split
X = df.drop('${targetName}', axis=1)
y = df['${targetName}']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 3. Model Training
model = RandomForestRegressor(n_estimators=100)
model.fit(X_train, y_train)

# 4. Evaluation
preds = model.predict(X_test)
print(f"RMSE: {np.sqrt(mean_squared_error(y_test, preds)):.2f}")
print(f"R2 Score: {r2_score(y_test, preds):.2f}")

# 5. Feature Importance
plt.barh(X.columns, model.feature_importances_)
plt.title("Factor Importance")
plt.show()
`
};

const module5Handouts = {
    'm5-t1': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🚀 Deploying AI Solutions</h1></div>
            <div class="summary"><h2>Project Goal</h2><p>Deploy a trained model using Streamlit (Python web app).</p></div>
            <div class="code-section"><h2>💻 Colab/Local Code</h2>
            <pre><code class="language-python">
# Install Streamlit
# !pip install streamlit

import streamlit as st
import pandas as pd
import numpy as np

st.title('🌾 Agri-AI Model Deployment Demo')

# Sidebar for user input
st.sidebar.header('User Input Parameters')
nitrogen = st.sidebar.slider('Nitrogen', 0, 140, 50)
phosphorus = st.sidebar.slider('Phosphorus', 0, 140, 50)
potassium = st.sidebar.slider('Potassium', 0, 140, 50)

# Main panel
st.write(f"Analyzing soil with N={nitrogen}, P={phosphorus}, K={potassium}")

# Dummy Prediction
prediction = "Rice" if nitrogen > 100 else "Maize"
st.success(f"Recommended Crop: {prediction}")

# To run: 'streamlit run app.py' in terminal
            </code></pre></div>
        </div>
    `,

    // === IoT Projects ===
    'm5-t2': `
        <div class="handout-premium">
            <div class="topic-header"><h1>💧 Smart Irrigation System</h1></div>
            <div class="code-section"><h2>💻 Python Logic</h2>
            <pre><code class="language-python">${codeTemplates.iot("Smart Irrigation", ["SoilMoisture", "Rainfall", "Temperature"])}</code></pre>
            </div>
        </div>
    `,
    'm5-t8': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🌡️ Greenhouse Temp Control</h1></div>
            <div class="code-section"><h2>💻 Automated Control Logic</h2>
            <pre><code class="language-python">${codeTemplates.iot("Greenhouse Monitor", ["InternalTemp", "ExternalTemp", "Humidity", "CO2"])}</code></pre>
            </div>
        </div>
    `,

    // === API ===
    'm5-t3': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🔌 Crop Disease API (FastAPI)</h1></div>
            <div class="code-section"><h2>💻 API Stub</h2>
            <pre><code class="language-python">
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class SoilData(BaseModel):
    ph: float
    moisture: float

@app.post("/predict_health/")
def predict_health(data: SoilData):
    # Dummy logic replacement for heavy model
    health = "Good" if 6.0 < data.ph < 7.5 else "Needs Adjustment"
    return {"status": "ok", "prediction": health, "input_received": data}

# Run with: uvicorn main:app --reload
            </code></pre></div>
        </div>
    `,

    // === Regression/Forecasting ===
    'm5-t4': `
        <div class="handout-premium">
            <div class="topic-header"><h1>📊 Market Price Dashboard</h1></div>
             <div class="code-section"><h2>💻 Price Analysis</h2>
            <pre><code class="language-python">${codeTemplates.regression("Price", ["Supply", "Demand", "ExportVolume", "Rainfall"])}</code></pre>
            </div>
        </div>
    `,
    'm5-t5': `
        <div class="handout-premium">
             <div class="topic-header"><h1>🧪 Soil Nutrient Predictor</h1></div>
             <div class="code-section"><h2>💻 Prediction Model</h2>
            <pre><code class="language-python">${codeTemplates.regression("NitrogenLevel", ["pH", "OrganicCarbon", "Conductivity"])}</code></pre>
            </div>
        </div>
    `,

    // === Vision ===
    'm5-t6': `
         <div class="handout-premium">
             <div class="topic-header"><h1>🌿 Weed Detection System</h1></div>
             <div class="code-section"><h2>💻 Classification Model</h2>
            <pre><code class="language-python">${codeTemplates.vision("WeedDataset", ["Crop", "Weed_Broadleaf", "Weed_Grass"])}</code></pre>
            </div>
        </div>
    `,
    'm5-t7': `
         <div class="handout-premium">
             <div class="topic-header"><h1>🍎 Fruit Maturity Grading</h1></div>
             <div class="code-section"><h2>💻 Maturity Classifier</h2>
            <pre><code class="language-python">${codeTemplates.vision("FruitGrading", ["Unripe", "Ripe", "Overripe"])}</code></pre>
            </div>
        </div>
    `,

    // === Robotics ===
    'm5-t9': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🤖 Automated Fruit Picker Logic</h1></div>
            <div class="code-section"><h2>💻 Path Planning (Concepts)</h2>
            <pre><code class="language-python">
# A Simple State Machine for a Robot Arm
class PickingRobot:
    def __init__(self):
        self.state = "IDLE"
        self.arm_pos = (0,0,0)

    def detect_fruit(self, fruit_pos):
        print(f"👀 Fruit detected at {fruit_pos}")
        self.target = fruit_pos
        self.state = "APPROACHING"

    def update(self):
        if self.state == "APPROACHING":
            dist = self.calculate_distance(self.arm_pos, self.target)
            if dist < 0.1:
                self.state = "GRIPPING"
                print("👐 Gripping fruit...")
            else:
                print("➡️ Moving arm closer...")
                # self.arm_pos += vector...

    def calculate_distance(self, p1, p2):
        return ((p1[0]-p2[0])**2 + (p1[1]-p2[1])**2)**0.5

bot = PickingRobot()
bot.detect_fruit((1, 2, 0.5))
bot.update()
            </code></pre></div>
        </div>
    `,
    'm5-t10': `
         <div class="handout-premium">
            <div class="topic-header"><h1>🚁 Drone Path Planning (A*)</h1></div>
            <div class="code-section"><h2>💻 A* Search Algorithm</h2>
            <pre><code class="language-python">
import heapq

def a_star(grid, start, goal):
    # 0 = open, 1 = obstacle
    rows, cols = len(grid), len(grid[0])
    queue = [(0, start)]
    visited = set()
    
    while queue:
        cost, (r, c) = heapq.heappop(queue)
        if (r, c) == goal: return True # Found
        
        if (r, c) in visited: continue
        visited.add((r, c))
        
        # Check neighbors
        for dr, dc in [(-1,0), (1,0), (0,-1), (0,1)]:
            nr, nc = r+dr, c+dc
            if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 0:
                heapq.heappush(queue, (cost+1, (nr, nc)))
                
    return False

grid = [
    [0, 0, 0, 1],
    [1, 1, 0, 0],
    [0, 0, 0, 1]
]
print(f"Path Found: {a_star(grid, (0,0), (2,2))}")
            </code></pre></div>
        </div>
    `,

    // === NLP / Chatbot ===
    'm5-t14': `
         <div class="handout-premium">
             <div class="topic-header"><h1>💬 Farmer Chatbot (NLP)</h1></div>
             <div class="code-section"><h2>💻 Simple Intent Matching</h2>
            <pre><code class="language-python">
# For real NLP, install transformers: !pip install transformers
# This is a rule-based demo

def  farmer_bot(user_input):
    user_input = user_input.lower()
    
    knowledge_base = {
        "price": "Market prices are stable. Tomato is ₹20/kg.",
        "weather": "Rain is expected tomorrow. Delay harvesting.",
        "disease": "Send me a photo of the leaf for diagnosis.",
        "fertilizer": "Use NPK 10-26-26 for flowering stage."
    }
    
    for key, response in knowledge_base.items():
        if key in user_input:
            return response
            
    return "I'm not sure about that. Try asking about weather, price, or fertilizer."

print("Bot: How can I help you today?")
print("User: What is the tomato price?")
print(f"Bot: {farmer_bot('What is the tomato price?')}")
            </code></pre></div>
        </div>
    `,

    // === Missing Ones filled with General Templates ===
    // t11, t12, t13, t15, t16, t17, t18, t19, t20, t21
};

// Auto-fill remaining with appropriate templates
module5Handouts['m5-t11'] = `<div class="handout-premium"><div class="topic-header"><h1>🐄 Livestock Health</h1></div><div class="code-section"><h2>💻 Anomaly Detection</h2><pre><code class="language-python">${codeTemplates.iot("CowActivity", ["Steps", "HeartRate", "Temp"])}</code></pre></div></div>`;
module5Handouts['m5-t12'] = `<div class="handout-premium"><div class="topic-header"><h1>🌦️ Weather App</h1></div><div class="code-section"><h2>💻 Forecasting</h2><pre><code class="language-python">${codeTemplates.regression("Rainfall", ["Pressure", "Humidity", "WindSpeed"])}</code></pre></div></div>`;
module5Handouts['m5-t13'] = `<div class="handout-premium"><div class="topic-header"><h1>🔄 Crop Rotation Recommender</h1></div><div class="code-section"><h2>💻 Logic</h2><pre><code class="language-python"># Rotation Logic\ncrops = ['Corn', 'Soybean', 'Wheat']\nlast_crop = 'Corn'\nnext_crop = 'Soybean' if last_crop == 'Corn' else 'Wheat'\nprint(f"Recommended: {next_crop}")</code></pre></div></div>`;
module5Handouts['m5-t15'] = `<div class="handout-premium"><div class="topic-header"><h1>🛰️ Satellite Yield</h1></div><div class="code-section"><h2>💻 Regression on Spectral Data</h2><pre><code class="language-python">${codeTemplates.regression("Yield_Tonnes", ["NDVI", "EVI", "SurfaceTemp"])}</code></pre></div></div>`;
module5Handouts['m5-t16'] = `<div class="handout-premium"><div class="topic-header"><h1>🚚 Supply Chain Opt</h1></div><div class="code-section"><h2>💻 Logistics</h2><pre><code class="language-python">${codeTemplates.regression("DeliveryTime", ["Distance", "TrafficFactor", "LoadWeight"])}</code></pre></div></div>`;
module5Handouts['m5-t17'] = `<div class="handout-premium"><div class="topic-header"><h1>🧪 Hydroponics Monitor</h1></div><div class="code-section"><h2>💻 Water Quality</h2><pre><code class="language-python">${codeTemplates.iot("HydroTank", ["pH", "EC", "DissolvedOxygen"])}</code></pre></div></div>`;
module5Handouts['m5-t18'] = `<div class="handout-premium"><div class="topic-header"><h1>🪰 Pest Count from Traps</h1></div><div class="code-section"><h2>💻 Count Estimation</h2><pre><code class="language-python">${codeTemplates.vision("PestTraps", ["Whitefly", "Thrip", "Aphid"])}</code></pre></div></div>`;
module5Handouts['m5-t19'] = `<div class="handout-premium"><div class="topic-header"><h1>💧 Water Quality Indexer</h1></div><div class="code-section"><h2>💻 WQI Calculation</h2><pre><code class="language-python">${codeTemplates.regression("WQI_Score", ["Turbidity", "pH", "Nitrates"])}</code></pre></div></div>`;
module5Handouts['m5-t20'] = `<div class="handout-premium"><div class="topic-header"><h1>📅 Crop Scheduling (Genetic Algo)</h1></div><div class="code-section"><h2>💻 Optimization</h2><pre><code class="language-python"># Genetic Algorithm Placeholder\npopulation = [[1,0,1], [0,1,0]]\nfitness = [sum(p) for p in population]\nprint("Best Schedule:", population[0])</code></pre></div></div>`;
module5Handouts['m5-t21'] = `<div class="handout-premium"><div class="topic-header"><h1>🔧 Equipment Maintenance</h1></div><div class="code-section"><h2>💻 Failure Prediction</h2><pre><code class="language-python">${codeTemplates.regression("DaysToFailure", ["Vibration", "HoursUsed", "Temp"])}</code></pre></div></div>`;

if (typeof window !== 'undefined') {
    window.module5Handouts = module5Handouts;
}

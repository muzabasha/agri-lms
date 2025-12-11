// Lab-Content.js - Comprehensive repository of hands-on code for all topics

class LabSystem {
    constructor() {
        this.baseColabUrl = "https://colab.research.google.com/";
    }

    getLabContent(topicId) {
        // 1. Try to find specific hand-crafted content
        if (this.specificLabs[topicId]) {
            return this.specificLabs[topicId];
        }

        // 2. Fallback: Generate relevant template code based on keywords
        return this.generateTemplateLab(topicId);
    }

    generateTemplateLab(topicId) {
        let structure = (typeof comprehensiveCourseStructure !== 'undefined') ? comprehensiveCourseStructure : null;
        let topicTitle = "";

        if (structure) {
            // Find topic title
            for (const module of structure.modules) {
                const topic = module.topics.find(t => t.id === topicId);
                if (topic) {
                    topicTitle = topic.title.toLowerCase();
                    break;
                }
            }
        }

        const keywords = {
            // --- Python Basics ---
            'variable': { c: `age = 25\ncrop = "Wheat"\nprice = 15.50\nprint(f"{crop} is sold at \${price}/kg")`, d: "Variable assignment example." },
            'operator': { c: `a = 10\nb = 3\nprint(f"Addition: {a+b}, Modulo: {a%b}, Power: {a**b}")`, d: "Basic arithmetic operations." },
            'loop': { c: `temperatures = [22, 24, 19, 25]\nfor t in temperatures:\n    if t > 23: print(f"High Temp: {t}")`, d: "Iterating through data." },
            'condition': { c: `moisture = 45\nif moisture < 30: print("Start Irrigation")\nelse: print("Moisture sufficient")`, d: "Decision making logic." },
            'function': { c: `def calc_yield(area, rate):\n    return area * rate\n\nprint(f"Total Yield: {calc_yield(10, 4.5)} tons")`, d: "Modular code with functions." },
            'list': { c: `crops = ["Rice", "Wheat"]\ncrops.append("Maize")\nprint(f"First crop: {crops[0]}")`, d: "List manipulation." },
            'dictionary': { c: `farm = {"size": 50, "location": "Bangalore"}\nprint(f"Farm Size: {farm['size']} acres")`, d: "Key-Value data structures." },
            'string': { c: `text = "  Agriculture AI  "\nprint(text.strip().lower().replace("ai", "intelligence"))`, d: "String processing methods." },
            'file': { c: `with open("data.txt", "w") as f:\n    f.write("Log Entry 1")\n\nprint("File written successfully.")`, d: "File I/O operations." },
            'setup': { c: `import sys\nprint(f"Python Version: {sys.version}")`, d: "Environment Check." },
            'install': { c: `!pip install pandas numpy scikit-learn`, d: "Library Installation." },

            // --- Data Science ---
            'numpy': { c: `import numpy as np\narr = np.array([1, 2, 3, 4])\nprint(f"Mean: {np.mean(arr)}, Max: {np.max(arr)}")`, d: "NumPy array operations." },
            'matrix': { c: `import numpy as np\nm1 = np.array([[1,2],[3,4]])\nm2 = np.array([[5,6],[7,8]])\nprint(np.dot(m1, m2))`, d: "Linear algebra with NumPy." },
            'pandas': { c: `import pandas as pd\ndf = pd.DataFrame({'Date': ['Mon','Tue'], 'Rain': [10, 0]})\nprint(df.describe())`, d: "Pandas DataFrame basics." },
            'dataframe': { c: `import pandas as pd\ndf = pd.DataFrame({'Val': [1, 2, 3]})\nfiltered = df[df['Val'] > 1]\nprint(filtered)`, d: "DataFrame filtering." },
            'visualization': { c: `import matplotlib.pyplot as plt\nplt.plot([1,2,3], [10,20,15])\nplt.title("Growth Curve")\nplt.show()`, d: "Basic plotting (Matplotlib/Seaborn)." },
            'plot': { c: `import matplotlib.pyplot as plt\nplt.hist([1,1,2,3,4,4,4,5])\nplt.title("Distribution")\nplt.show()`, d: "Statistical plots." },
            'missing': { c: `import pandas as pd\nimport numpy as np\ndf = pd.DataFrame({'A': [1, np.nan, 3]})\nprint(df.fillna(0))`, d: "Handling NaN values." },
            'aggregation': { c: `import pandas as pd\ndf = pd.DataFrame({'Cat':['A','A','B'], 'Val':[1,2,3]})\nprint(df.groupby('Cat').sum())`, d: "Grouping and aggregation." },

            // --- Machine Learning ---
            'workflow': { c: `print("1. Collect Data\\n2. Preprocess\\n3. Train Model\\n4. Evaluate")`, d: "Standard ML Pipeline steps." },
            'supervised': { c: `# X = Inputs, y = Labels\nfrom sklearn.linear_model import LinearRegression\nmodel = LinearRegression().fit([[0], [1], [2]], [0, 2, 4])\nprint(model.predict([[3]]))`, d: "Supervised learning example." },
            'split': { c: `from sklearn.model_selection import train_test_split\nimport numpy as np\nX, y = np.arange(10).reshape(-1, 1), np.arange(10)\nX_train, X_test, y_train, y_test = train_test_split(X, y)\nprint(f"Train size: {len(X_train)}")`, d: "Splitting datasets." },
            'regression': { c: `from sklearn.linear_model import LinearRegression\n# Predict Yield based on Fertilizer\nmodel = LinearRegression()\nmodel.fit([[10], [20], [30]], [1.5, 2.5, 3.5])\nprint(f"Coeff: {model.coef_}")`, d: "Linear, Ridge, or Lasso regression." },
            'classification': { c: `from sklearn.tree import DecisionTreeClassifier\nclf = DecisionTreeClassifier()\nclf.fit([[0,0], [1,1]], [0, 1])\nprint(f"Class: {clf.predict([[0.5, 0.5]])}")`, d: "Classification logic." },
            'tree': { c: `from sklearn.tree import DecisionTreeRegressor\nmodel = DecisionTreeRegressor(max_depth=3)\nprint("Tree model initialized.")`, d: "Decision Tree structure." },
            'evaluation': { c: `from sklearn.metrics import mean_squared_error\nactual = [10, 20]\npred = [12, 18]\nprint(f"MSE: {mean_squared_error(actual, pred)}")`, d: "Performance metrics." },
            'overfitting': { c: `# High Variance Example\nprint("Train Accuracy: 99%\\nTest Accuracy: 60%\\nDiagnosis: Overfitting")`, d: "Demonstrating overfitting concepts." },
            'logistic': { c: `from sklearn.linear_model import LogisticRegression\nmodel = LogisticRegression()\nprint("Logistic Regression Ready.")`, d: "Binary classification." },

            // --- Module 3 Specifics ---
            'feature': { c: `from sklearn.preprocessing import StandardScaler\nscaler = StandardScaler()\nscaled = scaler.fit_transform([[100], [200], [150]])\nprint(scaled)`, d: "Feature engineering/scaling." },
            'weather': { c: `import pandas as pd\ndf = pd.DataFrame({'Max_Temp':[30,32], 'Min_Temp':[20,22]})\ndf['Diff'] = df['Max_Temp'] - df['Min_Temp']\nprint(df)`, d: "Weather data processing." },
            'image': { c: `import cv2\n# img = cv2.imread('leaf.jpg')\nprint("OpenCV loaded for image processing.")`, d: "Image processing (OpenCV)." },
            'cnn': { c: `import tensorflow as tf\nmodel = tf.keras.Sequential([tf.keras.layers.Conv2D(32, (3,3), input_shape=(64,64,3))])\nmodel.summary()`, d: "Convolutional Neural Network base." },
            'time series': { c: `from statsmodels.tsa.seasonal import seasonal_decompose\n# Mock decomposition\nprint("Trend: Increasing\\nSeasonality: Annual")`, d: "Time series components." },
            'outlier': { c: `import seaborn as sns\n# sns.boxplot(data=[1,2,50,2,3])\nprint("Boxplot shows outliers.")`, d: "Outlier detection viz." },
            'clustering': { c: `from sklearn.cluster import KMeans\nprint("KMeans Clustering Ready.")`, d: "Unsupervised clustering." },
            'yield': { c: `from sklearn.ensemble import RandomForestRegressor\nrf = RandomForestRegressor(n_estimators=100)\nprint("Yield model ready")`, d: "Crop yield prediction." },
            'ensemble': { c: `from sklearn.ensemble import VotingClassifier\nprint("Ensemble learning")`, d: "Combining models." },
            'boosting': { c: `from sklearn.ensemble import GradientBoostingRegressor\nprint("Gradient Boosting")`, d: "Boosting algorithms." },
            'transfer': { c: `from tensorflow.keras.applications import ResNet50\nbase = ResNet50(weights='imagenet')\nprint("Transfer learning")`, d: "Pre-trained models." },
            'arima': { c: `from statsmodels.tsa.arima.model import ARIMA\nmodel = ARIMA(data, order=(1,1,1))\nprint(model.fit().forecast(5))`, d: "Time series forecasting." },
            'yolo': { c: `# YOLO object detection\nprint("Real-time detection")`, d: "YOLO algorithm." },
            'ndvi': { c: `nir, red = 0.6, 0.1\nndvi = (nir-red)/(nir+red)\nprint(f"NDVI: {ndvi:.2f}")`, d: "Vegetation index." },
            'grid': { c: `from sklearn.model_selection import GridSearchCV\nparam_grid = {'n_estimators': [50,100]}\nprint("Grid search")`, d: "Hyperparameter tuning." },
            'pipeline': { c: `from sklearn.pipeline import Pipeline\npipe = Pipeline([('scaler', scaler), ('model', model)])`, d: "ML pipeline." },
            'deploy': { c: `import pickle\nwith open('model.pkl', 'wb') as f:\n    pickle.dump(model, f)`, d: "Save model." },
            'api': { c: `from flask import Flask\napp = Flask(__name__)\n@app.route('/predict')\ndef predict():\n    return {'result': 1}`, d: "REST API." }
        };

        // Scan keys
        for (const [key, val] of Object.entries(keywords)) {
            if (topicTitle.includes(key)) {
                return {
                    code: val.c,
                    description: val.d,
                    colabUrl: this.baseColabUrl
                };
            }
        }

        // Generic Fallback based on Module
        if (topicId.startsWith('m1')) return { code: `# Generic Python Sandbox\nprint("Hello Agriculture AI!")`, description: "Python Practice", colabUrl: this.baseColabUrl };
        if (topicId.startsWith('m2')) return { code: `import pandas as pd\nimport numpy as np\n# Ready for Data Science`, description: "Data Science Sandbox", colabUrl: this.baseColabUrl };

        return {
            code: "# No specific code template available for this topic.\n# Try exploring the concepts in a blank notebook!",
            description: "Standard Python Environment",
            colabUrl: this.baseColabUrl
        };
    }

    get specificLabs() {
        return {
            // --- MODULE 1: Python Fundamentals ---
            'm1-t1': { code: `traditional = "Rules defined by humans"\nml = "Rules learned from data"\nprint(f"Traditional: {traditional}")\nprint(f"ML: {ml}")`, description: "Compare paradigms.", colabUrl: "https://colab.research.google.com/" },
            'm1-t11': { code: `import sys\nprint(f"Python Version: {sys.version}")\nprint("Google Colab environment is ready!")`, description: "Verify your Python environment setup.", colabUrl: "https://colab.research.google.com/" },
            'm1-t14': { code: `soil_moisture = 25\n\nif soil_moisture < 30:\n    print("⚠️ Warning: Low moisture! Start irrigation.")\nelif soil_moisture > 70:\n    print("⚠️ Warning: Soil too wet! Drain fields.")\nelse:\n    print("✅ Soil moisture is optimal.")`, description: "Control logic for smart irrigation systems.", colabUrl: "https://colab.research.google.com/" },
            'm1-t15': { code: `crops = ["Wheat", "Rice", "Maize", "Cotton"]\n\nprint("Field Inspection List:")\nfor crop in crops:\n    print(f"Checking status of: {crop}")`, description: "Loop through specific crops in your inventory.", colabUrl: "https://colab.research.google.com/" },
            'm1-t17': { code: `# Dictionary for Inventory\ninventory = {"Seeds": 50, "Fertilizer_Bags": 20, "Tools": 15}\n\nprint(f"Fertilizer Stock: {inventory['Fertilizer_Bags']}")\ninventory['Seeds'] += 10 # Restock\nprint(f"Updated Seeds: {inventory['Seeds']}")`, description: "Manage farm inventory using Python dictionaries.", colabUrl: "https://colab.research.google.com/" },

            // --- MODULE 2: Data Science & ML ---
            'm2-t1': { code: `import numpy as np\nph_levels = np.array([6.5, 7.0, 5.5, 6.2, 6.8])\nprint(f"Average pH: {np.mean(ph_levels)}")\nprint(f"High Acidity Count: {np.sum(ph_levels < 6.0)}")`, description: "Analyze soil acidity with NumPy.", colabUrl: "https://colab.research.google.com/" },
            'm2-t5': { code: `import pandas as pd\ndata = {'Crop': ['Wheat', 'Rice'], 'Yield': [4.5, 6.0]}\ndf = pd.DataFrame(data)\nprint(df)`, description: "Create a basic storage DataFrame.", colabUrl: "https://colab.research.google.com/" },
            'm2-t6': { code: `import pandas as pd\ndf = pd.DataFrame({'Crop': ['Wheat', 'Rice'], 'Price': [2000, 2500]})\n# Add new column\ndf['Revenue'] = df['Price'] * 10\nprint(df)`, description: "Manipulate DataFrames to calculate revenue.", colabUrl: "https://colab.research.google.com/" },
            'm2-t11': { code: `import matplotlib.pyplot as plt\nplt.bar(['Jan', 'Feb', 'Mar'], [50, 45, 60], color='green')\nplt.title("Monthly Rainfall (mm)")\nplt.show()`, description: "Plot rainfall data comparisons.", colabUrl: "https://colab.research.google.com/" },
            'm2-t23': { code: `from sklearn.linear_model import LogisticRegression\nimport numpy as np\n# 0=Healthy, 1=Diseased (Mock Data)\nX = np.array([[10], [50], [90], [20]]) # Spot coverage %\ny = np.array([0, 1, 1, 0])\nmodel = LogisticRegression()\nmodel.fit(X, y)\nprint(f"Prediction for 60% spots: {'Diseased' if model.predict([[60]])[0]==1 else 'Healthy'}")`, description: "Binary classification for plant health.", colabUrl: "https://colab.research.google.com/" },

            // --- MODULE 3: Advanced Applications ---
            'm3-t2': { code: `from sklearn.ensemble import RandomForestRegressor\nimport numpy as np\nX = np.random.rand(100, 3)\ny = np.random.rand(100)\nmodel = RandomForestRegressor()\nmodel.fit(X, y)\nprint("Random Forest trained on 100 samples.")`, description: "Train Random Forest for yield prediction.", colabUrl: "https://colab.research.google.com/" },
            'm3-t7': { code: `from tensorflow.keras import layers, models\nmodel = models.Sequential()\nmodel.add(layers.Conv2D(32, (3, 3), activation='relu', input_shape=(64, 64, 3)))\nmodel.add(layers.MaxPooling2D((2, 2)))\nmodel.summary()\nprint("CNN Feature Extraction Layer Built")`, description: "Build the feature extraction base of a CNN.", colabUrl: "https://colab.research.google.com/" },
            'm3-t13': { code: `from sklearn.cluster import KMeans\nimport numpy as np\nX = np.random.rand(50, 2)\nkmeans = KMeans(n_clusters=3)\nlabels = kmeans.fit_predict(X)\nprint("Soil Zones Identified:", np.unique(labels))`, description: "Segment field into management zones.", colabUrl: "https://colab.research.google.com/" },
            'm3-t15': { code: `def calc_nutrient_gap(current_n, target_n):\n    return max(0, target_n - current_n)\n\ngap = calc_nutrient_gap(current_n=120, target_n=150)\nprint(f"Is Nitrogen needed? {gap} kg/ha")`, description: "Calculate fertilizer requirements logic.", colabUrl: "https://colab.research.google.com/" },
            'm3-t20': { code: `from statsmodels.tsa.arima.model import ARIMA\nimport numpy as np\ndata = np.random.rand(50) + np.linspace(0, 10, 50)\nmodel = ARIMA(data, order=(1,1,1))\nfit = model.fit()\nprint(f"Next Forecast: {fit.forecast()[0]:.2f}")`, description: "Forecast simple time series with ARIMA.", colabUrl: "https://colab.research.google.com/" },

            // --- MODULE 4: Capstone ---
            'm4-t1': { code: `def assess_risk(data_quality, team_skill):\n    return (data_quality + team_skill) / 2\n\nrisk = assess_risk(8, 7)\nprint(f"Project Viability Score: {risk}/10")`, description: "Quantify project risks.", colabUrl: "https://colab.research.google.com/" },
            'm4-t11': { code: `import pandas as pd\nimport numpy as np\ndf = pd.DataFrame({'val': [1, np.nan, 3, 1000]})\n# Remove Outliers\ndf = df[df['val'] < 100]\n# Fill NaN\ndf = df.fillna(df.mean())\nprint(df)`, description: "Clean data by removing outliers and filling missing values.", colabUrl: "https://colab.research.google.com/" },

            // --- MODULE 5: Bonus Projects & Deployment ---
            'm5-t1': {
                code: `!pip install streamlit\n\n# Save this as app.py\ncode = """\nimport streamlit as st\nst.title('My AI Agri Project')\nst.write('Hello World!')\n"""\nwith open("app.py", "w") as f:\n    f.write(code)\n\n# Run with:\n# !streamlit run app.py & npx localtunnel --port 8501`,
                description: "Setup Streamlit and Tunnel for Demo.",
                colabUrl: "https://colab.research.google.com/"
            },
            'm5-t2': { code: `class SmartIrrigation:\n    def __init__(self, threshold=30):\n        self.threshold = threshold\n    def check(self, moisture):\n        return "ON" if moisture < self.threshold else "OFF"\n\nsys = SmartIrrigation()\nprint(f"Pump is {sys.check(25)}")`, description: "IoT Logic for Smart Irrigation.", colabUrl: "https://colab.research.google.com/" },

            'm5-t3': { code: `from flask import Flask\napp = Flask(__name__)\n@app.route('/predict', methods=['POST'])\ndef predict():\n    return {'risk': 'High', 'confidence': 0.95}\n# app.run()`, description: "Flask API Endpoint Skeleton.", colabUrl: "https://colab.research.google.com/" },

            'm5-t4': { code: `import pandas as pd\nimport plotly.express as px\ndf = pd.DataFrame({'Date': ['2023-01', '2023-02'], 'Price': [100, 120]})\nfig = px.line(df, x='Date', y='Price', title='Market Trends')\nfig.show()`, description: "Plotly Dashboard Basics.", colabUrl: "https://colab.research.google.com/" },

            'm5-t5': { code: `from sklearn.ensemble import RandomForestRegressor\n# X=[N, P, K], y=Yield\nX = [[10,20,30], [12,22,32]]\ny = [50, 55]\nmodel = RandomForestRegressor().fit(X, y)\nprint(f"Pred: {model.predict([[11,21,31]])}")`, description: "Soil Nutrient Regression Model.", colabUrl: "https://colab.research.google.com/" },

            'm5-t6': { code: `# YOLOv5 Pseudocode for Weed Detection\nimport torch\n# model = torch.hub.load('ultralytics/yolov5', 'yolov5s')\n# results = model('field_image.jpg')\n# results.show()`, description: "Weed Detection Inference Logic.", colabUrl: "https://colab.research.google.com/" },

            'm5-t7': { code: `import cv2\nimport numpy as np\n# Maturity based on Redness\ndef grade_fruit(r_channel_mean):\n    return "Ripe" if r_channel_mean > 150 else "Raw"\nprint(grade_fruit(160))`, description: "Fruit Grading Algorithm.", colabUrl: "https://colab.research.google.com/" },

            'm5-t8': { code: `# PID Controller Logic\ntarget_temp = 25\ncurrent_temp = 20\nerror = target_temp - current_temp\nadjustment = error * 0.5 # Proportional term\nprint(f"Heater Intensity: {adjustment}")`, description: "Greenhouse Temp Control Logic.", colabUrl: "https://colab.research.google.com/" },

            'm5-t9': { code: `# Inverse Kinematics Simplified\nimport math\ndef get_arm_angles(x, y):\n    theta = math.atan2(y, x)\n    return math.degrees(theta)\nprint(f"Base Angle: {get_arm_angles(10, 10)} degrees")`, description: "Robotic Arm Angle Calculation.", colabUrl: "https://colab.research.google.com/" },

            'm5-t10': { code: `# Grid Path Planning\ngrid = [[0,1,0], [0,0,0], [1,0,0]] # 1=Obstacle\nstart = (0,0)\nend = (2,2)\nprint("Path: Use A* to navigate 0s.")`, description: "Drone Navigation Grid.", colabUrl: "https://colab.research.google.com/" },

            'm5-t11': { code: `from sklearn.ensemble import IsolationForest\n# Activity Data: [Steps, HeartRate]\nX = [[100, 60], [110, 65], [10, 40]] # Last one is anomalous\nclf = IsolationForest().fit(X)\nprint(f"Anomaly Scores: {clf.predict(X)}")`, description: "Livestock Anomaly Detection.", colabUrl: "https://colab.research.google.com/" },

            'm5-t12': { code: `import requests\n# response = requests.get('https://api.weather.com/v1/forecast')\n# data = response.json()\nprint("Fetching Weather API Data...")`, description: "Weather API Integration.", colabUrl: "https://colab.research.google.com/" },

            'm5-t13': { code: `history = ["Wheat", "Mustard"]\ndef recommend(history):\n    if history[-1] == "Mustard": return "Legumes"\n    return "Wheat"\nprint(f"Next Crop: {recommend(history)}")`, description: "Crop Rotation Rules Engine.", colabUrl: "https://colab.research.google.com/" },

            'm5-t14': { code: `question = "How to treat rust?"\ncontext = "Rust is fungal..."\nprint(f"Bot Answer: Based on {context}, apply fungicides.")`, description: "Simple Chatbot Logic.", colabUrl: "https://colab.research.google.com/" },

            'm5-t15': { code: `# NDVI Calc\nnir = 0.6\nred = 0.1\nndvi = (nir - red) / (nir + red)\nprint(f"Vegetation Index: {ndvi:.2f}")`, description: "Satellite NDVI Calculation.", colabUrl: "https://colab.research.google.com/" },

            'm5-t16': { code: `# Transportation Cost Min\ncosts = [10, 20, 15]\nroutes = ["A", "B", "C"]\nbest_route = routes[costs.index(min(costs))]\nprint(f"Cheapest Route: {best_route}")`, description: "Supply Chain Optimization.", colabUrl: "https://colab.research.google.com/" },

            'm5-t17': { code: `ph = 6.0\nec = 1.5\nif ph < 5.5: print("Add Base")\nelif ph > 6.5: print("Add Acid")\nelse: print("Nutrients Optimal")`, description: "Hydroponics Monitoring Logic.", colabUrl: "https://colab.research.google.com/" },

            'm5-t18': { code: `import cv2\n# Load trap image\n# gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\n# blobs = detector.detect(gray)\nprint("Detected 45 Pests.")`, description: "Pest Counting Logic.", colabUrl: "https://colab.research.google.com/" },

            'm5-t19': { code: `nitrate = 10\nph = 7\nwqi = nitrate * 0.5 + ph * 0.5\nprint(f"Water Quality Index: {wqi}")`, description: "Water Quality Calculation.", colabUrl: "https://colab.research.google.com/" },

            'm5-t20': { code: `schedule = ["Week1: Sow", "Week2: Water"]\nfitness = 0.9\nprint(f"Schedule Fitness: {fitness}")`, description: "Genetic Algo Skeleton.", colabUrl: "https://colab.research.google.com/" },

            'm5-t21': { code: `vibration = [0.1, 0.2, 0.9, 0.1]\n# 0.9 is high vibration -> Warning\nif max(vibration) > 0.8: print("⚠️ Maintenance Required")`, description: "Predictive Maintenance Logic.", colabUrl: "https://colab.research.google.com/" }
        };
    }
}

const labSystem = new LabSystem();

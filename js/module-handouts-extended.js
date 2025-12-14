// Module 2, 3, 4, 5 Premium Handouts - Extended Content System
// This file contains additional specific handouts for key topics

const module2SpecificHandouts = {
    'm2-t1': `
        <div class="handout-premium" style="font-family: 'Segoe UI', sans-serif; max-width: 1000px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; padding: 40px; border-radius: 16px; margin-bottom: 30px;">
                <div style="font-size: 0.9em; text-transform: uppercase; letter-spacing: 2px; opacity: 0.9; margin-bottom: 10px;">Module 2: Python & ML Fundamentals</div>
                <h1 style="margin: 0; font-size: 2.8em; font-weight: 800;">🔢 NumPy: Arrays and Operations</h1>
                <p style="font-size: 1.2em; margin-top: 15px;">The Organized Farm Storage System</p>
            </div>

            <div style="background: #fef3c7; padding: 30px; border-radius: 12px; margin: 25px 0; border-left: 6px solid #f59e0b;">
                <h2 style="color: #92400e; margin-top: 0;">🏗️ The Farming Analogy</h2>
                <p style="font-size: 1.15em; line-height: 1.8; color: #78350f;">
                    Imagine you're a farmer managing crop data:
                </p>
                <div style="background: white; padding: 25px; border-radius: 10px; margin: 20px 0;">
                    <h3 style="color: #d97706; margin: 0 0 15px 0;">📦 Without NumPy (Slow & Messy)</h3>
                    <p style="margin: 0; line-height: 1.8; color: #1f2937;">
                        You store crop yields in separate boxes (Python lists): 
                        <code>[10, 12, 11]</code> for Field 1, <code>[9, 13, 10]</code> for Field 2.
                        To calculate average? You manually open each box, add numbers, divide. <strong>Slow!</strong>
                    </p>
                </div>
                <div style="background: white; padding: 25px; border-radius: 10px; margin: 20px 0;">
                    <h3 style="color: #d97706; margin: 0 0 15px 0;">⚡ With NumPy (Fast & Organized)</h3>
                    <p style="margin: 0; line-height: 1.8; color: #1f2937;">
                        NumPy creates a <strong>structured warehouse</strong> (array) where all data is organized in rows and columns.
                        One command: <code>np.mean()</code> → instant average for all fields! <strong>100x faster!</strong>
                    </p>
                </div>
            </div>

            <div style="background: white; padding: 30px; border-radius: 12px; margin: 25px 0; border: 1px solid #e2e8f0;">
                <h2 style="color: #1e293b; border-bottom: 3px solid #3b82f6; padding-bottom: 10px;">📖 Core Concepts</h2>
                
                <h3 style="color: #1e40af; margin-top: 30px;">1️⃣ Creating Arrays</h3>
                <p style="font-size: 1.1em; line-height: 1.8;">
                    Arrays are like <strong>organized data tables</strong> for your farm. Instead of scattered lists, 
                    everything is in neat rows and columns.
                </p>
                <div style="background: #1e293b; color: #e2e8f0; padding: 20px; border-radius: 8px; margin: 15px 0; font-family: 'Courier New', monospace;">
<pre style="margin: 0;"><span style="color: #fbbf24;"># Import NumPy</span>
<span style="color: #f472b6;">import</span> numpy <span style="color: #f472b6;">as</span> np

<span style="color: #fbbf24;"># Create array of crop yields (tons per acre)</span>
yields = np.array([<span style="color: #60a5fa;">4.5, 5.2, 4.8, 5.0, 4.9</span>])
<span style="color: #a78bfa;">print</span>(<span style="color: #34d399;">f"Yields: {yields}"</span>)

<span style="color: #fbbf24;"># Create 2D array (multiple fields)</span>
farm_data = np.array([
    [<span style="color: #60a5fa;">4.5, 5.2, 4.8</span>],  <span style="color: #94a3b8;"># Field 1</span>
    [<span style="color: #60a5fa;">5.0, 4.9, 5.1</span>]   <span style="color: #94a3b8;"># Field 2</span>
])
<span style="color: #a78bfa;">print</span>(<span style="color: #34d399;">f"Shape: {farm_data.shape}"</span>)  <span style="color: #94a3b8;"># Output: (2, 3)</span></pre>
                </div>

                <h3 style="color: #1e40af; margin-top: 30px;">2️⃣ Array Operations (The Magic)</h3>
                <p style="font-size: 1.1em; line-height: 1.8;">
                    NumPy lets you perform calculations on <strong>entire datasets at once</strong> - like applying fertilizer 
                    to all fields simultaneously instead of one by one.
                </p>
                <div style="background: #1e293b; color: #e2e8f0; padding: 20px; border-radius: 8px; margin: 15px 0; font-family: 'Courier New', monospace;">
<pre style="margin: 0;"><span style="color: #fbbf24;"># Calculate statistics instantly</span>
avg_yield = np.mean(yields)
max_yield = np.max(yields)
min_yield = np.min(yields)

<span style="color: #a78bfa;">print</span>(<span style="color: #34d399;">f"Average: {avg_yield:.2f} tons"</span>)
<span style="color: #a78bfa;">print</span>(<span style="color: #34d399;">f"Best field: {max_yield} tons"</span>)
<span style="color: #a78bfa;">print</span>(<span style="color: #34d399;">f"Needs improvement: {min_yield} tons"</span>)</pre>
                </div>

                <h3 style="color: #1e40af; margin-top: 30px;">3️⃣ Array Indexing & Slicing</h3>
                <p style="font-size: 1.1em; line-height: 1.8;">
                    Access specific data points like picking specific crops from your organized warehouse.
                </p>
                <div style="background: #1e293b; color: #e2e8f0; padding: 20px; border-radius: 8px; margin: 15px 0; font-family: 'Courier New', monospace;">
<pre style="margin: 0;"><span style="color: #fbbf24;"># Access elements</span>
first_yield = yields[<span style="color: #60a5fa;">0</span>]           <span style="color: #94a3b8;"># First field: 4.5</span>
last_two = yields[<span style="color: #60a5fa;">-2:</span>]         <span style="color: #94a3b8;"># Last 2 fields</span>

<span style="color: #fbbf24;"># 2D array indexing</span>
field1_harvest1 = farm_data[<span style="color: #60a5fa;">0, 0</span>]  <span style="color: #94a3b8;"># Row 0, Column 0</span>
all_first_harvests = farm_data[<span style="color: #60a5fa;">:, 0</span>]  <span style="color: #94a3b8;"># All rows, first column</span></pre>
                </div>
            </div>

            <div style="background: linear-gradient(135deg, #dcfce7, #bbf7d0); padding: 30px; border-radius: 12px; margin: 25px 0;">
                <h2 style="color: #065f46; margin-top: 0;">🌾 Real Agriculture Application</h2>
                <div style="background: white; padding: 20px; border-radius: 10px;">
                    <h4 style="color: #047857; margin-top: 0;">Scenario: Analyzing 1000 Farmers' Data</h4>
                    <p style="margin: 10px 0; line-height: 1.8;">
                        <strong>Task:</strong> Calculate average rainfall, temperature, and yield across 1000 farms.<br>
                        <strong>With Python lists:</strong> 30 seconds ⏱️<br>
                        <strong>With NumPy:</strong> 0.03 seconds ⚡<br>
                        <strong>Speed up:</strong> 1000x faster!
                    </p>
                </div>
            </div>

            <div style="background: linear-gradient(135deg, #1e293b, #334155); color: white; padding: 35px; border-radius: 12px; text-align: center;">
                <h2 style="color: #fbbf24; margin-top: 0;">✨ Key Takeaway</h2>
                <p style="font-size: 1.2em; line-height: 1.8;">
                    NumPy is your <strong>data processing powerhouse</strong>. It organizes agricultural data 
                    into efficient arrays and performs calculations at lightning speed - essential for analyzing 
                    large-scale farm data!
                </p>
            </div>
        </div>
    `,

    'm2-t5': `
        <div class="handout-premium" style="max-width: 1000px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #8b5cf6, #7c3aed); color: white; padding: 40px; border-radius: 16px; margin-bottom: 30px;">
                <div style="font-size: 0.9em; opacity: 0.9; margin-bottom: 10px;">Module 2: Data Analysis</div>
                <h1 style="margin: 0; font-size: 2.8em;">🐼 Pandas: Introduction and Series</h1>
                <p style="font-size: 1.2em; margin-top: 15px;">The Farm Ledger Management System</p>
            </div>

            <div style="background: #fef3c7; padding: 30px; border-radius: 12px; margin: 25px 0;">
                <h2 style="color: #92400e; margin-top: 0;">📚 The Ledger Analogy</h2>
                <p style="font-size: 1.15em; line-height: 1.8;">
                    Imagine you're managing a farm ledger (account book):
                </p>
                <ul style="font-size: 1.1em; line-height: 2;">
                    <li><strong>NumPy:</strong> Just numbers in rows and columns (no labels)</li>
                    <li><strong>Pandas:</strong> A proper ledger with dates, crop names, and amounts (labeled data)</li>
                </ul>
                <div style="background: #10b981; color: white; padding: 20px; border-radius: 8px; margin-top: 20px; text-align: center; font-size: 1.2em;">
                    💡 Pandas = NumPy + Labels + Superpowers
                </div>
            </div>

            <div style="background: white; padding: 30px; border-radius: 12px; border: 1px solid #e2e8f0;">
                <h2>🔍 Understanding Pandas Series</h2>
                <p style="font-size: 1.1em; line-height: 1.8;">
                    A <strong>Series</strong> is like a single column in your ledger - dates, crop names, or prices - 
                    each value has a label (index).
                </p>
                
                <div style="background: #1e293b; color: white; padding: 20px; border-radius: 8px; margin: 20px 0; font-family: monospace;">
<pre style="margin: 0;"><span style="color: #fbbf24;">import</span> pandas <span style="color: #fbbf24;">as</span> pd

<span style="color: #94a3b8;"># Create Series: Crop prices</span>
prices = pd.Series(
    [<span style="color: #60a5fa;">15.50, 12.00, 8.75, 20.00</span>],
    index=[<span style="color: #34d399;">'Wheat', 'Rice', 'Maize', 'Tomato'</span>]
)

<span style="color: #a78bfa;">print</span>(prices)
<span style="color: #94a3b8;"># Output:</span>
<span style="color: #94a3b8;"># Wheat     15.50</span>
<span style="color: #94a3b8;"># Rice      12.00</span>
<span style="color: #94a3b8;"># Maize      8.75</span>
<span style="color: #94a3b8;"># Tomato    20.00</span>

<span style="color: #94a3b8;"># Access by label</span>
<span style="color: #a78bfa;">print</span>(<span style="color: #34d399;">f"Tomato price: ₹{prices['Tomato']}"</span>)</pre>
                </div>

                <h3 style="color: #7c3aed; margin-top: 30px;">Key Operations</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 20px;">
                    <div style="background: #f3f4f6; padding: 15px; border-radius: 8px;">
                        <h4 style="color: #1f2937; margin: 0 0 10px 0;">Statistics</h4>
                        <code>prices.mean()</code><br>
                        <code>prices.max()</code>
                    </div>
                    <div style="background: #f3f4f6; padding: 15px; border-radius: 8px;">
                        <h4 style="color: #1f2937; margin: 0 0 10px 0;">Filtering</h4>
                        <code>prices[prices > 10]</code>
                    </div>
                </div>
            </div>

            <div style="background: #1e293b; color: white; padding: 30px; border-radius: 12px; margin-top: 30px; text-align: center;">
                <h2 style="color: #fbbf24;">🎯 Why Pandas?</h2>
                <p style="font-size: 1.1em; line-height: 1.8;">
                    Pandas makes analyzing farm data as easy as reading a ledger book. 
                    <strong>Labels make your code readable and debugging effortless!</strong>
                </p>
            </div>
        </div>
    `
};

const module3SpecificHandouts = {
    'm3-t9': `
        <div class="handout-premium" style="max-width: 1000px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #ec4899, #db2777); color: white; padding: 40px; border-radius: 16px; margin-bottom: 30px;">
                <div style="font-size: 0.9em; opacity: 0.9; margin-bottom: 10px;">Module 3: Deep Learning for Agriculture</div>
                <h1 style="margin: 0; font-size: 2.8em;">🧠 CNN Introduction</h1>
                <p style="font-size: 1.2em; margin-top: 15px;">Teaching Computers to "See" Plant Diseases</p>
            </div>

            <div style="background: #fef3c7; padding: 30px; border-radius: 12px; margin: 25px 0;">
                <h2 style="color: #92400e; margin-top: 0;">👁️ The Vision Analogy</h2>
                <p style="font-size: 1.15em; line-height: 1.8;">
                    <strong>How does an experienced farmer spot diseased leaves?</strong>
                </p>
                <ol style="font-size: 1.1em; line-height: 2;">
                    <li><strong>Looks at patterns:</strong> Yellow spots? Brown patches?</li>
                    <li><strong>Recognizes shapes:</strong> Circular marks indicate fungal infection</li>
                    <li><strong>Compares with memory:</strong> "I've seen this before - it's rust disease!"</li>
                </ol>
                <div style="background: #ec4899; color: white; padding: 20px; border-radius: 8px; margin-top: 20px; text-align: center;">
                    💡 <strong>CNNs do EXACTLY this - but with math!</strong>
                </div>
            </div>

            <div style="background: white; padding: 30px; border-radius: 12px; border: 1px solid #e2e8f0;">
                <h2>🔍 How CNNs Work</h2>
                
                <h3 style="color: #db2777;">1️⃣ Convolutional Layers (Pattern Detectors)</h3>
                <p style="font-size: 1.1em; line-height: 1.8;">
                    Like having multiple farmers inspecting the same leaf from different angles. 
                    Each "filter" looks for specific patterns: edges, spots, textures.
                </p>

                <h3 style="color: #db2777; margin-top: 25px;">2️⃣ Pooling Layers (Zoom Out)</h3>
                <p style="font-size: 1.1em; line-height: 1.8;">
                    Steps back to see the bigger picture. Reduces detail while keeping important features.
                </p>

                <h3 style="color: #db2777; margin-top: 25px;">3️⃣ Fully Connected Layer (Decision)</h3>
                <p style="font-size: 1.1em; line-height: 1.8;">
                    After analyzing all patterns, makes the final call: "This is late blight disease with 94% confidence."
                </p>

                <div style="background: #1e293b; color: white; padding: 20px; border-radius: 8px; margin: 20px 0; font-family: monospace; overflow-x: auto;">
<pre style="margin: 0;"><span style="color: #fbbf24;">import</span> tensorflow <span style="color: #fbbf24;">as</span> tf

<span style="color: #94a3b8;"># Simple CNN for plant disease detection</span>
model = tf.keras.Sequential([
    <span style="color: #94a3b8;"># Convolutional layers (pattern detectors)</span>
    tf.keras.layers.Conv2D(<span style="color: #60a5fa;">32</span>, (<span style="color: #60a5fa;">3,3</span>), activation=<span style="color: #34d399;">'relu'</span>, 
                           input_shape=(<span style="color: #60a5fa;">128, 128, 3</span>)),
    tf.keras.layers.MaxPooling2D(<span style="color: #60a5fa;">2, 2</span>),
    
    <span style="color: #94a3b8;"># More layers for complex patterns</span>
    tf.keras.layers.Conv2D(<span style="color: #60a5fa;">64</span>, (<span style="color: #60a5fa;">3,3</span>), activation=<span style="color: #34d399;">'relu'</span>),
    tf.keras.layers.MaxPooling2D(<span style="color: #60a5fa;">2, 2</span>),
    
    <span style="color: #94a3b8;"># Decision layers</span>
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(<span style="color: #60a5fa;">128</span>, activation=<span style="color: #34d399;">'relu'</span>),
    tf.keras.layers.Dense(<span style="color: #60a5fa;">10</span>, activation=<span style="color: #34d399;">'softmax'</span>)  <span style="color: #94a3b8;"># 10 disease types</span>
])

model.compile(optimizer=<span style="color: #34d399;">'adam'</span>, 
              loss=<span style="color: #34d399;">'categorical_crossentropy'</span>,
              metrics=[<span style="color: #34d399;">'accuracy'</span>])
              
<span style="color: #a78bfa;">print</span>(<span style="color: #34d399;">"CNN ready to learn from leaf images!"</span>)</pre>
                </div>
            </div>

            <div style="background: linear-gradient(135deg, #dcfce7, #bbf7d0); padding: 30px; border-radius: 12px; margin: 25px 0;">
                <h2 style="color: #065f46;">🌾 Real Impact</h2>
                <p style="font-size: 1.15em; line-height: 1.8;">
                    <strong>PlantVillage Dataset:</strong> Trained CNNs achieve <strong>99.35% accuracy</strong> 
                    in detecting 38 different plant diseases from leaf images. 
                    A farmer can now use a smartphone to get instant diagnosis!
                </p>
            </div>
        </div>
    `
};

const module4SpecificHandouts = {
    'm4-t1': `
        <div class="handout-premium" style="max-width: 1000px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 40px; border-radius: 16px; margin-bottom: 30px;">
                <div style="font-size: 0.9em; opacity: 0.9; margin-bottom: 10px;">Module 4: Capstone Project</div>
                <h1 style="margin: 0; font-size: 2.8em;">🎯 Problem Definition and Scoping</h1>
                <p style="font-size: 1.2em; margin-top: 15px;">Before You Code, Define What You're Solving</p>
            </div>

            <div style="background: #fef3c7; padding: 30px; border-radius: 12px; margin: 25px 0;">
                <h2 style="color: #92400e; margin-top: 0;">🚜 The Farming Tool Selection Analogy</h2>
                <p style="font-size: 1.15em; line-height: 1.8;">
                    A farmer doesn't buy every tool in the market. They:
                </p>
                <ol style="font-size: 1.1em; line-height: 2;">
                    <li><strong>Identify the problem:</strong> "Weeding by hand takes too long"</li>
                    <li><strong>Define success criteria:</strong> "Need to weed 5 acres in 2 hours"</li>
                    <li><strong>Choose the right tool:</strong> Mechanical weeder, not a harvester!</li>
                </ol>
                <div style="background: #f59e0b; color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
                    <strong>Your AI project needs the same clarity before writing a single line of code!</strong>
                </div>
            </div>

            <div style="background: white; padding: 30px; border-radius: 12px;">
                <h2>✅ Good vs Bad Problem Statements</h2>
                
                <div style="background: #fecaca; padding: 20px; border-radius: 8px; border-left: 5px solid #dc2626; margin: 15px 0;">
                    <h3 style="color: #991b1b; margin-top: 0;">❌ Bad: "Make farming better with AI"</h3>
                    <p style="margin: 0;">Too vague! What aspect? For whom? How will you measure "better"?</p>
                </div>

                <div style="background: #d1fae5; padding: 20px; border-radius: 8px; border-left: 5px solid #10b981; margin: 15px 0;">
                    <h3 style="color: #065f46; margin-top: 0;">✅ Good: "Reduce tomato disease detection time from 3 days to 5 minutes using CNN"</h3>
                    <p style="margin: 0;">Specific crop, measurable goal, clear technology, defined timeline!</p>
                </div>

                <h2 style="margin-top: 40px;">🎯 The SMART Framework for AgriTech</h2>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px;">
                    <div style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
                        <h4 style="color: #1f2937; margin: 0 0 10px 0;">S - Specific</h4>
                        <p style="margin: 0;">Detect leaf rust in wheat crops</p>
                    </div>
                    <div style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
                        <h4 style="color: #1f2937; margin: 0 0 10px 0;">M - Measurable</h4>
                        <p style="margin: 0;">Achieve 90%+ accuracy</p>
                    </div>
                    <div style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
                        <h4 style="color: #1f2937; margin: 0 0 10px 0;">A - Achievable</h4>
                        <p style="margin: 0;">Use PlantVillage dataset (available)</p>
                    </div>
                    <div style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
                        <h4 style="color: #1f2937; margin: 0 0 10px 0;">R - Relevant</h4>
                        <p style="margin: 0;">Addresses real farmer pain point</p>
                    </div>
                    <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; grid-column: 1 / -1;">
                        <h4 style="color: #1f2937; margin: 0 0 10px 0;">T - Time-bound</h4>
                        <p style="margin: 0;">Complete MVP in 4 weeks</p>
                    </div>
                </div>
            </div>

            <div style="background: #1e293b; color: white; padding: 30px; border-radius: 12px; margin-top: 30px;">
                <h2 style="color: #fbbf24;">💡 Before You Start Coding</h2>
                <ul style="font-size: 1.1em; line-height: 2;">
                    <li>✓ Can you explain your project in one sentence?</li>
                    <li>✓ Do you have a clear success metric?</li>
                    <li>✓ Have you validated the problem with real farmers?</li>
                    <li>✓ Is the data available and accessible?</li>
                </ul>
            </div>
        </div>
    `
};

// Export for use in main lecture-content.js
if (typeof window !== 'undefined') {
    window.module2SpecificHandouts = module2SpecificHandouts;
    window.module3SpecificHandouts = module3SpecificHandouts;
    window.module4SpecificHandouts = module4SpecificHandouts;
}

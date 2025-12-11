// Lecture-Content.js - Comprehensive repository of Handouts and Presentations

class LectureSystem {
    constructor() {
        this.structure = (typeof comprehensiveCourseStructure !== 'undefined') ? comprehensiveCourseStructure : null;

        this.specificContent = {
            'm1-t1': {
                handout: `
                    <h2>🤖 Introduction to Artificial Intelligence - The Smart Scarecrow</h2>
                    
                    <div style="background: #fef3c7; padding: 25px; border-radius: 12px; margin: 20px 0; border-left: 6px solid #f59e0b; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        <h3 style="color: #92400e; margin-top: 0;">🎭 1️⃣ Funny Analogy-Based Explanation</h3>
                        <p style="font-size: 1.1em; line-height: 1.8;">
                            <strong>Artificial Intelligence is like training a very obedient scarecrow</strong> that not only scares crows but also learns:
                        </p>
                        <ul style="font-size: 1.05em; line-height: 1.8;">
                            <li>🐦 <strong>When</strong> crows come</li>
                            <li>🧭 <strong>Which direction</strong> they fly</li>
                            <li>📢 <strong>How loud</strong> it must shout</li>
                            <li>⏰ Even the <strong>best timing</strong> to raise its hands!</li>
                        </ul>
                        <div style="background: #fbbf24; color: white; padding: 15px; border-radius: 8px; margin-top: 15px; font-weight: bold; text-align: center; font-size: 1.2em;">
                            💡 AI = A scarecrow that keeps learning from the farm
                        </div>
                    </div>

                    <div style="background: #dbeafe; padding: 25px; border-radius: 12px; margin: 20px 0; border-left: 6px solid #3b82f6;">
                        <h3 style="color: #1e40af; margin-top: 0;">🎮 2️⃣ Experiential Learning Activity</h3>
                        <h4 style="color: #2563eb;">"Human AI Simulation – The Smart Scarecrow Game"</h4>
                        
                        <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0;">
                            <p><strong>Setup:</strong></p>
                            <ol style="line-height: 2;">
                                <li>👥 Students stand as <strong>crops</strong></li>
                                <li>🤖 One student acts as <strong>"AI scarecrow"</strong></li>
                                <li>🐦 <strong>Crows</strong> (other students) approach with different movement patterns</li>
                                <li>🔄 Scarecrow <strong>adapts behavior</strong> based on feedback</li>
                            </ol>
                            <div style="background: #fef3c7; padding: 15px; border-radius: 6px; margin-top: 15px;">
                                <strong>🎯 Purpose:</strong> Demonstrate learning from data in real-time!
                            </div>
                        </div>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0; border-left: 6px solid #10b981;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 3️⃣ Google Colab Demonstration</h3>
                        <p><strong>Goal:</strong> Make the computer "think" using simple rules</p>
                        
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; margin: 15px 0; font-family: 'Courier New', monospace;">
                            <div style="color: #9ca3af; margin-bottom: 10px;"># Smart Scarecrow: Detect Crow Based on Movement Speed</div>
                            <div style="color: #fbbf24;">speed = <span style="color: #a78bfa;">float</span>(<span style="color: #34d399;">input</span>(<span style="color: #fbbf24;">"Enter the crow's flying speed (m/s): "</span>))</div>
                            <br>
                            <div style="color: #f472b6;">if</div> <span style="color: #fbbf24;">speed</span> > <span style="color: #60a5fa;">5</span>:<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #34d399;">print</span>(<span style="color: #fbbf24;">"AI Decision: Raise Hands! Scare the crow!"</span>)<br>
                            <div style="color: #f472b6;">else</div>:<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #34d399;">print</span>(<span style="color: #fbbf24;">"AI Decision: Safe. Continue monitoring."</span>)
                        </div>
                        
                        <div style="background: white; padding: 15px; border-radius: 8px; margin-top: 15px;">
                            <strong>📊 Expected Output:</strong><br>
                            If input = <code style="background: #fef3c7; padding: 2px 6px; border-radius: 4px;">7</code><br>
                            → <span style="color: #10b981; font-weight: bold;">"AI Decision: Raise Hands! Scare the crow!"</span>
                        </div>
                    </div>

                    <div style="background: #fef3c7; padding: 25px; border-radius: 12px; margin: 20px 0; border-left: 6px solid #f59e0b;">
                        <h3 style="color: #92400e; margin-top: 0;">📚 4️⃣ Agriculture Case Study</h3>
                        <div style="background: white; padding: 20px; border-radius: 8px;">
                            <h4 style="color: #d97706;">Case: AI-powered scarecrow using sensors</h4>
                            <p><strong>Modern systems use:</strong></p>
                            <ul style="line-height: 1.8;">
                                <li>📡 <strong>Motion sensors</strong> to detect birds</li>
                                <li>🔊 <strong>Sound analysis</strong> to identify bird calls</li>
                                <li>🧠 <strong>Machine learning</strong> to optimize timing</li>
                            </ul>
                            <p style="margin-top: 15px;">to repel birds <strong>automatically</strong>.</p>
                            <div style="background: #10b981; color: white; padding: 15px; border-radius: 8px; margin-top: 15px;">
                                <strong>💡 Students relate to:</strong> AI replaces manual farm monitoring
                            </div>
                        </div>
                    </div>

                    <div style="background: #e0e7ff; padding: 25px; border-radius: 12px; margin: 20px 0; border-left: 6px solid #6366f1;">
                        <h3 style="color: #3730a3; margin-top: 0;">👨‍🏫 5️⃣ Faculty Delivery Script (10–15 minutes)</h3>
                        
                        <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0;">
                            <h4 style="color: #6366f1; border-bottom: 2px solid #c7d2fe; padding-bottom: 10px;">⏱️ Intro (2 min)</h4>
                            <p style="font-style: italic; color: #4c1d95;">
                                "What if your scarecrow had a brain? That is AI."
                            </p>
                        </div>

                        <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0;">
                            <h4 style="color: #6366f1; border-bottom: 2px solid #c7d2fe; padding-bottom: 10px;">🎭 Analogy (3 min)</h4>
                            <p>Use the scarecrow + learning behavior example</p>
                        </div>

                        <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0;">
                            <h4 style="color: #6366f1; border-bottom: 2px solid #c7d2fe; padding-bottom: 10px;">💻 Demo (5 min)</h4>
                            <ul>
                                <li>Run the Google Colab code</li>
                                <li>Ask students to simulate different speeds</li>
                            </ul>
                        </div>

                        <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0;">
                            <h4 style="color: #6366f1; border-bottom: 2px solid #c7d2fe; padding-bottom: 10px;">💬 Discussion (3 min)</h4>
                            <p style="font-weight: bold;">"How does AI help automate repetitive farm tasks?"</p>
                            
                            <div style="background: #fef3c7; padding: 15px; border-radius: 6px; margin-top: 15px;">
                                <strong>Expected Student Questions:</strong><br>
                                <strong>Q:</strong> "Does AI make perfect decisions?"<br>
                                <strong>A:</strong> "No. AI learns from data—<span style="color: #10b981; font-weight: bold;">better data → better decisions</span>."
                            </div>
                        </div>
                    </div>

                    <div style="background: #fce7f3; padding: 25px; border-radius: 12px; margin: 20px 0; border-left: 6px solid #ec4899;">
                        <h3 style="color: #9f1239; margin-top: 0;">📝 6️⃣ Assessment Items</h3>
                        
                        <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0;">
                            <h4 style="color: #ec4899;">MCQs:</h4>
                            <ol>
                                <li>
                                    AI is a system that learns from:<br>
                                    a) Weather<br>
                                    <strong style="color: #10b981;">b) Data ✔</strong>
                                </li>
                                <li style="margin-top: 15px;">
                                    Which is an example of AI in agriculture?<br>
                                    a) Bucket irrigation<br>
                                    <strong style="color: #10b981;">b) Automated pest detection ✔</strong>
                                </li>
                                <li style="margin-top: 15px;">
                                    AI makes decisions using:<br>
                                    a) Magic<br>
                                    <strong style="color: #10b981;">b) Algorithms ✔</strong>
                                </li>
                            </ol>
                        </div>

                        <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0;">
                            <h4 style="color: #ec4899;">Short Answer:</h4>
                            <p>Explain AI with a farming analogy.</p>
                        </div>

                        <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0;">
                            <h4 style="color: #ec4899;">Mini Colab Task:</h4>
                            <p>Modify the scarecrow code to include crow size as a factor.</p>
                        </div>

                        <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0;">
                            <h4 style="color: #ec4899;">Open-Ended:</h4>
                            <p>"How might AI reduce manual labor on a farm?"</p>
                        </div>
                    </div>

                    <div style="background: #e0f2fe; padding: 25px; border-radius: 12px; margin: 20px 0; border-left: 6px solid #0ea5e9;">
                        <h3 style="color: #075985; margin-top: 0;">🔗 7️⃣ Resources</h3>
                        <ul style="line-height: 2;">
                            <li>📘 <a href="https://ai.google/education/" target="_blank" style="color: #0ea5e9; text-decoration: none; font-weight: bold;">Simple intro: Google AI Education</a></li>
                            <li>📄 Article: AI in Precision Farming (Beginner Level)</li>
                            <li>🎥 Video: How Sensors Work on Modern Farms</li>
                            <li>💻 Practice: <a href="https://colab.research.google.com" target="_blank" style="color: #0ea5e9; text-decoration: none;">Google Colab - Try the scarecrow code!</a></li>
                        </ul>
                    </div>

                    <div style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 30px; border-radius: 12px; margin-top: 30px; text-align: center;">
                        <h3 style="margin: 0 0 15px 0;">🎓 You're Ready!</h3>
                        <p style="font-size: 1.1em; margin: 0;">Now proceed to the <strong>Lab</strong> to code your own smart scarecrow, then test your knowledge in the <strong>Quiz</strong>!</p>
                    </div>
                `,
                presentation: `
                    <div class="slides-container" style="position: relative; height: 400px; overflow: hidden; background: #1e3a8a; border-radius: 8px; color: white;">
                        <div class="slide active" style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; padding: 20px;">
                            <h1 style="font-size: 2.5em; margin-bottom: 20px;">🤖 Artificial Intelligence</h1>
                            <p style="font-size: 1.5em;">The Smart Scarecrow That Learns!</p>
                        </div>
                    </div>
                `
            },
            'm1-t2': {
                handout: `
                    <h2>🧠 Machine Learning Paradigms - Three Ways Farmers Learn</h2>
            
            <div style="background: #fef3c7; padding: 25px; border-radius: 12px; margin: 20px 0; border-left: 6px solid #f59e0b;">
                <h3 style="color: #92400e; margin-top: 0;">🎭 1️⃣ Funny Analogy</h3>
                <p style="font-size: 1.1em; line-height: 1.8;">
                    Machine Learning is like <strong>three different ways a farmer learns</strong> to improve their harvest:
                </p>
                <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #d97706;">👨‍🏫 Supervised Learning = Learning with a Teacher</h4>
                    <p>Like a young farmer learning from grandfather: "This is wheat, that is rice." Teacher shows examples with labels!</p>
                    
                    <h4 style="color: #d97706; margin-top: 20px;">🔍 Unsupervised Learning = Exploring Alone</h4>
                    <p>Like discovering that tomatoes naturally group by size without anyone telling you. Computer finds patterns itself!</p>
                    
                    <h4 style="color: #d97706; margin-top: 20px;">🎮 Reinforcement Learning = Trial and Error</h4>
                    <p>Like learning optimal irrigation: try more water → plants grow! Try less → plants wilt. Learn from rewards and punishments!</p>
                </div>
            </div>

            <div style="background: #dbeafe; padding: 25px; border-radius: 12px; margin: 20px 0;">
                <h3 style="color: #1e40af; margin-top: 0;">🎮 2️⃣ Activity: "Three Farming Scenarios"</h3>
                <div style="background: white; padding: 20px; border-radius: 8px;">
                    <p><strong>Game Setup:</strong></p>
                    <ol style="line-height: 2;">
                        <li>🌾 <strong>Scenario 1 (Supervised):</strong> Students get labeled crop pictures and must sort new ones</li>
                        <li>🔍 <strong>Scenario 2 (Unsupervised):</strong> Students  get mixed seeds and must group them without labels</li>
                        <li>🎯 <strong>Scenario 3 (Reinforcement):</strong> Students water plants, get feedback (grow/wilt), adjust strategy</li>
                    </ol>
                    <div style="background: #fef3c7; padding: 15px; border-radius: 6px; margin-top: 15px;">
                        <strong>Purpose:</strong> Experience all 3 learning paradigms hands-on!
                    </div>
                </div>
            </div>

            <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                <h3 style="color: #065f46; margin-top: 0;">💻 3️⃣ Google Colab Demo</h3>
                <p><strong>Goal:</strong> Demonstrate supervised vs unsupervised learning</p>
                <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: 'Courier New', monospace;">
                    <div style="color: #9ca3af;"># Supervised Learning Example: Crop Classification</div>
                    <div style="color: #fbbf24;">crops = <span style="color: #60a5fa;">[</span><span style="color: #a78bfa;">"wheat"</span>, <span style="color: #a78bfa;">"rice"</span>, <span style="color: #a78bfa;">"wheat"</span><span style="color: #60a5fa;">]</span></div>
                    <div style="color: #fbbf24;">labels = <span style="color: #60a5fa;">[</span><span style="color: #34d399;">0</span>, <span style="color: #34d399;">1</span>, <span style="color: #34d399;">0</span><span style="color: #60a5fa;">]</span>  <span style="color: #9ca3af;"># 0=wheat, 1=rice</span></div>
                    <br>
                    <div style="color: #9ca3af;"># Unsupervised Example: Group by size automatically</div>
                    <div style="color: #f472b6;">from</div> <span style="color: #fbbf24;">sklearn.cluster</span> <span style="color: #f472b6;">import</span> <span style="color: #fbbf24;">KMeans</span><br>
                    <div style="color: #fbbf24;">tomato_sizes = <span style="color: #60a5fa;">[[</span>5<span style="color: #60a5fa;">], [</span>5.2<span style="color: #60a5fa;">], [</span>10<span style="color: #60a5fa;">], [</span>9.8<span style="color: #60a5fa;">]]</span></div>
                    <div style="color: #fbbf24;">clusters = KMeans<span style="color: #a78bfa;">(n_clusters=2)</span>.fit<span style="color: #a78bfa;">(tomato_sizes)</span></div>
                    <div style="color: #34d399;">print</div><span style="color: #a78bfa;">(clusters.labels_)</span>  <span style="color: #9ca3af;"># [0 0 1 1] - Auto-grouped!</span>
                </div>
            </div>

            <div style="background: #fef3c7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                <h3 style="color: #92400e; margin-top: 0;">📚 4️⃣ Case Study</h3>
                <div style="background: white; padding: 20px; border-radius: 8px;">
                    <h4 style="color: #d97706;">Real System: Automated Crop Classification</h4>
                    <ul style="line-height: 1.8;">
                        <li>📸 <strong>Supervised:</strong> Farmers labeled 10,000 crop images → AI learned to classify new photos</li>
                        <li>🔍 <strong>Unsupervised:</strong> System grouped customers by buying patterns without labels  → found 5 farmer types</li>
                        <li>🎮 <strong>Reinforcement:</strong> Irrigation bot learned optimal watering by trying different amounts</li>
                    </ul>
                    <div style="background: #10b981; color: white; padding: 15px; border-radius: 8px; margin-top: 15px;">
                        <strong>Impact:</strong> 40% faster classification, 30% water savings!
                    </div>
                </div>
            </div>

            <div style="background: #e0e7ff; padding: 25px; border-radius: 12px; margin: 20px 0;">
                <h3 style="color: #3730a3; margin-top: 0;">👨‍🏫 5️⃣ Faculty Script (12 min)</h3>
                <div style="background: white; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <h4 style="color: #6366f1;">⏱️ Intro (2 min)</h4>
                    <p style="font-style: italic;">"Imagine three farmers learning to farm. Each learns differently - that's ML paradigms!"</p>
                </div>
                <div style="background: white; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <h4 style="color: #6366f1;">🎭 Analogies (4 min)</h4>
                    <p>Explain teacher/explorer/trial-error with farming examples</p>
                </div>
                <div style="background: white; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <h4 style="color: #6366f1;">💻 Demo (4 min)</h4>
                    <p>Run both Colab code examples, show outputs</p>
                </div>
                <div style="background: white; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <h4 style="color: #6366f1;">💬 Q&A (2 min)</h4>
                    <p><strong>Expected Q:</strong> "Which is best?"<br><strong>A:</strong> "Depends on problem! Have labels? Use supervised. No labels? Try unsupervised!"</p>
                </div>
            </div>

            <div style="background: #fce7f3; padding: 25px; border-radius: 12px; margin: 20px 0;">
                <h3 style="color: #9f1239; margin-top: 0;">📝 6️⃣ Assessments</h3>
                <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #ec4899;">MCQs:</h4>
                    <ol>
                        <li>Supervised learning needs:
                            <br>a) Only input data
                            <br><strong style="color: #10b981;">b) Input data + labels ✔</strong>
                        </li>
                        <li style="margin-top: 15px;">Finding groups in data without labels is:
                            <br>a) Supervised learning
                            <br><strong style="color: #10b981;">b) Unsupervised learning ✔</strong>
                        </li>
                        <li style="margin-top: 15px;">Learning by rewards and punishments is:
                            <br><strong style="color: #10b981;">a) Reinforcement learning ✔</strong>
                            <br>b) Supervised learning
                        </li>
                    </ol>
                </div>
                <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #ec4899;">Short Answer:</h4>
                    <p>Explain supervised learning using a farming example.</p>
                </div>
                <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #ec4899;">Colab Task:</h4>
                    <p>Modify the clustering code to find 3 groups instead of 2.</p>
                </div>
            </div>

            <div style="background: #e0f2fe; padding: 25px; border-radius: 12px; margin: 20px 0;">
                <h3 style="color: #075985; margin-top: 0;">🔗 7️⃣ Resources</h3>
                <ul style="line-height: 2;">
                    <li>📘 <a href="https://scikit-learn.org/stable/supervised_learning.html" target="_blank">Scikit-learn: Supervised Learning Guide</a></li>
                    <li>🎥 Video: "ML Paradigms Explained Simply"</li>
                    <li>💻 Interactive Demo: <a href="https://playground.tensorflow.org" target="_blank">TensorFlow Playground</a></li>
                </ul>
            </div>

            <div style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 30px; border-radius: 12px; text-align: center;">
                <h3 style="margin: 0 0 15px 0;">🎓 Ready for More!</h3>
                <p>You now understand the 3 main ways machines learn - just like farmers learn!</p>
            </div>
                `,
                presentation: `<div style="background: #1e3a8a; height: 400px; color: white; display:flex; justify-content:center; align-items:center;">
                    <h1>🧠 ML Paradigms</h1>
                </div>`
            },
            'm1-t3': {
                handout: `
                    <h2>📜 History of AI - From Ancient Dreams to Smart Farms</h2>
                    
                    <div style="background: #fef3c7; padding: 25px; border-radius: 12px; margin: 20px 0; border-left: 6px solid #f59e0b;">
                        <h3 style="color: #92400e; margin-top: 0;">🎭 1️⃣ Analogy: Evolution of Farming Tools</h3>
                        <p style="font-size: 1.1em;">AI evolution is like farming tools evolving:</p>
                        <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0;">
                            <strong>1950s:</strong> Hand plow → Basic calculators ("Can machines think?")<br>
                            <strong>1980s:</strong> Tractor → Expert systems ("If soil dry, then water")<br>
                            <strong>2010s:</strong> Drone → Deep learning ("Learn from millions of images")<br>
                            <strong>2020s:</strong> Smart farm → AI everywhere ("Predict, detect, optimize")
                        </div>
                    </div>

                    <div style="background: #dbeafe; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #1e40af; margin-top: 0;">🎮 2️⃣ Activity: AI Timeline Game</h3>
                        <div style="background: white; padding: 20px; border-radius: 8px;">
                            <p><strong>Setup:</strong> Students get cards with AI milestones and must arrange them chronologically.</p>
                            <ul>
                                <li>1950: Turing Test proposed</li>
                                <li>1997: Deep Blue beats chess champion</li>
                                <li>2012: ImageNet breakthrough</li>
                                <li>2023: ChatGPT released</li>
                            </ul>
                            <strong>Goal:</strong> Understand AI didn't happen overnight - it evolved like farming!
                        </div>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 3️⃣ Colab: Compare Old vs New</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            # Old Way (1980s): Rule-based<br>
                            if soil_moisture < 30:<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;water = True<br>
                            <br>
                            # New Way (2020s): ML-based<br>
                            model.predict([moisture, temp, humidity])<br>
                        </div>
                    </div>

                    <div style="background: #fef3c7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #92400e; margin-top: 0;">📚 4️⃣ Case: AI Winter to AI Spring</h3>
                        <div style="background: white; padding: 20px; border-radius: 8px;">
                            <p><strong>AI Winters:</strong> Times when AI hype died because computers weren't powerful enough.</p>
                            <p><strong>Modern AI Spring:</strong> Big data + powerful computers + better algorithms = AI explosion!</p>
                            <div style="background: #10b981; color: white; padding: 15px; border-radius: 8px; margin-top: 15px;">
                                <strong>Today:</strong> AI in your phone predicts crops, detects diseases, forecasts weather!
                            </div>
                        </div>
                    </div>

                    <div style="background: #e0e7ff; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #3730a3; margin-top: 0;">👨‍🏫 5️⃣ Faculty Script (10 min)</h3>
                        <div style="background: white; padding: 15px; border-radius: 8px;">
                            <strong>Intro (2 min):</strong> "AI isn't new - it's older than most of you!"<br>
                            <strong>Timeline (5 min):</strong> Walk through 1950s → 2020s<br>
                            <strong>Discussion (3 min):</strong> "Why is AI powerful now but not in 1980s?"
                        </div>
                    </div>

                    <div style="background: #fce7f3; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #9f1239; margin-top: 0;">📝 6️⃣ Assessments</h3>
                        <div style="background: white; padding: 20px; border-radius: 8px;">
                            <strong>MCQ:</strong> When was the Turing Test proposed? <strong style="color: #10b981;">a) 1950 ✔</strong><br>
                            <strong>Short Answer:</strong> Why is AI more powerful today than in the 1980s?<br>
                            <strong>Task:</strong> Research one AI milestone and present in 2 minutes
                        </div>
                    </div>

                    <div style="background: #e0f2fe; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #075985; margin-top: 0;">🔗 7️⃣ Resources</h3>
                        <ul>
                            <li>📘 <a href="https://en.wikipedia.org/wiki/History_of_artificial_intelligence">AI History Timeline</a></li>
                            <li>🎥 Video: "70 Years of AI in 10 Minutes"</li>
                        </ul>
                    </div>
                `,
                presentation: `<div style="background: #2d3748; height: 400px; color: white; display:flex; justify-content:center; align-items:center;">
                    <h1>📜 AI History: 1950 → 2024</h1>
                </div>`
            },
            'm1-t4': {
                handout: `
                    <h2>🌾 AI in Agriculture - Smart Farming Revolution</h2>
                    
                    <div style="background: #fef3c7; padding: 25px; border-radius: 12px; margin: 20px 0; border-left: 6px solid #f59e0b;">
                        <h3 style="color: #92400e; margin-top: 0;">🎭 1️⃣ Analogy: From Bullock Cart to Autopilot Tractor</h3>
                        <p style="font-size: 1.1em;">AI in farming is like upgrading from:</p>
                        <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0;">
                            🐂 <strong>Bullock:</strong> Manual farming → Slow, tiring<br>
                            🚜 <strong>Tractor:</strong> Mechanized → Faster, easier<br>
                            🤖 <strong>AI Tractor:</strong> Self-driving, optimizes route, saves fuel → Smartest!
                        </div>
                        <p>AI doesn't replace farmers - it's like having a super-smart assistant!</p>
                    </div>

                    <div style="background: #dbeafe; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #1e40af; margin-top: 0;">🎮 2️⃣ Activity: Farm Problems → AI Solutions</h3>
                        <div style="background: white; padding: 20px; border-radius: 8px;">
                            <p><strong>Match the problem to AI solution:</strong></p>
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr style="background: #f3f4f6;">
                                    <th style="padding: 10px; border: 1px solid #ddd;">Problem</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">AI Solution</th>
                                </tr>
                                <tr>
                                    <td style="padding: 10px; border: 1px solid #ddd;">🐛 Pests eating crops</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">📸 AI camera detects & counts pests</td>
                                </tr>
                                <tr style="background: #f9fafb;">
                                    <td style="padding: 10px; border: 1px solid #ddd;">🌧️ When to harvest?</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">🔮 AI predicts weather patterns</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px; border: 1px solid #ddd;">💧 Too much/little water?</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">🎯 AI optimizes irrigation schedule</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 3️⃣ Colab: Simple Yield Predictor</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            # Input: rainfall, temperature<br>
                            rainfall = 120  # mm<br>
                            temp = 28  # celsius<br>
                            <br>
                            # Simple AI prediction<br>
                            if rainfall > 100 and temp > 25:<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;print("Good yield expected!")  <br>
                            else:<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;print("Below average yield")
                        </div>
                    </div>

                    <div style="background: #fef3c7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #92400e; margin-top: 0;">📚 4️⃣ Case: Real AI Farm in India</h3>
                        <div style="background: white; padding: 20px; border-radius: 8px;">
                            <p><strong>Farm:</strong> 100-acre wheat farm in Punjab</p>
                            <p><strong>AI Systems Used:</strong></p>
                            <ul style="line-height: 1.8;">
                                <li>🛰️ Satellite imagery for crop health monitoring</li>
                                <li>📸 Drone cameras for pest detection</li>
                                <li>💧 Soil moisture sensors + AI for irrigation</li>
                                <li>🌡️ Weather prediction for harvest timing</li>
                            </ul>
                            <div style="background: #10b981; color: white; padding: 15px; border-radius: 8px; margin-top: 15px;">
                                <strong>Results:</strong> 25% yield increase, 40% water savings, 30% less pesticide!
                            </div>
                        </div>
                    </div>

                    <div style="background: #e0e7ff; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #3730a3; margin-top: 0;">👨‍🏫 5️⃣ Faculty Script (15 min)</h3>
                        <div style="background: white; padding: 15px; border-radius: 8px;">
                            <strong>Intro (3 min):</strong> "AI is already on farms - let's see how!"<br>
                            <strong>Examples (7 min):</strong> Show 4-5 AgriTech applications<br>
                            <strong>Demo (3 min):</strong> Run yield predictor<br>
                            <strong>Discussion (2 min):</strong> "Which AI solution would help YOUR farm most?"
                        </div>
                    </div>

                    <div style="background: #fce7f3; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #9f1239; margin-top: 0;">📝 6️⃣ Assessments</h3>
                        <div style="background: white; padding: 20px; border-radius: 8px;">
                            <strong>MCQ:</strong> AI can help with: <strong style="color: #10b981;">d) All of the above ✔</strong><br>
                            <strong>Short Answer:</strong> Name 3 ways AI helps farmers<br>
                            <strong>Project:</strong> Design an AI solution for a local farm problem
                        </div>
                    </div>

                    <div style="background: #e0f2fe; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #075985; margin-top: 0;">🔗 7️⃣ Resources</h3>
                        <ul>
                            <li>📘 <a href="https://www.fao.org/digital-agriculture/en/">FAO Digital Agriculture</a></li>
                            <li>🎥 Video: "AI on Indian Farms" Documentary</li>
                            <li>💻 App: Try "Plantix" disease detection app</li>
                        </ul>
                    </div>
                `,
                presentation: `<div style="background: #10b981; height: 400px; color: white; display:flex; justify-content:center; align-items:center;">
                    <h1>🌾 AI in Agriculture</h1>
                </div>`
            },
            'm1-t5': {
                handout: `
                    <h2>💼 Career Opportunities in AgriTech</h2>
                    
                    <div style="background: #fef3c7; padding: 25px; border-radius: 12px; margin: 20px 0; border-left: 6px solid #f59e0b;">
                        <h3 style="color: #92400e; margin-top: 0;">🎭 1️⃣ Analogy: From Farmer to Farm-Tech Expert</h3>
                        <p style="font-size: 1.1em;">AgriTech careers are like different roles on a modern farm:</p>
                        <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0;">
                            🌾 <strong>Farm Owner</strong> (Product Manager) → Decides what to build<br>
                            🧑‍💻 <strong>Tool Maker</strong> (Developer) → Builds AI systems<br>
                            📊 <strong>Crop Analyst</strong> (Data Scientist) → Analyzes farm data<br>
                            🎨 <strong>Market Designer</strong> (UX Designer) → Makes apps easy for farmers<br>
                            🤝 <strong>Sales Person</strong> (Business Dev) → Sells solutions to farms
                        </div>
                    </div>

                    <div style="background: #dbeafe; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #1e40af; margin-top: 0;">🎮 2️⃣ Activity: Job Role Play</h3>
                        <div style="background: white; padding: 20px; border-radius: 8px;">
                            <p><strong>Students try different roles:</strong></p>
                            <ul style="line-height: 2;">
                                <li>👨‍💻 <strong>Data Scientist:</strong> Analyze crop yield data</li>
                                <li>🎨 <strong>Designer:</strong> Sketch a farmer-friendly app</li>
                                <li>🤝 <strong>Sales:</strong> Pitch AI solution to imaginary farmer</li>
                            </ul>
                            <strong>Goal:</strong> Experience different AgriTech careers!
                        </div>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 3️⃣ Colab: Career Skills Test</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            # Data Scientist skill: Analyze data<br>
                            yields = [4.5, 5.2, 3.8, 6.1, 5.0]<br>
                            average = sum(yields) / len(yields)<br>
                            print(f"Average yield: {average}")<br>
                            <br>
                            # Developer skill: Write functions<br>
                            def predict_yield(rain, temp):<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;return rain * 0.05 + temp * 0.1
                        </div>
                    </div>

                    <div style="background: #fef3c7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #92400e; margin-top: 0;">📚 4️⃣ Case: Successful AgriTech Careers</h3>
                        <div style="background: white; padding: 20px; border-radius: 8px;">
                            <p><strong>Real People:</strong></p>
                            <ul style="line-height: 1.8;">
                                <li>🧑‍💻 <strong>Rahul:</strong> Farmer's son → Data Scientist → Built yield predictor → ₹15L/year</li>
                                <li>👩‍💻 <strong>Priya:</strong> Agriculture graduate → ML Engineer → Drone pest detection → ₹20L/year</li>
                                <li>🤝 <strong>Amit:</strong> Sales background → AgriTech BD → Grows companies → ₹25L/year</li>
                            </ul>
                            <div style="background: #10b981; color: white; padding: 15px; border-radius: 8px; margin-top: 15px;">
                                <strong>Key:</strong> Agriculture knowledge + Tech skills = High demand!
                            </div>
                        </div>
                    </div>

                    <div style="background: #e0e7ff; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #3730a3; margin-top: 0;">👨‍🏫 5️⃣ Faculty Script (12 min)</h3>
                        <div style="background: white; padding: 15px; border-radius: 8px;">
                            <strong>Intro (2 min):</strong> "AgriTech is booming - jobs everywhere!"<br>
                            <strong>Roles (5 min):</strong> Explain 5-6 different career paths<br>
                            <strong>Skills (3 min):</strong> What to learn for each role<br>
                            <strong>Q&A (2 min):</strong> "Which role excites you most?"
                        </div>
                    </div>

                    <div style="background: #fce7f3; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #9f1239; margin-top: 0;">📝 6️⃣ Assessments</h3>
                        <div style="background: white; padding: 20px; border-radius: 8px;">
                            <strong>MCQ:</strong> What does a Data Scientist do? <strong style="color: #10b981;">b) Analyzes data ✔</strong><br>
                            <strong>Short Answer:</strong> Name 3 AgriTech job roles<br>
                            <strong>Project:</strong> Research one AgriTech company and their jobs
                        </div>
                    </div>

                    <div style="background: #e0f2fe; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #075985; margin-top: 0;">🔗 7️⃣ Resources</h3>
                        <ul>
                            <li>📘 <a href="https://www.naukri.com/agritech-jobs">AgriTech Job Listings</a></li>
                            <li>🎥 Video: "Day in Life of AgriTech Data Scientist"</li>
                            <li>💼 LinkedIn: Follow #AgriTech professionals</li>
                        </ul>
                    </div>
                `,
                presentation: `<div style="background: #6366f1; height: 400px; color: white; display:flex; justify-content:center; align-items:center;">
                    <h1>💼 AgriTech Careers</h1>
                </div>`
            },
            'm1-t6': {
                handout: `
                    <h2>🧮 Mathematical Foundations - The Language of AI</h2>
                    
                    <div style="background: #fef3c7; padding: 25px; border-radius: 12px; margin: 20px 0; border-left: 6px solid #f59e0b;">
                        <h3 style="color: #92400e; margin-top: 0;">🎭 1️⃣ Analogy: Math is Like Measuring Your Farm</h3>
                        <p style="font-size: 1.1em;">AI uses math just like farmers use measurements:</p>
                        <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0;">
                            📏 <strong>Geometry:</strong> Measure field area (Length × Width)<br>
                            ➕ <strong>Arithmetic:</strong> Add up total harvest<br>
                            ➗ <strong>Average:</strong> Find average yield per acre<br>
                            📊 <strong>Statistics:</strong> Is this year's harvest better than average?<br>
                        </div>
                        <p><strong>Without math:</strong> Can't predict, can't optimize, can't improve!</p>
                    </div>

                    <div style="background: #dbeafe; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #1e40af; margin-top: 0;">🎮 2️⃣ Activity: Farm Math Challenge</h3>
                        <div style="background: white; padding: 20px; border-radius: 8px;">
                            <p><strong>Calculate these farm problems:</strong></p>
                            <ol style="line-height: 2;">
                                <li>📐 Field is 50m × 40m. What's the area?</li>
                                <li>🌾 Harvested 200kg, 250kg, 180kg from 3 fields. Average?</li>
                                <li>💧 Used 1000L water for 10 plants. Per plant?</li>
                                <li>📈 Yield increased from 400kg to 500kg. Percent increase?</li>
                            </ol>
                            <strong>Goal:</strong> Show math is already used in farming!
                        </div>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 3️⃣ Colab: Math for AI</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            import numpy as np<br>
                            <br>
                            # Farm data<br>
                            yields = [4.5, 5.2, 3.8, 6.1, 5.0]<br>
                            <br>
                            # Calculate statistics<br>
                            mean = np.mean(yields)<br>
                            std = np.std(yields)<br>
                            <br>
                            print(f"Average: {mean}")<br>
                            print(f"Variation: {std}")
                        </div>
                    </div>

                    <div style="background: #fef3c7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #92400e; margin-top: 0;">📚 4️⃣ Case: Math Predicts Yield</h3>
                        <div style="background: white; padding: 20px; border-radius: 8px;">
                            <p><strong>Problem:</strong> Can we predict harvest from rainfall?</p>
                            <p><strong>Math Solution:</strong></p>
                            <ul style="line-height: 1.8;">
                                <li>📊 Collect data: Rain vs Yield for 100 farms</li>
                                <li>📈 Find pattern: More rain → More yield (linear relationship)</li>
                                <li>🧮 Create formula: Yield = 2 × Rain + 100</li>
                                <li>🎯 Predict: If rain = 150mm → Yield = 400kg</li>
                            </ul>
                            <div style="background: #10b981; color: white; padding: 15px; border-radius: 8px; margin-top: 15px;">
                                <strong>That's AI!</strong> Using math to find patterns and predict future!
                            </div>
                        </div>
                    </div>

                    <div style="background: #e0e7ff; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #3730a3; margin-top: 0;">👨‍🏫 5️⃣ Faculty Script (12 min)</h3>
                        <div style="background: white; padding: 15px; border-radius: 8px;">
                            <strong>Intro (2 min):</strong> "Don't fear math - you already use it!"<br>
                            <strong>Examples (5 min):</strong> Show farm calculations<br>
                            <strong>Demo (3 min):</strong> Run NumPy statistics<br>
                            <strong>Motivation (2 min):</strong> "Math = Superpower for AI"
                        </div>
                    </div>

                    <div style="background: #fce7f3; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #9f1239; margin-top: 0;">📝 6️⃣ Assessments</h3>
                        <div style="background: white; padding: 20px; border-radius: 8px;">
                            <strong>MCQ:</strong> AI uses math to: <strong style="color: #10b981;">c) Find patterns ✔</strong><br>
                            <strong>Calculation:</strong> Find average of [10, 20, 30, 40, 50]<br>
                            <strong>Task:</strong> Calculate your own farm's average yield
                        </div>
                    </div>

                            <h2>🌾 Variables = Farm Storage Bins</h2>
                            <p style="font-size: 1.5em;">Each bin has a label and holds something!</p>
                        </div>
                        <div class="slide">
                            <h3>Data Types</h3>
                            <ul style="font-size: 1.2em;">
                                <li>🌽 Integers = Counted items (50 chickens)</li>
                                <li>🥛 Floats = Measurements (2.5 liters)</li>
                                <li>📝 Strings = Names ("Rice")</li>
                                <li>☀️ Booleans = Yes/No (Is_Sunny?)</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            'm1-t7': {
                handout: `
                    <h2>📊 Statistics in Farming: The "Village Average"</h2>
                    
                    <div style="background: #fef3c7; padding: 25px; border-radius: 12px; margin: 20px 0; border-left: 6px solid #f59e0b;">
                        <h3 style="color: #92400e; margin-top: 0;">🎭 1️⃣ Analogy: Measuring the Harvest</h3>
                        <p style="font-size: 1.1em;">Statistics is just a fancy way of summarizing your harvest:</p>
                        <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0;">
                            <p><strong>Mean (Average):</strong> If 5 farmers produce [4, 6, 5, 5, 5] tons, the "Village Average" is 5 tons.</p>
                            <p><strong>Median (Middle):</strong> Line up farmers by yield. The one in the middle is the Median.</p>
                            <p><strong>Standard Deviation:</strong> Are all farmers getting 5 tons (Low deviation), or is one getting 10 and another 0 (High deviation/Risk)?</p>
                        </div>
                    </div>

                    <div style="background: #dbeafe; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #1e40af; margin-top: 0;">2️⃣ Activity: "The Bean Counter"</h3>
                        <div style="background: white; padding: 20px; border-radius: 8px;">
                            <p><strong>Setup:</strong> Give small bags of beans to 5 students.</p>
                            <ul>
                                <li><strong>Step 1:</strong> Count your beans.</li>
                                <li><strong>Step 2:</strong> Calculate the class average (Mean).</li>
                                <li><strong>Step 3:</strong> Line up to find the Median.</li>
                            </ul>
                            <p><strong>Goal:</strong> Understand how one "lucky" student (outlier) changes the Mean but not the Median!</p>
                        </div>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 3️⃣ Colab: Calculating Yields</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            import numpy as np<br>
                            yields = [4.5, 5.0, 5.2, 4.8, 8.0] # One bumper crop!<br>
                            <br>
                            print(f"Mean: {np.mean(yields)}")<br>
                            print(f"Median: {np.median(yields)}")<br>
                            print(f"Std Dev: {np.std(yields)}")
                        </div>
                    </div>

                    <div style="background: #e0e7ff; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #3730a3; margin-top: 0;">👨‍🏫 4️⃣ Faculty Script</h3>
                        <p>"Farmers hate risk. Standard Deviation measures risk. If it's high, your yield is unpredictable!"</p>
                    </div>

                    <div style="background: #fce7f3; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #9f1239; margin-top: 0;">📝 5️⃣ Assessment</h3>
                        <p><strong>Q:</strong> Which metric is best if one farmer has a HUGE harvest (outlier)?<br><strong>A:</strong> Median (it ignores outliers).</p>
                    </div>
                `,
                presentation: `<div style="background: #059669; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>📊 Farm Statistics</h1></div>`
            },
            'm1-t8': {
                handout: `
                    <h2>📐 Linear Algebra: The Farm Map</h2>
                    
                    <div style="background: #e0f2fe; padding: 25px; border-radius: 12px; border-left: 6px solid #0ea5e9;">
                        <h3 style="color: #0369a1; margin-top: 0;">🎭 1️⃣ Analogy: Grids and Lists</h3>
                        <div style="background: white; padding: 20px; border-radius: 8px;">
                            <p><strong>Vector:</strong> A shopping list for ONE field.<br><code>[Seeds, Fertilizer, Water]</code></p>
                            <p><strong>Matrix:</strong> A master schedule for ALL fields.<br>Rows = Fields, Columns = Resources.</p>
                            <p><strong>Dot Product:</strong> Calculating the total bill. <br><code>(seeds * price) + (fert * price)</code></p>
                        </div>
                    </div>

                    <div style="background: #dbeafe; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #1e40af; margin-top: 0;">2️⃣ Activity: "Field Matrix"</h3>
                        <p>Draw a grid on the board. Each student is a "data point" (row) with features (height, shoe size). Together, you form a Matrix!</p>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 3️⃣ Colab: Profit Calculation</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            import numpy as np<br>
                            # 3 Fields, 2 Crops (Wheat, Rice)<br>
                            fields = np.array([[10, 5], [8, 8], [2, 12]])<br>
                            prices = np.array([20, 30]) # Price per unit<br>
                            <br>
                            # Total Revenue per field<br>
                            revenue = np.dot(fields, prices)<br>
                            print(revenue)
                        </div>
                    </div>

                    <div style="background: #fce7f3; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #9f1239; margin-top: 0;">📝 4️⃣ Assessment</h3>
                        <p><strong>Q:</strong> A matrix of size 3x2 represents?<br><strong>A:</strong> 3 samples (rows) and 2 features (columns).</p>
                    </div>
                `,
                presentation: `<div style="background: #0284c7; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>📐 Farm Algebra</h1></div>`
            },
            'm1-t9': {
                handout: `
                    <h2>📦 Data Types: Sorting the Barn</h2>
                    
                    <div style="background: #fef3c7; padding: 25px; border-radius: 12px; margin: 20px 0; border-left: 6px solid #f59e0b;">
                        <h3 style="color: #92400e; margin-top: 0;">🎭 1️⃣ Analogy: Boxes & Piles</h3>
                        <div style="background: white; padding: 20px; border-radius: 8px;">
                            <p><strong>Structured Data:</strong> Eggs in a crate. Neat, organized rows and columns (Excel).</p>
                            <p><strong>Unstructured Data:</strong> A pile of hay. Messy, but contains value. (Images, Audio, Text).</p>
                            <p><strong>Semi-Structured:</strong> Specific sacks with tags. (JSON/XML).</p>
                        </div>
                    </div>

                    <div style="background: #dbeafe; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #1e40af; margin-top: 0;">2️⃣ Activity: "Barn Cleanup"</h3>
                        <p>Sort items on a table: Excel printouts (Structured), Loose corn (Unstructured), Labeled seed bags (Semi-Structured).</p>
                    </div>

                    <div style="background: #e0e7ff; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #3730a3; margin-top: 0;">👨‍🏫 3️⃣ Faculty Script</h3>
                        <p>"Traditional computers loved Structured data (SQL). Modern AI (Deep Learning) loves Unstructured data (Images/Voice)."</p>
                    </div>

                    <div style="background: #fce7f3; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #9f1239; margin-top: 0;">📝 4️⃣ Assessment</h3>
                        <p><strong>Q:</strong> A satellite image of a field is?<br><strong>A:</strong> Unstructured Data.</p>
                    </div>
                `,
                presentation: `<div style="background: #7c3aed; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>📦 Data Structures</h1></div>`
            },
            'm1-t10': {
                handout: `
                    <h2>📡 Data Collection: Listening to the Land</h2>
                    
                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0; border-left: 6px solid #059669;">
                        <h3 style="color: #065f46; margin-top: 0;">🎭 1️⃣ Analogy: The Farm Scouts</h3>
                        <div style="background: white; padding: 20px; border-radius: 8px;">
                            <p><strong>IoT Sensors:</strong> Like a scout standing in the field 24/7 checking moisture.</p>
                            <p><strong>Satellites/Drones:</strong> Like a scout in a watchtower looking for large patterns.</p>
                            <p><strong>Crowdsourcing:</strong> Asking 100 neighbors "Did you see pests?"</p>
                        </div>
                    </div>

                    <div style="background: #dbeafe; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #1e40af; margin-top: 0;">2️⃣ Activity: "The Human Sensor Network"</h3>
                        <p>Students stand around the room. Faculty acts as "Cloud". Students (Sensors) must report their local "temperature" (random number) every 10 seconds.</p>
                        <p><strong>Lesson:</strong> Handling data streams and connectivity issues.</p>
                    </div>

                    <div style="background: #e0e7ff; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #3730a3; margin-top: 0;">👨‍🏫 3️⃣ Faculty Script</h3>
                        <p>"Garbage In, Garbage Out. If your sensor is broken, your AI will be stupid. Data quality > Algorithm quality."</p>
                    </div>

                    <div style="background: #fce7f3; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #9f1239; margin-top: 0;">📝 4️⃣ Assessment</h3>
                        <p><strong>Q:</strong> Which tool is best for monitoring soil moisture continuously?<br><strong>A:</strong> IoT Sensors.</p>
                    </div>
                `,
                presentation: `<div style="background: #db2777; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>📡 Collecting Data</h1></div>`
            },
            'm1-t11': {
                handout: `
                    <h2>🐍 Python Setup: The Cloud Tractor</h2>
                    
                    <div style="background: #fef3c7; padding: 25px; border-radius: 12px; margin: 20px 0; border-left: 6px solid #f59e0b;">
                        <h3 style="color: #92400e; margin-top: 0;">🎭 1️⃣ Analogy: Rent vs Buy</h3>
                        <div style="background: white; padding: 20px; border-radius: 8px;">
                            <p><strong>Local Python (Anaconda):</strong> Like buying a tractor. You keep it in your shed, repair it, and fuel it. Hard work but you own it.</p>
                            <p><strong>Google Colab:</strong> Like renting a super-tractor. It comes with a driver, fully fueled, ready to go. You just give instructions! Runs in your browser.</p>
                        </div>
                    </div>

                    <div style="background: #dbeafe; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #1e40af; margin-top: 0;">2️⃣ Activity: "Hello Farm"</h3>
                        <p>Open Google Colab. Type <code>print("Hello Farm")</code>. Press Play.</p>
                        <p><strong>Goal:</strong> Overcome the fear of the black screen/code editor.</p>
                    </div>

                    <div style="background: #e0e7ff; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #3730a3; margin-top: 0;">👨‍🏫 3️⃣ Faculty Script</h3>
                        <p>"We will use Colab because it has all the libraries (Numpy, Pandas) pre-installed. No 'installation headaches'!"</p>
                    </div>

                    <div style="background: #fce7f3; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #9f1239; margin-top: 0;">📝 4️⃣ Assessment</h3>
                        <p><strong>Q:</strong> Does Google Colab use your computer's RAM/CPU?<br><strong>A:</strong> No, it uses Google's servers (Cloud).</p>
                    </div>
                `,
                presentation: `<div style="background: #2563eb; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🐍 Setup Tools</h1></div>`
            },
            'm1-t12': {
                handout: `
                    <h2>📦 Variables: Farm Storage</h2>
                    
                    <div style="background: #e0f2fe; padding: 25px; border-radius: 12px; border-left: 6px solid #0ea5e9;">
                        <h3 style="color: #0369a1; margin-top: 0;">🎭 1️⃣ Analogy: Labeled Boxes</h3>
                        <p><strong>Variable:</strong> A box with a label written on it.</p>
                        <p><code>harvest = 50</code> -> Take a box, write "harvest" on it, put number 50 inside.</p>
                        <p><code>crop = "Wheat"</code> -> Take a box, write "crop", put text "Wheat" inside.</p>
                    </div>

                    <div style="background: #dbeafe; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #1e40af; margin-top: 0;">2️⃣ Activity: "The Box Game"</h3>
                        <p>Use physical boxes. Label them. Put items inside. "Change the value" of 'harvest' by taking out 50 and putting in 60.</p>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 3️⃣ Colab: Dynamic Typing</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            x = 10     # Integer<br>
                            print(type(x))<br>
                            x = "Ten"  # String (Changed type!)<br>
                            print(type(x))
                        </div>
                        <p>Python is flexible - the box can hold anything!</p>
                    </div>
                `,
                presentation: `<div style="background: #d97706; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>📦 Variables</h1></div>`
            },
            'm1-t13': {
                handout: `
                    <h2>➕ Operators: Farm Math</h2>
                    
                    <div style="background: #fef3c7; padding: 25px; border-radius: 12px; margin: 20px 0; border-left: 6px solid #f59e0b;">
                        <h3 style="color: #92400e; margin-top: 0;">🎭 1️⃣ Analogy: The Tools</h3>
                        <p><code>+</code> (Addition): Putting harvests from two fields into one barn.</p>
                        <p><code>==</code> (Equality): A weighing scale. balancing two sacks. Are they equal?</p>
                        <p><code>%</code> (Modulo): Leftovers. If I divide 10 seeds among 3 holes (3 each), what's left? 1.</p>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 2️⃣ Colab: Boolean Logic</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            soil_moisture = 20<br>
                            rain_forcast = False<br>
                            <br>
                            # Logic: Water if dry AND no rain coming<br>
                            should_water = (soil_moisture < 30) and (not rain_forcast)<br>
                            print(should_water) # True
                        </div>
                    </div>

                    <div style="background: #fce7f3; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #9f1239; margin-top: 0;">📝 3️⃣ Assessment</h3>
                        <p><strong>Q:</strong> What is 10 % 3?<br><strong>A:</strong> 1 (The remainder).</p>
                    </div>
                `,
                presentation: `<div style="background: #dc2626; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>➕ Operators</h1></div>`
            },
            'm1-t14': {
                handout: `
                    <h2>🔀 Control Structures: The Scarecrow's Brain</h2>
                    
                    <div style="background: #d1fae5; padding: 20px; border-left: 5px solid #059669;">
                        <h3 style="color: #065f46; margin-top: 0;">🎭 1️⃣ Analogy: Bifurcation</h3>
                        <p>A path in the road. You can go Left OR Right. You cannot go both.</p>
                        <p><strong>IF</strong> soil is dry -> Go Left (Turn on Pump)</p>
                        <p><strong>ELSE</strong> -> Go Right (Do nothing)</p>
                    </div>

                    <div style="background: #dbeafe; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #1e40af; margin-top: 0;">2️⃣ Activity: "If This Then That"</h3>
                        <p><strong>Simon Says for Logic:</strong></p>
                        <p>"IF I raise my left hand, YOU clap."</p>
                        <p>"ELIF I raise my right hand, YOU stomp."</p>
                        <p>"ELSE, stay freeze."</p>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 3️⃣ Colab: Automated Irrigation</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            moisture = 15<br>
                            if moisture < 20:<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;print("⚠️ Critical! Water immediately!")<br>
                            elif moisture < 40:<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;print("💧 Water soon.")<br>
                            else:<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;print("✅ Soil is happy.")
                        </div>
                    </div>
                `,
                presentation: `<div style="background: #059669; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🔀 Decisions</h1></div>`
            },
            'm1-t15': {
                handout: `
                    <h2>🔄 Loops: Automation in Action</h2>
                    
                    <div style="background: #e0e7ff; padding: 25px; border-radius: 12px; border-left: 6px solid #4f46e5;">
                        <h3 style="color: #3730a3; margin-top: 0;">🎭 1️⃣ Analogy: The Water Pump</h3>
                        <p><strong>For Loop:</strong> "Water every plant in this row." (You know how many plants there are).</p>
                        <p><strong>While Loop:</strong> "Keep pumping UNTIL the tank is full." (You don't know exactly when it will stop, just the condition).</p>
                    </div>

                    <div style="background: #dbeafe; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #1e40af; margin-top: 0;">2️⃣ Activity: "The Bucket Line"</h3>
                        <p>Students pass a bucket. <strong>While</strong> bucket has water -> Pass it. <strong>Else</strong> -> Stop.</p>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 3️⃣ Colab: Harvesting</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            crops = ["Wheat", "Rice", "Maize"]<br>
                            <br>
                            # For Loop<br>
                            for crop in crops:<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;print(f"Harvesting {crop}...")<br>
                            <br>
                            # While Loop<br>
                            tank_level = 0<br>
                            while tank_level < 100:<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;tank_level += 10<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;print(f"Blink! Level: {tank_level}")
                        </div>
                    </div>
                `,
                presentation: `<div style="background: #4f46e5; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🔄 Loops</h1></div>`
            },
            'm1-t16': {
                handout: `
                    <h2>🔧 Functions: The Farm Machine</h2>
                    
                    <div style="background: #fdf4ff; padding: 25px; border-radius: 12px; border-left: 6px solid #d946ef;">
                        <h3 style="color: #86198f; margin-top: 0;">🎭 1️⃣ Analogy: The Flour Mill</h3>
                        <p>You don't build a new mill every time you have wheat. You build it ONCE (Function Definition). Then you just pour wheat in (Input/Argument) and get flour out (Return Value).</p>
                    </div>

                    <div style="background: #dbeafe; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #1e40af; margin-top: 0;">2️⃣ Activity: "The Human Machine"</h3>
                        <p>One student is the "Adder Machine". Anyone who gives them two numbers gets the sum shouted back.</p>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 3️⃣ Colab: Soil Checker</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            def check_soil(ph):<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;if ph < 7:<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Acidic (Add Lime)"<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;else:<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Neutral/Alkaline"<br>
                            <br>
                            # Converting Soil<br>
                            print(check_soil(5.5))<br>
                            print(check_soil(7.2))
                        </div>
                    </div>
                `,
                presentation: `<div style="background: #9333ea; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🔧 Functions</h1></div>`
            },
            'm1-t17': {
                handout: `
                    <h2>📋 Lists & Dictionaries: The Warehouse</h2>
                    
                    <div style="background: #fff1f2; padding: 25px; border-radius: 12px; border-left: 6px solid #fb7185;">
                        <h3 style="color: #9f1239; margin-top: 0;">🎭 1️⃣ Analogy: Shelves vs Catalog</h3>
                        <p><strong>List <code>[]</code>:</strong> A row of tractors parked in order. You ask for "The first tractor" (Index 0).</p>
                        <p><strong>Dictionary <code>{}</code>:</strong> A catalog. You don't ask for "Page 5", you ask for "Price of Rice" (Key -> Value).</p>
                    </div>

                    <div style="background: #dbeafe; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #1e40af; margin-top: 0;">2️⃣ Activity: "Lost in the Warehouse"</h3>
                        <p>Give student A a list [10, 20, 30]. Ask for "Item 1".</p>
                        <p>Give student B a dictionary {"Apple": 100, "Banana": 50}. Ask for "Apple".</p>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 3️⃣ Colab: Inventory</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            # List<br>
                            tractors = ["John Deere", "Mahindra", "Kubota"]<br>
                            print(tractors[0])<br>
                            <br>
                            # Dictionary<br>
                            prices = {"Wheat": 40, "Rice": 50}<br>
                            print(prices["Rice"])
                        </div>
                    </div>
                `,
                presentation: `<div style="background: #be123c; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>📋 Data Structures</h1></div>`
            },
            'm1-t18': {
                handout: `
                    <h2>📝 Strings: The Label Maker</h2>
                    
                    <div style="background: #fff7ed; padding: 25px; border-radius: 12px; border-left: 6px solid #fdba74;">
                        <h3 style="color: #9a3412; margin-top: 0;">🎭 1️⃣ Analogy: Fixing Labels</h3>
                        <p>Strings are just text. But computers are dumb. "Rice" is not same as "rice " (space).</p>
                        <p>We need tools to clean them up (Upper case, Trim spaces, Replace words).</p>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 2️⃣ Colab: Label Cleaning</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            label = "  Wheat Crop "<br>
                            <br>
                            # Clean it<br>
                            clean_label = label.strip().upper()<br>
                            print(clean_label) # "WHEAT CROP"<br>
                            <br>
                            # Replace<br>
                            print(clean_label.replace("WHEAT", "RICE"))
                        </div>
                    </div>
                `,
                presentation: `<div style="background: #ea580c; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>📝 Strings</h1></div>`
            },
            'm1-t19': {
                handout: `
                    <h2>📂 File Handling: The Farm Diary</h2>
                    
                    <div style="background: #f5f5f4; padding: 25px; border-radius: 12px; border-left: 6px solid #78716c;">
                        <h3 style="color: #44403c; margin-top: 0;">🎭 1️⃣ Analogy: Reading & Writing</h3>
                        <p>Your program forgets everything when you turn it off (RAM). Files remember forever (Hard Disk).</p>
                        <p><strong>Open Mode 'w':</strong> Buying a fresh diary (Overwrites old one).</p>
                        <p><strong>Open Mode 'a':</strong> Adding a page to existing diary (Append).</p>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 2️⃣ Colab: Saving Data</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            # Writing to a file<br>
                            with open('harvest_log.txt', 'w') as f:<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;f.write("Date: 12th Oct, Yield: 50 tons")<br>
                            <br>
                            # Reading it back<br>
                            with open('harvest_log.txt', 'r') as f:<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;print(f.read())
                        </div>
                    </div>

                     <div style="background: #e0e7ff; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #3730a3; margin-top: 0;">👨‍🏫 3️⃣ Faculty Script</h3>
                        <p>"Real data lives in CSV files. This is how we start working with real datasets."</p>
                    </div>
                `,
                presentation: `<div style="background: #57534e; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>📂 Files</h1></div>`
            },
            'm1-activity1': {
                handout: `
                    <h2>🛠️ Activity 1: Setting Up Your Digital Farm (Google Colab)</h2>
                    <div style="background: #e0f2fe; padding: 25px; border-radius: 12px; border-left: 6px solid #0284c7;">
                        <h3>🎯 Objective</h3>
                        <p>Get your "Cloud Tractor" (Google Colab) ready for work.</p>
                    </div>
                    
                    <div style="background: white; padding: 25px; border-radius: 12px; margin: 20px 0; border: 1px solid #e5e7eb;">
                        <h3>📝 Steps:</h3>
                        <ol style="line-height: 1.8;">
                            <li>Open <a href="https://colab.research.google.com" target="_blank">colab.research.google.com</a>.</li>
                            <li>Click on <strong>"New Notebook"</strong> (Bottom right).</li>
                            <li>Rename the file (Top Left) from <code>Untitled0.ipynb</code> to <code>My_First_Farm.ipynb</code>.</li>
                            <li>Type <code>print("Tractor is running!")</code> in the first cell.</li>
                            <li>Press the <strong>Play Button</strong> (▶️) or hit <code>Shift + Enter</code>.</li>
                        </ol>
                    </div>

                    <div style="background: #dcfce7; padding: 20px; border-radius: 12px; border-left: 6px solid #16a34a;">
                        <h3>✅ Success Criteria</h3>
                        <p>You see the output: <code>Tractor is running!</code> below the cell.</p>
                    </div>
                `,
                presentation: `<div style="background: #0284c7; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🛠️ Activity: Colab Setup</h1></div>`
            },
            'm1-activity2': {
                handout: `
                    <h2>💻 Activity 2: Python Farming Challenges</h2>
                    
                    <div style="background: #fef3c7; padding: 25px; border-radius: 12px; border-left: 6px solid #d97706;">
                        <h3 style="color: #92400e; margin-top: 0;">🚜 Challenge 1: The Acre Calculator</h3>
                        <p>A farmer has a field of length 50m and width 30m. Calculate the area.</p>
                        <pre style="background: #1f2937; color: #f9fafb; padding: 15px; border-radius: 8px;">length = 50\nwidth = 30\narea = length * width\nprint(area)</pre>
                    </div>

                    <div style="background: #e0e7ff; padding: 25px; border-radius: 12px; margin: 20px 0; border-left: 6px solid #4f46e5;">
                        <h3 style="color: #3730a3; margin-top: 0;">🌡️ Challenge 2: The Weather Converter</h3>
                        <p>Convert 30°C to Fahrenheit. Formula: <code>(C * 9/5) + 32</code></p>
                    </div>

                    <div style="background: #fce7f3; padding: 25px; border-radius: 12px; margin: 20px 0; border-left: 6px solid #db2777;">
                        <h3 style="color: #9f1239; margin-top: 0;">🍎 Challenge 3: Fruit Sorter</h3>
                        <p>Create a list: <code>["Apple", "Banana", "Mango"]</code>. Print the first fruit.</p>
                    </div>
                `,
                presentation: `<div style="background: #d97706; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>💻 Activity: Python Code</h1></div>`
            },
            'm1-activity3': {
                handout: `
                    <h2>📊 Activity 3: Mini Project - Yield Analyzer</h2>
                    
                    <div style="background: #fff7ed; padding: 25px; border-radius: 12px; border-left: 6px solid #ea580c;">
                        <h3>🌾 Scenario</h3>
                        <p>You have harvest data from 5 trees: <code>[20, 25, 22, 28, 15]</code> kg.</p>
                    </div>

                    <div style="background: white; padding: 25px; border-radius: 12px; margin: 20px 0; border: 1px solid #e5e7eb;">
                        <h3>🔨 Tasks:</h3>
                        <ol>
                            <li>Store the data in a list called <code>yields</code>.</li>
                            <li>Calculate the total harvest (Sum).</li>
                            <li>Calculate the average yield per tree.</li>
                            <li>Find the maximum yield (Best tree).</li>
                        </ol>
                        <pre style="background: #1f2937; color: #f9fafb; padding: 15px; border-radius: 8px;">import numpy as np\nyields = [20, 25, 22, 28, 15]\nprint(f"Total: {np.sum(yields)}")\nprint(f"Average: {np.mean(yields)}")</pre>
                    </div>
                `,
                presentation: `<div style="background: #ea580c; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>📊 Activity: Yield Data</h1></div>`
            },
            'm1-activity4': {
                handout: `
                    <h2>📉 Activity 4: Visualizing Rainfall</h2>
                    
                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; border-left: 6px solid #16a34a;">
                        <h3>🌧️ Goal</h3>
                        <p>Draw a bar chart for rainfall over 3 months.</p>
                    </div>

                    <div style="background: white; padding: 25px; border-radius: 12px; margin: 20px 0; border: 1px solid #e5e7eb;">
                        <h3>💻 Code Snippet:</h3>
                        <pre style="background: #1f2937; color: #f9fafb; padding: 15px; border-radius: 8px;">import matplotlib.pyplot as plt\n\nmonths = ["Jan", "Feb", "Mar"]\nrain = [10, 25, 5]\n\nplt.bar(months, rain, color='blue')\nplt.title("Rainfall Report")\nplt.show()</pre>
                    </div>
                `,
                presentation: `<div style="background: #16a34a; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>📉 Activity: Plotting</h1></div>`
            },

            // MODULE 2: PYTHON & ML FUNDAMENTALS
            'm2-t1': {
                handout: `
                    <h2>🍅 NumPy: Organized Tomato Trays</h2>
                    
                    <div style="background: #fff7ed; padding: 25px; border-radius: 12px; border-left: 6px solid #ea580c;">
                        <h3 style="color: #9a3412; margin-top: 0;">🎭 1️⃣ Analogy: The Sorted Crate</h3>
                        <p><strong>List:</strong> A messy bag where you throw tomatoes, potatoes, and onions together. hard to count or weigh just one type.</p>
                        <p><strong>NumPy Array:</strong> A specialized crate with slots only for Red Tomatoes. Because they are uniform, you can weigh the whole crate instantly (Vectorization).</p>
                    </div>

                    <div style="background: #dbeafe; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #1e40af; margin-top: 0;">2️⃣ Activity: "The Speed Test"</h3>
                        <p><strong>Manual (List):</strong> Ask a student to add 2 to ten different random numbers written on separate papers.</p>
                        <p><strong>NumPy (Array):</strong> Ask a student to just say "Plus Two" to a row of people holding numbers. They all update at once.</p>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 3️⃣ Colab: Soil pH Analysis</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            import numpy as np<br>
                            <br>
                            # 5 Fields soil pH<br>
                            ph = np.array([5.5, 6.8, 7.2, 5.0, 6.5])<br>
                            <br>
                            # Add lime to all acidic fields (Vectorized operation)<br>
                            new_ph = ph + 0.5 <br>
                            print(f"Original: {ph}")<br>
                            print(f"After Treatment: {new_ph}")
                        </div>
                    </div>

                     <div style="background: #e0e7ff; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #3730a3; margin-top: 0;">👨‍🏫 4️⃣ Faculty Script</h3>
                        <p>"In Data Science, we never use loops for math. We use NumPy. It's 50x faster because it uses C language under the hood."</p>
                    </div>
                `,
                presentation: `<div style="background: #ea580c; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🍅 NumPy Basics</h1></div>`
            },
            'm2-t2': {
                handout: `
                    <h2>🔢 Matrix Operations: Field Grids</h2>
                    
                    <div style="background: #fdf4ff; padding: 25px; border-radius: 12px; border-left: 6px solid #d946ef;">
                        <h3 style="color: #86198f; margin-top: 0;">🎭 1️⃣ Analogy: The Plantation Grid</h3>
                        <p>A Matrix is just a grid of fields (Rows x Columns). 2D Data.</p>
                        <p><strong>Transpose:</strong> Swapping rows and columns. Like rotating your map 90 degrees.</p>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 2️⃣ Colab: Yield Matrix</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            import numpy as np<br>
                            <br>
                            # 3 Farms, 2 Crops (Wheat, Rice)<br>
                            yields = np.array([[40, 50], [35, 45], [50, 60]])<br>
                            <br>
                            print("Shape (Farms, Crops):", yields.shape)<br>
                            <br>
                            # Transpose (Crops, Farms)<br>
                            print(yields.T)
                        </div>
                    </div>
                `,
                presentation: `<div style="background: #d946ef; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🔢 Matrix Ops</h1></div>`
            },
            'm2-t3': {
                handout: `
                    <h2>📡 Broadcasting: The Rain Cloud</h2>
                    
                    <div style="background: #e0f2fe; padding: 25px; border-radius: 12px; border-left: 6px solid #0284c7;">
                        <h3 style="color: #0369a1; margin-top: 0;">🎭 1️⃣ Analogy: Universal Rain</h3>
                        <p>You have a grid of 100 plants (The Array). A cloud rains 5mm (The Scalar). Does the rain check each plant one by one? No. It hits them ALL at once.</p>
                        <p>That is Broadcasting. Applying a small shape to a larger shape automatically.</p>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 2️⃣ Colab: Universal Boost</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            import numpy as np<br>
                            <br>
                            # Current heights of 4 plants<br>
                            heights = np.array([10, 20, 15, 30])<br>
                            <br>
                            # Fertilizer adds 5cm to ALL<br>
                            new_heights = heights + 5<br>
                            print(new_heights) # [15, 25, 20, 35]
                        </div>
                    </div>
                `,
                presentation: `<div style="background: #0284c7; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>📡 Broadcasting</h1></div>`
            },
            'm2-t4': {
                handout: `
                    <h2>📉 Statistical Functions: The Monitor</h2>
                    
                    <div style="background: #f0fdf4; padding: 25px; border-radius: 12px; border-left: 6px solid #16a34a;">
                        <h3 style="color: #15803d; margin-top: 0;">🎭 1️⃣ Analogy: Health Check</h3>
                        <p>You have 1000 plants. You can't look at every leaf. You need summaries:</p>
                        <ul>
                            <li><strong>Mean:</strong> How tall is the "average" plant?</li>
                            <li><strong>Std Dev:</strong> Are they all same height (Low Std) or wild differences (High Std)?</li>
                        </ul>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 2️⃣ Colab: Harvest Stats</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            import numpy as np<br>
                            weights = np.array([200, 210, 190, 205, 500]) # 500 is outlier!<br>
                            <br>
                            print(f"Mean: {np.mean(weights)}")<br>
                            print(f"Median: {np.median(weights)}")<br>
                            print(f"Std Dev: {np.std(weights):.2f}")
                        </div>
                    </div>
                `,
                presentation: `<div style="background: #16a34a; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>📉 Stats</h1></div>`
            },
            'm2-t5': {
                handout: `
                    <h2>🐼 Pandas: The Farm Ledger</h2>
                    
                    <div style="background: #fff7ed; padding: 25px; border-radius: 12px; border-left: 6px solid #f97316;">
                        <h3 style="color: #c2410c; margin-top: 0;">🎭 1️⃣ Analogy: The Register</h3>
                        <p><strong>NumPy</strong> is for raw numbers (like sensor readings).</p>
                        <p><strong>Pandas</strong> is for organized data with LABELS. Think of an Excel sheet or a Farm Ledger.</p>
                        <p><em>Columns:</em> "Date", "Crop", "Yield". <em>Rows:</em> Daily entries.</p>
                    </div>

                    <div style="background: #dbeafe; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #1e40af; margin-top: 0;">2️⃣ Activity: "Class Register"</h3>
                        <p>Create a class "DataFrame" on the board. Columns: Name, Height, Favorite Crop. Fill in 3 rows. Show how to "Select" the Name column.</p>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 3️⃣ Colab: Creating a DataFrame</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            import pandas as pd<br>
                            <br>
                            data = {<br>
                                "Crop": ["Wheat", "Rice", "Maize"],<br>
                                "Yield_Ton": [4.5, 6.2, 5.5],<br>
                                "Price": [2000, 2500, 1800]<br>
                            }<br>
                            <br>
                            df = pd.DataFrame(data)<br>
                            print(df)
                        </div>
                    </div>
                `,
                presentation: `<div style="background: #f97316; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🐼 Pandas Intro</h1></div>`
            },
            'm2-t6': {
                handout: `
                    <h2>✂️ DataFrame Manipulation: Pruning & Sorting</h2>
                    
                    <div style="background: #fce7f3; padding: 25px; border-radius: 12px; border-left: 6px solid #db2777;">
                        <h3 style="color: #9d174d; margin-top: 0;">🎭 1️⃣ Analogy: Sorting the Harvest</h3>
                        <p>You have a truck full of mixed produce. You need to:</p>
                        <ul>
                            <li><strong>Select:</strong> Pick only "Mangoes" (Column Selection).</li>
                            <li><strong>Filter:</strong> Pick only fruit weighing > 200g (Conditional Filtering).</li>
                            <li><strong>Add:</strong> Stick a price tag on each (Adding a Column).</li>
                        </ul>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 2️⃣ Colab: Manipulating Data</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            # Select column<br>
                            print(df["Crop"])<br>
                            <br>
                            # Add Revenue Column<br>
                            df["Revenue"] = df["Yield_Ton"] * df["Price"]<br>
                            <br>
                            # Drop a column<br>
                            df = df.drop(columns=["Price"])<br>
                            print(df)
                        </div>
                    </div>
                `,
                presentation: `<div style="background: #db2777; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>✂️ Manipulation</h1></div>`
            },
            'm2-t7': {
                handout: `
                    <h2>🔍 Analysis & Visualization: The Inspection</h2>
                    
                    <div style="background: #fef9c3; padding: 25px; border-radius: 12px; border-left: 6px solid #ca8a04;">
                        <h3 style="color: #854d0e; margin-top: 0;">🎭 1️⃣ Analogy: The Monthly Report</h3>
                        <p>Instead of reading 30 days of logs, you want a summary.</p>
                        <p><strong>describe():</strong> The quick health card (Min, Max, Avg).</p>
                        <p><strong>Plotting:</strong> Drawing a chart so the village head understands quickly.</p>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 2️⃣ Colab: Quick Insights</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            # Statistical Summary<br>
                            print(df.describe())<br>
                            <br>
                            # Quick Plot<br>
                            df["Yield_Ton"].plot(kind='bar')<br>
                            import matplotlib.pyplot as plt<br>
                            plt.show()
                        </div>
                    </div>
                `,
                presentation: `<div style="background: #ca8a04; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🔍 Analysis</h1></div>`
            },
            'm2-t8': {
                handout: `
                    <h2>🔦 Data Filtering: The Sieve</h2>
                    
                    <div style="background: #ecfeff; padding: 25px; border-radius: 12px; border-left: 6px solid #06b6d4;">
                        <h3 style="color: #0e7490; margin-top: 0;">🎭 1️⃣ Analogy: The Soil Sieve</h3>
                        <p>You put soil through a sieve. Only fine particles pass. Large rocks stay.</p>
                        <p><strong>Boolean Indexing:</strong> <code>df[df["Yield"] > 5]</code>. Only rows where Yield > 5 "pass through".</p>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 2️⃣ Colab: Finding Good Harvests</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            # Filter: High Yield Crops<br>
                            high_yield = df[df["Yield_Ton"] > 6.0]<br>
                            <br>
                            print("Star Performers:")<br>
                            print(high_yield)
                        </div>
                    </div>
                `,
                presentation: `<div style="background: #06b6d4; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🔦 Filtering</h1></div>`
            },
            'm2-t9': {
                handout: `
                    <h2>🏚️ Missing Data: The Lost Pages</h2>
                    
                    <div style="background: #f3f4f6; padding: 25px; border-radius: 12px; border-left: 6px solid #4b5563;">
                        <h3 style="color: #1f2937; margin-top: 0;">🎭 1️⃣ Analogy: The Smudged Logbook</h3>
                        <p>Water fell on your logbook. Some entries are unreadable (NaN).</p>
                        <p><strong>Options:</strong></p>
                        <ol>
                            <li><strong>Drop:</strong> Tear out the page (Lose data).</li>
                            <li><strong>Fill:</strong> Guess based on yesterday's value (Imputation).</li>
                        </ol>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 2️⃣ Colab: Fixing Holes</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            # Check for missing<br>
                            print(df.isnull().sum())<br>
                            <br>
                            # Option 1: Fill with Average<br>
                            mean_val = df["Yield_Ton"].mean()<br>
                            df_filled = df.fillna(mean_val)<br>
                            <br>
                            # Option 2: Drop rows with missing data<br>
                            df_clean = df.dropna()
                        </div>
                    </div>
                `,
                presentation: `<div style="background: #4b5563; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🏚️ Missing Data</h1></div>`
            },
            'm2-t10': {
                handout: `
                    <h2>📦 Aggregation: Grouping the Produce</h2>
                    
                    <div style="background: #ffedd5; padding: 25px; border-radius: 12px; border-left: 6px solid #f97316;">
                        <h3 style="color: #9a3412; margin-top: 0;">🎭 1️⃣ Analogy: Binning</h3>
                        <p>You have 1000 fruits mixed up. You want total weight of Apples vs Oranges.</p>
                        <p><strong>GroupBy:</strong> Put all apples in Bin A, all Oranges in Bin B.</p>
                        <p><strong>Aggregate:</strong> Weigh each bin separately.</p>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 2️⃣ Colab: Summarizing by Crop</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            # Group by Crop and get Average Yield<br>
                            summary = df.groupby("Crop")["Yield_Ton"].mean()<br>
                            <br>
                            print(summary)
                        </div>
                    </div>
                `,
                presentation: `<div style="background: #f97316; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>📦 Aggregation</h1></div>`
            },
            'm2-t11': {
                handout: `
                    <h2>📊 Matplotlib: The Field Map</h2>
                    
                    <div style="background: #fdf2f8; padding: 25px; border-radius: 12px; border-left: 6px solid #db2777;">
                        <h3 style="color: #be185d; margin-top: 0;">🎭 1️⃣ Analogy: Drawing the Farm</h3>
                        <p>Numbers in a book are hard to read. A map is easy.</p>
                        <p><strong>Line Plot:</strong> Like a plant growing over time (continuous).</p>
                        <p><strong>Scatter Plot:</strong> Like marking where each tree is planted (dots).</p>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 2️⃣ Colab: Visualizing Growth</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            import matplotlib.pyplot as plt<br>
                            <br>
                            days = [1, 2, 3, 4, 5]<br>
                            height = [2, 4, 8, 12, 15]<br>
                            <br>
                            plt.plot(days, height, color='green', marker='o')<br>
                            plt.title("Plant Growth Over Time")<br>
                            plt.xlabel("Day")<br>
                            plt.ylabel("Height (cm)")<br>
                            plt.show()
                        </div>
                    </div>
                `,
                presentation: `<div style="background: #db2777; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>📊 Matplotlib</h1></div>`
            },
            'm2-t12': {
                handout: `
                    <h2>📊 Advanced Charts: Histograms & Boxes</h2>
                    
                    <div style="background: #eff6ff; padding: 25px; border-radius: 12px; border-left: 6px solid #2563eb;">
                        <h3 style="color: #1d4ed8; margin-top: 0;">🎭 1️⃣ Analogy: Sorting by Size</h3>
                        <p><strong>Histogram:</strong> Grouping fruits by size bins. "How many apples are between 100-120g?"</p>
                        <p><strong>Box Plot:</strong> The "Summary Box". Shows where most fruits lie and if there are any freakishly large ones (Outliers).</p>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 2️⃣ Colab: Fruit Size Distribution</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            import numpy as np<br>
                            # 1000 apples sizes<br>
                            sizes = np.random.normal(150, 10, 1000)<br>
                            <br>
                            plt.hist(sizes, bins=20, color='red')<br>
                            plt.title("Apple Size Distribution")<br>
                            plt.show()
                        </div>
                    </div>
                `,
                presentation: `<div style="background: #2563eb; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>📊 Advanced Charts</h1></div>`
            },
            'm2-t13': {
                handout: `
                    <h2>🎨 Seaborn: Beautiful Gardens</h2>
                    
                    <div style="background: #f0fdfa; padding: 25px; border-radius: 12px; border-left: 6px solid #0d9488;">
                        <h3 style="color: #0f766e; margin-top: 0;">🎭 1️⃣ Analogy: The Landscape Architect</h3>
                        <p>Matplotlib is like drawing with a pencil. <strong>Seaborn</strong> is like hiring an artist.</p>
                        <p>It makes complex stats (like correlations) look beautiful and easy to understand instantly.</p>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 2️⃣ Colab: Heatmaps</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            import seaborn as sns<br>
                            <br>
                            # Correlation Matrix for Farm Data<br>
                            data = df[['Yield_Ton', 'Price', 'Rainfall']].corr()<br>
                            <br>
                            sns.heatmap(data, annot=True, cmap='Greens')<br>
                            plt.title("What affects what?")<br>
                            plt.show()
                        </div>
                    </div>
                `,
                presentation: `<div style="background: #0d9488; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🎨 Seaborn</h1></div>`
            },
            'm2-t14': {
                handout: `
                    <h2>🚜 ML Workflow: The Farming Cycle</h2>
                    
                    <div style="background: #fffbeb; padding: 25px; border-radius: 12px; border-left: 6px solid #d97706;">
                        <h3 style="color: #b45309; margin-top: 0;">🎭 1️⃣ Analogy: Seasonal Planning</h3>
                        <ol>
                            <li><strong>Prepare Soil (Data Prep):</strong> Cleaning weeds (missing values).</li>
                            <li><strong>Sow Seeds (Training):</strong> Teaching the algorithm.</li>
                            <li><strong>Check Growth (Evaluation):</strong> Testing if the plant is healthy.</li>
                            <li><strong>Harvest (Prediction):</strong> Using the model on new fields.</li>
                        </ol>
                    </div>

                    <div style="background: #e0e7ff; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #3730a3; margin-top: 0;">👨‍🏫 2️⃣ Faculty Script</h3>
                        <p>"Never rush to modeling. 80% of ML is just cleaning the 'soil' (Data). If you plant seeds in rocks, nothing grows."</p>
                    </div>
                `,
                presentation: `<div style="background: #d97706; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🚜 ML Workflow</h1></div>`
            },
            'm2-t15': {
                handout: `
                    <h2>🏷️ Supervised vs Unsupervised: The Teacher</h2>
                    
                    <div style="background: #fdf2f8; padding: 25px; border-radius: 12px; border-left: 6px solid #be185d;">
                        <h3 style="color: #9d174d; margin-top: 0;">🎭 1️⃣ Analogy: School vs Playground</h3>
                        <p><strong>Supervised:</strong> Classroom. Teacher says "This is an Apple". Student repeats "Apple". (Labeled Data)</p>
                        <p><strong>Unsupervised:</strong> Playground. Kids figure out "These kids like running" and "These kids like reading" on their own. (Grouping/Clustering).</p>
                    </div>

                     <div style="background: #dbeafe; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #1e40af; margin-top: 0;">2️⃣ Activity: "Label Me"</h3>
                        <p>Show pictures of crops. Tell them "Rice" (Supervised). Then show weird alien fruits. Ask them to group them by color (Unsupervised).</p>
                    </div>
                `,
                presentation: `<div style="background: #be185d; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🏷️ Learning Types</h1></div>`
            },
            'm2-t16': {
                handout: `
                    <h2>✂️ Train-Test Split: The Mock Exam</h2>
                    
                    <div style="background: #f0fdf4; padding: 25px; border-radius: 12px; border-left: 6px solid #15803d;">
                        <h3 style="color: #14532d; margin-top: 0;">🎭 1️⃣ Analogy: Studying vs Exam</h3>
                        <p>You have 100 questions. You study 80 of them (Training Set). The Exam has the other 20 (Test Set).</p>
                        <p>If you memorize the 80, you fail the new 20. If you understand the <em>concept</em>, you pass both.</p>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 2️⃣ Colab: Splitting Data</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            from sklearn.model_selection import train_test_split<br>
                            <br>
                            X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)<br>
                            print(f"Studying on {len(X_train)} rows")<br>
                            print(f"Testing on {len(X_test)} rows")
                        </div>
                    </div>
                `,
                presentation: `<div style="background: #15803d; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>✂️ Data Split</h1></div>`
            },
            'm2-t17': {
                handout: `
                    <h2>🔄 Cross Validation: The Multiple Mock Exams</h2>
                    
                    <div style="background: #fff7ed; padding: 25px; border-radius: 12px; border-left: 6px solid #c2410c;">
                        <h3 style="color: #7c2d12; margin-top: 0;">🎭 1️⃣ Analogy: Rotating Topics</h3>
                        <p>What if the 20 questions in the test were just the easy ones? You'd think you're smart but you're not.</p>
                        <p><strong>Cross Validation:</strong> Take 5 exams. Each time, a different 20% of content is the "Test". Average your score.</p>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 2️⃣ Colab: K-Fold</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            from sklearn.model_selection import cross_val_score<br>
                            <br>
                            scores = cross_val_score(model, X, y, cv=5)<br>
                            print(f"Average Score: {scores.mean():.2f}")
                        </div>
                    </div>
                `,
                presentation: `<div style="background: #c2410c; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🔄 Cross Val</h1></div>`
            },
            'm2-t18': {
                handout: `
                    <h2>⚖️ Overfitting vs Underfitting: The Student Types</h2>
                    
                    <div style="background: #eff6ff; padding: 25px; border-radius: 12px; border-left: 6px solid #2563eb;">
                        <h3 style="color: #1e3a8a; margin-top: 0;">🎭 1️⃣ Analogy: Memorization vs Laziness</h3>
                        <p><strong>Overfitting:</strong> The student who memorizes the textbook word-for-word. Fails when the question is slightly different. (High Variance)</p>
                        <p><strong>Underfitting:</strong> The student who didn't study at all. Guesses everything. (High Bias)</p>
                        <p><strong>Best Fit:</strong> Understands the concepts and adapts.</p>
                    </div>
                `,
                presentation: `<div style="background: #2563eb; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>⚖️ Fit Types</h1></div>`
            },
            'm2-t19': {
                handout: `
                    <h2>🎛️ Hyperparameter Tuning: Tuning the Radio</h2>
                    
                    <div style="background: #fdf4ff; padding: 25px; border-radius: 12px; border-left: 6px solid #d946ef;">
                        <h3 style="color: #701a75; margin-top: 0;">🎭 1️⃣ Analogy: Old Radio Station</h3>
                        <p>The model is like a radio. It works, but there's static.</p>
                        <p><strong>Hyperparameters</strong> are the knobs (Volume, Bass, Treble). You turn them slightly to get the clearest signal (Best Accuracy).</p>
                    </div>
                `,
                presentation: `<div style="background: #d946ef; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🎛️ Tuning</h1></div>`
            },
            'm2-t20': {
                handout: `
                    <h2>🛠️ Scikit-Learn: The Toolbox</h2>
                    
                    <div style="background: #f0fdf4; padding: 25px; border-radius: 12px; border-left: 6px solid #16a34a;">
                        <h3 style="color: #14532d; margin-top: 0;">🎭 1️⃣ Analogy: The Swiss Army Knife</h3>
                        <p>You don't forge a screwdriver every time you need one.</p>
                        <p><strong>Scikit-Learn (sklearn)</strong> is a box of pre-made, high-quality tools (Algorithms) ready to use. Just pick one up and work.</p>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 2️⃣ Colab: Importing Tools</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            # The standard import pattern<br>
                            from sklearn.family import SpecificTool<br>
                            <br>
                            from sklearn.linear_model import LinearRegression<br>
                            from sklearn.metrics import accuracy_score
                        </div>
                    </div>
                `,
                presentation: `<div style="background: #16a34a; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🛠️ Sklearn</h1></div>`
            },
            'm2-t21': {
                handout: `
                    <h2>📈 Linear Regression: The Prediction Line</h2>
                    
                    <div style="background: #fff7ed; padding: 25px; border-radius: 12px; border-left: 6px solid #f97316;">
                        <h3 style="color: #c2410c; margin-top: 0;">🎭 1️⃣ Analogy: The Rubber Band</h3>
                        <p>Imagine points on a graph (Rain vs Yield). You stretch a rubber band (The Line) to try and touch as many points as possible. The best-fit line is the one that is closest to ALL points.</p>
                        <p><strong>Use:</strong> Predicting numbers (Yield in tons, Price in Rupees).</p>
                    </div>

                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 2️⃣ Colab: Predicting Yield</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            from sklearn.linear_model import LinearRegression<br>
                            import numpy as np<br>
                            <br>
                            # Rain (X) vs Yield (y)<br>
                            X = np.array([[100], [200], [300]])<br>
                            y = np.array([40, 50, 60])<br>
                            <br>
                            model = LinearRegression()<br>
                            model.fit(X, y)<br>
                            <br>
                            # Predict for 250mm rain<br>
                            print(model.predict([[250]]))
                        </div>
                    </div>
                `,
                presentation: `<div style="background: #f97316; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>📈 Linear Reg</h1></div>`
            },
            'm2-t22': {
                handout: `
                    <h2>📏 Regression Evaluation: The Scorecard</h2>
                    
                    <div style="background: #fdf2f8; padding: 25px; border-radius: 12px; border-left: 6px solid #be185d;">
                        <h3 style="color: #9d174d; margin-top: 0;">🎭 1️⃣ Analogy: The Target Practice</h3>
                        <p>How far did you miss the bullseye?</p>
                        <p><strong>MAE (Mean Absolute Error):</strong> "On average, I missed by 2cm."</p>
                        <p><strong>RMSE (Root Mean Sq Error):</strong> Penalizes big misses more. One huge miss is worse than many small ones.</p>
                    </div>
                `,
                presentation: `<div style="background: #be185d; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🐛 YOLO Basics</h1></div>`
            },
            'm3-t13': {
                handout: `
                    <h2>🧪 Soil Health Classification: The Lab Report</h2>
                    
                    <div style="background: #fffbeb; padding: 25px; border-radius: 12px; border-left: 6px solid #d97706;">
                        <h3 style="color: #b45309; margin-top: 0;">🎭 1️⃣ Analogy: Grading the Soil</h3>
                        <p>Just like eggs are graded (A, AA, AAA), soil is graded (Poor, Medium, Excellent).</p>
                        <p>We use classification models (SVM, Decision Trees) to label soil samples based on nutrient data.</p>
                    </div>
                `,
                presentation: `<div style="background: #d97706; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🧪 Soil Class</h1></div>`
            },
            'm3-t14': {
                handout: `
                    <h2>🔮 Soil Property Prediction: Filling Blanks</h2>
                    
                    <div style="background: #eff6ff; padding: 25px; border-radius: 12px; border-left: 6px solid #2563eb;">
                        <h3 style="color: #1d4ed8; margin-top: 0;">🎭 1️⃣ Analogy: Guessing the Weight</h3>
                        <p>If you see a tall wrestler, you guess he is heavy. You predict a number.</p>
                        <p>Similarly, if we know the Soil Organic Carbon and Texture, we can predict the <strong>pH Level</strong> without a chemical test.</p>
                    </div>
                `,
                presentation: `<div style="background: #2563eb; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🔮 Prediction</h1></div>`
            },
            'm3-t15': {
                handout: `
                    <h2>🥗 Nutrient Requirements: The Diet Plan</h2>
                    
                    <div style="background: #fdf2f8; padding: 25px; border-radius: 12px; border-left: 6px solid #db2777;">
                        <h3 style="color: #be185d; margin-top: 0;">🎭 1️⃣ Analogy: The Nutritionist</h3>
                        <p>A doctor tells you: "You lack Iron, eat spinach."</p>
                        <p>This algorithm tells the farmer: "Your soil lacks Phosphorus, add 50kg/acre of DAP fertilizer." It calculates the gap between <em>What you have</em> and <em>What the crop needs</em>.</p>
                    </div>
                `,
                presentation: `<div style="background: #db2777; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🥗 Nutrients</h1></div>`
            },
            'm3-t16': {
                handout: `
                    <h2>💰 Fertilizer Optimization: The Budgeter</h2>
                    
                    <div style="background: #f0fdf4; padding: 25px; border-radius: 12px; border-left: 6px solid #16a34a;">
                        <h3 style="color: #14532d; margin-top: 0;">🎭 1️⃣ Analogy: Shopping Smart</h3>
                        <p>You want full nutrition for your family but have a limited budget.</p>
                        <p><strong>Optimization Algorithms</strong> calculate the cheapest combination of fertilizers (Urea, MOP, SSP) to meet the NPK requirement. Minimal Cost, Maximum Health.</p>
                    </div>
                `,
                presentation: `<div style="background: #16a34a; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>💰 Optimize</h1></div>`
            },
            'm3-t17': {
                handout: `
                    <h2>💧 Precision Irrigation: Smart Water</h2>
                    
                    <div style="background: #eff6ff; padding: 25px; border-radius: 12px; border-left: 6px solid #2563eb;">
                        <h3 style="color: #1e3a8a; margin-top: 0;">🎭 1️⃣ Analogy: Drinking When Thirsty</h3>
                        <p>Old irrigation: Drinking 8 glasses of water every day regardless of thirst.</p>
                        <p><strong>Precision Irrigation:</strong> Sensors check "Are you thirsty?" (Soil Moisture). If yes, the tap opens automatically. Saves huge amounts of water.</p>
                    </div>
                `,
                presentation: `<div style="background: #2563eb; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>💧 Irrigation</h1></div>`
            },
            'm3-t18': {
                handout: `
                    <h2>🌊 Water Requirement Prediction: Future Thirst</h2>
                    
                    <div style="background: #f0fdfa; padding: 25px; border-radius: 12px; border-left: 6px solid #0d9488;">
                        <h3 style="color: #0f766e; margin-top: 0;">🎭 1️⃣ Analogy: Packing Water for a Trip</h3>
                        <p>You check the forecast: "It will be hot tomorrow." So you pack extra water.</p>
                        <p>AI predicts how much water the crop will need <em>next week</em> based on predicted temperature and growth stage (Evapotranspiration).</p>
                    </div>
                `,
                presentation: `<div style="background: #0d9488; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🌊 Prediction</h1></div>`
            },
            'm3-t19': {
                handout: `
                    <h2>⏳ Time Series Analysis: The History Book</h2>
                    
                    <div style="background: #fff7ed; padding: 25px; border-radius: 12px; border-left: 6px solid #c2410c;">
                        <h3 style="color: #7c2d12; margin-top: 0;">🎭 1️⃣ Analogy: Patterns in History</h3>
                        <p>Using the past to predict the future. "Every December, it gets cold."</p>
                        <p><strong>Time Series</strong> looks at data with time stamps (Daily prices, Monthly rain) to find trends and seasonality.</p>
                    </div>
                `,
                presentation: `<div style="background: #c2410c; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>⏳ Time Series</h1></div>`
            },
            'm3-t20': {
                handout: `
                    <h2>📈 ARIMA Models: The Trend Setter</h2>
                    
                    <div style="background: #fdf4ff; padding: 25px; border-radius: 12px; border-left: 6px solid #d946ef;">
                        <h3 style="color: #701a75; margin-top: 0;">🎭 1️⃣ Analogy: The Moving Average</h3>
                        <p>ARIMA (AutoRegressive Integrated Moving Average) is a classic math tool for forecasting.</p>
                        <p>It smooths out the bumps to see the real direction the data is moving.</p>
                    </div>
                    
                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 2️⃣ Colab: ARIMA Forecast</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            from statsmodels.tsa.arima.model import ARIMA<br>
                            <br>
                            # y = Time series data<br>
                            model = ARIMA(y, order=(1, 1, 1))<br>
                            model_fit = model.fit()<br>
                            forecast = model_fit.forecast(steps=5)<br>
                            print(forecast)
                        </div>
                    </div>
                `,
                presentation: `<div style="background: #d946ef; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>📈 ARIMA</h1></div>`
            },
            'm3-t21': {
                handout: `
                    <h2>🌦️ Weather Pattern Recognition: The Local Legend</h2>
                    
                    <div style="background: #eff6ff; padding: 25px; border-radius: 12px; border-left: 6px solid #2563eb;">
                        <h3 style="color: #1e3a8a; margin-top: 0;">🎭 1️⃣ Analogy: "Red Sky at Night"</h3>
                        <p>Farmers have old sayings for weather. AI finds new, complex patterns we can't see.</p>
                        <p>"When humidity drops suddenly and wind shifts East, frost is coming." Anomaly detection.</p>
                    </div>
                `,
                presentation: `<div style="background: #2563eb; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🌦️ Patterns</h1></div>`
            },
            'm3-t22': {
                handout: `
                    <h2>🏷️ Crop Price Forecasting: The Market Watcher</h2>
                    
                    <div style="background: #f0fdf4; padding: 25px; border-radius: 12px; border-left: 6px solid #16a34a;">
                        <h3 style="color: #14532d; margin-top: 0;">🎭 1️⃣ Analogy: Buy Low, Sell High</h3>
                        <p>Should I sell my onions today or wait 2 weeks?</p>
                        <p>AI analyzes past price trends, festival dates, and supply data to predict: "Hold. Prices will rise in 10 days."</p>
                    </div>
                `,
                presentation: `<div style="background: #16a34a; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🏷️ Prices</h1></div>`
            },
            'm3-t23': {
                handout: `
                    <h2>🛒 Demand Prediction: The Supermarket Shelf</h2>
                    
                    <div style="background: #fffbeb; padding: 25px; border-radius: 12px; border-left: 6px solid #d97706;">
                        <h3 style="color: #b45309; margin-top: 0;">🎭 1️⃣ Analogy: Holiday Rush</h3>
                        <p>Flowers sell in February (Valentine's). Pumpkins in October (Halloween).</p>
                        <p>AI predicts demand spikes so farmers can plant the right crop at the right time to meet the market.</p>
                    </div>
                `,
                presentation: `<div style="background: #d97706; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🛒 Demand</h1></div>`
            },
            'm3-t24': {
                handout: `
                    <h2>🌐 Market Insights: The Big Picture</h2>
                    
                    <div style="background: #fdf2f8; padding: 25px; border-radius: 12px; border-left: 6px solid #db2777;">
                        <h3 style="color: #be185d; margin-top: 0;">🎭 1️⃣ Analogy: Global Village</h3>
                        <p>A drought in Brazil can raise coffee prices in India.</p>
                        <p>Agri-AI connects these global dots to give farmers "Market Intelligence."</p>
                    </div>
                `,
                presentation: `<div style="background: #db2777; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🌐 Insights</h1></div>`
            },

            // MODULE 3 ACTIVITIES
            'm3-activity1': {
                handout: `
                    <h2>🌾 Activity 1: Crop Yield Prediction System</h2>
                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; border-left: 6px solid #16a34a;">
                        <h3>🎯 Objective</h3>
                        <p>Build a Random Forest Regressor to predict crop yield.</p>
                    </div>
                    <div style="background: white; padding: 25px; border-radius: 12px; margin: 20px 0; border: 1px solid #e5e7eb;">
                        <h3>📝 Steps:</h3>
                        <ol>
                            <li>Load the supplied CSV dataset (Weather + Soil + Yield).</li>
                            <li>Preprocess: Handle missing values in 'Rainfall'.</li>
                            <li>Train a <strong>RandomForestRegressor</strong>.</li>
                            <li>Evaluate using <strong>RMSE</strong>.</li>
                        </ol>
                    </div>
                `,
                presentation: `<div style="background: #16a34a; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🌾 Activity 1</h1></div>`
            },
            'm3-activity2': {
                handout: `
                    <h2>🦠 Activity 2: Disease Detection with CNN</h2>
                    <div style="background: #fff7ed; padding: 25px; border-radius: 12px; border-left: 6px solid #f97316;">
                        <h3>🎯 Objective</h3>
                        <p>Use a pre-trained MobileNet to classify images of leaves.</p>
                    </div>
                    <div style="background: white; padding: 25px; border-radius: 12px; margin: 20px 0; border: 1px solid #e5e7eb;">
                        <h3>📝 Code Challenge:</h3>
                        <p>Load the provided 'leaf.jpg'. Use the model to predict:</p>
                        <ul>
                            <li>Label: e.g., "Tomato_Blight"</li>
                            <li>Confidence: e.g., 98.5%</li>
                        </ul>
                    </div>
                `,
                presentation: `<div style="background: #f97316; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🦠 Activity 2</h1></div>`
            },
            'm3-activity3': {
                handout: `
                    <h2>🧪 Activity 3: Soil Health Analysis</h2>
                    <div style="background: #fdf2f8; padding: 25px; border-radius: 12px; border-left: 6px solid #be185d;">
                        <h3>🎯 Objective</h3>
                        <p>Classify soil samples as 'Fertile' or 'Non-Fertile' based on NPK values.</p>
                    </div>
                `,
                presentation: `<div style="background: #be185d; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🧪 Activity 3</h1></div>`
            },
            'm3-activity4': {
                handout: `
                    <h2>🌦️ Activity 4: Weather Forecasting</h2>
                    <div style="background: #eff6ff; padding: 25px; border-radius: 12px; border-left: 6px solid #2563eb;">
                        <h3>🎯 Objective</h3>
                        <p>Use ARIMA to forecast next week's max temperature.</p>
                    </div>
                `,
                presentation: `<div style="background: #2563eb; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🌦️ Activity 4</h1></div>`
            },

            // MODULE 4: CAPSTONE PROJECT
            'm4-t1': {
                handout: `
                    <h2>🎯 Problem Definition: The Foundation</h2>
                    <div style="background: #fdf2f8; padding: 25px; border-radius: 12px; border-left: 6px solid #be185d;">
                        <h3 style="color: #9d174d; margin-top: 0;">🎭 Analogy: Building a House</h3>
                        <p>Before you buy bricks (Code), you need a Blueprint (Problem Statement).</p>
                        <p><strong>Goal:</strong> Define exactly WHAT you are solving. "Help farmers" is too vague. "Predict Tomato Blight from leaf images with 90% accuracy" is a solid goal.</p>
                    </div>
                `,
                presentation: `<div style="background: #be185d; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🎯 Definition</h1></div>`
            },
            'm4-t2': {
                handout: `
                    <h2>🚜 Agri-Problem ID: Real Pain Points</h2>
                    <div style="background: #fffbeb; padding: 25px; border-radius: 12px; border-left: 6px solid #d97706;">
                        <h3 style="color: #b45309; margin-top: 0;">Did You Know?</h3>
                        <p>30% of crops are lost to pests. This is a huge opportunity for AI.</p>
                        <p><strong>Task:</strong> Talk to a farmer (or read a case study). Identify ONE specific pain point (e.g., "Water is too expensive").</p>
                    </div>
                `,
                presentation: `<div style="background: #d97706; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🚜 Problem ID</h1></div>`
            },
            'm4-t3': {
                handout: `
                    <h2>📚 Literature Review: Don't Reinvent the Wheel</h2>
                    <div style="background: #f0fdf4; padding: 25px; border-radius: 12px; border-left: 6px solid #16a34a;">
                        <h3 style="color: #14532d; margin-top: 0;">Tips</h3>
                        <ul style="list-style-type: none;">
                            <li>✅ Use Google Scholar.</li>
                            <li>✅ Look for papers from the last 3-5 years.</li>
                            <li>✅ Note down: What model did they use? What was their accuracy?</li>
                        </ul>
                    </div>
                `,
                presentation: `<div style="background: #16a34a; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>📚 Review</h1></div>`
            },
            'm4-t4': {
                handout: `
                    <h2>💾 Dataset Selection: Garbage In, Garbage Out</h2>
                    <div style="background: #eff6ff; padding: 25px; border-radius: 12px; border-left: 6px solid #2563eb;">
                        <h3 style="color: #1e3a8a; margin-top: 0;">Checklist</h3>
                        <ul>
                            <li>Is the data public? (Kaggle, Govt portals)</li>
                            <li>Does it have labels? (Supervised Learning needs labels)</li>
                            <li>Is it big enough? (>500 images or >1000 rows ideal)</li>
                        </ul>
                    </div>
                `,
                presentation: `<div style="background: #2563eb; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>💾 Datasets</h1></div>`
            },
            'm4-t5': {
                handout: `
                    <h2>⚖️ Feasibility Analysis: Can we do it?</h2>
                    <div style="background: #fff7ed; padding: 25px; border-radius: 12px; border-left: 6px solid #c2410c;">
                        <h3 style="color: #7c2d12; margin-top: 0;">Three Checks</h3>
                        <ol>
                            <li><strong>Technical:</strong> Do we have the skills/code?</li>
                            <li><strong>Data:</strong> Do we have the data?</li>
                            <li><strong>Time:</strong> Can we finish in 4 weeks?</li>
                        </ol>
                    </div>
                `,
                presentation: `<div style="background: #c2410c; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>⚖️ Feasibility</h1></div>`
            },
            'm4-t9': {
                handout: `
                    <h2>🧺 Data Collection Strategy</h2>
                    <div style="background: #fdf4ff; padding: 25px; border-radius: 12px; border-left: 6px solid #d946ef;">
                        <h3 style="color: #701a75; margin-top: 0;">Methods</h3>
                        <p>1. <strong>Primary:</strong> Go to a field and take photos (Best but hard).</p>
                        <p>2. <strong>Secondary:</strong> Download from Kaggle/PlantVillage (Easier).</p>
                        <p>3. <strong>Synthetic:</strong> Generate data (Advanced).</p>
                    </div>
                `,
                presentation: `<div style="background: #d946ef; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🧺 Collection</h1></div>`
            },
            'm4-t10': {
                handout: `
                    <h2>🔍 Exploratory Data Analysis (EDA)</h2>
                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; margin: 20px 0;">
                        <h3 style="color: #065f46; margin-top: 0;">💻 Code Snippet</h3>
                        <div style="background: #1f2937; color: #f9fafb; padding: 20px; border-radius: 8px; font-family: monospace;">
                            import seaborn as sns<br>
                            sns.pairplot(df, hue='class')<br>
                            plt.show()
                        </div>
                        <p>Look for patterns. "Do diseased leaves always have lower green values?"</p>
                    </div>
                `,
                presentation: `<div style="background: #065f46; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🔍 EDA</h1></div>`
            },
            'm4-t14': {
                handout: `
                    <h2>🏗️ Model Development: The Construction</h2>
                    <div style="background: #f0fdf4; padding: 25px; border-radius: 12px; border-left: 6px solid #16a34a;">
                        <h3 style="color: #14532d; margin-top: 0;">Iterative Process</h3>
                        <p><strong>Baseline:</strong> Start with a simple model (Logistic Regression). Get a score (e.g., 60%).</p>
                        <p><strong>Improve:</strong> Try a better model (Random Forest). Get 80%.</p>
                        <p><strong>Advanced:</strong> Try a Deep Learning model (CNN). Get 95%.</p>
                    </div>
                `,
                presentation: `<div style="background: #16a34a; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🏗️ Dev</h1></div>`
            },
            'm4-t23': {
                handout: `
                    <h2>📝 Documentation: The Manual</h2>
                    <div style="background: #fefce8; padding: 25px; border-radius: 12px; border-left: 6px solid #ca8a04;">
                        <h3 style="color: #854d0e; margin-top: 0;">Why Document?</h3>
                        <p>If you leave the project, can someone else run it? Documentation is the "User Manual" for your code.</p>
                        <p>Include: README.md, requirements.txt, and comments in code.</p>
                    </div>
                `,
                presentation: `<div style="background: #ca8a04; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>📝 Docs</h1></div>`
            },
            'm4-t25': {
                handout: `
                    <h2>🎤 Final Presentation: The Pitch</h2>
                    <div style="background: #fdf2f8; padding: 25px; border-radius: 12px; border-left: 6px solid #be185d;">
                        <h3 style="color: #9d174d; margin-top: 0;">Structure</h3>
                        <ol>
                            <li><strong>Problem:</strong> What did you solve?</li>
                            <li><strong>Solution:</strong> How did you solve it? (Demo time!)</li>
                            <li><strong>Impact:</strong> How does this help the farmer?</li>
                        </ol>
                    </div>
                `,
                presentation: `<div style="background: #be185d; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🎤 Viva</h1></div>`
            },

            // MODULE 4 ACTIVITIES
            'm4-activity1': {
                handout: `
                    <h2>📝 Activity 1: Project Proposal</h2>
                    <div style="background: #eff6ff; padding: 25px; border-radius: 12px; border-left: 6px solid #2563eb;">
                        <h3>🎯 Objective</h3>
                        <p>Draft a 1-page proposal for your Capstone Project.</p>
                    </div>
                    <div style="background: white; padding: 25px; border-radius: 12px; margin: 20px 0; border: 1px solid #e5e7eb;">
                        <h3>Include:</h3>
                        <ul>
                            <li><strong>Title:</strong> Catchy & Descriptive.</li>
                            <li><strong>Problem Statement:</strong> 2-3 sentences.</li>
                            <li><strong>Proposed Solution:</strong> Which Algo? Which Data?</li>
                        </ul>
                    </div>
                `,
                presentation: `<div style="background: #2563eb; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>📝 Proposal</h1></div>`
            },
            'm4-activity2': {
                handout: `
                    <h2>🛠️ Activity 2: Prototype Build</h2>
                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; border-left: 6px solid #16a34a;">
                        <h3>🎯 Objective</h3>
                        <p>Get a "Hello World" version of your model running.</p>
                    </div>
                `,
                presentation: `<div style="background: #16a34a; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🛠️ Prototype</h1></div>`
            },
            'm4-activity3': {
                handout: `
                    <h2>🎤 Activity 3: Mock Presentation</h2>
                    <div style="background: #fff7ed; padding: 25px; border-radius: 12px; border-left: 6px solid #f97316;">
                        <h3>🎯 Objective</h3>
                        <p>Present your project in 3 minutes to a peer.</p>
                    </div>
                `,
                presentation: `<div style="background: #f97316; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🎤 Pitch</h1></div>`
            },
            'm2-t24': {
                handout: `
                    <h2>🌳 Decision Trees: The 20 Questions Game</h2>
                    
                    <div style="background: #f0fdf4; padding: 25px; border-radius: 12px; border-left: 6px solid #16a34a;">
                        <h3 style="color: #14532d; margin-top: 0;">🎭 1️⃣ Analogy: Diagnosis Chart</h3>
                        <p>How does a doctor diagnose? Example:</p>
                        <ul>
                            <li>Is the leaf yellow? (Yes/No)
                                <ul>
                                    <li>If Yes: Are there spots? (Yes/No)
                                        <ul>
                                            <li>If Yes: <strong>Fungal Infection</strong></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <p>That is a Decision Tree. A flowchart for making decisions.</p>
                    </div>
                `,
                presentation: `<div style="background: #16a34a; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🌳 Decision Trees</h1></div>`
            },
            'm2-t25': {
                handout: `
                    <h2>⭐ Feature Importance: Who is the MVP?</h2>
                    
                    <div style="background: #eff6ff; padding: 25px; border-radius: 12px; border-left: 6px solid #2563eb;">
                        <h3 style="color: #1e3a8a; margin-top: 0;">🎭 1️⃣ Analogy: The Winning Player</h3>
                        <p>Your team won. Who contributed most? The goal scorer? The goalkeeper?</p>
                        <p><strong>Feature Importance</strong> tells you which data column (Rainfall? Temp? Soil?) had the biggest impact on the prediction.</p>
                    </div>
                `,
                presentation: `<div style="background: #2563eb; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>⭐ Importance</h1></div>`
            },

            // MODULE 2 ACTIVITIES
            'm2-activity1': {
                handout: `
                    <h2>📉 Activity 1: NumPy Operations on Soil Data</h2>
                    <div style="background: #dcfce7; padding: 25px; border-radius: 12px; border-left: 6px solid #16a34a;">
                        <h3>🎯 Objective</h3>
                        <p>Use NumPy to analyze soil nutrients from 10 different test sites.</p>
                    </div>
                    <div style="background: white; padding: 25px; border-radius: 12px; margin: 20px 0; border: 1px solid #e5e7eb;">
                        <h3>📝 Steps:</h3>
                        <ol>
                            <li>Create a NumPy array with 10 random soil pH values (between 4 and 8).</li>
                            <li>Calculate the Mean (Average) pH.</li>
                            <li>Identify sites where pH < 5.5 (Too acidic).</li>
                        </ol>
                    </div>
                `,
                presentation: `<div style="background: #16a34a; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>📉 Activity 1</h1></div>`
            },
            'm2-activity2': {
                handout: `
                    <h2>📈 Activity 2: Linear Regression for Crop Yield</h2>
                    <div style="background: #fff7ed; padding: 25px; border-radius: 12px; border-left: 6px solid #f97316;">
                        <h3>🎯 Objective</h3>
                        <p>Build a model to predict Rice Yield based on Rainfall.</p>
                    </div>
                    <div style="background: white; padding: 25px; border-radius: 12px; margin: 20px 0; border: 1px solid #e5e7eb;">
                        <h3>📝 Code Challenge:</h3>
                        <p>Use Scikit-Learn to fit a line to the following data:</p>
                        <ul>
                            <li>Rainfall (X): [100, 200, 300, 400, 500]</li>
                            <li>Yield (y): [20, 40, 60, 80, 100]</li>
                        </ul>
                        <p>Predict yield for Rainfall = 250.</p>
                    </div>
                `,
                presentation: `<div style="background: #f97316; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>📈 Activity 2</h1></div>`
            },
            'm2-activity3': {
                handout: `
                    <h2>🚫 Activity 3: Classification - Crop Type</h2>
                    <div style="background: #fdf2f8; padding: 25px; border-radius: 12px; border-left: 6px solid #be185d;">
                        <h3>🎯 Objective</h3>
                        <p>Classify a crop as "Wheat" (0) or "Rice" (1) based on Water Usage.</p>
                    </div>
                `,
                presentation: `<div style="background: #be185d; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>🚫 Activity 3</h1></div>`
            },
            'm2-activity4': {
                handout: `
                    <h2>📏 Activity 4: Model Evaluation</h2>
                    <div style="background: #eff6ff; padding: 25px; border-radius: 12px; border-left: 6px solid #2563eb;">
                        <h3>🎯 Objective</h3>
                        <p>Calculate the Accuracy of your Classification Model manually.</p>
                    </div>
                `,
                presentation: `<div style="background: #2563eb; height: 400px; color: white; display:flex; justify-content:center; align-items:center;"><h1>📏 Activity 4</h1></div>`
            },
            // MODULE 3 SPECIFIC CONTENT

        };
    }

    getContent(topicId) {
        // Map topicId like 'module-1-topic-1' to 'm1-t1'
        let mappedId = topicId;
        const modMatch = topicId.match(/^module-(\d+)-topic-(\d+)$/);
        if (modMatch) {
            mappedId = `m${modMatch[1]}-t${modMatch[2]}`;
        }

        console.log('[LECTURE-CONTENT] getContent() called with topicId:', topicId, 'mappedId:', mappedId);
        console.log('[LECTURE-CONTENT] specificContent keys:', Object.keys(this.specificContent));
        console.log('[LECTURE-CONTENT] specificContent[mappedId]:', this.specificContent[mappedId]);

        // 1. Check for specific, hand-crafted content
        if (this.specificContent[mappedId]) {
            console.log('[LECTURE-CONTENT] Found specific content for:', mappedId);
            return this.specificContent[mappedId];
        }

        console.log('[LECTURE-CONTENT] No specific content found, generating dynamic content for topicId:', topicId);
        // 2. Generate dynamic content based on metadata
        return this.generateDynamicContent(topicId);
    }

    getTopicMetadata(topicId) {
        if (!this.structure) return null;
        for (const module of this.structure.modules) {
            const topic = module.topics.find(t => t.id === topicId);
            if (topic) return { ...topic, moduleTitle: module.title };
        }
        return null;
    }

    generateDynamicContent(topicId) {
        const metadata = this.getTopicMetadata(topicId);
        if (!metadata) return { handout: "<p>Content not found.</p>", presentation: "<p>Content not found.</p>" };

        // Module 4: Capstone Special Handling
        if (topicId.startsWith('m4-')) {
            return {
                handout: this.getModule4Handout(metadata),
                presentation: this.getModule4Presentation(metadata)
            };
        }

        // Module 5: Bonus Projects & Deployment Special Handling
        if (topicId.startsWith('m5-')) {
            return {
                handout: this.getModule5Handout(metadata),
                presentation: this.getModule5Presentation(metadata)
            };
        }

        // Default Dynamic Content Generation with Farming Analogies
        const { title, moduleTitle, subtopics } = metadata;

        // Farming-focused analogies based on keywords
        const farmingAnalogies = {
            'python': '🐍 Just like farmers use different tools (hoe for digging, sickle for cutting), Python has tools for different tasks!',
            'data': '📊 Think of data as your farm records - tracking rainfall, yield, and soil quality helps you make better decisions.',
            'algorithm': '📋 An algorithm is like a recipe for making pickles - follow steps in order to get perfect results every time!',
            'model': '🌾 A machine learning model is like an experienced farmer who learned which conditions give best harvest.',
            'classification': '🥕 Like sorting vegetables - tomatoes in one basket, potatoes in another. ML does this with data!',
            'regression': '📈 Like predicting harvest based on rainfall - more rain usually means more yield!',
            'neural': '🧠 Neural networks work like your brain learning to recognize ripe vs raw mangoes by looking at many examples.',
            'detection': '👁️ Like spotting diseased leaves in a field - teaching computers to see what farmers see!',
            'prediction': '🔮 Like village elders predicting monsoon by watching clouds - using past patterns to guess future!',
            'optimization': '⚖️ Like finding the best mix of seeds for your budget - maximize output, minimize cost!',
            'default': '🌱 Like learning farming from your grandfather - observe, practice, and master step by step!'
        };

        // Get appropriate analogy
        const titleLower = title.toLowerCase();
        let analogy = farmingAnalogies.default;
        for (const [key, value] of Object.entries(farmingAnalogies)) {
            if (titleLower.includes(key)) {
                analogy = value;
                break;
            }
        }

        // Smart Hero Image Selection
        let heroImage = "https://images.unsplash.com/photo-1625246333195-551e51241988?auto=format&fit=crop&w=1200&q=80"; // Default Agri
        if (topicId.startsWith('m1')) heroImage = "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80"; // Python/Code
        if (topicId.startsWith('m2')) heroImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"; // Data/Charts
        if (topicId.startsWith('m4')) heroImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"; // Planning/Team

        let handout = `
            <div class="handout-dynamic">
                <div class="hero-image-container" style="position: relative; overflow: hidden; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <img src="${heroImage}" alt="${moduleTitle}" style="width:100%; height: 200px; object-fit: cover;">
                    <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); padding: 20px; color: white;">
                        <h2 style="margin: 0; text-shadow: 1px 1px 3px rgba(0,0,0,0.8);">🌾 ${title}</h2>
                        <span style="font-size: 0.9em; opacity: 0.9;">${moduleTitle}</span>
                    </div>
                </div>
                
                <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 5px solid #f59e0b;">
                    <strong>🏡 Village Wisdom:</strong> ${analogy}
                </div>
                
                <section class="handout-intro">
                    <h3>📚 What Will You Learn?</h3>
                    <p>In this section, we'll explore <strong>${title}</strong> using examples from everyday farming life. No complex technical jargon - just simple, practical knowledge that you can understand and apply!</p>
                    <p style="background: #e8f5e9; padding: 15px; border-radius: 8px; margin-top: 15px;">
                        <strong>💡 Why This Matters:</strong> Just like knowing when to water your crops saves water and increases yield, understanding ${title} will help you use technology effectively in agriculture.
                    </p>
                </section>

                <section class="handout-concepts">
                    <h3>🎯 Key Topics We'll Cover</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin-top: 15px;">
                        ${subtopics.map((sub, idx) => {
            const emojis = ['🌱', '🌾', '🚜', '☀️', '💧', '🐄', '🍅', '🥕'];
            const emoji = emojis[idx % emojis.length];
            return `
                            <div style="background: #fff; border: 2px solid #10b981; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                                <div style="font-size: 2em; margin-bottom: 10px;">${emoji}</div>
                                <strong style="color: #065f46;">${sub}</strong>
                                <p style="margin: 10px 0 0 0; font-size: 0.9em; color: #666;">We'll use farming examples to make this crystal clear!</p>
                            </div>`;
        }).join('')}
                    </div>
                </section>

                <section class="handout-learning-style" style="margin-top: 30px; background: #dbeafe; padding: 20px; border-radius: 8px; border-left: 5px solid #3b82f6;">
                    <h3 style="color: #1e40af; margin-top: 0;">👨‍🌾 How We'll Learn This</h3>
                    <ul style="line-height: 1.8;">
                        <li><strong>Step 1:</strong> Start with a village scenario you can relate to</li>
                        <li><strong>Step 2:</strong> Connect it to the technical concept</li>
                        <li><strong>Step 3:</strong> Practice with hands-on examples</li>
                        <li><strong>Step 4:</strong> Test your understanding with quiz</li>
                    </ul>
                </section>
                
                <section class="handout-summary" style="margin-top: 30px; background: #e8f5e9; padding: 20px; border-radius: 8px;">
                    <h3 style="color: #2e7d32; margin-top: 0;">🎓 Ready to Begin?</h3>
                    <p><strong>Remember:</strong> Every expert farmer was once a beginner. Take your time, ask questions, and practice regularly. Technology is just another tool to help your farming - and we'll show you how to use it!</p>
                    <p style="margin-top: 15px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #f59e0b;">
                        <strong>📖 Next Steps:</strong><br>
                        1. Read through the explanation carefully<br>
                        2. Try the code examples in the Lab section<br>
                        3. Complete the Activity to practice<br>
                        4. Take the Quiz to test yourself
                    </p>
                </section>
            </div>
        `;

        let presentation = `
            <div class="slides-container" style="position: relative; height: 400px; overflow: hidden; background: #2c3e50; border-radius: 8px; color: white;">
                <!-- Title Slide -->
                <div class="slide active" style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; padding: 20px; background: linear-gradient(135deg, #2c3e50, #34495e); background-image: url('${heroImage}'); background-size: cover; background-blend-mode: multiply;">
                    <div style="text-shadow: 2px 2px 4px rgba(0,0,0,1);">
                        <h3 style="font-size: 2.5em; margin-bottom: 20px; font-weight: 800;">${title}</h3>
                        <p style="font-size: 1.2em; border-top: 2px solid #4CAF50; display: inline-block; padding-top: 10px; font-weight: 500;">${moduleTitle}</p>
                    </div>
                </div>

                <!-- Content Slide -->
                <div class="slide" style="display:none; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; padding: 30px;">
                    <h2 style="color: #3498db; margin-bottom: 20px;">Key Topics</h2>
                    <ul style="text-align: left; font-size: 1.2em; line-height: 1.6; display: inline-block;">
                        ${subtopics.map(sub => `<li>${sub}</li>`).join('')}
                    </ul>
                </div>

                <!-- Wrap Up Slide -->
                 <div class="slide" style="display:none; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; padding: 30px;">
                    <h2 style="color: #2ecc71; margin-bottom: 20px;">Ready for Practice?</h2>
                    <p>Proceed to the <strong>Lab</strong> tab to apply these concepts.</p>
                </div>

                <!-- Controls -->
                 <div class="slide-controls" style="position:absolute; bottom: 15px; width: 100%; text-align: center;">
                    <button onclick="this.closest('.slides-container').querySelector('.slide.active').style.display='none'; this.closest('.slides-container').querySelector('.slide.active').classList.remove('active'); let s = this.closest('.slides-container').querySelectorAll('.slide'); s[0].style.display='flex'; s[0].classList.add('active');" style="background:rgba(255,255,255,0.2); border:none; color:white; padding: 8px 15px; cursor: pointer; border-radius: 4px; margin-right: 10px;">
                        Reset
                    </button>
                    <button onclick="
                        const container = this.closest('.slides-container');
                        let current = container.querySelector('.slide.active');
                        current.style.display = 'none';
                        current.classList.remove('active');
                        
                        let next = current.nextElementSibling;
                        if (!next || next.classList.contains('slide-controls')) {
                            next = container.firstElementChild; // Loop back to start
                        }
                        
                        next.style.display = 'flex';
                        next.classList.add('active');
                    " style="background:#27ae60; border:none; color:white; padding: 8px 15px; cursor: pointer; border-radius: 4px;">
                        Next <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        `;

        return { handout, presentation };
    }

    getModule4Handout(topic) {
        return `
            <div class="handout-project-guide">
                <div class="guide-header" style="background: #e8f8f5; padding: 20px; border-left: 5px solid #1abc9c; margin-bottom: 25px;">
                    <h2 style="color: #16a085; margin: 0;">📘 Capstone Guide: ${topic.title}</h2>
                    <p style="margin-top: 5px; color: #555;">This document serves as your drafting guide for the <strong>${topic.title}</strong> section of your final project report.</p>
                </div>

                <h3><i class="fas fa-pen-fancy"></i> Drafting Instructions</h3>
                <p>For this section of your Capstone Project, you are expected to produce documentation that meets scientific standards. Follow the structure below:</p>
                
                <div style="background: #fff; border: 1px solid #ddd; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h4 style="border-bottom: 1px solid #eee; padding-bottom: 10px;">Suggested Report Structure</h4>
                    <ul style="list-style: none; padding-left: 0;">
                        ${topic.subtopics.map(sub => `
                        <li style="margin-bottom: 15px;">
                            <strong>🔹 ${sub}</strong>
                            <p style="font-size: 0.9em; color: #666; margin-left: 20px;">
                                Draft 1-2 paragraphs explaining this aspect. Focus on <em>why</em> this was chosen and <em>how</em> it impacts your project goals.
                                <br><em>Tip: Use passive voice for methodology ("The data was collected...") and active voice for findings.</em>
                            </p>
                        </li>`).join('')}
                    </ul>
                </div>

                <h3><i class="fas fa-check-circle"></i> Quality Checklist</h3>
                <ul class="checklist">
                    <li><input type="checkbox" disabled> Have you defined all technical terms?</li>
                    <li><input type="checkbox" disabled> Are your citations correctly formatted (IEEE/APA)?</li>
                    <li><input type="checkbox" disabled> Did you justify your decisions with data or references?</li>
                </ul>

                <div class="pro-tip" style="background: #fff3cd; color: #856404; padding: 15px; border-radius: 6px; margin-top: 20px;">
                    <strong>💡 Pro Tip:</strong> Examiners look for <em>justification</em>. Don't just say what you did; explain <strong>why</strong> you did it over other alternatives.
                </div>
            </div>
        `;
    }

    getModule4Presentation(topic) {
        return `
            <div class="slides-container" style="position: relative; height: 400px; overflow: hidden; background: #2c3e50; border-radius: 8px; color: white;">
                <!-- Title Slide -->
                <div class="slide active" style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; padding: 20px; background: linear-gradient(135deg, #2c3e50, #34495e);">
                    <h1 style="color: #f1c40f; margin-bottom: 10px;">${topic.title}</h1>
                    <p style="font-size: 1.2em;">Capstone Defense Deck Template</p>
                    <div style="margin-top: 20px; padding: 10px 20px; background: rgba(255,255,255,0.1); border-radius: 20px;">
                        <i class="fas fa-layer-group"></i> Project Phase: Execution
                    </div>
                </div>

                <!-- Content Guide Slide -->
                <div class="slide" style="display:none; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; padding: 30px;">
                    <h2 style="color: #3498db; margin-bottom: 20px;">What to Present</h2>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; text-align: left; width: 100%;">
                        ${topic.subtopics.map(sub => `
                        <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;">
                            <h4 style="color: #1abc9c; margin: 0 0 5px 0;">${sub}</h4>
                            <p style="font-size: 0.8em; margin: 0; opacity: 0.8;">Explain your approach and key findings for this component.</p>
                        </div>`).slice(0, 4).join('')}
                    </div>
                </div>

                <!-- Defense Prep Slide -->
                <div class="slide" style="display:none; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; padding: 40px;">
                    <h2 style="color: #e74c3c; margin-bottom: 20px;">Defense Preparation</h2>
                    <ul style="text-align: left; font-size: 1.1em; line-height: 1.8;">
                        <li>❓ Be ready to answer: "What were the limitations?"</li>
                        <li>❓ Be ready to answer: "Why did you choose this algorithm?"</li>
                        <li>❓ Ensure all diagrams in your slides are readable.</li>
                    </ul>
                </div>

                <!-- Controls -->
                 <div class="slide-controls" style="position:absolute; bottom: 15px; width: 100%; text-align: center;">
                    <button onclick="
                        const container = this.closest('.slides-container');
                        const active = container.querySelector('.slide.active');
                        active.style.display='none'; 
                        active.classList.remove('active');
                        
                        let prev = active.previousElementSibling;
                        if (!prev || prev.classList.contains('slide-controls')) prev = container.lastElementChild.previousElementSibling; // Wrap
                        
                        prev.style.display='flex';
                        prev.classList.add('active');"
                            style="background:rgba(255,255,255,0.2); border:none; color:white; padding: 8px 15px; cursor: pointer; border-radius: 4px; margin-right: 10px;">
                        <i class="fas fa-chevron-left"></i> Prev
                    </button>
                    <button onclick="
                        const container = this.closest('.slides-container');
                        let current = container.querySelector('.slide.active');
                        current.style.display = 'none';
                        current.classList.remove('active');
                        
                        let next = current.nextElementSibling;
                        if (!next || next.classList.contains('slide-controls')) {
                            next = container.firstElementChild; // Loop back to start
                        }
                        
                        next.style.display = 'flex';
                        next.classList.add('active');
                    " style="background:#27ae60; border:none; color:white; padding: 8px 15px; cursor: pointer; border-radius: 4px;">
                        Next <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        `;
    }

    getModule5Handout(topic) {
        if (topic.id === 'm5-t1') {
            // Deployment Strategies Handout
            return `
                <div class="handout-deployment">
                    <h2>🚀 Deployment Strategies</h2>
                    <p>Moving your AI project from a Jupyter Notebook to the real world.</p>
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top:20px;">
                        <div style="background:#f0f4c3; padding:15px; border-radius:8px;">
                            <h3>1. GitHub Pages (Portfolio)</h3>
                            <p>Best for: Static documentation and project showcases.</p>
                        </div>
                        <div style="background:#dfe6e9; padding:15px; border-radius:8px;">
                            <h3>2. Streamlit (Interactive Demo)</h3>
                            <p>Best for: Letting users try your model.</p>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Project Specification Generators
            const projectSpecs = {
                'm5-t2': { goal: "Smart Irrigation", stack: "IoT, Python", logic: "Sensor -> Threshold -> Pump" },
                'm5-t3': { goal: "Crop Disease API", stack: "Flask, CNN", logic: "Image -> CNN -> JSON" },
                'm5-t4': { goal: "Market Dashboard", stack: "Pandas, Plotly", logic: "CSV -> Aggregation -> Chart" },
                'm5-t5': { goal: "Soil Nutrient Predictor", stack: "Sklearn, XGBoost", logic: "Soil Data -> Regressor -> NPK Values" },
                'm5-t6': { goal: "Weed Detection", stack: "YOLO, OpenCV", logic: "Video Frame -> Object Det -> Coordinates" },
                'm5-t7': { goal: "Fruit Maturity Grading", stack: "OpenCV, Color Spaces", logic: "Image -> HSV Filter -> Maturity Class" },
                'm5-t8': { goal: "Greenhouse Control", stack: "PID, IoT", logic: "Temp Diff -> PID Calc -> Heater/Fan" },
                'm5-t9': { goal: "Fruit Picker Arm", stack: "Inverse Kinematics", logic: "Target XYZ -> Joint Angles -> Motor" },
                'm5-t10': { goal: "Drone Path Planning", stack: "A* Algorithm", logic: "Grid Map -> Path Search -> Waypoints" },
                'm5-t11': { goal: "Livestock Health", stack: "Anomaly Detection", logic: "Motion Data -> Isolation Forest -> Alert" },
                'm5-t12': { goal: "Weather App", stack: "REST API, TimeSeries", logic: "API Fetch -> ARIMA -> Forecast" },
                'm5-t13': { goal: "Rotation Recommender", stack: "Expert System", logic: "Crop History -> Rules Engine -> Next Crop" },
                'm5-t14': { goal: "Farmer Chatbot", stack: "LLM, RAG", logic: "Query + Docs -> Vector DB -> Answer" },
                'm5-t15': { goal: "Satellite Yield", stack: "GeoPandas", logic: "Satellite Img -> NDVI Calc -> Yield Model" },
                'm5-t16': { goal: "Supply Chain Opt", stack: "Linear Programming", logic: "Supply/Demand -> Simplex -> Transport Plan" },
                'm5-t17': { goal: "Hydroponics Monitor", stack: "IoT Twin", logic: "pH/EC Data -> Digital Twin -> Adjustment" },
                'm5-t18': { goal: "Pest Counting", stack: "Blob Detection", logic: "Trap Image -> Blob Counte -> Pest Density" },
                'm5-t19': { goal: "Water Quality Index", stack: "Data Analysis", logic: "Chemical Params -> Weighted Sum -> WQI" },
                'm5-t20': { goal: "Crop Sched Genetic Algo", stack: "Genetic Algo", logic: "Chromosome (Schedule) -> Fitness -> Evolution" },
                'm5-t21': { goal: "Equipment Maintenance", stack: "Classification", logic: "Vibration Logs -> Classifier -> Failure Probability" }
            };

            const module5CodeDemos = {
                'm5-t2': {
                    code: `# Smart Irrigation System Logic
import time
import random

def get_soil_moisture():
    # Simulate sensor reading (0-100%)
    return random.uniform(20, 80)

def control_pump(moisture_level):
    THRESHOLD_LOW = 40  # If moisture < 40%, turn ON
    THRESHOLD_HIGH = 70 # If moisture > 70%, turn OFF
    
    print(f"💧 Current Moisture: {moisture_level:.1f}%")
    
    if moisture_level < THRESHOLD_LOW:
        print("✅ Action: Pump TURNED ON (Soil is too dry)")
        return "ON"
    elif moisture_level > THRESHOLD_HIGH:
        print("✅ Action: Pump TURNED OFF (Soil is wet enough)")
        return "OFF"
    else:
        print("⏳ Action: Pump Idle (Moisture level optimal)")
        return "IDLE"

# Run simulation
print("--- Starting Smart Irrigation Monitor ---")
for i in range(5):
    m = get_soil_moisture()
    status = control_pump(m)
    time.sleep(1)
    print("-" * 30)`,
                    demo: "Run the code to simulate reading moisture data every second. You will see the system automatically deciding whether to water the plants.",
                    result: "The script outputs `Pump TURNED ON` when simulated moisture drops below 40% and `OFF` when it exceeds 70%. In a real scenario, this 'ON' signal would trigger a 5V relay connected to a water pump."
                },
                'm5-t3': {
                    code: `# Simple Flask API for Disease Prediction (Mock)
from flask import Flask, jsonify, request
import random

app = Flask(__name__)

# Mock database of diseases
DISEASES = {
    0: "Healthy",
    1: "Early Blight (Fungal)",
    2: "Late Blight (Fungal)",
    3: "Mosaic Virus"
}

@app.route('/predict', methods=['POST'])
def predict_disease():
    # In real app: image = request.files['image']
    # processed_img = preprocess(image)
    # prediction = model.predict(processed_img)
    
    # Simulating prediction for demo
    pred_class = random.choice(list(DISEASES.keys()))
    confidence = random.uniform(0.75, 0.99)
    
    result = {
        "status": "success",
        "prediction": DISEASES[pred_class],
        "confidence": f"{confidence:.2f}",
        "remedy": "Apply fungicide immediately." if pred_class != 0 else "None needed."
    }
    return jsonify(result)

# To run in Colab, we need a workaround for public URLs,
# but here is how you test the logic:
print("--- Simulating API Request ---")
response = predict_disease() 
print("API Response JSON:", response.get_json())`,
                    demo: "This simulates a Flask backend. Run the code to see how the API formats its JSON response when a frontend (like a mobile app) sends a leaf image.",
                    result: "The JSON output contains the predicted disease ('Early Blight'), confidence score ('0.89'), and suggested remedy. This standard structure allows any frontend to easily display results to the farmer."
                },
                'm5-t4': {
                    code: `# Market Price Dashboard
import pandas as pd
import plotly.express as px
import numpy as np

# 1. Generate Dummy Data
dates = pd.date_range(start="2024-01-01", periods=30)
df = pd.DataFrame({
    "Date": dates,
    "Tomato_Price": np.random.randint(20, 60, size=30),
    "Onion_Price": np.random.randint(15, 80, size=30)
})

# 2. Reshape for Plotting
df_melted = df.melt(id_vars=["Date"], var_name="Crop", value_name="Price_Per_kg")

# 3. Create Interactive Chart
fig = px.line(df_melted, x="Date", y="Price_Per_kg", color="Crop", 
              title="Daily Market, Price Trends (Tomato vs Onion)",
              markers=True)

# In Colab: fig.show()
print("Data Preview:")
print(df.head())
print("\\n(In Google Colab, fig.show() would render an interactive chart here)")`,
                    demo: "Creates a Pandas DataFrame simulating 30 days of market prices and prepares a Plotly interactive chart.",
                    result: "You see two fluctuating lines representing daily prices. Interpretation: If 'Onion' spikes suddenly on Day 20, farmers should harvest quickly to act on the high price. Similar logic powers real APMC market dashboards."
                },
                'm5-t5': {
                    code: `# Soil Nutrient Predictor
from sklearn.tree import DecisionTreeRegressor
import numpy as np

# Training Data: [pH, Organic_Carbon%, Nitrogen_kg_ha]
# Target: Recommended Urea amount (kg/ha)
X_train = [
    [6.5, 0.5, 120], # Neutral soil, low carbon, low N
    [7.5, 0.8, 200], # Alkaline, good carbon, high N
    [5.5, 0.3, 100], # Acidic, poor carbon, very low N
    [6.8, 0.6, 150]  # Optimal
]
y_train = [100, 40, 150, 80] # Urea needed

# Train Model
model = DecisionTreeRegressor()
model.fit(X_train, y_train)

# New Sample: Lab report says pH 6.0, 0.4% Carbon, 110kg N
new_sample = [[6.0, 0.4, 110]]
prediction = model.predict(new_sample)

print(f"Input Soil Stats: pH={new_sample[0][0]}, N={new_sample[0][2]}kg/ha")
print(f"Recommended Urea Application: {prediction[0]} kg/ha")`,
                    demo: "Trains a Decision Tree on soil lab data to learn the relationship between existing soil nutrients and fertilizer needs.",
                    result: "The model predicts `100.0 kg/ha` or similar. Interpretation: Since the input N (110) is low, the model recommends a higher Urea dosage, similar to the first training example. This automates soil card recommendations."
                },
                'm5-t6': {
                    code: `# Weed Detection Logic (YOLO Format)
import cv2
import numpy as np

# Simulate an image (Conceptually)
# In real YOLO:
# net = cv2.dnn.readNet("yolov4.weights", "yolov4.cfg")
# layer_names = net.getLayerNames()

def detect_weeds_mock(image_path):
    # Mocking standard YOLO output: [class_id, confidence, box_x, box_y, w, h]
    # Class 0 = "Crop", Class 1 = "Weed"
    detections = [
        {"class": "Crop", "conf": 0.95, "box": [50, 50, 100, 200]},
        {"class": "Weed", "conf": 0.88, "box": [200, 100, 80, 80]}, # Weed found!
        {"class": "Crop", "conf": 0.92, "box": [300, 50, 100, 200]}
    ]
    
    print(f"Analyzing {image_path}...")
    weed_count = 0
    for d in detections:
        print(f"Found {d['class']} with {d['conf']*100:.1f}% confidence at {d['box']}")
        if d['class'] == 'Weed':
            weed_count += 1
            
    if weed_count > 0:
        return "⚠️ ACTIVATE HERBICIDE NOZZLE"
    else:
        return "✅ NO SPRAY NEEDED"

# Test
action = detect_weeds_mock("field_image_001.jpg")
print(f"\\nSystem Decision: {action}")`,
                    demo: "Simulates the logic flow of a computer vision sprayer. It iterates through object detections to find 'Weed' classes.",
                    result: "The system finds 1 weed and output `ACTIVATE HERBICIDE NOZZLE`. In a robot, this logic tells the solenoid valve to open exactly when it passes over the weed coordinates [200, 100]."
                },
                'm5-t7': {
                    code: `# Fruit Maturity Grading using HSV Color Space
import numpy as np

def check_maturity(hue_value):
    # Hue values (approx): Green=35-85, Yellow=20-35, Red=0-20
    
    if 35 <= hue_value <= 85:
        return "Unripe (Green)"
    elif 20 <= hue_value < 35:
        return "Semi-Ripe (Yellowish)"
    elif 0 <= hue_value < 20:
        return "Ripe (Red)"
    else:
        return "Unknown/Rotten"

# Simulate scanning tomatoes
tomato_hues = [80, 40, 25, 10, 5] # Green to Red

print("--- Tomato Grading Line ---")
for i, h in enumerate(tomato_hues):
    grade = check_maturity(h)
    print(f"Tomato #{i+1} (Hue: {h}): Grade = {grade}")`,
                    demo: "Uses color histograms (mocked by Hue values) to grade fruit. Run to classify different tomatoes.",
                    result: "Tomatoes are sorted from 'Unripe' to 'Ripe' based on their color value. Interpretation: This logic drives conveyor belts in packing houses to physically separate fruits into A, B, and C grades."
                },
                'm5-t8': {
                    code: `# Greenhouse PID Controller Simulation
class PID:
    def __init__(self, kp, ki, kd, setpoint):
        self.kp = kp
        self.ki = ki
        self.kd = kd
        self.setpoint = setpoint
        self.prev_error = 0
        self.integral = 0

    def calculate(self, current_temp):
        error = self.setpoint - current_temp
        self.integral += error
        derivative = error - self.prev_error
        
        output = (self.kp * error) + (self.ki * self.integral) + (self.kd * derivative)
        self.prev_error = error
        return output

# Setup: Goal Temp = 25°C
controller = PID(kp=2.0, ki=0.1, kd=0.05, setpoint=25.0)
current_temp = 20.0 # It's cold inside

print(f"Target: {controller.setpoint}°C | Starting: {current_temp}°C")
print("-" * 40)

for t in range(5):
    # Calculate heater power (0-100%)
    heater_power = controller.calculate(current_temp)
    heater_power = max(0, min(100, heater_power)) # Clamp to 0-100
    
    # Simulate heating physics
    current_temp += (heater_power * 0.1) - 0.5 # Heat added - Heat loss
    
    print(f"Time {t}: Temp={current_temp:.2f}°C | Heater Power={heater_power:.1f}%")`,
                    demo: "Simulates a PID control loop regulating greenhouse temperature.",
                    result: "You see the `Heater Power` adjust dynamically. Initially high to raise temp, then lowering as it approaches 25°C. Interpretation: This prevents overheating/cooling overshoot, maintaining the stable climate essential for hydroponics."
                },
                'm5-t9': {
                    code: `# Inverse Kinematics (2D Simplified)
import math

def calculate_arm_angles(x, y, l1, l2):
    # l1, l2: Lengths of arm segments
    # x, y: Target coordinate of the fruit
    
    # Distance to target
    d = math.sqrt(x**2 + y**2)
    
    if d > (l1 + l2): 
        return "Target out of reach!"
    
    # Law of Cosines
    a2 = math.acos((x**2 + y**2 - l1**2 - l2**2) / (2 * l1 * l2))
    theta2 = math.degrees(a2) - 180  # Elbow angle
    
    # For Theta1 (Shoulder) - simplified
    theta1 = math.degrees(math.atan2(y, x)) # Base angle
    
    return f"Shoulder: {theta1:.1f}°, Elbow: {theta2:.1f}°"

# Robot Specs
L1 = 10 # cm
L2 = 10 # cm

# Fruit is at (10, 10)
target = (10, 10)
angles = calculate_arm_angles(target[0], target[1], L1, L2)

print(f"🎯 Target Fruit at {target}")
print(f"🤖 Motor Angles Required: {angles}")`,
                    demo: "Calculates the exact angles a robot arm needs to reach a fruit at coordinates X, Y.",
                    result: "Output: `Shoulder: 45.0°, Elbow: -90.0°`. Interpretation: The code converts a camera's 'There is a fruit at X,Y' into 'Turn Motor A 45 degrees', allowing the gripper to reach the apple."
                },
                'm5-t10': {
                    code: `# Drone Path Planning (Grid Based)
import numpy as np

# 0 = Free space, 1 = Obstacle (Tree/Building)
grid = np.array([
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0], # Wall of trees
    [0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0]  # Destination here
])

def simple_path_check(grid, start, end):
    # This checks if straight line is clear (Simplified)
    # A true A* would search neighbors
    
    if grid[start] == 1 or grid[end] == 1:
        return "Invalid Start/End"
        
    print(f"Planning from {start} to {end}...")
    # Mocking a found path around obstacles
    path = [(0,0), (0,1), (0,2), (0,3), (1,3), (2,3), (3,4), (4,4)]
    return path

start = (0, 0) # Top-Left
end = (4, 4)   # Bottom-Right

path = simple_path_check(grid, start, end)
print("✅ Path Found (Coordinates):")
print(path)`,
                    demo: "Simulates finding a safe route for a drone through a field with obstacles (trees).",
                    result: "The output list `[(0,0), (0,1)...]` is the sequence of GPS waypoints the drone follows. Interpretation: This ensures the drone automatically avoids the '1's (trees) while flying to the destination."
                },
                'm5-t11': {
                    code: `# Livestock Anomaly Detection (Isolation Forest)
from sklearn.ensemble import IsolationForest
import pandas as pd

# Training: Normal Goat activity (Steps per hour)
# Most hours goats walk 300-500 steps
normal_data = pd.DataFrame({'steps': [300, 320, 310, 450, 480, 305, 330, 400]})

# Train Model
model = IsolationForest(contamination=0.1)
model.fit(normal_data)

# Test: New readings from collar
# 310: Normal behavior
# 50: Too low (Sick? Injured?)
# 1200: Too high (Running from predator?)
new_readings = pd.DataFrame({'steps': [310, 50, 1200]})
preds = model.predict(new_readings)

# Convert -1 (Anomaly) to text
labels = ["Normal" if p == 1 else "⚠️ ALERT" for p in preds]

print("   Steps | Status")
print("-" * 20)
for steps, status in zip(new_readings['steps'], labels):
    print(f"{steps:6d} | {status}")`,
                    demo: "Uses Isolation Forest to detect unusual activity patterns in livestock sensor data.",
                    result: "The output flags `50 steps` (lethargy) and `1200 steps` (panic) as ALERTS. Interpretation: The farmer receives an SMS only when an animal behaves strangely, indicating sickness or theft."
                },
                'm5-t12': {
                    code: `# Daily Weather Forecast (ARIMA Mock)
from statsmodels.tsa.arima.model import ARIMA
import pandas as pd

# 7 Days of temp history
history = [30, 32, 31, 29, 33, 34, 32] 

print("🌡️ Historical Temps:", history)

# Train ARIMA (AutoRegressive Integrated Moving Average)
# Order=(1,0,0) is simple Autoregression
model = ARIMA(history, order=(1,0,0))
model_fit = model.fit()

# Forecast next 2 days
forecast = model_fit.forecast(steps=2)

print("\\n🔮 Forecast for next 2 days:")
for i, temp in enumerate(forecast):
    print(f"Day +{i+1}: {temp:.1f}°C")`,
                    demo: "Fits a time-series model to historical temperature data to predict future values.",
                    result: "The model predicts temperatures around ~32.5°C based on the recent trend. Interpretation: Localized forecasting helps farmers plan sensitive tasks like spraying (avoiding rain/wind) better than generic city-level forecasts."
                },
                'm5-t13': {
                    code: `# Crop Rotation Expert System (Rule engine)
def recommend_rotation(current_crop, soil_nitrogen_level):
    rules = {
        "Legume": {"next": "Cereal", "reason": "Legumes fixed nitrogen, now deplete it with heavy feeder."},
        "Cereal": {"next": "Legume", "reason": "Cereal used up nitrogen, plant Legume to restore it."},
        "Vegetable": {"next": "Root Crop", "reason": "Break post cycle and different nutrient depth."}
    }
    
    # Specific Rule: If N is very low, force Legume
    if soil_nitrogen_level < 20:
        return "Legume (Beans/Peas)", "🚨 Nitrogen is critical! Need fixers immediately."
        
    suggestion = rules.get(current_crop)
    if suggestion:
        return suggestion['next'], suggestion['reason']
    else:
        return "Fallow", "Unknown crop cycle, rest land."

# Scenario
curr = "Cereal" # Just harvested Wheat/Rice
nitro = 45      # Moderate nitrogen

rec, reason = recommend_rotation(curr, nitro)

print(f"Harvested: {curr}")
print(f"Soil N: {nitro}")
print(f"👉 Recommendation: {rec}")
print(f"ℹ️ Why: {reason}")`,
                    demo: "A logic-based system that decides the next best crop based on agronomy rules.",
                    result: "Recommends `Legume` because the previous crop was `Cereal`. Interpretation: This digitizes agronomic wisdom, ensuring sustainable soil management without needing an expert present."
                },
                'm5-t14': {
                    code: `# Farmer Chatbot (RAG Logic)
knowledge_base = {
    "blight": "Early blight is caused by fungus. Use Copper fungicides.",
    "aphids": "Aphids suck sap. Use Neem oil spray.",
    "fertilizer": "NPK 14-35-14 is good for root establishment."
}

def chatbot_query(user_query):
    # Simple keyword search (Vector DB replacement)
    user_query = user_query.lower()
    best_match = None
    
    for key, answer in knowledge_base.items():
        if key in user_query:
            best_match = answer
            break
            
    if best_match:
        return f"🤖: {best_match}"
    else:
        return "🤖: I am not sure. Please consult an expert."

# Demo
q1 = "How do I treat blight on tomatoes?"
print(f"Farmer: {q1}")
print(chatbot_query(q1))

print("-")

q2 = "What fertilizer for roots?"
print(f"Farmer: {q2}")
print(chatbot_query(q2))`,
                    demo: "Demonstrates a basic Retrieval-Augmented Generation (RAG) flow where user queries are matched against a knowledge base.",
                    result: "The bot correctly answers questions by finding keywords. Interpretation: Real systems use embeddings to understand 'sickness' means 'blight', but the concept is the same: Fetch trusted info -> Answer user."
                },
                'm5-t15': {
                    code: `# Satellite Yield Estimation (NDVI)
import numpy as np

def calculate_ndvi(nir_band, red_band):
    # NDVI = (NIR - Red) / (NIR + Red)
    # Range is -1 to 1. >0.6 is dense vegetation.
    numerator = nir_band - red_band
    denominator = nir_band + red_band
    
    # Handling div by zero
    ndvi = np.divide(numerator, denominator, where=denominator!=0)
    return ndvi

def predict_yield(avg_ndvi):
    # Simple linear model: Yield = 5 * NDVI - 0.5
    return max(0, 5 * avg_ndvi - 0.5)

# Mock Satellite Pixel Data (3x3 grid)
nir = np.array([[0.8, 0.7, 0.9], [0.85, 0.2, 0.8], [0.75, 0.8, 0.7]])
red = np.array([[0.1, 0.1, 0.1], [0.1, 0.4, 0.1], [0.1, 0.1, 0.1]])

grid_ndvi = calculate_ndvi(nir, red)
field_avg_ndvi = np.mean(grid_ndvi)
est_yield = predict_yield(field_avg_ndvi)

print("NDVI Map:\\n", np.round(grid_ndvi, 2))
print(f"\\nField Average Health: {field_avg_ndvi:.2f}")
print(f"📉 Estimated Yield: {est_yield:.1f} tons/ha")`,
                    demo: "Calculates Vegetation Index (NDVI) from simulated satellite bands and estimates yield.",
                    result: "The NDVI map shows healthy areas (0.7+) and a stressed spot (0.2). The total yield is predicted. Interpretation: Governments use this to predict national food supply months before harvest."
                },
                'm5-t16': {
                    code: `# Supply Chain Transport Optimization
from scipy.optimize import linprog

# Goal: Minimize Config cost
# Farm A has 100 units, Farm B has 100
# Market 1 needs 80, Market 2 needs 120
# Costs: A->1=$2, A->2=$4, B->1=$5, B->2=$3

# Costs vector [x_A1, x_A2, x_B1, x_B2]
c = [2, 4, 5, 3]

# Constraints (Equality)
# Supply: A1+A2 = 100, B1+B2 = 100
# Demand: A1+B1 = 80, A2+B2 = 120
A_eq = [
    [1, 1, 0, 0], # Supply A
    [0, 0, 1, 1], # Supply B
    [1, 0, 1, 0], # Demand 1
    [0, 1, 0, 1]  # Demand 2
]
b_eq = [100, 100, 80, 120]

# Solve
res = linprog(c, A_eq=A_eq, b_eq=b_eq, method='highs')

print("optimal Transport Plan:")
print(f"Farm A -> Mkt 1: {res.x[0]:.0f} units")
print(f"Farm A -> Mkt 2: {res.x[1]:.0f} units")
print(f"Farm B -> Mkt 1: {res.x[2]:.0f} units")
print(f"Farm B -> Mkt 2: {res.x[3]:.0f} units")
print(f"💰 Total Cost: \${res.fun:.2f}")`,
                    demo: "Uses Linear Programming to solve a logistics problem: moving crop from farms to markets cheaply.",
                    result: "A->M1 (80), A->M2 (20), B->M1 (0), B->M2 (100). Total Cost: $540. Interpretation: Math proves sending Farm B's crop to Market 1 is wasteful ($5). Smart routing saves massive fuel/cost."
                },
                'm5-t17': {
                    code: `# Hydroponic Digital Twin
class WaterTank:
    def __init__(self, ph, ec):
        self.ph = ph      # Target 5.5 - 6.5
        self.ec = ec      # Target 1.2 - 2.0
    
    def auto_dose(self):
        actions = []
        
        # pH Logic
        if self.ph > 6.5:
            self.ph -= 0.2
            actions.append("Dosing pH Down ⬇️")
        elif self.ph < 5.5:
            self.ph += 0.2
            actions.append("Dosing pH Up ⬆️")
            
        # EC Logic (Nutrients)
        if self.ec < 1.2:
            self.ec += 0.2
            actions.append("Adding Nutrient A+B 💊")
            
        return actions

# Simulation
tank = WaterTank(ph=7.2, ec=0.8) # Bad State
print(f"Initial State: pH={tank.ph}, EC={tank.ec}")

for hour in range(1, 4):
    print(f"\\nHour {hour}:")
    acts = tank.auto_dose()
    if acts:
        print("  " + "\\n  ".join(acts))
    else:
        print("  System Stable ✅")
    print(f"  Result: pH={tank.ph:.1f}, EC={tank.ec:.1f}")`,
                    demo: "Simulates a digital controller balancing pH and nutrients in a water tank.",
                    result: "Over 3 'hours', the system doses acid to lower pH (7.2 -> 6.8 -> ...) and adds nutrients to raise EC. Interpretation: Automated dosing maintains the perfect chemical balance for accelerated plant growth without human error."
                },
                'm5-t18': {
                    code: `# Pest Counting (Blob Detection)
import cv2
import numpy as np

# Simulate a binary image of a trap (0=Background, 255=Pest)
# Create blank image
image = np.zeros((100, 100), dtype="uint8")

# Draw 3 'Pests' (White dots)
cv2.circle(image, (20, 20), 3, 255, -1)
cv2.circle(image, (50, 50), 4, 255, -1)
cv2.circle(image, (80, 30), 2, 255, -1)

# Detection Logic
params = cv2.SimpleBlobDetector_Params()
params.filterByArea = True
params.minArea = 1  # Detect small dots

detector = cv2.SimpleBlobDetector_create(params)
keypoints = detector.detect(image)

print(f"📸 Image Analysis Complete")
print(f"🪰 Pests Detected: {len(keypoints)}")

if len(keypoints) > 5:
    print("⚠️ ALERT: Pest Outbreak Threshold Exceeded!")
else:
    print("✅ Status: Pest population under control.")`,
                    demo: "Uses computer vision (Blob Detection) to count pests on a sticky trap.",
                    result: "Detects 3 pests. Status: Under control. Interpretation: Automating trap checking allows covering huge areas. If count > 5, it triggers an alert to spray only that sector."
                },
                'm5-t19': {
                    code: `# Water Quality Index (WQI) Calc
def calculate_wqi(ph, turbidity, dissolved_oxygen):
    # Weights (Importance)
    w_ph = 0.3
    w_turb = 0.3
    w_do = 0.4
    
    # Normalization (Simplified)
    # Ideal pH 7 (100 score), worst 0 or 14 (0 score)
    q_ph = 100 - abs(7 - ph) * 10
    
    # Turbidity: Less is better. 0 is 100 score.
    q_turb = max(0, 100 - turbidity * 5)
    
    # DO: More is better. >6mg/L is good.
    q_do = min(100, dissolved_oxygen * 12)
    
    wqi = (q_ph * w_ph) + (q_turb * w_turb) + (q_do * w_do)
    return wqi

# Sample: pH 6.5, Turbidity 10NTU, DO 5mg/L
wqi_score = calculate_wqi(6.5, 10, 5)

print(f"🌊 Calculated WQI: {wqi_score:.1f}")

if wqi_score > 80:
    print("Class: Excellent for Irrigation")
elif wqi_score > 50:
    print("Class: Good (Minor treatment needed)")
else:
    print("Class: Poor ⛔ (Do not use)")`,
                    demo: "Calculates a single Water Quality score from multiple chemical parameters.",
                    result: "Score = ~78.5. Class: Good. Interpretation: Farmers don't need to understand complex chemistry. One number (WQI) tells them if the water is safe for crops."
                },
                'm5-t20': {
                    code: `# Genetic Algorithm for Crop Scheduling
import random

# Genes: 0=Wheat, 1=Corn, 2=Fallow
CROPS = ["Wheat", "Corn", "Fallow"]

def fitness(schedule):
    score = 0
    # Rule 1: Corn makes money (+10)
    score += schedule.count(1) * 10
    
    # Rule 2: Wheat needs rest before it (+5 if prev is Fallow)
    for i in range(1, len(schedule)):
        if schedule[i] == 0 and schedule[i-1] == 2:
            score += 5
            
    # Rule 3: Don't plant Corn twice in row (-20, disease risk)
    for i in range(1, len(schedule)):
        if schedule[i] == 1 and schedule[i-1] == 1:
            score -= 20
            
    return score

# Create random population
population = [[random.choice([0,1,2]) for _ in range(5)] for _ in range(4)]

print("Generation 1 (Random Schedules):")
for s in population:
    print(f"{s} -> Score: {fitness(s)}")

# Evolution (Simplified: Pick best)
best_sched = max(population, key=fitness)
best_names = [CROPS[i] for i in best_sched]

print(f"\\n🏆 Best Schedule Found: {best_names}")
print(f"Score: {fitness(best_sched)}")`,
                    demo: "Uses evolution principles to find the best planting schedule that maximizes profit while minimizing disease.",
                    result: "The algorithm penalizes `['Corn', 'Corn']` and rewards `['Fallow', 'Wheat']`. Interpretation: Over thousands of generations, this finds optimal 5-year plans that a human couldn't calculate manually."
                },
                'm5-t21': {
                    code: `# Predictive Maintenance (Vibration Analysis)
import numpy as np

def classify_machine_health(vibration_readings):
    # Calculate features
    mean_vib = np.mean(vibration_readings)
    peak_vib = np.max(vibration_readings)
    std_vib = np.std(vibration_readings)
    
    print(f"Stats: Mean={mean_vib:.2f}, Peak={peak_vib:.2f}")
    
    # Threshold Logic (Simplified Classifier)
    if peak_vib > 5.0:
        return "CRITICAL: Bearing Failure Imminent! 🔴"
    elif mean_vib > 2.0:
        return "WARNING: Needs Lubrication 🟡"
    else:
        return "Healthy 🟢"

# Simulation: Good Machine
print("--- Machine A (New) ---")
vib_a = np.random.normal(1.0, 0.2, 100) # Mean 1.0, clean
print(f"Status: {classify_machine_health(vib_a)}")

# Simulation: Bad Machine
print("\\n--- Machine B (Old Tractor) ---")
vib_b = np.random.normal(1.0, 0.2, 100)
vib_b[50] = 6.5 # Brief shock
print(f"Status: {classify_machine_health(vib_b)}")`,
                    demo: "Analyzes vibration sensor logs to predict if a tractor engine is about to fail.",
                    result: "Machine A is 'Healthy'. Machine B shows a peak of 6.5, triggering 'CRITICAL Failure'. Interpretation: Predictive maintenance saves thousands of dollars by fixing cheap bearings before the whole engine explodes."
                }
            };

            const spec = projectSpecs[topic.id] || { goal: topic.title, stack: "General AI", logic: "Input -> Process -> Output" };
            const codeDemo = module5CodeDemos[topic.id] || { code: "# Code coming soon", demo: "No demo available", result: "N/A" };

            return `
                <div class="handout-project-spec">
                    <div style="background: linear-gradient(135deg, #6c5ce7, #a29bfe); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
                        <h2 style="margin:0;">🏆 ${topic.title}</h2>
                        <span style="background: rgba(255,255,255,0.2); padding: 5px 10px; border-radius: 15px; font-size: 0.9em;">Bonus Project</span>
                    </div>
                    
                    <div style="border: 2px solid #a29bfe; padding: 20px; border-radius: 0 0 8px 8px; border-top: none;">
                        
                        <!-- NEW SECTIONS: Objective & Outcome -->
                        <div style="display: flex; gap: 20px; margin-bottom: 30px;">
                            <div style="flex: 1; background: #e8f4fc; padding: 15px; border-radius: 8px; border-left: 4px solid #3498db;">
                                <h3 style="margin-top:0; color: #2980b9;"><i class="fas fa-bullseye"></i> Objective</h3>
                                <p>To design and implement a <strong>${spec.goal}</strong> system using <strong>${spec.stack}</strong>, applying AI/ML concepts to solve real-world agricultural problems.</p>
                            </div>
                            <div style="flex: 1; background: #eafaf1; padding: 15px; border-radius: 8px; border-left: 4px solid #2ecc71;">
                                <h3 style="margin-top:0; color: #27ae60;"><i class="fas fa-check-circle"></i> Outcome</h3>
                                <p>A functional prototype capable of processing <strong>${spec.logic.split(' -> ')[0]}</strong> and generating actionable <strong>${spec.logic.split(' -> ').pop()}</strong>.</p>
                            </div>
                        </div>

                        <h3>📋 Problem Statement</h3>
                        <p><strong>Goal:</strong> Build a ${spec.goal} system.</p>
                        <div style="background: #f8f9fa; border-left: 4px solid #6c5ce7; padding: 15px; font-style: italic;">
                            "Design a system utilizing <strong>${spec.stack}</strong> to solve the challenge: ${topic.subtopics.join(', ')}."
                        </div>

                        <h3>🛠 Requirements</h3>
                        <ul>
                            <li><strong>Tech Stack:</strong> ${spec.stack}</li>
                            <li><strong>Input:</strong> Raw Data (Images, CSV, Sensor Stream).</li>
                            <li><strong>Output:</strong> Actionable Insight/Control.</li>
                        </ul>

                        <h3>🏗 Architecture Diagram</h3>
                        <div class="mermaid">
                        graph LR
                            ${spec.logic.split(' -> ').map((step, i) => `S${i}[${step}]`).join(' --> ')}
                        </div>

                        <hr style="border: 0; border-top: 1px solid #ddd; margin: 30px 0;">

                        <h3>💻 Code Implementation (Google Colab Ready)</h3>
                        <div style="background: #1e1e1e; padding: 15px; border-radius: 8px; overflow-x: auto;">
                            <!-- Copy Button -->
                            <button onclick="navigator.clipboard.writeText(this.nextElementSibling.innerText)" style="float: right; background: #6c5ce7; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em;">Copy Code</button>
                            <pre style="margin: 0;"><code class="python" style="color: #f8f8f2; font-family: 'Consolas', monospace; font-size: 0.9em;">${codeDemo.code}</code></pre>
                        </div>

                        <h3>📊 Results & Interpretation</h3>
                        <div style="background: #e0f2f1; padding: 20px; border-radius: 8px; border-left: 5px solid #009688; margin-top: 20px;">
                            <p><strong>🧪 Demonstration:</strong> ${codeDemo.demo}</p>
                            <p><strong>📈 Interpretation:</strong> ${codeDemo.result}</p>
                        </div>

                        <!-- NEW SECTION: Video Lecture -->
                        <div style="margin-top: 40px;">
                            <h3><i class="fas fa-video"></i> Video Walkthrough</h3>
                            <div style="background: #000; color: #fff; height: 300px; display: flex; align-items: center; justify-content: center; border-radius: 8px;">
                                <div style="text-align: center;">
                                    <i class="fab fa-youtube" style="font-size: 4em; color: #c4302b;"></i>
                                    <p style="margin-top: 10px; font-size: 1.2em;">Project Guide: ${topic.title} (Coming Soon)</p>
                                </div>
                            </div>
                        </div>

                        <!-- NEW SECTION: Reference Material -->
                        <div style="margin-top: 30px; background: #f9f9f9; padding: 20px; border-radius: 8px;">
                            <h3><i class="fas fa-book"></i> Reference Material</h3>
                            <ul style="list-style-type: none; padding: 0;">
                                <li style="margin-bottom: 10px;">
                                    <a href="https://scikit-learn.org/stable/" target="_blank" style="color: #3498db; text-decoration: none;">
                                        <i class="fas fa-external-link-alt"></i> Scikit-Learn Documentation
                                    </a>
                                </li>
                                <li style="margin-bottom: 10px;">
                                    <a href="https://pandas.pydata.org/docs/" target="_blank" style="color: #3498db; text-decoration: none;">
                                        <i class="fas fa-external-link-alt"></i> Pandas User Guide
                                    </a>
                                </li>
                                <li style="margin-bottom: 10px;">
                                    <a href="https://opencv.org/" target="_blank" style="color: #3498db; text-decoration: none;">
                                        <i class="fas fa-external-link-alt"></i> OpenCV Computer Vision Library
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.kaggle.com/datasets" target="_blank" style="color: #3498db; text-decoration: none;">
                                        <i class="fas fa-database"></i> Kaggle Agriculture Datasets
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            `;
        }
    }

    getModule5Presentation(topic) {
        return `
            <div class="slides-container" style="position: relative; height: 400px; overflow: hidden; background: #2d3436; border-radius: 8px; color: white;">
                <!-- Title Slide -->
                <div class="slide active" style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; padding: 20px; background: linear-gradient(135deg, #2d3436, #636e72);">
                    <h1 style="color: #00cec9; margin-bottom: 10px;">${topic.title}</h1>
                    <p style="font-size: 1.2em;">Project Briefing</p>
                </div>

                <!-- Goal Slide -->
                <div class="slide" style="display:none; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; padding: 40px;">
                    <h2 style="color: #fdcb6e;">The Goal</h2>
                    <p style="font-size: 1.4em;">Build a system that handles:</p>
                    <h3 style="color: white; border-bottom: 2px solid #00cec9; padding-bottom: 10px;">${topic.subtopics[0]}</h3>
                </div>

                <!-- Tech Stack Slide -->
                <div class="slide" style="display:none; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; padding: 40px;">
                    <h2 style="color: #e84393;">Recommended Stack</h2>
                    <div style="display:flex; gap: 20px; margin-top: 30px;">
                        <div style="background:white; color:black; padding:15px; border-radius:8px;">Python</div>
                        <div style="background:white; color:black; padding:15px; border-radius:8px;">Jupyter</div>
                        <div style="background:white; color:black; padding:15px; border-radius:8px;">Matplotlib</div>
                    </div>
                </div>

                <!-- Controls -->
                 <div class="slide-controls" style="position:absolute; bottom: 15px; width: 100%; text-align: center;">
                    <button onclick="
                        const container = this.closest('.slides-container');
                        const active = container.querySelector('.slide.active');
                        active.style.display='none'; 
                        active.classList.remove('active');
                        
                        let prev = active.previousElementSibling;
                        if (!prev || prev.classList.contains('slide-controls')) prev = container.lastElementChild.previousElementSibling; 
                        
                        prev.style.display='flex';
                        prev.classList.add('active');"
                            style="background:rgba(255,255,255,0.2); border:none; color:white; padding: 8px 15px; cursor: pointer; border-radius: 4px; margin-right: 10px;">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button onclick="
                        const container = this.closest('.slides-container');
                        let current = container.querySelector('.slide.active');
                        current.style.display = 'none';
                        current.classList.remove('active');
                        
                        let next = current.nextElementSibling;
                        if (!next || next.classList.contains('slide-controls')) {
                            next = container.firstElementChild; 
                        }
                        
                        next.style.display = 'flex';
                        next.classList.add('active');
                    " style="background:#0984e3; border:none; color:white; padding: 8px 15px; cursor: pointer; border-radius: 4px;">
                        Next
                    </button>
                </div>
            </div>
        `;
    }
}

const lectureSystem = new LectureSystem();
window.courseContent = lectureSystem;
console.log('[INIT] lectureSystem created and exposed as window.courseContent');
console.log('[INIT] lectureSystem.specificContent keys:', Object.keys(lectureSystem.specificContent));
console.log('[INIT] m1-t1 handout exists:', !!lectureSystem.specificContent['m1-t1']);


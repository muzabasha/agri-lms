
// Final Assessment System
// Generates a comprehensive exam from a bank of static and dynamic questions

class QuestionBank {
    constructor() {
        this.staticQuestions = [
            // Module 1: fundamentals
            { m: 1, q: "What does AI stand for?", a: ["Artificial Intelligence", "Automated Interface", "Agri Intel"], c: 0 },
            { m: 1, q: "Which library is used for data manipulation in Python?", a: ["Pandas", "Numpy", "React"], c: 0 },
            { m: 1, q: "Which symbol is used for comments in Python?", a: ["//", "#", "/*"], c: 1 },
            { m: 1, q: "What is an algorithm?", a: ["A step-by-step procedure", "A computer monitor", "A programming language"], c: 0 },
            { m: 1, q: "What is a variable?", a: ["A data container", "A random number", "A fixed value"], c: 0 },

            // Module 2: ML
            { m: 2, q: "What is Supervised Learning?", a: ["Learning with labeled data", "Learning without data", "Robot learning"], c: 0 },
            { m: 2, q: "Which deals with continuous data?", a: ["Regression", "Classification", "Clustering"], c: 0 },
            { m: 2, q: "What is Overfitting?", a: ["Model memorizing noise", "Model being too simple", "Model running too fast"], c: 0 },
            { m: 2, q: "What is a Training Set?", a: ["Data to teach the model", "Data to test the model", "Data to delete"], c: 0 },

            // Module 3: Agri Applications
            { m: 3, q: "What is NDVI?", a: ["Normalized Difference Vegetation Index", "New Digital Vision Interface", "Nitrogen Detection Value"], c: 0 },
            { m: 3, q: "How does Precision Farming help?", a: ["Optimizes resource use", "Uses more water", "Ignores tech"], c: 0 },
            { m: 3, q: "What sensor measures soil wetness?", a: ["Soil Moisture Sensor", "DHT11", "Ultrasonic"], c: 0 },

            // Module 4: Deployment
            { m: 4, q: "What is Streamlit?", a: ["A framework for data apps", "A database", "A cloud provider"], c: 0 },
            { m: 4, q: "What format is a saved model often in?", a: [".h5 or .pkl", ".txt", ".png"], c: 0 },

            // Module 5: Advanced
            { m: 5, q: "What does a Drone use for positioning?", a: ["GPS", "Wifi", "Bluetooth"], c: 0 },
            { m: 5, q: "What is Computer Vision?", a: ["AI enabling computers to 'see'", "Better monitors", "Text processing"], c: 0 }
        ];
    }

    generatePythonQuestion() {
        const ops = ['+', '-', '*', '/'];
        const op = ops[Math.floor(Math.random() * ops.length)];
        const a = Math.floor(Math.random() * 10) + 1;
        const b = Math.floor(Math.random() * 10) + 1;
        let res;
        if (op === '+') res = a + b;
        if (op === '-') res = a - b;
        if (op === '*') res = a * b;
        if (op === '/') res = (a / b).toFixed(1);

        return {
            m: 1,
            q: `What is the output of: print(${a} ${op} ${b})?`,
            a: [`${res}`, `${res + 1}`, `${res - 1}`],
            c: 0 // Always put correct answer first (we shuffle later)
        };
    }

    generateScenarioQuestion() {
        const crops = ["Tomato", "Wheat", "Corn", "Rice", "Potato"];
        const pests = ["Blight", "Rust", "Aphids", "Weevils", "Rot"];
        const solutions = ["Fungicide", "Fungicide", "Insecticide", "Pesticide", "Removal"];

        const idx = Math.floor(Math.random() * crops.length);
        const crop = crops[idx];
        const pest = pests[idx];
        const sol = solutions[idx];

        return {
            m: 3,
            q: `A farmer notices ${pest} on their ${crop}. What is the recommended action?`,
            a: [`Apply ${sol}`, "Add more water", "Harvest immediately"],
            c: 0
        };
    }

    generateMLSelectionQuestion() {
        const scenarios = [
            { task: "predicting future corn price", type: "Regression" },
            { task: "detecting if a leaf is healthy or sick", type: "Classification" },
            { task: "grouping similar soil types", type: "Clustering" },
            { task: "estimating tons of yield", type: "Regression" },
            { task: "identifying weed species", type: "Classification" }
        ];
        const s = scenarios[Math.floor(Math.random() * scenarios.length)];
        return {
            m: 2,
            q: `Which ML type is best for ${s.task}?`,
            a: [s.type, s.type === "Regression" ? "Classification" : "Regression", "Data Cleaning"],
            c: 0
        };
    }

    getExam(count = 50) {
        let examQuestions = [...this.staticQuestions];

        // Dynamically fill to reach 'count'
        while (examQuestions.length < count) {
            const r = Math.random();
            if (r < 0.33) examQuestions.push(this.generatePythonQuestion());
            else if (r < 0.66) examQuestions.push(this.generateScenarioQuestion());
            else examQuestions.push(this.generateMLSelectionQuestion());
        }

        // Shuffle Answers
        return examQuestions.map(q => {
            const correctAnswer = q.a[q.c];
            const shuffledAnswers = this.shuffleArray([...q.a]);
            return {
                question: q.q,
                answers: shuffledAnswers,
                correctIndex: shuffledAnswers.indexOf(correctAnswer),
                module: q.m
            };
        });
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}

// Global Exam Instance
window.FinalExam = new QuestionBank();

// UI Rendering Logic (Simple)
window.renderFinalExam = function (containerId) {
    const questions = window.FinalExam.getExam(50); // Generate 50 unique questions for this session
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `<div class="final-exam-container">
        <h1>🎓 Final Comprehensive Assessment</h1>
        <p>Answer the following questions to verify your expertise.</p>
        <form id="finalExamForm">`;

    questions.forEach((q, i) => {
        html += `
            <div class="exam-question">
                <p><strong>Q${i + 1}. ${q.question}</strong></p>
                <div class="options">
                    ${q.answers.map((ans, ai) => `
                        <label>
                            <input type="radio" name="q${i}" value="${ai}">
                            ${ans}
                        </label><br>
                    `).join('')}
                </div>
            </div>
        `;
    });

    html += `<button type="button" class="btn-premium" onclick="window.gradeExam()">Submit Assessment</button>
             </form>
             <div id="examResults" style="display:none; margin-top: 20px;"></div>
             </div>`;

    container.innerHTML = html;

    // Store key for grading
    window.currentExamKey = questions.map(q => q.correctIndex);
};

window.gradeExam = function () {
    const key = window.currentExamKey;
    let score = 0;

    key.forEach((correct, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        const qDiv = document.querySelector(`input[name="q${i}"]`).closest('.exam-question');

        if (selected && parseInt(selected.value) === correct) {
            score++;
            qDiv.style.borderLeft = "5px solid green";
        } else {
            qDiv.style.borderLeft = "5px solid red";
        }
    });

    const percentage = (score / key.length) * 100;
    const results = document.getElementById('examResults');
    results.style.display = 'block';
    results.innerHTML = `
        <h2>Result: ${score} / ${key.length} (${percentage.toFixed(1)}%)</h2>
        <p>${percentage > 70 ? "🎉 Outstanding! You are a Certified Agri-AI Expert." : "📚 Keep reviewing the modules."}</p>
    `;
    results.scrollIntoView({ behavior: 'smooth' });
}

// Story.js - Continuous narrative for Maya's journey
// 15 story segments, one for each topic

const storyData = {
    'module-1-topic-1': {
        title: "The Discovery",
        content: `
            <p>Maya stood in her withering wheat field, watching another season slip through her fingers. The traditional methods her family had used for generations weren't working anymore. Unpredictable weather, pests, and market prices left her feeling helpless.</p>
            <p>That evening, while scrolling through her phone, she stumbled upon an article: <em>"AI Helps Farmers Increase Yield by 30%."</em> Her heart raced. Could machines really help save her farm?</p>
            <p>"What is this... Artificial Intelligence?" she wondered, clicking the link that would change everything.</p>
        `
    },
    'module-1-topic-2': {
        title: "Understanding the Foundation",
        content: `
            <p>Maya spent the next week devouring every article she could find. But the more she read, the more confused she became. Algorithms, statistics, probability—it all seemed like a foreign language.</p>
            <p>Then her nephew, Arjun, a college student, visited. "Aunty, it's not magic," he smiled. "It's just math. The same math you use to calculate fertilizer costs, but faster."</p>
            <p>He showed her how data from her soil tests, rainfall records, and market prices could be organized. "First, we collect good data. Without that, even the smartest AI is useless."</p>
            <p>For the first time, Maya saw the connection between numbers and her farm's future.</p>
        `
    },
    'module-1-topic-3': {
        title: "Learning to Code",
        content: `
            <p>"Python? Like the snake?" Maya laughed when Arjun showed her Google Colab on his laptop.</p>
            <p>"Close! It's a programming language. See this?" He typed a simple command to calculate the average rainfall from her logbook over the past five years. The answer appeared instantly.</p>
            <p>Maya's eyes widened. What would have taken her hours with a calculator happened in seconds. She cautiously typed her first line of code, her hands trembling slightly:</p>
            <code>print("Hello, smart farm!")</code>
            <p>When "Hello, smart farm!" appeared on the screen, she laughed out loud. It was just a small step, but it felt enormous.</p>
        `
    },
    'module-1-topic-4': {
        title: "Building Tools",
        content: `
            <p>Over the following weeks, Maya practiced every morning before heading to her fields. Arjun had set up Google Colab on her phone, and she learned to use loops to process her farm records, functions to calculate costs, and lists to organize crop varieties.</p>
            <p>One night, she created a Python script that automatically categorized her expenses: seeds, fertilizer, labor, water. Years of messy notebooks transformed into clean, organized data.</p>
            <p>"I built this," she whispered, showing her husband. "Me. A farmer who barely passed math in school."</p>
            <p>She was no longer just learning. She was creating.</p>
        `
    },
    'module-2-topic-1': {
        title: "The Power of Libraries",
        content: `
            <p>Maya's confidence grew. Arjun introduced her to NumPy and Pandas—libraries that could handle thousands of data points effortlessly.</p>
            <p>She uploaded her soil test results from the past three years into a Pandas DataFrame. Within minutes, she could see patterns she'd never noticed before: the southeast corner always had low nitrogen, while the northern section consistently showed high pH.</p>
            <p>"This is like having X-ray vision for my fields!" she told her neighbor excitedly.</p>
            <p>Armed with this insight, she could finally make informed decisions about where to apply which fertilizer, instead of treating her entire farm uniformly.</p>
        `
    },
    'module-2-topic-2': {
        title: "Seeing the Invisible",
        content: `
            <p>Numbers were powerful, but Maya wanted to <em>see</em> them. Arjun taught her Matplotlib and Seaborn.</p>
            <p>She plotted her yield data over the years. The graph showed a heartbreaking downward trend. But overlaying it with rainfall data revealed something crucial: her yields dropped precisely when rainfall was erratic.</p>
            <p>"It's not me," she realized, staring at the visualization. "It's the weather pattern changing." This wasn't failure—it was a solvable problem.</p>
            <p>She created a correlation heatmap showing how each factor (rain, temperature, fertilizer) affected her yield. For the first time, farming didn't feel like gambling. It felt like science.</p>
        `
    },
    'module-2-topic-3': {
        title: "Predicting the Future",
        content: `
            <p>"Machine Learning" had sounded intimidating. But when Arjun explained it as "teaching computers to make educated guesses," Maya got it.</p>
            <p>Together, they built her first ML model: <strong>Linear Regression to predict wheat yield based on rainfall</strong>.</p>
            <p>Maya fed it five years of her data. The model drew a line through the scattered points. "Next season, if we get 120mm of rain," the model predicted, "you'll harvest around 3.2 tons."</p>
            <p>Maya was skeptical. But she recorded the prediction. When the season ended, her actual harvest was 3.18 tons. She stared at the number, stunned.</p>
            <p>"It knew," she breathed. "It actually knew."</p>
        `
    },
    'module-2-topic-4': {
        title: "Smart Decisions",
        content: `
            <p>Maya wanted to diversify. Should she plant tomatoes or cucumbers in the side plot? Instead of guessing, she built a Decision Tree classifier.</p>
            <p>She input soil type, sunlight hours, water availability. The tree asked questions: <em>Is soil pH > 6.5? Is there drip irrigation? Is sunlight > 6 hours?</em></p>
            <p>The answer: <strong>Tomatoes</strong>, with 87% confidence.</p>
            <p>She planted them. That season, her tomato yield broke all her previous records. Her neighbor, who'd planted cucumbers as usual, struggled.</p>
            <p>"How did you know?" he asked.</p>
            <p>Maya smiled. "The data told me."</p>
        `
    },
    'module-3-topic-1': {
        title: "Predicting the Harvest",
        content: `
            <p>Maya's success attracted attention. A local agricultural cooperative asked her to demonstrate her methods. This time, she built something ambitious: <strong>a multi-factor yield prediction model using Random Forest</strong>.</p>
            <p>It considered rainfall, temperature, soil quality, fertilizer amount—12 variables total. The model revealed that her <em>soil quality</em> mattered more than she'd thought, even more than rainfall.</p>
            <p>She diversified her crops based on the model's recommendations and for the first time in years, achieved a bumper harvest across all plots.</p>
            <p>The cooperative members were amazed. "Can you teach us?" they asked.</p>
        `
    },
    'module-3-topic-2': {
        title: "The Eyes of AI",
        content: `
            <p>Maya's biggest enemy was always arriving unannounced: <strong>disease</strong>. By the time she spotted brown spots on leaves, it was often too late.</p>
            <p>Arjun showed her an app called Plantix. "Take a photo," he said. She snapped a picture of a suspicious leaf. Within seconds: <em>"Early Blight detected. Recommended treatment: Copper-based fungicide."</em></p>
            <p>Maya was speechless. She downloaded the app immediately and started monitoring her fields daily. One morning, the app caught a fungal infection on day one—before her eyes could even see it.</p>
            <p>She treated it immediately. The disease didn't spread. The Computer Vision model had saved her crop.</p>
        `
    },
    'module-3-topic-3': {
        title: "Precision Farming",
        content: `
            <p>Maya's farm wasn't uniform. Some areas were rocky, others clay-rich. She'd been treating them all the same, wasting fertilizer and water.</p>
            <p>Arjun introduced her to <strong>Clustering with K-Means</strong>. They mapped her soil samples with GPS coordinates and ran the clustering algorithm.</p>
            <p>The result: Three distinct zones appeared. <strong>Zone 1 (high nitrogen)</strong> needed minimal fertilizer. <strong>Zone 2 (low nitrogen)</strong> needed heavy application. <strong>Zone 3 (medium)</strong> was in between.</p>
            <p>Maya created a zone map and adjusted her fertilizer application accordingly. Her costs dropped by 30%, and her yield increased by 15%.</p>
            <p>"This is Precision Agriculture," Arjun beamed.</p>
        `
    },
    'module-3-topic-4': {
        title: "Reading the Market",
        content: `
            <p>Growing the crop was one thing. Selling it profitably was another. Maya had always sold immediately after harvest, often when market prices were at their lowest because everyone else was selling too.</p>
            <p>This time, she analyzed five years of market price data using <strong>Time Series Analysis with ARIMA</strong>. The model revealed a clear pattern: prices always dipped in October (harvest season) and peaked in January (scarcity).</p>
            <p>Armed with this knowledge, Maya rented cold storage. She stored her wheat and waited. In January, when prices rose by 40%, she sold.</p>
            <p>Her profit that year doubled. She finally understood—<em>knowledge isn't just power. Knowledge is profit.</em></p>
        `
    },
    'module-4-topic-1': {
        title: "The Dream Project",
        content: `
            <p>The cooperative wanted Maya to lead a capstone project: <strong>Build an AI system for the entire village</strong>.</p>
            <p>Maya was nervous but excited. She started with the basics Arjun had taught her: <em>Problem Definition</em>. What problem were they solving?</p>
            <p>"Farmers don't know when to irrigate," one member said.</p>
            <p>"Pest attacks catch us by surprise," another added.</p>
            <p>Maya wrote it all down, then defined the scope: <strong>An integrated system that predicts irrigation needs and detects pests early</strong>.</p>
            <p>She created a project timeline, divided tasks among three teams, and scheduled weekly check-ins. Her farm had become her classroom, and now she was the teacher.</p>
        `
    },
    'module-4-topic-2': {
        title: "Building the Solution",
        content: `
            <p>Maya's team worked tirelessly. They collected data from 50 farms—soil moisture levels, weather patterns, pest sightings. The dataset was messy: missing values, typos, inconsistent formats.</p>
            <p>Maya cleaned it methodically, just as she'd learned. She engineered new features: <em>Days Since Last Rain</em>, <em>Average Soil Moisture</em>, <em>Pest Season Factor</em>.</p>
            <p>Then came model development. She trained a <strong>Random Forest for irrigation prediction</strong> and a <strong>Convolutional Neural Network for pest detection from images</strong>.</p>
            <p>The training took hours. Maya watched the progress bar, remembering her first "Hello, smart farm!" It felt like a lifetime ago.</p>
            <p>When the models finished training, the accuracy was 91%. She smiled. They'd done it.</p>
        `
    },
    'module-4-topic-3': {
        title: "Sharing the Harvest",
        content: `
            <p>Presentation day arrived. Maya stood before 200 farmers, her hands shaking slightly. On the screen behind her, her app glowed: <strong>"FarmSmart AI"</strong>.</p>
            <p>"This app will tell you when to irrigate and what pests to watch for," she began. "Not next week. Not tomorrow. Right now, in real-time."</p>
            <p>She demonstrated: uploading a leaf photo, getting instant pest diagnosis. Checking soil moisture, receiving irrigation recommendations. The crowd murmured in amazement.</p>
            <p>An elderly farmer stood up. "Three years ago, you were struggling like the rest of us. How did you learn all this?"</p>
            <p>Maya smiled. "I started by asking one question: <em>What is AI?</em> Then I learned one concept at a time. If I can do it, anyone can."</p>
            <p>The room erupted in applause. Maya had transformed from a struggling farmer into a tech innovator, and now, an inspiration.</p>
            <p><strong>Her journey wasn't just about saving one farm. It was about showing that technology belongs to everyone—even those who plant seeds in soil.</strong></p>
        `
    }
};

// Story progression tracking
class StoryManager {
    constructor() {
        this.currentSegment = null;
    }

    getStory(topicId) {
        return storyData[topicId] || {
            title: "Continue Learning",
            content: "<p>Continue your journey in AI and Machine Learning...</p>"
        };
    }

    displayStory(topicId) {
        const story = this.getStory(topicId);
        const storyContent = document.getElementById('storyContent');

        if (storyContent) {
            storyContent.innerHTML = `
                <h3>${story.title}</h3>
                ${story.content}
            `;
        }

        this.currentSegment = topicId;
    }
}

// Export
const storyManager = new StoryManager();

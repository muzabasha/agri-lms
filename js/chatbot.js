/**
 * AgriBot - Intelligent Course Assistant
 * Provides answers in English, Kannada, and Hindi.
 */

class AgriBot {
    constructor() {
        this.isOpen = false;
        this.language = 'en'; // en, kn, hi

        // Knowledge Base
        this.knowledge = {
            en: {
                welcome: "Hello! I'm AgriBot. I'm here to support your learning journey in AI for Agriculture. Ask me about the Course, Modules, or Certification!",
                unknown: "I'm still learning! Try asking about: 'What is this course?', 'How to get a certificate?', 'Is it free?', 'Python basics', or 'Job opportunities'.",
                keywords: {
                    'module': "We have 5 comprehensive modules dealing with AI basics, Data Science, Computer Vision, and a Capstone Project.",
                    'course': "This is the 'AI/ML in Agriculture' training program, designed to teach you how to apply technology to farming.",
                    'start': "To begin, click on 'Module 1' in the sidebar on the left. It's the best place to start!",
                    'certificate': "Yes! You will receive a verified certificate upon completing all 5 modules and passing the final assessment.",
                    'python': "Module 1 covers Python essentials. It is the primary language used for AI in this course.",
                    'job': "This course prepares you for roles like Agri-Tech Data Analyst, AI Agriculture Specialist, and Smart Farming Consultant.",
                    'cost': "This training program is currently provided free of charge for students.",
                    'free': "Yes, the course materials and access are completely free.",
                    'help': "I can help! You can navigate using the sidebar. If you are stuck, try the 'Watch Tour' button on the home page.",
                    'duration': "The course is self-paced. Typically, it takes about 4-6 weeks to complete all modules comfortably."
                }
            },
            kn: {
                welcome: "ನಮಸ್ಕಾರ! ನಾನು ಅಗ್ರಿಬಾಟ್. ಕೃಷಿಯಲ್ಲಿ ಎಐ (AI) ಕಲಿಯಲು ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ಇಲ್ಲಿದ್ದೇನೆ. ಕೋರ್ಸ್ ಅಥವಾ ಪ್ರಮಾಣಪತ್ರದ ಬಗ್ಗೆ ಕೇಳಿ.",
                unknown: "ಕ್ಷಮಿಸಿ, ನನಗೆ ಅದು ಸರಿಯಾಗಿ ಅರ್ಥವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು 'ಕೋರ್ಸ್', 'ಪ್ರಮಾಣಪತ್ರ', 'ಕೆಲಸ' ಅಥವಾ 'ಮಾಡ್ಯೂಲ್' ಬಗ್ಗೆ ಕೇಳಿ.",
                keywords: {
                    'module': "ನಮ್ಮಲ್ಲಿ ಐದು ಮಾಡ್ಯೂಲ್‌ಗಳಿವೆ. ಇವು ಎಐ ಮೂಲಗಳು, ಡೇಟಾ ಸೈನ್ಸ್ ಮತ್ತು ಕಂಪ್ಯೂಟರ್ ವಿಷನ್ ಬಗ್ಗೆ ತಿಳಿಸುತ್ತವೆ.",
                    'ಮಾಡ್ಯೂಲ್': "ನಮ್ಮಲ್ಲಿ ಐದು ಮಾಡ್ಯೂಲ್‌ಗಳಿವೆ. ಇವು ಎಐ ಮೂಲಗಳು, ಡೇಟಾ ಸೈನ್ಸ್ ಮತ್ತು ಕಂಪ್ಯೂಟರ್ ವಿಷನ್ ಬಗ್ಗೆ ತಿಳಿಸುತ್ತವೆ.",
                    'course': "ಇದು 'ಕೃಷಿಯಲ್ಲಿ ಎಐ/ಎಂಎಲ್' (AI/ML in Agriculture) ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮ. ಇದು ರೈತರಿಗೆ ತಂತ್ರಜ್ಞಾನವನ್ನು ಹೇಗೆ ಬಳಸಬೇಕೆಂದು ಕಲಿಸುತ್ತದೆ.",
                    'ಕೋರ್ಸ್': "ಇದು 'ಕೃಷಿಯಲ್ಲಿ ಎಐ/ಎಂಎಲ್' (AI/ML in Agriculture) ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮ. ಇದು ರೈತರಿಗೆ ತಂತ್ರಜ್ಞಾನವನ್ನು ಹೇಗೆ ಬಳಸಬೇಕೆಂದು ಕಲಿಸುತ್ತದೆ.",
                    'start': "ಪ್ರಾರಂಭಿಸಲು, ಎಡಭಾಗದಲ್ಲಿರುವ ಸೈಡ್‌ಬಾರ್‌ನಲ್ಲಿ 'ಮಾಡ್ಯೂಲ್ 1' ಅನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ.",
                    'ಪ್ರಾರಂಭ': "ಪ್ರಾರಂಭಿಸಲು, ಎಡಭಾಗದಲ್ಲಿರುವ ಸೈಡ್‌ಬಾರ್‌ನಲ್ಲಿ 'ಮಾಡ್ಯೂಲ್ 1' ಅನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ.",
                    'certificate': "ಹೌದು! ಎಲ್ಲಾ ಐದು ಮಾಡ್ಯೂಲ್‌ಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿದ ನಂತರ ನೀವು ಅಧಿಕೃತ ಪ್ರಮಾಣಪತ್ರವನ್ನು ಪಡೆಯುತ್ತೀರಿ.",
                    'ಪ್ರಮಾಣಪತ್ರ': "ಹೌದು! ಎಲ್ಲಾ ಐದು ಮಾಡ್ಯೂಲ್‌ಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿದ ನಂತರ ನೀವು ಅಧಿಕೃತ ಪ್ರಮಾಣಪತ್ರವನ್ನು ಪಡೆಯುತ್ತೀರಿ.",
                    'python': "ಮಾಡ್ಯೂಲ್ 1 ಪೈಥಾನ್ ಭಾಷೆಯ ಮೂಲಭೂತ ಅಂಶಗಳನ್ನು ಕಲಿಸುತ್ತದೆ. ಕೃಷಿ ಎಐಗೆ ಪೈಥಾನ್ ಮುಖ್ಯವಾಗಿದೆ.",
                    'ಪೈಥಾನ್': "ಮಾಡ್ಯೂಲ್ 1 ಪೈಥಾನ್ ಭಾಷೆಯ ಮೂಲಭೂತ ಅಂಶಗಳನ್ನು ಕಲಿಸುತ್ತದೆ. ಕೃಷಿ ಎಐಗೆ ಪೈಥಾನ್ ಮುಖ್ಯವಾಗಿದೆ.",
                    'job': "ಈ ಕೋರ್ಸ್ ನಿಮ್ಮನ್ನು ಅಗ್ರಿ-ಟೆಕ್ ಅನಾಲಿಸ್ಟ್ ಮತ್ತು ಸ್ಮಾರ್ಟ್ ಫಾರ್ಮಿಂಗ್ ಕನ್ಸಲ್ಟೆಂಟ್ ಹುದ್ದೆಗಳಿಗೆ ಸಿದ್ಧಪಡಿಸುತ್ತದೆ.",
                    'ಕೆಲಸ': "ಈ ಕೋರ್ಸ್ ನಿಮ್ಮನ್ನು ಅಗ್ರಿ-ಟೆಕ್ ಅನಾಲಿಸ್ಟ್ ಮತ್ತು ಸ್ಮಾರ್ಟ್ ಫಾರ್ಮಿಂಗ್ ಕನ್ಸಲ್ಟೆಂಟ್ ಹುದ್ದೆಗಳಿಗೆ ಸಿದ್ಧಪಡಿಸುತ್ತದೆ.",
                    'cost': "ಈ ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮವು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸಂಪೂರ್ಣವಾಗಿ ಉಚಿತವಾಗಿದೆ.",
                    'ಬೆಲೆ': "ಈ ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮವು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸಂಪೂರ್ಣವಾಗಿ ಉಚಿತವಾಗಿದೆ.",
                    'free': "ಹೌದು, ಕೋರ್ಸ್ ವಸ್ತುಗಳು ಮತ್ತು ಪ್ರವೇಶ ಸಂಪೂರ್ಣ ಉಚಿತ.",
                    'ಉಚಿತ': "ಹೌದು, ಕೋರ್ಸ್ ವಸ್ತುಗಳು ಮತ್ತು ಪ್ರವೇಶ ಸಂಪೂರ್ಣ ಉಚಿತ.",
                    'help': "ಸಹಾಯ ಬೇಕೇ? ಸೈಡ್‌ಬಾರ್ ಬಳಸಿ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ. ಅಥವಾ ಮುಖಪುಟದಲ್ಲಿ 'ವೀಕ್ಷಿಸಿ' (Watch Tour) ಬಟನ್ ಒತ್ತಿ.",
                    'ಸಹಾಯ': "ಸಹಾಯ ಬೇಕೇ? ಸೈಡ್‌ಬಾರ್ ಬಳಸಿ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ. ಅಥವಾ ಮುಖಪುಟದಲ್ಲಿ 'ವೀಕ್ಷಿಸಿ' (Watch Tour) ಬಟನ್ ಒತ್ತಿ.",
                    'duration': "ಇದು ಸ್ವಯಂ-ಗತಿಯ ಕೋರ್ಸ್. ಸಾಮಾನ್ಯವಾಗಿ, ಎಲ್ಲಾ ಮಾಡ್ಯೂಲ್‌ಗಳನ್ನು ಮುಗಿಸಲು 4 ರಿಂದ 6 ವಾರಗಳು ಬೇಕಾಗುತ್ತವೆ.",
                    'ಸಮಯ': "ಇದು ಸ್ವಯಂ-ಗತಿಯ ಕೋರ್ಸ್. ಸಾಮಾನ್ಯವಾಗಿ, ಎಲ್ಲಾ ಮಾಡ್ಯೂಲ್‌ಗಳನ್ನು ಮುಗಿಸಲು 4 ರಿಂದ 6 ವಾರಗಳು ಬೇಕಾಗುತ್ತವೆ."
                }
            },
            hi: {
                welcome: "नमस्ते! मैं एग्रीबॉट हूँ। मैं कृषि में एआई सीखने में आपकी मदद करने आया हूँ। आप मुझसे कोर्स या सर्टिफिकेट के बारे में पूछ सकते हैं।",
                unknown: "क्षमा करें, मुझे यह समझ नहीं आया। कृप्या 'कोर्स', 'सर्टिफिकेट', 'नौकरी' या 'मॉड्यूल' के बारे में पूछें।",
                keywords: {
                    'module': "हमारे पास पांच मॉड्यूल हैं जो एआई बेसिक्स, डेटा साइंस और कंप्यूटर विजन को कवर करते हैं।",
                    'मोड्यूल': "हमारे पास पांच मॉड्यूल हैं जो एआई बेसिक्स, डेटा साइंस और कंप्यूटर विजन को कवर करते हैं।",
                    'course': "यह 'कृषि में एआई/एमएल' (AI/ML in Agriculture) प्रशिक्षण कार्यक्रम है, जिसे खेती में तकनीक का उपयोग सिखाने के लिए बनाया गया है।",
                    'कोर्स': "यह 'कृषि में एआई/एमएल' (AI/ML in Agriculture) प्रशिक्षण कार्यक्रम है, जिसे खेती में तकनीक का उपयोग सिखाने के लिए बनाया गया है।",
                    'start': "शुरू करने के लिए, बाईं ओर साइडबार में 'मॉड्यूल 1' पर क्लिक करें।",
                    'शुरू': "शुरू करने के लिए, बाईं ओर साइडबार में 'मॉड्यूल 1' पर क्लिक करें।",
                    'certificate': "हाँ! सभी पांच मॉड्यूल पूरे करने और अंतिम परीक्षा पास करने के बाद आपको एक सत्यापित प्रमाण पत्र मिलेगा।",
                    'सर्टिफिकेट': "हाँ! सभी पांच मॉड्यूल पूरे करने और अंतिम परीक्षा पास करने के बाद आपको एक सत्यापित प्रमाण पत्र मिलेगा।",
                    'प्रमाण पत्र': "हाँ! सभी पांच मॉड्यूल पूरे करने और अंतिम परीक्षा पास करने के बाद आपको एक सत्यापित प्रमाण पत्र मिलेगा।",
                    'python': "मॉड्यूल 1 में पायथन की मूल बातें सिखाई गई हैं। यह इस कोर्स के लिए मुख्य भाषा है।",
                    'पायथन': "मॉड्यूल 1 में पायथन की मूल बातें सिखाई गई हैं। यह इस कोर्स के लिए मुख्य भाषा है।",
                    'job': "यह कोर्स आपको एग्री-टेक विश्लेषक और स्मार्ट फार्मिंग सलाहकार जैसी नौकरियों के लिए तैयार करता है।",
                    'नौकरी': "यह कोर्स आपको एग्री-टेक विश्लेषक और स्मार्ट फार्मिंग सलाहकार जैसी नौकरियों के लिए तैयार करता है।",
                    'cost': "यह प्रशिक्षण कार्यक्रम छात्रों के लिए पूरी तरह से मुफ्त है।",
                    'कीमत': "यह प्रशिक्षण कार्यक्रम छात्रों के लिए पूरी तरह से मुफ्त है।",
                    'free': "हाँ, कोर्स सामग्री और पहुंच पूरी तरह से मुफ्त है।",
                    'मुफ्त': "हाँ, कोर्स सामग्री और पहुंच पूरी तरह से मुफ्त है।",
                    'help': "मैं मदद कर सकता हूँ! आप साइडबार का उपयोग करके नेविगेट कर सकते हैं। या होम पेज पर 'टूर देखें' (Watch Tour) बटन दबाएं।",
                    'मदद': "मैं मदद कर सकता हूँ! आप साइडबार का उपयोग करके नेविगेट कर सकते हैं। या होम पेज पर 'टूर देखें' (Watch Tour) बटन दबाएं।",
                    'duration': "यह अपनी गति से सीखने वाला कोर्स है। आमतौर पर, सभी मॉड्यूल पूरा करने में 4-6 सप्ताह लगते हैं।",
                    'समय': "यह अपनी गति से सीखने वाला कोर्स है। आमतौर पर, सभी मॉड्यूल पूरा करने में 4-6 सप्ताह लगते हैं."
                }
            }
        };

        this.init();
    }

    init() {
        this.createUI();
        this.attachListeners();
        this.speechEnabled = false; // Default off

        // Pre-load voices for smoother experience
        this.voices = [];
        if (window.speechSynthesis) {
            const loadVoices = () => {
                this.voices = window.speechSynthesis.getVoices();
            };
            loadVoices();
            if (window.speechSynthesis.onvoiceschanged !== undefined) {
                window.speechSynthesis.onvoiceschanged = loadVoices;
            }
        }
    }

    createUI() {
        // ... (UI creation code remains the same, skipping to keep this edit focused if possible, but replace_file_content needs contiguity. The user didn't ask to change UI)
        // actually I can't skip UI creation lines if I'm replacing init unless I target carefully.
        // Let's just target 'init' and 'speakResponse'.
        // Wait, 'createUI' is between them? No, init is at top. speakResponse is at bottom.
        // I will do two edits.
    }
    // ...

    createUI() {
        // Create Toggle Button (Floating Bottom Right)
        this.toggleBtn = document.createElement('button');
        this.toggleBtn.className = 'chatbot-toggle pulse';
        this.toggleBtn.innerHTML = `<i class="fas fa-robot"></i><span class="badge">1</span>`;
        this.toggleBtn.style.display = 'flex'; // Ensure visible
        document.body.appendChild(this.toggleBtn);

        // Create Chat Window
        this.window = document.createElement('div');
        this.window.className = 'chatbot-window';
        this.window.innerHTML = `
            <div class="chat-header">
                <div class="chat-title">
                    <div class="chat-avatar"><i class="fas fa-robot"></i></div>
                    <div>
                        <div style="font-weight: bold;">AgriBot</div>
                        <div style="font-size: 0.8em; opacity: 0.9;">AI Tutor</div>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <button id="voiceToggle" class="voice-toggle" title="Toggle Voice Output">
                        <i class="fas fa-volume-mute"></i>
                    </button>
                    <select class="lang-select" id="botLang">
                        <option value="en">English</option>
                        <option value="kn">ಕನ್ನಡ</option>
                        <option value="hi">हिंदी</option>
                    </select>
                </div>
                <button id="closeChat" style="background:none; border:none; color:white; cursor:pointer;"><i class="fas fa-times"></i></button>
            </div>
            <div class="chat-messages" id="chatMessages">
                <div class="message bot">
                    ${this.knowledge[this.language].welcome}
                </div>
            </div>
            <div class="typing-indicator" id="typingIndicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
            <div class="chat-suggestions" id="chatSuggestions">
                <div class="suggestion-chip">Modules</div>
                <div class="suggestion-chip">Certificate</div>
                <div class="suggestion-chip">Python</div>
            </div>
            <div class="chat-input-area">
                <input type="text" class="chat-input" id="chatInput" placeholder="Ask a question...">
                <button class="chat-send-btn" id="sendChat"><i class="fas fa-paper-plane"></i></button>
            </div>
        `;
        document.body.appendChild(this.window);
    }

    attachListeners() {
        // Floating Toggle
        if (this.toggleBtn) {
            this.toggleBtn.addEventListener('click', () => this.toggle());
        }

        // Header Trigger (Legacy support if re-added later, safe to keep or remove)
        const headerBtn = document.getElementById('headerChatBtn');
        if (headerBtn) {
            headerBtn.addEventListener('click', () => this.toggle());
        }

        document.getElementById('closeChat').addEventListener('click', () => this.toggle());

        // Voice Toggle
        document.getElementById('voiceToggle').addEventListener('click', (e) => {
            this.speechEnabled = !this.speechEnabled;
            const icon = e.currentTarget.querySelector('i');
            if (this.speechEnabled) {
                icon.className = 'fas fa-volume-up';
                e.currentTarget.style.color = '#10b981'; // Green active
            } else {
                icon.className = 'fas fa-volume-mute';
                e.currentTarget.style.color = 'white';
                window.speechSynthesis.cancel();
            }
        });

        document.getElementById('sendChat').addEventListener('click', () => this.sendMessage());
        document.getElementById('chatInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        document.getElementById('botLang').addEventListener('change', (e) => {
            this.language = e.target.value;
            this.addBotMessage(this.knowledge[this.language].welcome);
        });

        // Delegate suggestions
        document.getElementById('chatSuggestions').addEventListener('click', (e) => {
            if (e.target.classList.contains('suggestion-chip')) {
                const text = e.target.innerText;
                this.addMessage(text, 'user');
                this.processReply(text);
            }
        });
    }

    toggle() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            // Close Tour if active
            if (window.tourSystem && window.tourSystem.isActive) {
                window.tourSystem.endTour();
            }
            this.window.classList.add('active');
            // Check if we need to adjust position based on header button?
            // Existing CSS puts it bottom right, which is fine.
        } else {
            this.window.classList.remove('active');
            window.speechSynthesis.cancel(); // Stop speech when closing
        }
    }

    sendMessage() {
        const input = document.getElementById('chatInput');
        const text = input.value.trim();
        if (!text) return;

        this.addMessage(text, 'user');
        input.value = '';
        this.processReply(text);
    }

    addMessage(text, type) {
        const container = document.getElementById('chatMessages');
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${type}`;
        msgDiv.innerText = text;
        container.appendChild(msgDiv);
        container.scrollTop = container.scrollHeight;
    }

    addBotMessage(text) {
        const indicator = document.getElementById('typingIndicator');
        indicator.style.display = 'flex';

        // Simulate typing delay
        setTimeout(() => {
            indicator.style.display = 'none';
            this.addMessage(text, 'bot');
        }, 1000);
    }

    processReply(userText) {
        const lowerText = userText.toLowerCase();
        let reply = this.knowledge[this.language].unknown;

        // Simple keyword matching
        const keywords = this.knowledge[this.language].keywords;

        for (const key in keywords) {
            if (lowerText.includes(key.toLowerCase())) {
                reply = keywords[key];
                break;
            }
        }

        // Fallback for English keywords if in other lang but no match? 
        // For simplicity, strict match on current lang keywords.

        this.addBotMessage(reply);

        // Voice Output
        if (this.speechEnabled) {
            this.speakResponse(reply);
        }
    }

    speakResponse(text) {
        if (!window.speechSynthesis) return;

        // Stop any current speech
        window.speechSynthesis.cancel();

        // Strip HTML
        const safeText = text.replace(/<[^>]*>/g, '');
        const utterance = new SpeechSynthesisUtterance(safeText);

        // Map language code to BCP 47
        let langCode = 'en-US';
        if (this.language === 'hi') langCode = 'hi-IN';
        if (this.language === 'kn') langCode = 'kn-IN';

        utterance.lang = langCode;

        // Robust Voice Selection
        const voices = this.voices.length > 0 ? this.voices : window.speechSynthesis.getVoices();
        let selectedVoice = null;

        if (this.language === 'kn') {
            // Priority 1: Specific "Kannada" named voice (Google/Microsoft)
            selectedVoice = voices.find(v => v.name.includes('Kannada') || v.lang === 'kn-IN');
        } else if (this.language === 'hi') {
            // Priority 1: Specific "Hindi" named voice
            selectedVoice = voices.find(v => v.name.includes('Hindi') || v.name.includes('Google हिन्दी') || v.lang === 'hi-IN');
        } else {
            // English: Prefer Female Voices (aligned with Tour)
            const preferred = ['Google US English', 'Microsoft Zira', 'Samantha'];
            for (const name of preferred) {
                selectedVoice = voices.find(v => v.name.includes(name));
                if (selectedVoice) break;
            }
            if (!selectedVoice) selectedVoice = voices.find(v => v.lang.startsWith('en'));
        }

        // Fallback: If we didn't find a specific voice for KN/HI, we DO NOT force English.
        // We leave selectedVoice as null, so the browser uses its internal default for the 'lang' code provided.
        // This is critical because forcing an English voice to read Kannada results in it only reading numbers.

        if (selectedVoice) {
            utterance.voice = selectedVoice;
            console.log("AgriBot Speaking with:", selectedVoice.name);
        } else {
            console.log("AgriBot using browser default for:", langCode);
        }

        // Adjustments for clarity
        utterance.rate = (this.language === 'en') ? 0.95 : 0.9; // Slower for Indian languages
        utterance.pitch = 1.0;

        window.speechSynthesis.speak(utterance);
    }
}

// Init
window.agriBot = new AgriBot();

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
                welcome: "Hello! I'm AgriBot. I can help you with course queries. How can I assist you?",
                modules: "We have 5 modules covering AI basics, Data Science, and Deep Learning.",
                start: "Click on 'Module 1' in the sidebar to begin your journey!",
                certificate: "You will receive a certificate after completing all 5 modules and the final project.",
                unknown: "I'm not sure about that yet. Try asking about 'Modules', 'Certificate', or 'Python'.",
                keywords: {
                    'module': "We have 5 modules covering AI basics, Data Science, and Deep Learning.",
                    'start': "Click on 'Module 1' in the sidebar to begin your journey!",
                    'certificate': "You will receive a certificate after completing all 5 modules.",
                    'python': "Module 1 covers Python basics for Agriculture."
                }
            },
            kn: {
                welcome: "ನಮಸ್ಕಾರ! ನಾನು ಅಗ್ರಿಬಾಟ್. ಕೃಷಿ ಕೋರ್ಸ್ ಬಗ್ಗೆ ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ಇಲ್ಲಿದ್ದೇನೆ.",
                modules: "ನಮ್ಮಲ್ಲಿ ಎಐ ಮತ್ತು ಡೇಟಾ ಸೈನ್ಸ್ ಕುರಿತು 5 ಮಾಡ್ಯೂಲ್‌ಗಳಿವೆ.",
                start: "ಪ್ರಾರಂಭಿಸಲು ಸೈಡ್‌ಬಾರ್‌ನಲ್ಲಿರುವ 'ಮಾಡ್ಯೂಲ್ 1' ಅನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ!",
                certificate: "ಎಲ್ಲಾ 5 ಮಾಡ್ಯೂಲ್‌ಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿದ ನಂತರ ನೀವು ಪ್ರಮಾಣಪತ್ರವನ್ನು ಪಡೆಯುತ್ತೀರಿ.",
                unknown: "ಕ್ಷಮಿಸಿ, ನನಗೆ ಅದು ಅರ್ಥವಾಗಲಿಲ್ಲ. 'ಮಾಡ್ಯೂಲ್' ಅಥವಾ 'ಪ್ರಮಾಣಪತ್ರ' ಬಗ್ಗೆ ಕೇಳಿ.",
                keywords: {
                    'module': "ನಮ್ಮಲ್ಲಿ ಎಐ ಮತ್ತು ಡೇಟಾ ಸೈನ್ಸ್ ಕುರಿತು 5 ಮಾಡ್ಯೂಲ್‌ಗಳಿವೆ.",
                    'start': "ಪ್ರಾರಂಭಿಸಲು ಸೈಡ್‌ಬಾರ್‌ನಲ್ಲಿರುವ 'ಮಾಡ್ಯೂಲ್ 1' ಅನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ!",
                    'certificate': "ಎಲ್ಲಾ 5 ಮಾಡ್ಯೂಲ್‌ಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿದ ನಂತರ ನೀವು ಪ್ರಮಾಣಪತ್ರವನ್ನು ಪಡೆಯುತ್ತೀರಿ.",
                    'python': "ಮಾಡ್ಯೂಲ್ 1 ಕೃಷಿಗಾಗಿ ಪೈಥಾನ್ ಮೂಲಗಳನ್ನು ಕಲಿಸುತ್ತದೆ."
                }
            },
            hi: {
                welcome: "नमस्ते! मैं एग्रीबॉट हूँ। मैं इस कोर्स में आपकी मदद कर सकता हूँ।",
                modules: "हमारे पास एआई और डेटा साइंस पर 5 मॉड्यूल हैं।",
                start: "शुरू करने के लिए साइडबार में 'मॉड्यूल 1' पर क्लिक करें!",
                certificate: "सभी 5 मॉड्यूल पूरे करने के बाद आपको प्रमाण पत्र मिलेगा।",
                unknown: "क्षमा करें, मुझे समझ नहीं आया। कृप्या 'मॉड्यूल' या 'सर्टिफिकेट' के बारे में पूछें।",
                keywords: {
                    'module': "हमारे पास एआई और डेटा साइंस पर 5 मॉड्यूल हैं।",
                    'start': "शुरू करने के लिए साइडबार में 'मॉड्यूल 1' पर क्लिक करें!",
                    'certificate': "सभी 5 मॉड्यूल पूरे करने के बाद आपको प्रमाण पत्र मिलेगा।",
                    'python': "मॉड्यूल 1 कृषि के लिए पायथन मूल बातें सिखाता है।"
                }
            }
        };

        this.init();
    }

    init() {
        this.createUI();
        this.attachListeners();
        this.speechEnabled = false; // Default off
    }

    createUI() {
        // Floating button moved to Header (HTML)

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
        // Header Trigger
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

        // Strip HTML
        const safeText = text.replace(/<[^>]*>/g, '');
        const utterance = new SpeechSynthesisUtterance(safeText);

        // Map language code to BCP 47
        let langCode = 'en-US';
        if (this.language === 'hi') langCode = 'hi-IN';
        if (this.language === 'kn') langCode = 'kn-IN';

        utterance.lang = langCode;

        // Try to find a specific voice
        const voices = window.speechSynthesis.getVoices();
        const voice = voices.find(v => v.lang.includes(langCode));
        if (voice) {
            utterance.voice = voice;
        }

        window.speechSynthesis.speak(utterance);
    }
}

// Init
const agriBot = new AgriBot();

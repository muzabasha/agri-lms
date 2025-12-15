// Router.js - Handle navigation between topics

class Router {
    constructor() {
        this.currentRoute = null;
        this.init();
    }

    init() {
        // Handle hash changes
        window.addEventListener('hashchange', () => this.handleRoute());

        // Handle initial load
        this.handleRoute();
    }

    handleRoute() {
        const hash = window.location.hash.slice(1) || 'home';
        this.navigate(hash, false);
    }

    navigate(route, updateHash = true) {
        this.currentRoute = route;

        if (updateHash) {
            window.location.hash = route;
        }

        // Hide/show screens
        const welcomeScreen = document.getElementById('welcomeScreen');
        const topicContent = document.getElementById('topicContent');
        const moduleOverview = document.getElementById('moduleOverview');

        // Reset displays
        if (welcomeScreen) welcomeScreen.style.display = 'none';
        if (topicContent) topicContent.style.display = 'none';
        if (moduleOverview) moduleOverview.style.display = 'none';

        if (route === '' || route === 'home') {
            welcomeScreen.style.display = 'block';
        } else if (route === 'final-exam') {
            // Show topic content container but hide tabs (special mode)
            if (topicContent) topicContent.style.display = 'block';

            // Explicitly hide Story Section
            const storySection = document.getElementById('storySection');
            if (storySection) storySection.style.display = 'none';

            // Hide Handout Panel for Final Exam
            const handoutPanel = document.getElementById('handout');
            if (handoutPanel) handoutPanel.style.display = 'none';

            // Hide standard tabs (if they exist)
            const contentTabsExam = document.querySelector('.content-tabs');
            if (contentTabsExam) contentTabsExam.style.display = 'none';
            const tabContent = document.querySelector('.tab-content');
            if (tabContent) tabContent.style.display = 'block';

            // Hide all panels except quiz
            document.querySelectorAll('.tab-panel').forEach(p => p.style.display = 'none');
            const quizPanel = document.getElementById('quiz');
            if (quizPanel) {
                quizPanel.style.display = 'block';
                quizPanel.classList.add('active');

                // Load the Grand Quiz
                if (window.quizSystem) {
                    quizPanel.innerHTML = window.quizSystem.loadQuiz('final-exam');
                }
            }
        } else if (route.startsWith('module-')) {
            moduleOverview.style.display = 'block';
            const moduleId = route.split('-')[1];
            this.loadModule(moduleId);
        } else {
            // Standard topic view
            if (topicContent) topicContent.style.display = 'block';
            const contentTabs = document.querySelector('.content-tabs');
            if (contentTabs) contentTabs.style.display = 'flex'; // Restore tabs if they exist
            this.loadTopic(route);
        }

        // Update active state in sidebar
        document.querySelectorAll('.topic-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-topic') === route) {
                link.classList.add('active');
            }
        });
    }

    loadTopic(topicId) {
        // Try to find topic in comprehensive structure first (primary source)
        let topic = null;
        let moduleTitle = "";

        if (typeof comprehensiveCourseStructure !== 'undefined') {
            for (const module of comprehensiveCourseStructure.modules) {
                const found = module.topics.find(t => t.id === topicId);
                if (found) {
                    topic = found;
                    moduleTitle = module.title;
                    break;
                }
            }
        }

        // Fallback to legacy content.js if not found (or for specific content fields like 'code' if missing in new struct)
        const legacyTopic = courseContent.getTopic(topicId);

        if (!topic && !legacyTopic) {
            console.error('Topic not found:', topicId);
            return;
        }

        // If found in new structure, use it. If only in legacy, use that.
        // We might want to merge them if legacy has rich content (handout/code) but new has metadata.
        if (topic && legacyTopic) {
            // Merge legacy content into new topic structure
            topic = {
                ...topic,
                handout: legacyTopic.handout,
                code: legacyTopic.code,
                presentation: legacyTopic.presentation,
                colabUrl: legacyTopic.colabUrl
            };
        } else if (legacyTopic) {
            topic = legacyTopic;
        }

        // Story feature removed
        // storyManager.displayStory(topicId);

        // Load Handout (Primary and ONLY content in handout-only mode)
        this.loadHandout(topic);

        // Removed: Supplemental resources (tabs removed from UI)
        // this.loadCodeLab(topic);
        // this.loadPresentation(topic);
        // this.loadActivity(topic.id);
        // Load Quiz
        this.loadQuiz(topic);


        // Update navigation buttons
        this.updateNavButtons(topicId);

        // Track current topic
        progressTracker.setCurrentTopic(topicId);

        // Scroll to top
        window.scrollTo(0, 0);
    }


    loadHandout(topic) {
        const handoutPanel = document.getElementById('handout');

        // Show loading state
        // Update functionality using View Transitions API for modern, instant feel
        const updateContent = () => {
            let content = "";

            console.log('[ROUTER] loadHandout called with topic:', topic);

            // PRIORITY 0: Try HandoutLoader (comprehensive handouts with farming analogies)
            if (typeof HandoutLoader !== 'undefined') {
                // Force init if needed to ensure content availability
                if (!HandoutLoader.initialized) HandoutLoader.init();

                if (HandoutLoader.hasHandout(topic.id)) {
                    try {
                        content = HandoutLoader.getHandout(topic.id);
                        console.log('[SUCCESS] Comprehensive handout loaded from HandoutLoader for:', topic.id);
                    } catch (e) {
                        console.error('[ERROR] HandoutLoader.getHandout() error:', e);
                        content = null;
                    }
                }
            }

            // PRIORITY 1: Try lectureSystem (for comprehensive handouts)
            if (!content && typeof lectureSystem !== 'undefined') {
                try {
                    const handoutObj = lectureSystem.getContent(topic.id);
                    if (handoutObj && handoutObj.handout) {
                        content = handoutObj.handout;
                        console.log('[SUCCESS] Handout loaded from lectureSystem for topic.id:', topic.id);
                    }
                } catch (e) {
                    console.error('[ERROR] lectureSystem error:', e);
                }
            }

            // PRIORITY 2: Fall back to topic.handout from content.js
            if (!content) {
                if (topic.handout) {
                    content = topic.handout;
                    console.log('[SUCCESS] Handout loaded from topic.handout for topic.id:', topic.id);
                } else {
                    content = `<div style='background:#ffcccc; color:#990000; padding:20px; border-radius:8px;'><h3>⚠️ Handout Not Available</h3><p>Topic ID: <code>${topic.id}</code></p><p>Neither lectureSystem nor topic.handout has content for this topic.</p></div>`;
                    console.error('[ERROR] No handout found for topic.id:', topic.id);
                }
            }

            // Render content instantly
            handoutPanel.innerHTML = `
                <div class="handout-content fade-in-up">
                    ${content}
                </div>
            `;
            handoutPanel.style.display = 'block'; // Ensure visible for topics

            // Re-highlight code snippets
            if (window.hljs) window.hljs.highlightAll();
        };

        // Use View Transition if supported (Modern Chrome/Edge)
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                updateContent();
            });
        } else {
            // Fallback for Safari/Firefox
            updateContent();
        }
    }

    loadCodeLab(topic) {
        const codePanel = document.getElementById('code');

        // Use LabSystem if available (new method)
        let labData = null;
        if (typeof labSystem !== 'undefined') {
            labData = labSystem.getLabContent(topic.id);
        } else {
            // Fallback (old method)
            labData = {
                code: topic.code,
                description: topic.codeDescription,
                colabUrl: topic.colabUrl
            };
        }

        const colabLink = labData.colabUrl || 'https://colab.research.google.com/';
        const codeContent = labData.code || '# Code coming soon for this topic';
        const description = labData.description || 'Practice this concept in Google Colab.';

        codePanel.innerHTML = `
            <div class="code-lab">
                <div class="colab-header">
                    <h3><i class="fas fa-code"></i> Google Colab Hands-On</h3>
                    <a href="${colabLink}" target="_blank" class="colab-button">
                        <i class="fab fa-google"></i> Open in Colab
                    </a>
                </div>
                <div class="code-preview">
                    <pre><code>${codeContent}</code></pre>
                </div>
                <div class="code-description">
                    <p>${description}</p>
                </div>
            </div>
        `;
    }

    loadPresentation(topic) {
        const presentationPanel = document.getElementById('presentation');

        let content = "";
        if (typeof lectureSystem !== 'undefined') {
            content = lectureSystem.getContent(topic.id).presentation;
        } else {
            content = topic.presentation || '<p>Presentation slides will be added soon.</p>';
        }

        presentationPanel.innerHTML = `
            <div class="presentation-viewer">
                <h3><i class="fas fa-project-diagram"></i> Key Concepts & Slides</h3>
                ${content}
            </div>
        `;
    }

    loadActivity(topicId) {
        const activityPanel = document.getElementById('activity');
        let content = "";

        if (typeof activitySystem !== 'undefined') {
            content = activitySystem.getActivity(topicId);
        } else {
            content = '<p>Activity loading...</p>';
        }

        activityPanel.innerHTML = content;
    }

    loadQuiz(topic) {
        const quizPanel = document.getElementById('quiz');
        if (!quizPanel) return;

        let content = "";
        if (window.quizSystem) {
            content = window.quizSystem.loadQuiz(topic.id);
        } else {
            content = '<p>Quiz system loading...</p>';
        }

        quizPanel.innerHTML = content;
        quizPanel.style.display = 'block'; // Ensure it's visible
    }

    updateNavButtons(currentTopicId) {
        let allTopics = [];

        if (typeof comprehensiveCourseStructure !== 'undefined') {
            for (const module of comprehensiveCourseStructure.modules) {
                for (const topic of module.topics) {
                    allTopics.push(topic.id);
                }
            }
        } else {
            allTopics = courseContent.getAllTopicIds();
        }

        const currentIndex = allTopics.indexOf(currentTopicId);

        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const markCompleteBtn = document.getElementById('markCompleteBtn');

        // Previous button
        if (currentIndex > 0) {
            prevBtn.style.display = 'flex';
            prevBtn.onclick = () => this.navigate(allTopics[currentIndex - 1]);
        } else {
            prevBtn.style.display = 'none';
        }

        // Next button
        if (currentIndex < allTopics.length - 1) {
            nextBtn.style.display = 'flex';
            nextBtn.onclick = () => this.navigate(allTopics[currentIndex + 1]);
        } else {
            nextBtn.style.display = 'none';
        }

        // Mark complete button
        if (progressTracker.isComplete(currentTopicId)) {
            markCompleteBtn.innerHTML = '<i class="fas fa-check-double"></i> Completed';
            markCompleteBtn.style.opacity = '0.7';
            markCompleteBtn.classList.remove('btn-pulse');
            markCompleteBtn.disabled = true;
        } else {
            markCompleteBtn.innerHTML = '<i class="fas fa-check"></i> Mark as Complete';
            markCompleteBtn.style.opacity = '1';
            markCompleteBtn.classList.add('btn-pulse'); // Add pulse animation
            markCompleteBtn.disabled = false;

            markCompleteBtn.onclick = () => {
                progressTracker.markComplete(currentTopicId);

                // Trigger Interactivity
                if (window.celebrateCompletion) window.celebrateCompletion();
                if (window.showToast) window.showToast("Topic Completed! Great job!", "success");

                this.updateNavButtons(currentTopicId);
            };
        }
    }
    loadModule(moduleId) {
        if (typeof moduleSystem === 'undefined') return;

        const data = moduleSystem.getModuleContent(moduleId);
        if (!data) return;

        // Find module title
        let moduleTitle = "Module";
        if (typeof comprehensiveCourseStructure !== 'undefined') {
            const mod = comprehensiveCourseStructure.modules.find(m => m.id == moduleId);
            if (mod) moduleTitle = mod.title;
        }

        document.getElementById('moduleTitleDisplay').innerText = moduleTitle;

        // Helper to populate lists
        const populate = (id, items) => {
            const list = document.getElementById(id);
            list.innerHTML = items.map(item => `<li>${item}</li>`).join('');
        };

        const populateLinks = (id, links) => {
            const list = document.getElementById(id);
            list.innerHTML = links.map(link => `<li><a href="${link.url}" target="_blank"><i class="fab fa-youtube"></i> ${link.title}</a></li>`).join('');
        };

        populate('moduleObjectives', data.objectives);
        populate('moduleOutcomes', data.outcomes);
        populate('moduleTextbooks', data.textbooks);
        populate('moduleReferences', data.references);
        populateLinks('moduleYoutube', data.youtubeLinks);

        window.scrollTo(0, 0);
    }
}

// Export
const router = new Router();

// Progress.js - Track user progress through the course

class ProgressTracker {
    constructor() {
        this.storageKey = 'agri_lms_progress';
        this.progress = this.load();
    }

    load() {
        const saved = localStorage.getItem(this.storageKey);
        return saved ? JSON.parse(saved) : {
            completedTopics: [],
            currentTopic: null,
            startDate: new Date().toISOString()
        };
    }

    save() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.progress));
        if (this.onSaveCallback) {
            this.onSaveCallback(this.progress);
        }
    }

    setOnSaveCallback(callback) {
        this.onSaveCallback = callback;
    }

    mergeRemoteData(remoteData) {
        if (!remoteData) return;

        // Merge completed topics (union)
        const localSet = new Set(this.progress.completedTopics);
        if (remoteData.completedTopics) {
            remoteData.completedTopics.forEach(t => localSet.add(t));
        }

        this.progress.completedTopics = Array.from(localSet);

        // Keep the latest currentTopic or merge intelligently? 
        // For now, if remote has a more recent "last played", maybe use that? 
        // Simpler: Just ensure we don't lose completed topics.

        this.save(); // This will trigger onSaveCallback, potentially looping if not careful. 
        // But usually, we only call this from Firebase listener, so we might want to avoid re-uploading.
        // Actually, calling save() is fine if the DB write checks for changes or debounces.
        this.updateUI();
    }

    markComplete(topicId) {
        if (!this.progress.completedTopics.includes(topicId)) {
            this.progress.completedTopics.push(topicId);
            this.save();
            this.updateUI();
        }
    }

    isComplete(topicId) {
        return this.progress.completedTopics.includes(topicId);
    }

    setCurrentTopic(topicId) {
        this.progress.currentTopic = topicId;
        this.save();
    }

    getTotalTopics() {
        // Use comprehensiveCourseStructure if available, else fallback to 15
        if (typeof comprehensiveCourseStructure !== 'undefined') {
            let count = 0;
            comprehensiveCourseStructure.modules.forEach(module => {
                count += module.topics.length;
            });
            return count;
        }
        return 15;
    }

    getCompletionPercentage() {
        const totalTopics = this.getTotalTopics();
        return totalTopics > 0 ? Math.round((this.progress.completedTopics.length / totalTopics) * 100) : 0;
    }

    updateUI() {
        const percentage = this.getCompletionPercentage();
        const progressFill = document.getElementById('overallProgress');
        const progressText = document.getElementById('progressText');

        if (progressFill) progressFill.style.width = `${percentage}%`;
        if (progressText) progressText.textContent = `${percentage}% Complete`;

        // Update topic links
        document.querySelectorAll('.topic-link').forEach(link => {
            const topicId = link.getAttribute('data-topic');
            if (this.isComplete(topicId)) {
                link.classList.add('completed');
            }
        });

        // Dispatch event for other components (Dashboard, etc.)
        document.dispatchEvent(new CustomEvent('progressUpdated', { detail: this.progress }));
    }

    resetProgress() {
        if (confirm('Are you sure you want to reset all progress?')) {
            this.progress = {
                completedTopics: [],
                currentTopic: null,
                startDate: new Date().toISOString()
            };
            this.save();
            this.updateUI();
        }
    }
}

// Export
const progressTracker = new ProgressTracker();

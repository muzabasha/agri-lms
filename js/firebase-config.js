// Firebase Configuration and Integration
// ----------------------------------------------------------------------------
// INSTRUCTIONS FOR USER:
// 1. Go to Firebase Console (https://console.firebase.google.com/)
// 2. Create a new project or select an existing one.
// 3. Enable Authentication (Google Sign-In provider).
// 4. Enable Firestore Database (Start in test mode or set appropriate rules).
// 5. Go to Project Settings -> General -> Your apps -> Add Web App.
// 6. Copy the "firebaseConfig" object content and replace the placeholder below.
// ----------------------------------------------------------------------------

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
// Note: We use the 'compat' libraries loaded in index.html for global 'firebase' access
let auth, db;
let unsubscribeDocListener = null;

function initFirebase() {
    if (typeof firebase === 'undefined') {
        console.error("Firebase SDK not loaded. Check script tags in index.html.");
        return;
    }

    // Initialize App
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    auth = firebase.auth();
    db = firebase.firestore();

    // Set up Auth Listener
    auth.onAuthStateChanged((user) => {
        updateAuthUI(user);
        if (user) {
            console.log("User signed in:", user.displayName);
            syncProgressWithFirestore(user);
        } else {
            console.log("User signed out.");
            if (unsubscribeDocListener) {
                unsubscribeDocListener();
            }
        }
    });
}

// ----------------------------------------------------------------------------
// Authentication Logic
// ----------------------------------------------------------------------------
function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
            console.log("Login success:", result.user);
        }).catch((error) => {
            console.error("Login Error:", error);
            alert("Login Failed: " + error.message);
        });
}

function logoutUser() {
    auth.signOut().then(() => {
        alert("Signed out successfully.");
    });
}

// Update UI based on auth state
function updateAuthUI(user) {
    const loginBtn = document.getElementById('loginBtn');
    const userProfile = document.getElementById('userProfile');
    const userName = document.getElementById('userName');
    const userAvatar = document.getElementById('userAvatar');

    if (user) {
        if (loginBtn) loginBtn.style.display = 'none';
        if (userProfile) {
            userProfile.style.display = 'flex';
            if (userName) userName.textContent = user.displayName;
            if (userAvatar) userAvatar.src = user.photoURL || 'assets/default-avatar.png';
        }
    } else {
        if (loginBtn) loginBtn.style.display = 'block';
        if (userProfile) userProfile.style.display = 'none';
    }
}

// ----------------------------------------------------------------------------
// Progress Synchronization Logic
// ----------------------------------------------------------------------------
function syncProgressWithFirestore(user) {
    const userDocRef = db.collection('students').doc(user.uid);

    // 1. Listen for remote updates (Remote -> Local)
    unsubscribeDocListener = userDocRef.onSnapshot((doc) => {
        if (doc.exists) {
            const remoteData = doc.data();
            console.log("Remote progress update received:", remoteData);

            if (window.progressTracker) {
                // Avoid infinite loops by checking equality or using timestamps (simplified here)
                window.progressTracker.mergeRemoteData(remoteData);
            }
        } else {
            // New user: Create doc with empty/current local progress
            console.log("Creating new user profile in Firestore...");
            saveLocalProgressToRemote(user);
        }
    }, (error) => {
        console.error("Error listening to progress:", error);
    });

    // 2. Hook into local updates (Local -> Remote)
    if (window.progressTracker) {
        window.progressTracker.setOnSaveCallback((localProgress) => {
            if (auth.currentUser) {
                saveLocalProgressToRemote(auth.currentUser);
            }
        });
    }
}

function saveLocalProgressToRemote(user) {
    if (!window.progressTracker || !db) return;

    const localProgress = window.progressTracker.progress;

    db.collection('students').doc(user.uid).set({
        completedTopics: localProgress.completedTopics,
        currentTopic: localProgress.currentTopic,
        lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
        email: user.email,
        displayName: user.displayName
    }, { merge: true })
        .then(() => console.log("Progress saved to cloud."))
        .catch((err) => console.error("Error pushing progress:", err));
}

// authGuard.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { 
  getAuth, 
  onAuthStateChanged, 
  signOut, 
  setPersistence, 
  browserSessionPersistence 
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBYPG8EEsN_Vn13E0UALEpTbu2T2o9DVDE",
  authDomain: "winthrop-qa-portal.firebaseapp.com",
  projectId: "winthrop-qa-portal",
  storageBucket: "winthrop-qa-portal.firebasestorage.app",
  messagingSenderId: "440969077718",
  appId: "1:440969077718:web:50591760de13c85d29ba77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Set session-based persistence
setPersistence(auth, browserSessionPersistence).catch((error) => {
  console.error("Error setting session persistence:", error);
});

// Protect the page
onAuthStateChanged(auth, (user) => {
  if (!user) {
    alert("⚠️ You must be logged in to access this page!");
    window.location.href = "index.html";
  }
});

// Logout function
export const logoutUser = () => {
  signOut(auth)
    .then(() => {
      alert("✅ Logged out successfully!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("⚠️ Error logging out: " + error.message);
    });
};

// Get current logged-in user
export const getCurrentUser = () => auth.currentUser;

// Export auth if needed elsewhere
export { auth };





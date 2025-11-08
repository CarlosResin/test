// authGuard.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  setPersistence,
  browserSessionPersistence
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

// --- Firebase config (same as your main config) ---
const firebaseConfig = {
  apiKey: "AIzaSyBYPG8EEsN_Vn13E0UALEpTbu2T2o9DVDE",
  authDomain: "winthrop-qa-portal.firebaseapp.com",
  projectId: "winthrop-qa-portal",
  storageBucket: "winthrop-qa-portal.firebasestorage.app",
  messagingSenderId: "440969077718",
  appId: "1:440969077718:web:50591760de13c85d29ba77"
};

// --- Initialize Firebase ---
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// --- Ensure session ends when browser closes ---
setPersistence(auth, browserSessionPersistence).catch((error) => {
  console.error("Error setting session persistence:", error);
});

// --- Detect if user is logged in ---
onAuthStateChanged(auth, (user) => {
  // Normalize page name to avoid GitHub Pages path issues
  const page = window.location.pathname.split("/").pop();

  const isLoginPage = !page || page === "index.html" || page === "";

  if (!user && !isLoginPage) {
    console.warn("No user session — redirecting to login page");
    window.location.href = "index.html";
  }
});

// --- Reusable logout function ---
export async function logoutUser() {
  try {
    await signOut(auth);
    alert("✅ Logged out successfully!");
    window.location.href = "index.html";
  } catch (error) {
    console.error("Logout error:", error);
    alert("⚠️ Error logging out: " + error.message);
  }
}

// --- Auto-bind logout button ---
document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => logoutUser());
  }
});

// --- Export for use in other modules ---
export { auth };


